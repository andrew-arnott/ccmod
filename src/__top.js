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

//New tier 2 resource: Ambrosia cookies
AA.ambrosia = 0;

//Custom tier 2 buildings
AA.buildings = {};


///////////////////////////
// Achievement functions //
///////////////////////////

AA.AchievementManager = function() {
    this.achievements = {};
    this.sortedAchievements = [];
}

/**
 * Creates a generic achievement data object and adds it to my achievement list. This
 * stuff is separate from Orteil's code so that it will be less likely to break.
 *
 * If the achievement already exists (generally this is the case for save data),
 * then the data is merged with the existing achievement data already present in
 * the list. This helps avoid versioning problems that might occur.
 *
 * @param data {name, description, image, won}
 *
 */
AA.AchievementManager.prototype.createAchievement = function(data) {
    var defaults = {
        name: "ERROR: No name",
        description: "ERROR: No description",
        image : "",
        won: false
    };

    var achievement = JQuery.extend({}, defaults, data);

    var newAchievement;

    //Merge this upgrade object into the list of upgrades. Since save data is
    //loaded after the basic upgrades are made, it will overwrite any base
    //data, as required.
    if(this.achievements.hasOwnProperty(achievement.name)) {
        var oldAchievement = this.achievements[achievement.name];
        //Merge with the old upgrade
        newAchievement = JQuery.extend({}, oldAchievement, achievement);
    } else {
        newAchievement = achievement;
    }

    this.achievements[achievement.name] = newAchievement;

    //Add it to the sortedList if unlocked
    this.addToSortedList(newAchievement);
}

AA.AchievementManager.prototype.addToSortedList = function(achievement) {
    if(typeof achievement === 'undefined') return; 

/*    var sortMap = function(a,b) {
        if (a.name > b.baseCost) return 1;
        else if (a.baseCost < b.baseCost) return -1;
        else return 0;
    }
*/
    this.sortedAchievements.push(achievement);
//    this.sortedAchievements.sort(sortMap);
}


/**
 * Returns the total number of custom achievements available.
 *
 */
AA.AchievementManager.prototype.getNumAchievements = function () {
    return Object.keys(this.achievements).length;
}

AA.AchievementManager.prototype.getNumEarned = function() {
    var total = 0;
    for(var i in this.achievements) {
        if(this.has(i)) {
            total++;
        }
    }
    return total;
}

/**
 * Sets the status of an achievement to won/earned.
 */
AA.AchievementManager.prototype.earn = function(name) {
    if(this.achievements[name].won) return;    //Already won

    this.achievements[name].won = true;

    //I use icon 18,18 because it is empty: right now, I'm not embedding my
    //custom icons into the notification dialogs
    AA.PopupOrNotify(
            'Achievement unlocked :<br>'+name,  //popup
            'Achievement unlocked',
            '<div class="title" style="font-size:18px;">'+name+'</div>',
            [18,18]
            );    
}

/**
 * Returns true iff the player has earned the achievement.
 */
AA.AchievementManager.prototype.has = function(name) {
    return (this.achievements[name] ? this.achievements[name].won : false);
}

//Here's the singleton
AA.achievementManager = new AA.AchievementManager();

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
 * If the upgrade already exists (generally this is the case for save data),
 * then the data is merged with the existing upgrade data already present in
 * the list. This helps avoid versioning problems that might occur.
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
