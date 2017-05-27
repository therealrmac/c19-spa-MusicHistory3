"use strict";
console.log('song2 has loaded');

let $= require("jquery"),
	firebase= require("./fbSetup");

	function loadSongs1(callback){
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: `${firebase.getFBsettings().databaseURL}/songTrack.json`
			}).done(function(songData){
				resolve(songData);
			});
		});
	}
	function smiths(callback){
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: `${firebase.getFBsettings().databaseURL}/songTrack.json`
			}).done(function(songData){
				for (var obj in songData){
					if(songData[obj].artist !="The Smiths"){
						console.log(songData[obj].artist);
						delete songData[obj];
					}
				}
				resolve(songData);
			});
		});
	}
	function michael(callback){
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: `${firebase.getFBsettings().databaseURL}/songTrack.json`
			}).done(function(songData){
				for (var obj in songData){
					if(songData[obj].artist !="Michael Jackson"){
						console.log(songData[obj].artist);
						delete songData[obj];
					}
				}
				resolve(songData);
			});
		});
	}
	function eagles(callback){
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: `${firebase.getFBsettings().databaseURL}/songTrack.json`
			}).done(function(songData){
				for (var obj in songData){
					if(songData[obj].artist !="The Eagles"){
						console.log(songData[obj].artist);
						delete songData[obj];
					}
				}
				resolve(songData);
			});
		});
	}
	function megadeth(callback){
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: `${firebase.getFBsettings().databaseURL}/songTrack.json`
			}).done(function(songData){
				for (var obj in songData){
					if(songData[obj].artist !="Megadeth"){
						console.log(songData[obj].artist);
						delete songData[obj];
					}
				}
				resolve(songData);
			});
		});
	}
	function metallica(callback){
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: `${firebase.getFBsettings().databaseURL}/songTrack.json`
			}).done(function(songData){
				for (var obj in songData){
					if(songData[obj].artist !="Metallica"){
						console.log(songData[obj].artist);
						delete songData[obj];
					}
				}
				resolve(songData);
			});
		});
	}
	function deleteSong(songId){
		return new Promise((resolve, reject)=>{
			console.log("the song id is", songId);
			$.ajax({
				url: `${firebase.getFBsettings().databaseURL}/songTrack/${songId}.json`,
				method: 'DELETE'
			}).done(function(songId){
				resolve(songId);
			});
		});
	}
	function addSong(songFormObj){
		return new Promise((resolve, reject)=>{
			console.log("song form Obj", songFormObj);
			$.ajax({
				url: `${firebase.getFBsettings().databaseURL}/songTrack.json`,
				type: "POST",
				data: JSON.stringify(songFormObj),
				dataType: 'json'
			}).done(function(songId){
				resolve(songId);
			});
		});
	}

	function loadSongs2(callback){
		return new Promise((resolve,reject)=>{
			$.ajax({
				url: "song2.json",
				success: function(data){
					resolve(data);
				}
			});
		});
	}

module.exports= {loadSongs1, loadSongs2, deleteSong, addSong, smiths, megadeth, eagles, michael, metallica};
