
require(['$api/library#Library', '$api/models'], function(Library, models) {
  var found = false;

  Library.forCurrentUser().playlists.snapshot().done(function(snapshot) {
    for (var i = 0, l = snapshot.length; i < l; i++) {
      var playlist = snapshot.get(i);
  
      if (playlist.name.toUpperCase() === 'blacklist'.toUpperCase()) {
          found = true;
          playlist.load("tracks").done(function () {
            playlist.tracks.snapshot().done(function(s) {
              new Blacklist(s.toURIs(), playlist, models);
          });
        });
      }
    }   
    if (!found) {
      var playlist = models.Playlist.create('Blacklist');
      new Blacklist([], playlist, models);
    }  
  });

});