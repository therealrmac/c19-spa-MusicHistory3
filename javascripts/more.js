"use strict";
console.log('song2 has loaded');


	let loadSongs1= function (callback){
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: "song.json",
				success: function(data){
					resolve(data);
				}
			});
		});
	};
	let loadSongs2= function(callback){
		return new Promise((resolve,reject)=>{
			$.ajax({
				url: "song2.json",
				success: function(data){
					resolve(data);
				}
			});
		});
	};

module.exports= {loadSongs1, loadSongs2};
