"use strict";

let songList= require("./populate");
let songList2= require("./populateTwo");
let ajaxLoad= require("./more");

songList.load();

function newArr(name, artist, album){
	name.target.name= name;
	artist.target.artist= artist;
	album.target.album= album;
}
var buttonAdd= $('#addbutton');
var listMusic= $('#musiclist');
var addList= $('#showMusicAdd');
var musicAdd= $('#addMusic');
var viewList= $('#listMusicView');
var addSong= $('#enterSong');
var addArtist= $('#enterArtist');
var addAlbum= $('#enterAlbum');
var inputed="";
viewList.on('click', function(event){
	console.log("event", event);
	if(event.target.tagName== "BUTTON" && event.target.innerHTML == "Delete"){
		let getTarget= event.target.closest('div');
		viewList.removeChild(getTarget);
	}else if(event.target.tagName== "BUTTON" && event.target.innerHTML =="More"){
	songList2.load();
	var x= $(event.target).closest('button');
	 x.remove();		
	}

});

addList.on('click', function(){
	musicAdd.removeClass('hidden');
	viewList.addClass('hidden');
});
listMusic.on('click', function(){
	musicAdd.addClass('hidden');
	viewList.removeClass('hidden');
});

 buttonAdd.on('click', function(){
 	var addedSong= new newArr(addSong.val(), addArtist.val(), addAlbum.val());
	 viewList.innerHTML+="<div class='output'>"+"<span>" + addedSong.name+ "- " +"by " +addedSong.artist + " on the album "+addedSong.album+ "</span>"+ "<br>" + "<span>" +"Song  |  Artist  |  Album" +"</span>" +"<button class='delete'>"+'Delete'+"</button>"+"</div>";
	 
	addSong.val("");
	addArtist.val("");
	addAlbum.val("");
 });


	
