"use strict";
console.log('song2 has loaded');


	var songData1= [];
	var songData2= [];

	let loadSongs2= function (callback){
			$.ajax({
				url: "song2.json",
				success: function(songData1){
					callback(songData1.songTrack);
				}
			});
		};
	let loadSongs1= function(callback){
			$.ajax({
				url: "song.json",
				success: function(songData2){
					callback(songData2.songTrack);
				}
			});
		};

module.exports= {loadSongs1, loadSongs2};
