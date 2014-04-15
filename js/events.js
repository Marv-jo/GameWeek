(function events(object) {
	object.prototype.keyboardEvent = function() {
		var player = this;
		window.addEventListener("keydown", function(e) {
			switch(e.keyCode) {
				case 37 :
					player.left = true;
				break;

				case 39 :
					player.right = true;
				break;

				default: 
				break;
			}
		}, false);

		window.addEventListener("keyup", function(e) {
			switch(e.keyCode) {
				case 37 :
					player.left = false;
				break;

				case 39 :
					player.right = false;
				break;

				default: 
				break;
			}
		}, false);
	};
})(Player);