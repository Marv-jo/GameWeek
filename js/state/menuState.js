var MenuState = function(game) {  }; 
MenuState.prototype = 
{
  preload: function(game) 
  {
    for (var i = 0 ; i  < list.assetsMenu.length ; i++){ 
      game.load.image(list.assetsMenu[i].name, list.assetsMenu[i].src);
    };
  },
  create:  function(game) 
  {
    game.btnPlay = game.add.button(game.world.centerX - 250, 150, 'play', startLevel, this, 2, 1, 0);
    game.btnOptions = game.add.button(game.world.centerX - 250, 250, 'options', startOptions, this, 2, 1, 0); 
    game.btnCredits = game.add.button(game.world.centerX - 250, 350, 'credits', startCredits, this, 2, 1, 0); 
    game.btnQuit = game.add.button(game.world.centerX - 250, 450, 'quit', startQuit, this, 2, 1, 0); 
  },
  update:  function(game)
  {

  }
};

function startLevel () {
  game.state.start('LevelState');
}
function startOptions () {
  game.state.start('OptionsState');
}
function startCredits () {
  game.state.start('CreditsState');
}
function startQuit () {
  game.state.start('HomeState');
}