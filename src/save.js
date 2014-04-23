/**
 * Mods to allow multiple savegame slots and also save my mod data.
 *
 * Here's the basic idea:
 *
 * I maintain a list of savegames along with the default savegame to run in 
 * local storage. This list can be updated by one or more clients running
 * the game, but it will only be updated based on user-triggered events. So,
 * although there is a collision possibility, trying any form of concurrency
 * control isn't worth it because a user would need to be really actively
 * trying to sabotage their own save game list.
 *
 * The save games are stored in separate local storage areas, each based on
 * their name.
 *
 *
 */
AA.saveData = {};
AA.saveData.defaultSave = -1;
AA.saveData.saves = []; //Instances of save game id/name pairs: {id, name}

//The current active save file
AA.currentSaveId = -1;
AA.currentSaveName = -1;

AA.customSaveLock = false;

///////////////////////////
// Hooks into save/load  //
///////////////////////////

Game.__AA_Reset = Game.Reset;
Game.Reset = function(bypass, hard) {
    Game.__AA_Reset(bypass, hard);
    if(bypass) {
        //TODO Wipe custom upgrades
    }
}

Game.__AA_HardReset = Game.HardReset;
Game.HardReset = function(bypass) {
    Game.__AA_HardReset(bypass);
    if(bypass && bypass != 1) {
        // Wipe configuration choices
        for(idx in AA.config) {
            AA.config[idx] = false;
        }

        //TODO Wipe custom upgrades        
        //TODO Wipe custom achievements
    }
}

Game.customSave.push(function() { 
    if(AA.customSaveLock === false) {   
        AA.customSaveLock = true;
        AA.writeSaveGameData();
        AA.customSaveLock = false;        
    }
});

AA.refreshBaseSaveData = function() {
    var storedData = window.localStorage.getItem(AA.constants.saveTo);
    if(storedData === null) return;  

    var decodedString = unescape(storedData);
    decodedString = decodedString.split('!END!')[0];
    decodedString = b64_to_utf8(decodedString);
    var saveData = JSON.parse(decodedString);

    jQuery.extend(AA.saveData, saveData);    
}

AA.writeBaseSaveData = function() {
    var dataString = JSON.stringify(AA.saveData);
    encodedString = escape(utf8_to_b64(dataString)+'!END!');

    window.localStorage.setItem(AA.constants.saveTo, encodedString);
	if (!window.localStorage.getItem(AA.constants.saveTo)) {
    	if (Game.prefs.popups) Game.Popup('Error while saving.<br>Export your save instead!');
		else Game.Notify('Error while saving','Export your save instead!');
	}
}

AA.generateSaveGameId = function() {
    var largest = -1;
    for(var i in AA.saveData.saves) {
        var save = AA.saveData.saves[i];
        if(save.id > largest) {
            largest = save.id;
        }
    }
    return largest + 1;
}

AA.writeSaveGameData = function() {
    //Create the new save information
    var saveGame = {};
    saveGame.config = AA.config;
    saveGame.achievements = AA.achievements;
    //TODO upgrades
    saveGame.gameData = Game.WriteSave(true);

    var dataString = JSON.stringify(saveGame);
    encodedString = escape(utf8_to_b64(dataString)+'!END!');

    window.localStorage.setItem(AA.constants.saveTo + "__" + AA.currentSaveId, encodedString);
	if (!window.localStorage.getItem(AA.constants.saveTo + "__" + AA.currentSaveId)) {
    	if (Game.prefs.popups) Game.Popup('Error while saving.<br>Export your save instead!');
		else Game.Notify('Error while saving','Export your save instead!');
	}
}

/**
 * Returns the index in the saveData.saves array for a save game with the provided id.
 *
 *
 */
AA.getSaveGameIndex = function(id) {
    var saveGameIndex = -1;
    for(var i in AA.saveData.saves) {
        var save = AA.saveData.saves[i];
        if(id == save.id) {
            saveGameIndex = i;
            break;
        }
    }

    return saveGameIndex;
}

AA.renameSaveGame = function(id, name) {
    AA.refreshBaseSaveData();   

    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex === -1) return;  

    if(id == AA.currentSaveId) {
        AA.currentSaveName = name;
    }

    var save = AA.saveData.saves[saveGameIndex];
    save.name = name;
    AA.writeBaseSaveData();
}

AA.makeSaveGameDefault = function(id) {
    AA.refreshBaseSaveData();   

    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex === -1) return;

    AA.saveData.defaultSave = id;
    AA.writeBaseSaveData();
}

AA.loadSaveGameData = function(id) {
    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex === -1) return; 

    var save = AA.saveData.saves[saveGameIndex];   

    //Deserialize it now
    var storedData = window.localStorage.getItem(AA.constants.saveTo + "__" + id);
    if(storedData === null) return;

    var decodedString = unescape(storedData);
    decodedString = decodedString.split('!END!')[0];
    decodedString = b64_to_utf8(decodedString);

    var saveGame = JSON.parse(decodedString);
    AA.currentSaveId = save.id;
    AA.currentSaveName = save.name;
    jQuery.extend(AA.config, saveGame.config);
    jQuery.extend(AA.achievements, saveGame.achievements);
    //TODO upgrades    
    Game.LoadSave(saveGame.gameData);
}

/**
 * Starts a new save game
 *
 */
AA.createNewSave = function(name, noBackup) {
    AA.refreshBaseSaveData();

    //Back up the current save
    if(!noBackup) {
        Game.WriteSave();
    }

    //Hard reset this game (for the new game)
    Game.HardReset(2);

    var nextId = AA.generateSaveGameId();    
    AA.currentSaveId = nextId;
    AA.currentSaveName = name;    

    //Save it
    Game.WriteSave();

    //Update the save data
    AA.saveData.saves.push({id: nextId, name: name});

    AA.writeBaseSaveData();
}

/**
 * Deletes a saved game.
 *
 *
 */
AA.deleteSave = function(id) {
    AA.refreshBaseSaveData();

    //Not allowed to delete the default save file!
    if(AA.saveData.defaultSave == id) return;
    
    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex == -1) return;

    //Delete the local storage info
    window.localStorage.removeItem(AA.constants.saveTo + "__" + id);

    //And remove it from the list
    AA.saveData.saves.splice(saveGameIndex, 1);
    AA.writeBaseSaveData();    
}


AA.loadSave = function(id, noBackup) {
    AA.refreshBaseSaveData();

    //Back up the current save
    if(!noBackup) {
        Game.WriteSave();
    }
   
    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex === -1) return;

    AA.loadSaveGameData(id);  
}

//When the actual bookmarklet is loaded...
AA.refreshBaseSaveData();
//Make sure a default is defined and load it
if(AA.saveData.defaultSave === -1) {
    var nextId = AA.generateSaveGameId();
    var name = "Default";

    //Update the save data
    AA.saveData.defaultSave = nextId;
    AA.saveData.saves.push({id: nextId, name: name});

    AA.writeBaseSaveData();

    //Write the current save
    AA.currentSaveId = nextId;
    AA.currentSaveName = name;
    Game.WriteSave();
}
//Load the default save
AA.loadSave(AA.saveData.defaultSave, true);
