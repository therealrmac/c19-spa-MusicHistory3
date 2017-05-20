(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


	

},{"./more":2,"./populate":3,"./populateTwo":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

let ajaxLoad= require("./more");
let mainItems= require("./main");
var viewList= $('#listMusicView');

let populateObj= {};

populateObj.load= function(){
    ajaxLoad.loadSongs1()
    .then(data =>{
        populateObj.write(data);
    });
};

populateObj.write= function(data){
        var divCont="";
        var x= data.songTrack;
        console.log("x", x);
        for (var i=0; i<x.length; i++){
            divCont+= "<div class='output'>"+
            "<span>"+ x[i].song+"</span>"+"<br>"+
                    "<span>"+ 'Song    |    Artist    |    Album'+"</span>"+"<button class='delete'>"+'Delete' +"</button>" +"<br>" +"</div>";
                }

            viewList.html(divCont + "<button>"+ 'More'+ "</button>"); 

};


module.exports= populateObj;



},{"./main":1,"./more":2}],4:[function(require,module,exports){
"use strict";

let ajaxLoad= require("./more");
let mainItems= require("./main");
var viewList= $('#listMusicView');

let populateObjTwo= {};

populateObjTwo.load= function(){
    ajaxLoad.loadSongs2()
    .then(data =>{
        console.log("data",data);
        populateObjTwo.write(data);
    });
};

populateObjTwo.write= function(data){
            var divCont="";
            var x= data.songTrack;
                for (var i=0; i<x.length; i++){
                console.log(x[i].song);
                divCont+= "<div class='output'>"+
                "<span>"+ x[i].song+"</span>"+"<br>"+
                        "<span>"+ 'Song    |    Artist    |    Album'+"</span>"+"<button class='delete'>"+'Delete' +"</button>" +"<br>" +"</div>";

                
                 }
                viewList.html(divCont+=divCont);

};


module.exports= populateObjTwo;


},{"./main":1,"./more":2}]},{},[1]);
