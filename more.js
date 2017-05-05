console.log('song2 has loaded')
var More= (function(before){



songs2.addEventListener('load', songsWin);
songs2.addEventListener('error', songsFail);

function songsWin(event){
	var songData= JSON.parse(this.responseText).songs2;
	event(songData);
	
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
		divCont+= "<div>"+
		"<span>"+ x[i].song+"</span>"+"<br>"+
				"<span>"+ 'Song    |    Artist    |    Album'+"</span>"+"<button class='delete'>"+'Delete' +"</button>" +"<br>" +"</div>";
	}

	listMusicView.innerHTML+= divCont;
}

songs2.open("GET", "song2.json");
songs2.send();

return before;
})(More || {})