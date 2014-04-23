/**
* Cookie clicker mod by Andrew Arnott.
*
*/

Game.customLogic.push(function() {
	Game.Win('Third-party');
});

//My global object
var AA = {};
//Constant values used in my mod.
AA.constants = {};
//Most recent version of Cookie Clicker this mod was built with
AA.constants.lastVersion = 1.0453;
//The file to save data to
AA.constants.saveTo = "AACookieClickerMod";
if (Game.beta) AA.constants.saveTo += "Beta";

//Configuration so that people can pick and choose what mods they want
AA.config = {};
AA.config.useSpam = false;

//Custom achievements (added outside of Orteil's code to be a bit more flexible)
AA.achievements = {};
AA.achievementsEarned = 0;
AA.achievementsAvailable = 0;

//Custom upgrades
AA.upgrades = {};

//New tier 2 resource: Ambrosia cookies
AA.ambrosia = 0;

//Custom tier 2 buildings
AA.buildings = {};


///////////////////////////
// Achievement functions //
///////////////////////////

/**
 * Creates a generic achievement data object and adds it to my achievement list. This
 * stuff is separate from Orteil's code so that it will be less likely to break.
 * 
 * @param name
 *
 */
AA.createAchievement = function(name, description, image) {
    //Whatever. It's going to be a lame ol' generic object because I roll that way.
    var achievement = {};
    achievement.name = name;
    achievement.description = description;
    achievement.image = image;
    achievement.won = false;

    AA.achievements[name] = achievement;
    AA.achievementsAvailable++;
}

AA.earnAchievement = function(name) {
    //No such achievement
    if(typeof AA.achievements[name] === 'undefined') return;
    //Already earned
    if(AA.achievements[name].won) return;

    AA.achievements[name].won = true;

    //I use icon 18,18 because it is empty: right now, I'm not embedding my
    //custom icons into the notification dialogs
    AA.PopupOrNotify(
            'Achievement unlocked :<br>'+name,  //popup
            'Achievement unlocked',
            '<div class="title" style="font-size:18px;">'+name+'</div>',
            [18,18]
            );
}

AA.hasAchievement = function(name) {
    return (AA.achievements[name] ? AA.achievements[name].won : false);
}

///////////////////////
// Upgrade functions //
///////////////////////

AA.UpgradeManager = function() {
    this.upgrades = {};
    this.sortedUnlockedUpgrades = [];
}

/**
 * Creates a generic upgrade data object and adds it to my upgrade list. This
 * stuff is separate from Orteil's code so that it will be less likely to break.
 * 
 * @param data {name, description, image, baseCost, owned, unlocked}
 *
 */
AA.UpgradeManager.prototype.createUpgrade = function(data) {
    var defaults = {
        name: "ERROR: No name",
        description: "ERROR: No description",
        image : "",
        baseCost: -1,
        owned: false,
        unlocked: false
    };

    var upgrade = JQuery.extend({}, defaults, data);

    var newUpgrade;

    //Merge this upgrade object into the list of upgrades. Since save data is
    //loaded after the basic upgrades are made, it will overwrite any base
    //data, as required.
    if(this.upgrades.hasOwnProperty(upgrade.name)) {
        var oldUpgrade = this.upgrades[upgrade.name];
        //Merge with the old upgrade
        newUpgrade = JQuery.extend({}, oldUpgrade, upgrade);
    } else {
        newUpgrade = upgrade;
    }

    this.upgrades[upgrade.name] = newUpgrade;

    //Add it to the sortedList if unlocked
    if(newUpgrade.unlocked) this.addToSortedList(newUpgrade);
}

AA.UpgradeManager.prototype.addToSortedList = function(upgrade) {
    if(typeof upgrade === 'undefined') return; 

    var sortMap = function(a,b) {
        if (a.baseCost > b.baseCost) return 1;
        else if (a.baseCost < b.baseCost) return -1;
        else return 0;
    }
    this.sortedUnlockedUpgrades.push(upgrade);
    this.sortedUnlockedUpgrades.sort(sortMap);
}

AA.UpgradeManager.prototype.unlock = function(name) {
    if(this.upgrades[name].unlocked) return;    //Already unlocked

    this.upgrades[name].unlocked = true;    
    this.addToSortedList(this.upgrades[name]);
}

AA.UpgradeManager.prototype.purchase = function(name) {
    if(typeof this.upgrades[name] === 'undefined') return;    
    if(this.upgrades[name].owned) return; //Already owned    
    if(!this.upgrades[name].unlocked) return; //Not unlocked yet (cheater! :P)      

    //TODO
    this.upgrades[name].owned = true;
}

AA.UpgradeManager.prototype.has = function(name) {
    return (this.upgrades[name] ? this.upgrades[name].owned : false);
}

//Here's the singleton
AA.upgradeManager = new AA.UpgradeManager();
		

///////////////////////
// Utility functions //
///////////////////////

/**
 * Simple wrapper so that I don't need to nest this "if" statement logic everywhere.
 *
 * Orteil: if you read this, you may want to take this as a hint ;).
 *
 */
AA.PopupOrNotify = function (popupMessage, notifyTitle, notifyMessage, notifyImage, notifyDuration) {
    if (Game.prefs.popups) {
        Game.Popup(popupMessage);
    } else {
        Game.Notify(notifyTitle, notifyMessage, notifyImage, notifyDuration);
    }
}
