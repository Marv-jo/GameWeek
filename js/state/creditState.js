var CreditsState = function(game) {  }; 
CreditsState.prototype = 
{
  preload: function(game) 
  {
    for (var i = 0 ; i  < list.assetsMenu.length ; i++){ 
      game.load.image(list.assetsMenu[i].name, list.assetsMenu[i].src);
    };
  },
  create:  function(game) 
  {
    game.btnRetour = game.add.button(-80, 620, 'retour', startRetour, this, 2, 1, 0); 
  },
  update:  function(game)
  {

  }
};

function startRetour () {
  game.state.start('MenuState');
}