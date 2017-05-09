
console.log('song2 has loaded')
var Evenmore= (function(songs){

	var songData1= [];
	var songData2= []

		songs.loadSongs2= function (callback){
			$.ajax({
				url: "song2.json",
				success: function(songData1){
					callback(songData1.songTrack);
				}
			});
		}
		songs.loadSongs1= function(callback){
			$.ajax({
				url: "song.json",
				success: function(songData2){
					callback(songData2.songTrack)
				}
			});
		}

	return songs;
})(Evenmore || {})