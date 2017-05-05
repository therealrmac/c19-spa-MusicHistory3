
listMusicView.addEventListener('click', function(event){
	if(event.target.tagName== "BUTTON" && event.target.innerHTML == "Delete"){
		getTarget= event.target.closest('div');
		listMusicView.removeChild(getTarget);
	}else if(event.target.tagName== "BUTTON" && event.target.innerHTML =="More"){
		var songs2= new XMLHttpRequest();
		songs2.addEventListener('load', songsWin);
		songs2.addEventListener('error', songsFail);

function songsWin(event){
	var songData= JSON.parse(this.responseText);
	moreSongs(songData);
	
}
function songsFail(event){
	console.log("an error has occured");
}

function moreSongs(event){
	console.log();
	var divCont="";
	var x= event.songTrack;
		for (var i=0; i<x.length; i++){
		console.log(x[i].song);
		divCont+= "<div class='output'>"+
		"<span>"+ x[i].song+"</span>"+"<br>"+
				"<span>"+ 'Song    |    Artist    |    Album'+"</span>"+"<button class='delete'>"+'Delete' +"</button>" +"<br>" +"</div>";
	}

	listMusicView.innerHTML+= divCont;
}

songs2.open("GET", "song2.json");
songs2.send();
	var x=event.target.closest('button')
	listMusicView.removeChild(x);		
	}

});

var songs= new XMLHttpRequest();
var songData;
songs.addEventListener('load', songsLoad);
songs.addEventListener('error', songsError);


function songsLoad(event){
	var newsong= JSON.parse(event.target.responseText)
	showSong(newsong);
}
function showSong(event){
	var divCont="";
	var x= event.songTrack;
	for (var i=0; i<x.length; i++){
		console.log(x[i].song);
		divCont+= "<div class='output'>"+
		"<span>"+ x[i].song+"</span>"+"<br>"+
				"<span>"+ 'Song    |    Artist    |    Album'+"</span>"+"<button class='delete'>"+'Delete' +"</button>" +"<br>" +"</div>";
	}

	listMusicView.innerHTML+= divCont + "<button>"+ 'More'+ "</button>";
}
function songsError(event){
	console.log("an error has occured");
}
songs.open("GET", "song.json");
songs.send();
function newArr(name, artist, album){
	this.name= name;
	this.artist= artist;
	this.album= album;
}
var buttonAdd= document.getElementById('addbutton');
var listMusic= document.getElementById('musiclist');
var addList= document.getElementById('showMusicAdd');
var musicAdd= document.getElementById('addMusic');
var viewList= document.getElementById('listMusicView');
var addSong= document.getElementById('enterSong');
var addArtist= document.getElementById('enterArtist');
var addAlbum= document.getElementById('enterAlbum');

addList.addEventListener('click', function(){
	musicAdd.classList.remove('hidden');
	viewList.classList.add('hidden');
});
listMusic.addEventListener('click', function(){
	musicAdd.classList.add('hidden');
	viewList.classList.remove('hidden');
});

 buttonAdd.addEventListener('click', function(){
 	var addedSong= new newArr(addSong.value, addArtist.value, addAlbum.value);
	listMusicView.innerHTML += "<div>"+"<ul>" + "<li>" + addedSong.name+ "- " +"by " +addedSong.artist + " on the album "+addedSong.album+ "</li>"+ "<br>" + "<span>" +"Song  |  Artist  |  Album" +"</span>" +"<button class='delete'>"+'Delete'+"</button>" +"</ul>"+"</div>";
	addSong.value= "";
	addArtist.value= "";
	addAlbum.value= "";
 });


	


