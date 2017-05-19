"use strict";

let populate= require("./populate");
let loadsongJson= require("./more");

populate.songData1(populatePage2);

function newArr(name, artist, album){
	this.name= name;
	this.artist= artist;
	this.album= album;
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
	if(event.target.tagName== "BUTTON" && event.target.innerHTML == "Delete"){
		getTarget= event.target.closest('div');
		listMusicView.removeChild(getTarget);
	}else if(event.target.tagName== "BUTTON" && event.target.innerHTML =="More"){
	populate.loadSongs2(populatePage2);
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
	 listMusicView.innerHTML+="<div class='output'>"+"<span>" + addedSong.name+ "- " +"by " +addedSong.artist + " on the album "+addedSong.album+ "</span>"+ "<br>" + "<span>" +"Song  |  Artist  |  Album" +"</span>" +"<button class='delete'>"+'Delete'+"</button>"+"</div>";
	 
	addSong.val("");
	addArtist.val("");
	addAlbum.val("");
 });


	
