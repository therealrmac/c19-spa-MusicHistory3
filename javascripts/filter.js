"use strict";

let ajaxLoad= require("./more");
let songList1= require("./populate");
let songList2= require("./populateTwo");
let $= require('jquery');

let songFilter= {};

songFilter.artist= function(event){
    let artistValue= "";
    $("#filterButton").on("click", ()=>{
        console.log("is the filter button working");
        artistValue= $("#artistSelect option:selected").val();
        songFilter.artistFilter(artistValue);
        console.log("artist value", artistValue);
    });

};


songFilter.artistFilter= function(artistValue){
    let divCont="";
    var x;
    console.log("how about the second filter");
     ajaxLoad.loadSongs1()
    .then(data =>{

        for(var i in data.songTrack){
            console.log("dataSongtrack", data.songTrack[i].artist);
            console.log(data.songTrack[i].artist, " is equal to ", artistValue);
            if(data.songTrack[i].artist=== artistValue){
                x= data.songTrack[i];
                console.log(x);
                divCont+= "<div class='output'>"+
                "<span>"+ x.song+ " | "+ x.artist+ " | " +x.album + "</span>"+"<br>"+
                    "<span class='guide'>"+ 'Song    |    Artist    |    Album'+"</span>"+"<button class='delete'>"+'Delete' +"</button>" +"<br>" +"</div>";
                
            }
            $("#listMusicView").html();
            $("#listMusicView").html(divCont);
        }
        
    });
};



module.exports= songFilter;




