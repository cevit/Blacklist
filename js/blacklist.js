var Blacklist = function(uris, playlist, models){
	if(!this.init){
		return new Blacklist(uris, playlist, models);
	}
	
	return this.init(uris, playlist, models);
}

Blacklist.prototype = {
	uris: [],
	modelsLib: null,
	playlist: null,

	init: function(uris, playlist, models) {
		this.uris = uris;
		this.modelsLib = models;
		this.playlist = playlist;

		this.hooks();
	},

	isBlocked: function(obj) {
		var i = this.uris.length;
	    while (i--) {
	        if (this.uris[i] === obj) {
	            return true;
	        }
	    }
	    return false;
	},

	hooks: function() {
		var _protoRef = this;

		this.modelsLib.player.addEventListener('change', function(p) {
			if (_protoRef.isBlocked(p.data.track.uri)) {
				_protoRef.modelsLib.player.skipToNextTrack();
				Logger.log('(BLOCKED) ' + p.data.track.name);
			}
 	 	});

		console.log(this.playlist);
 	 	this.playlist.addEventListener('insert', function(p) {
 	 		console.log(p);
 	 	});
	}
}