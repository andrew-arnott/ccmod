/**
 * New golden cookie spam event. Golden cookies spawn all over the
 * place and need to be clicked quickly.
 *
 */
AA.spam = {};
//Spam event constants
AA.spam.spamChance = 0.05;                  //Chance for the spam golden cookie event
AA.spam.spamChanceWrath = 0.01;             //Chance for the spam golden cookie event with a wrath cookie
AA.spam.cookieObjectPoolSize = 25;	        //Number of cookies in the pool during the spam event
AA.spam.cookieSpawnMin = 1;                   //Min amount of seconds before spawning
AA.spam.cookieSpawnMax = 10;                  //Max amount of seconds before spawning
AA.spam.spamBaseCookieDuration = 8;         //Base amount of time a spam cookie appears
AA.spam.spamBaseFrenzyDuration = 15;        //Base duration for the spam event
AA.spam.spamGainBaseMultiplier = 0.01;      //Multiplier for the base amount of cookies earned per click in a spam event
AA.spam.spamGainIncreaseMultiplier = 0.05;  //This value times the number of cookies clicked in the event is an additional multiplier
AA.spam.spamGainMin = 1;                    //Minimum amount of cookies gained per spam cookie clicked
AA.spam.spamGainMaxMinutesWorth = 2;        //Maximum effective minutes of production a spam cookie click can give
AA.spam.frenzyTime = -1;                    //Kinda like a clicking frenzy timer
AA.spam.frenzyClicks = 0;                   //Count clicks during the event
AA.spam.totalCookies = 0;                   //Count total cookies during the event
AA.spam.cookieObjects = [];                 //A pool of divs that will be the spawning golden cookies

AA.achievementManager.createAchievement({
    name: "Spam spam spam spam...",
    description: "Click at least <b>25</b> golden cookies during a golden cookie spam event.",
    image: "spam0"
});
AA.achievementManager.createAchievement({
    name: "Spam! Lovely spam!",
    description: "Click at least <b>50</b> golden cookies during a golden cookie spam event.",
    image: "spam1"
});
AA.achievementManager.createAchievement({
    name: "Lovely spam! Wonderful spam!",
    description: "Click at least <b>75</b> golden cookies during a golden cookie spam event.",
    image: "spam2"
});
AA.achievementManager.createAchievement({
    name: "Spam bot",
    description: "Click at least <b>100</b> golden cookies during a golden cookie spam event.<q>Got a bigger pen fifteen by helping a Nigerian prince.</q>",
    image: "spam3"
});

/**
 * Called when the spam frenzy event starts.
 *
 */
AA.spam.initEvent = function() {
    AA.spam.frenzyTime = AA.spam.frenzyTimeDuration() * Game.fps;
    AA.spam.frenzyClicks = 0;
    AA.spam.totalCookies = 0;
    for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
        AA.spam.cookieReset(i);
    }
}

AA.spam.endEvent = function() {
    AA.spam.frenzyTime = -1;

    var popup=['Spam event over! Won '+Beautify(AA.spam.totalCookies)+' cookies, clicked '+AA.spam.frenzyClicks+' golden cookies!','Spam event over!','Won <b>'+Beautify(AA.spam.totalCookies)+'</b> cookies, clicked <b>'+AA.spam.frenzyClicks+'</b> golden cookies!'];
    AA.PopupOrNotify(popup[0], popup[1], popup[2], [10,1], 6);

    for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
        AA.spam.cookieDespawn(i);
    }

    if(AA.spam.frenzyClicks >= 25) {
        AA.achievementManager.earn("Spam spam spam spam...");
    }
    if(AA.spam.frenzyClicks >= 50) {
        AA.achievementManager.earn("Spam! Lovely spam!");
    }
    if(AA.spam.frenzyClicks >= 75) {
        AA.achievementManager.earn("Lovely spam! Wonderful spam!");
    }
    if(AA.spam.frenzyClicks >= 100) {
        AA.achievementManager.earn("Spam bot");
    }    
}

AA.spam.cookieOnClick = function() {
	if(!AA.config.useSpam) return;

	var index = this.id.replace('goldenCookie', '');

    //add a percentage to cookies owned capped by a total amount of minutes worth of cookies
	var moni = Math.min(Game.cookies * AA.spam.spamGainBaseMultiplier, Game.cookiesPs * 60 * AA.spam.spamGainMaxMinutesWorth) + AA.spam.spamGainMin; 

    //Then multiply based on the number of spam clicks
    var additionalMultiplier = 1 + AA.spam.spamGainIncreaseMultiplier * AA.spam.frenzyClicks;
    moni *= additionalMultiplier;

	Game.Earn(moni);
    AA.spam.totalCookies += moni;

    var popup;
    if(AA.spam.frenzyClicks % 5 == 0) {
        popup=['Spam! +'+Beautify(moni)+' cookies!','Spam!','+<b>'+Beautify(moni)+'</b> cookies!'];
    } else if(AA.spam.frenzyClicks % 5 == 1) {
        popup=['Spam spam spam spam... +'+Beautify(moni)+' cookies!','Spam spam spam spam...','+<b>'+Beautify(moni)+'</b> cookies!'];
    } else if(AA.spam.frenzyClicks % 5 == 2) {
        popup=['Spam! Lovely spam! +'+Beautify(moni)+' cookies!','Spam! Lovely spam!','+<b>'+Beautify(moni)+'</b> cookies!'];
    } else if(AA.spam.frenzyClicks % 5 == 3) {
        popup=['Spam spam spam spam... +'+Beautify(moni)+' cookies!','Spam spam spam spam...','+<b>'+Beautify(moni)+'</b> cookies!'];
    } else if(AA.spam.frenzyClicks % 5 == 4) {
        popup=['Lovely spam! Wonderful spam! +'+Beautify(moni)+' cookies!','Lovely spam! Wonderful spam!','+<b>'+Beautify(moni)+'</b> cookies!'];
    }

    AA.spam.frenzyClicks++;

    AA.PopupOrNotify(popup[0], popup[1], popup[2], [10,1], 2);
    AA.spam.cookieDespawn(index);

}

/**
 * Called when a spam cookie needs to pick a new spawn time
 *
 */
AA.spam.cookieReset = function(i) {
	if(!AA.config.useSpam) return;

	AA.spam.cookieObjects[i].wait = Math.random() * (AA.spam.cookieSpawnMax - AA.spam.cookieSpawnMin + 1) + AA.spam.cookieSpawnMin;
    AA.spam.cookieObjects[i].wait *= Game.fps;
    AA.spam.cookieObjects[i].state = 'wait';
}

AA.spam.cookieSpawn = function(i) {
	if(!AA.config.useSpam) return;
	if(AA.spam.frenzyTime <= 0) return;

    //Okay, so the stuff below is a bit complex, but I wanted to hook into Orteil's code
    //for spawining golden cookies (with all the seasonal effects and such) without
    //copying and pasting the code. I'm hoping this code can remain stable even if he
    //decides to add new seasonal effects...
    //
    //The main idea is that I remove the main golden cookie div from the DOM and set
    //one of the spam cookies to have its ID (which requires removing and readding it
    //with the id "goldenCookie" to register it properly). Then I run the spawn
    //function to have all the visual effects applied to the spam cookie div. I rename
    //its id back to what it should be, refresh it on the DOM, and then readd the
    //actual golden cookie div.

	var goldenCookie = l('goldenCookie');
	var spamCookie = l('goldenCookie' + i);

    //This will be identical for the spam cookies
    var goldenCookieParent = goldenCookie.parentNode;

    goldenCookieParent.removeChild(goldenCookie);

	//Back up the golden cookie stats
	var temp = [];
	for(var key in Game.goldenCookie) {
		temp[key] = Game.goldenCookie[key];
	}



    //Seriously, I'm not cheating cookies here!
    Game.goldenCookie.life = 0;
    Game.goldenCookie.time = 10000000000;

	spamCookie.id = "goldenCookie";    
    goldenCookieParent.removeChild(spamCookie);    
    goldenCookieParent.appendChild(spamCookie);
	Game.goldenCookie.spawn();  //Here's Orteil's code
	spamCookie.id = "goldenCookie" + i;			
    goldenCookieParent.removeChild(spamCookie);    
    goldenCookieParent.appendChild(spamCookie);    

	//Restore the golden cookie now that I've injected the styling
	//code to style my cookie
	for(var key in temp) {
		Game.goldenCookie[key] = temp[key];
	}
    goldenCookieParent.appendChild(goldenCookie); 

    //Like magic, the spam cookie should be styled properly without messing with
    //the "real" golden cookie.


	//Now set up the duration
	var currentDuration = AA.spam.frenzyTime / Game.fps;
	var totalDuration = AA.spam.frenzyTimeDuration();
	var percentFinished = currentDuration / totalDuration;

	var duration = AA.spam.spamBaseCookieDuration * percentFinished;
	if (Game.Has('Lucky day')) duration *= 2;
	if (Game.Has('Serendipity')) duration *= 2;
	duration = Math.max(1,duration) * Game.fps;

    AA.spam.cookieObjects[i].state = 'onscreen';
	AA.spam.cookieObjects[i].duration = duration;
    AA.spam.cookieObjects[i].startDuration = duration;
}

AA.spam.cookieDespawn = function(i) {
	l('goldenCookie' + i).style.display='none';
    AA.spam.cookieObjects[i].state = 'inactive';
	//And respawn if the event is still on
	if(!AA.config.useSpam) return;
	if(AA.spam.frenzyTime <= 0) return;
    
	AA.spam.cookieReset(i);
}

AA.spam.frenzyTimeDuration = function() {
	return AA.spam.spamBaseFrenzyDuration + AA.spam.spamBaseFrenzyDuration * Game.Has('Get lucky');
}

Game.customLogic.push(function() {
	if(AA.spam.frenzyTime > 0) {
		AA.spam.frenzyTime--;
	}
});

//Note: the stored method needs to still be part of the object so that the
//"this" keyword works properly!
//
//I think this name is unique enough. 
Game.goldenCookie.__AA_update_spamOverride = Game.goldenCookie.update;
Game.goldenCookie.update=function() {
	this.__AA_update_spamOverride();

    if(!AA.config.useSpam) return;

	//Spam frenzy over
	if(AA.spam.frenzyTime == 0) {
        AA.spam.endEvent();
    }	

	if(AA.spam.frenzyTime > 0) {
		for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
			if (AA.spam.cookieObjects[i].state == 'onscreen') {
				AA.spam.cookieObjects[i].duration--;				
			} else if (AA.spam.cookieObjects[i].state == 'wait') {
				AA.spam.cookieObjects[i].wait--;
			} 

			//Time to spawn!
			if(AA.spam.cookieObjects[i].state == 'wait' && AA.spam.cookieObjects[i].wait <= 0) {
				AA.spam.cookieSpawn(i);
			}

            //Did not click in time
            if (AA.spam.cookieObjects[i].state == 'onscreen' && AA.spam.cookieObjects[i].duration <= 0) {
                AA.spam.cookieDespawn(i);
            }

            if (AA.spam.cookieObjects[i].state == 'onscreen' && AA.spam.cookieObjects[i].duration > 0) {
                if(AA.spam.cookieObjects[i].duration > 1) {
        			l('goldenCookie' + i).style.opacity = 1;
                } else {
        			l('goldenCookie' + i).style.opacity = AA.spam.cookieObjects[i].duration;                    
                }
            }
		}
	}
}

Game.goldenCookie.__AA_choose_spamOverride = Game.goldenCookie.choose;
Game.goldenCookie.choose=function() {
	//Hook in my own golden cookies
	if (AA.config.useSpam) {
		if (this.wrath > 0 && Math.random() < AA.spam.spamChanceWrath) {
            this.chooseSpam = true;
			return 'spam';
		} 
		if (this.wrath <= 0 && Math.random() < AA.spam.spamChance) {
            this.chooseSpam = true;            
			return 'spam';
		}
	}

    this.chooseSpam = false;
	
	return this.__AA_choose_spamOverride();
}


Game.goldenCookie.__AA_click_spamOverride = Game.goldenCookie.click;
Game.goldenCookie.click=function() {
    var me=Game.goldenCookie;
    me.__AA_click_spamOverride();

    //This is the value when it is a real cookie click. Here's where I add my custom click handlers
    if (me.life > 0 && me.chooseSpam) {
        //Start the spam event!
        AA.spam.initEvent();
        var duration = AA.spam.frenzyTime / Game.fps;
        var popup=['Cookie Spam: get ready to click lots of golden cookies for '+duration+' seconds!','Cookie Spam','click lots of golden cookies for <b>'+duration+'</b> seconds!'];
        AA.PopupOrNotify(popup[0], popup[1], popup[2], [10,1], 6);

        //Just to be sure...
        me.chooseSpam = false;
    }
}
l('goldenCookie')[Game.clickStr]=Game.goldenCookie.click;


//Create extra golden cookie popups and initialize some stuff my
//new golden cookies use
(function() {
	// Create all of the spam cookie divs
	for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
		var gcDiv = document.createElement('div');
		gcDiv.id = 'goldenCookie' + i;
		gcDiv.className = 'goldenCookie';
		gcDiv[Game.clickStr] = AA.spam.cookieOnClick;
		l('game').appendChild(gcDiv);
	}
	// Create all the base spam objects. These track stats for
	// each spam cookie
	for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
		AA.spam.cookieObjects[i] = {};
        //State the spam cookie is in (inactive, wait, onscreen)
        AA.spam.cookieObjects[i].state = 'inactive';
		//Amount of time before each spam cookie appears on screen
		AA.spam.cookieObjects[i].wait = -1;	
		//How long a spammed cookie lasts on screen
		AA.spam.cookieObjects[i].duration = -1;
        //The start duration before ticks start eating away at its time left
        AA.spam.cookieObjects[i].startDuration = -1;
		//Was it clicked?
		AA.spam.cookieObjects[i].clicked = false;
	}

})();


