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

