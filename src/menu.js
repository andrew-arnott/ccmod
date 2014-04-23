/**
 * Basically the same thing as Orteil's Game.WriteButton
 */
AA.WriteButton = function(configName, button, on, off, callback) {
    return '<a class="option" id="'+button+'" '+Game.clickStr+'="AA.ToggleButton(\''+configName+'\',\''+button+'\',\''+on+'\',\''+off+'\');'+(callback||'')+'">'+(AA.config[configName]?on:off)+'</a>';
}

/**
 * Basically the same thing as Orteil's Game.Toggle
 */
AA.ToggleButton = function(configName, buttonId, on, off) {
    if(AA.config[configName]) {
		l(buttonId).innerHTML=off;
		l(buttonId).className='option';
		AA.config[configName]=false;
	} else {
		l(buttonId).innerHTML=on;
		l(buttonId).className='option enabled';
		AA.config[configName]=true;
    }			
}

AA.createAchievementIcon = function(achievement) {
    var classes = 'crate achievement';
    if(achievement.won) {
        classes += ' enabled';
    }

    var tags = '[Achievement]';
    if(achievement.won) {
        tags += ' [Unlocked]';
    }

    var imageData = AA.images[achievement.image];

    return '<div class="'+classes+'" '
        + Game.getTooltip('<div style="min-width:200px;">'
                        + '  <small>'+tags+'</small><div class="name">'+achievement.name+'</div>'
                        + '  <div class="description">'+achievement.description+'</div>'
                        + '</div>'
						,'bottom-right')
        + ' style="background-image:url(data:image/png;base64,'+imageData+');"></div>';
}

AA.createUpgradeIcon = function(upgrade) {
    var classes = 'crate upgrade';
    if(upgrade.owned) {
        classes += ' enabled';
    }

    var tags = '[Upgrade]';
    if(upgrade.owned) {
        tags += ' [Purchased]';
    }

    var imageData = AA.images[upgrade.image];

    return '<div class="'+classes+'" '
        + Game.getTooltip('<div style="min-width:200px;">'
                        + '  <small>'+tags+'</small><div class="name">'+upgrade.name+'</div>'
                        + '  <div class="description">'+upgrade.description+'</div>'
                        + '</div>'
						,'bottom-right')
        + ' style="background-image:url(data:image/png;base64,'+imageData+');"></div>';
}

AA.openSavedGame = function(id) {
    AA.loadSave(id);
    Game.UpdateMenu();    
}

AA.renameSavedGame = function(id) {
    var saveName = window.prompt("What do you want to name this save file?", "");
    while(saveName === "") {
        saveName = window.prompt("Invalid name. What do you want to name this save file?", "");
    }

    //Canceled
    if(saveName === null) {
        return;
    }

    AA.renameSaveGame(id, saveName);
}

AA.makeDefaultSavedGame = function(id) {
    AA.makeSaveGameDefault(id);
}

AA.deleteSavedGame = function(id) {
    var yes = window.confirm("Are you really sure you want to delete this save file?");

    if(!yes) {
        return;
    }

    AA.deleteSave(id);
}

AA.createNewSavedGame = function() {
    var saveName = window.prompt("What do you want to name this save file?", "");
    while(saveName === "") {
        saveName = window.prompt("Invalid name. What do you want to name this save file?", "");
    }

    //Canceled
    if(saveName === null) {
        return;
    }

    AA.createNewSave(saveName);

    Game.UpdateMenu();
}

AA.cloneSavedGame = function(name) {
    var saveName = window.prompt("What do you want to name this save file?", "");
    while(saveName === "") {
        saveName = window.prompt("Invalid name. What do you want to name this save file?", "");
    }

    //Canceled
    if(saveName === null) {
        return;
    }
}

AA.createMultipleSavegameSubsection = function() {
    // List of all the save files
    var saveListListings = '';

    saveListListings += '<div class="listing"><table>';

    for(var idx in AA.saveData.saves) {
        saveListListings += '<tr>';

        var save = AA.saveData.saves[idx];

        if(save.id == AA.currentSaveId) {
            saveListListings += '<td style="padding-left:4px;padding-right:20px;"><b style="color:green;">'+save.name+'</b></td>';
        } else {
            saveListListings += '<td style="padding-left:4px;padding-right:20px;"><b>'+save.name+'</b></td>';
        }
        
        if(save.id != AA.currentSaveId) {
            saveListListings += '<td><a class="option" '+Game.clickStr+'="AA.openSavedGame(\''+save.id+'\')">Open</a></td>';
        } else {
            saveListListings += '<td></td>';
        }

        saveListListings += '<td><a class="option" '+Game.clickStr+'="AA.renameSavedGame(\''+save.id+'\')">Rename</a></td>';

        if(save.id != AA.saveData.defaultSave) {
            saveListListings += '<td><a class="option" '+Game.clickStr+'="AA.makeDefaultSavedGame(\''+save.id+'\')">Make default</a></td>';            
        } else {
            saveListListings += '<td></td>';
        }

        if(save.id != AA.currentSaveId && save.id != AA.saveData.defaultSave) {
            saveListListings += '<td><a class="option warning" '+Game.clickStr+'="AA.deleteSavedGame(\''+save.id+'\')">Delete</a></td>';  
        } else {
            saveListListings += '<td></td>';            
        }

        saveListListings += '</tr>';        
    }

    saveListListings += '</table></div>';    

    //Buttons
    var buttons = '';
    buttons += ''
            + '  <div class="listing">'
            + '    <a class="option" '+Game.clickStr+'="AA.createNewSavedGame()">Start a new game</a>'
/*            + '    <a class="option" '+Game.clickStr+'="AA.cloneSavedGame(\'test\')">Clone the current game</a>'            */
            + '  </div>';

    var str = '';    
    str += ''
        + '<div class="subsection">'
        + '  <div class="title">Save Files</div>'
        + saveListListings
        + buttons
        + '</div>';
    return str;    
}

AA.enableUseMultipleSaves = function() {
    var saveName = window.prompt("What do you want to name this save file?", "");
    while(saveName === "") {
        saveName = window.prompt("Invalid name. What do you want to name this save file?", "");
    }

    //Canceled
    if(saveName === null) {
        AA.config.useMultipleSaves = false;
        return;
    }

    AA.saveData.currentSave = saveName;

    Game.UpdateMenu();
}

/**
 * Add in my custom menu options
 *
 */
Game.__AA_UpdateMenu = Game.UpdateMenu;
Game.UpdateMenu = function() {
    Game.__AA_UpdateMenu();

    
    if(Game.onMenu == 'prefs') {
        //All of the sibling divs...
        $(".subsection .title:contains('General') ~ div").css( "padding-bottom", "0px");

        var str = ''
            + AA.createMultipleSavegameSubsection()
            + '<div class="subsection">'
            + '  <div class="title">Arnott\'s Mod Options</div>'
            + '  <div class="listing">'
            + '    ' + AA.WriteButton('useSpam', 'useSpam', 'Golden cookie spam event: Enabled', 'Golden cookie spam event: Disabled')
            + '    <label>Adds a new possible outcome when you click a golden cookie plus some related achievements.</label>'
            + '  </div>'
            + '  <div class="listing" style="padding-bottom:128px;"></div>'
            + '</div>'
            ;



        l('menu').innerHTML += str;
    } else if (Game.onMenu=='stats') {
        var achievementsStr = '';
        for(var i in AA.achievements) {
            achievementsStr += AA.createAchievementIcon(AA.achievements[i]);
        }

        var totalUpgrades = AA.upgradeManager.sortedUnlockedUpgrades.length;
        var ownedUpgrades = 0;
        for(var i = 0; i < totalUpgrades; i++) {
            if(AA.upgradeManager.sortedUnlockedUpgrades[i].owned) ownedUpgrades++;
        }

        var upgradesStr = '';
        for(var i in AA.upgradeManager.sortedUnlockedUpgrades) {
            upgradesStr += AA.createUpgradeIcon(AA.upgradeManager.sortedUnlockedUpgrades[i]);
        }

        var str = ''
            + '<div class="subsection">'
            + '  <div class="title">Arnott\'s Mod Upgrades Unlocked</div>'
            + '  <div class="listing">'
            + '    <b>Unlocked : '+ownedUpgrades+'/'+totalUpgrades+'</b>'
            + '  </div>'
            + '  <div class="listing" style="overflow-y:hidden;">' 
            + '    ' + upgradesStr      
            + '  </div>'            
            + '</div>'            
            + '<div class="subsection">'
            + '  <div class="title">Arnott\'s Mod Achievements</div>'
            + '  <div class="listing">'
            + '    <b>Unlocked : '+AA.achievementsEarned+'/'+AA.achievementsAvailable+'</b>'
            + '  </div>'
/*
            + '  <div class="listing">'
            + '    <b>Bonus Milk :</b>'
            + '  </div>'                 
*/            
            + '  <div class="listing" style="overflow-y:hidden;">' 
            + '    ' + achievementsStr      
            + '  </div>'
            + '</div>'
            + '<div style="padding-bottom:128px;"></div>'
            ;

        l('menu').innerHTML += str;
    }   
}
