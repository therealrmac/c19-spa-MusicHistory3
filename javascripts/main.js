"use strict";


let filter= require("./filter");
let $= require('jquery'),
	al= require("./more"),
	songList= require("./populate");


var buttonAdd= $('#addbutton');
var listMusic= $('#musiclist');
var addList= $('#showMusicAdd');
var musicAdd= $('#addMusic');
var viewList= $('#listMusicView');
var addSong= $('#enterSong');
var addArtist= $('#enterArtist');
var addAlbum= $('#enterAlbum');

function populateDom(){
	al.loadSongs1()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}
function smithToDom(){
	al.smiths()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}
function michaelToDom(){
	al.michael()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}
function eaglesToDom(){
	al.eagles()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}
function megadethToDom(){
	al.megadeth()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}
function metallicaToDom(){
	al.metallica()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}

function smithAlbumToDom(){
	al.smithsAlbum()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}
function michaelAlbumToDom(){
	al.michaelAlbum()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}
function eaglesAlbumToDom(){
	al.eaglesAlbum()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}
function megadethAlbumToDom(){
	al.megadethAlbum()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}
function metallicaAlbumToDom(){
	al.metallicaAlbum()
	.then(function(songData){
		console.log("some data", songData);
		var idArray= Object.keys(songData);
		var songArray=[];
		idArray.forEach(function(key){
			songData[key].id=key;
			songArray.push(songData[key]);
		});
			console.log("song object now with an id", songData);
			songList.makeSongList(songData);
	});
}


$(document).on("click", ".delete-btn", function (event){
	console.log("delete button clicked");
	let songID= $(this).data("delete-id");
	console.log("song id", songID);
	al.deleteSong(songID)
	.then(function(){
		console.log("songID before populate",songID);
		populateDom();
	});
});
 populateDom();


$(document).on('click', "#addbutton", function(event){
	let songObj= buildSongObj();
	al.addSong(songObj)
	.then(function(songID){
		 $("#enterSong").val("");
		 $("#enterArtist").val("");
		 $("#enterAlbum").val("");
		musicAdd.addClass('hidden');
		viewList.removeClass('hidden');
		populateDom();
	});
});

$(document).on("change", "#artistSelect", function(event){
	let selected= $(this).find("option:selected");
	console.log("the selected was", selected.text());
	console.log("testing", selected.text());
	if(selected.text()==="The Smiths"){
		al.smiths()
		.then(function(event){
			smithToDom();
		});
	} else if(selected.text()==="Michael Jackson"){
		al.michael()
		.then(function(event){
			michaelToDom();
		});
	} else 	if(selected.text()==="The Eagles"){
		al.eagles()
		.then(function(event){
			eaglesToDom();
		});
	} else 	if(selected.text()==="Megadeth"){
		al.megadeth()
		.then(function(event){
			megadethToDom();
		});
	} else if(selected.text()==="Metallica"){
		al.metallica()
		.then(function(event){
			metallicaToDom();
		});
	}
});

$(document).on("change", "#albumSelect", function(event){
	let selected= $(this).find("option:selected");
	console.log("the selected album was", selected.text());
	console.log("testing", selected.text());
	if(selected.text()==="The Queen is Dead"){
		al.smithsAlbum()
		.then(function(event){
			smithAlbumToDom();
		});
	} else if(selected.text()==="Bad"){
		al.michaelAlbum()
		.then(function(event){
			michaelAlbumToDom();
		});
	} else 	if(selected.text()==="Desperado"){
		al.eaglesAlbum()
		.then(function(event){
			eaglesAlbumToDom();
		});
	} else 	if(selected.text()==="Peace Sells...But Who's Buying?"){
		al.megadethAlbum()
		.then(function(event){
			megadethAlbumToDom();
		});
	} else if(selected.text()==="And Justice For All"){
		al.metallicaAlbum()
		.then(function(event){
			metallicaAlbumToDom();
		});
	}
});


function buildSongObj(){
	let songObj= {
		title: $("#enterSong").val(),
		artist: $("#enterArtist").val(),
		album: $("#enterAlbum").val()
	};
	return songObj;
}




addList.on('click', function(){
	musicAdd.removeClass('hidden');
	viewList.addClass('hidden');
});
listMusic.on('click', function(){
	musicAdd.addClass('hidden');
	viewList.removeClass('hidden');
});



	
