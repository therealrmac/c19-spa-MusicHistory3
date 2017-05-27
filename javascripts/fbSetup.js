"use strict";

let firebase= require("firebase/app"),
    fb= require("./firebaseget"),
    fbData= fb();

require("firebase/database");

var config= {
  apiKey: fbData.apiKey,
  databaseURL: fbData.databaseURL,
  authDomain: fbData.authDomain,
  storageBucket: fbData.storageBucket
};

firebase.getFBsettings= ()=>{
    return config;
};

firebase.initializeApp(config);


module.exports= firebase;
