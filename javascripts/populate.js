"use strict";


let populatePage2= function(songData){
        var divCont="";
        var x= songData;
        for (var i=0; i<x.length; i++){
            console.log(x[i].song);
            divCont+= "<div class='output'>"+
            "<span>"+ x[i].song+"</span>"+"<br>"+
                    "<span>"+ 'Song    |    Artist    |    Album'+"</span>"+"<button class='delete'>"+'Delete' +"</button>" +"<br>" +"</div>";
                }

            viewList.html(divCont + "<button>"+ 'More'+ "</button>"); 
        };


let populatePage1= function(songData){
            var divCont="";
            var x= songData;
                for (var i=0; i<x.length; i++){
                console.log(x[i].song);
                divCont+= "<div class='output'>"+
                "<span>"+ x[i].song+"</span>"+"<br>"+
                        "<span>"+ 'Song    |    Artist    |    Album'+"</span>"+"<button class='delete'>"+'Delete' +"</button>" +"<br>" +"</div>";

                
                 }
                viewList.html(divCont+=divCont);
            };



module.exports= {populatePage1, populatePage2};


