/**
 * New temple of the cookie gods, where you are able to unlock ambrosia cookies and a whole
 * new set of buildings that comes with it (tier 2 buildings with a tier 2 resource basically).
 *
 */
AA.temple = {};



AA.upgradeManager.createUpgrade({
    name: "Temple of the Cookie Gods",
    description: "Choose your patron cookie-deity and give offerings of cookies in their name. <q>After a spiritual experience eating raw cookie dough, you realize it is time to share your profound realizations with others.</q>",
    image: "temple",
    baseCost: 1000000000000000000000
});

/**
 * Add in the temple of the Cookie Gods to the build menu (once the player is allowed to)
 *
 */
Game.customLogic.push(function() {
    if (Game.cookiesEarned >= 1000000000000000000000) {
        AA.upgradeManager.unlock("Temple of the Cookie Gods");
    }
});

