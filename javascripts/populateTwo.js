"use strict";

let ajaxLoad= require("./more");
let mainItems= require("./main");
let firstList= require("./populate");

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
                $("#listMusicView").html(firstList+=divCont);

};


module.exports= populateObjTwo;

