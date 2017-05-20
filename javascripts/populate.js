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


