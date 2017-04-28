var songs = [];
songs[songs.length] = "A !Light That Never Goes Out > by The Smiths on the album The Queen is Dead";
songs[songs.length] = "Man in The Mirror > by Mich@ael Jackson on the album Bad";
songs[songs.length] = "Tequilla Sun@rise > by The Eagles on the album Desperado";
songs[songs.length] = "Wake up Dead > by Mega!deth on the album Peace Sells...but Who's Buying?";
songs[songs.length] = "Blackened > by Metallica on the al$bum And Justice For All";
for (var i=0; i<songs.length; i++){
	songs[i]= songs[i].replace(/[!@?$]/gi, "");
	songs[i]= songs[i].replace(/> /gi, ' - ');
}
for (prop in songs){
	var songItem= `<ul>
					<li>${songs[prop]}</li>
					<br>
					<span> Song  |  Artist  |  Album</span>
					</ul>`
	listMusicView.innerHTML+= songItem;
}
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
	listMusicView.innerHTML += "<ul>" + "<li>" + addedSong.name+ "- " +"by " +addedSong.artist + " on the album "+addedSong.album+ "</li>"+ "<br>" + "<span>" +"Song  |  Artist  |  Album" +"</span>" +"</ul>";
	addSong.value= "";
	addArtist.value= "";
	addAlbum.value= "";
 });


	


