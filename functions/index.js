const functions = require('firebase-functions'),
      firebase = require('firebase-admin'),
      express = require('express'),
      app = express(),
      path = require('path'),
      request = require('request'),
      commonJSON = require('./config/common.json')
      homeJSON = require('./config/home.json');
      
const firebaseApp = firebase.initializeApp(
        functions.config().firebase
);

app.set('view engine','ejs');

app.get('/',(request,response) => {
    console.log('into /');
    response.render('home',{commonObj:commonJSON, homeObj:homeJSON})
})

app.get('/about',(request,response) => {
    console.log('about /');
    response.render('about',{commonObj:commonJSON})
})

app.get('/services',(request,response) => {
    response.render('services',{commonObj:commonJSON})
})

app.get('/contact',(request,response) => {
    response.render('contact',{commonObj:commonJSON})
})

app.get('/gallery',(request,response) => {
    response.render('gallery',{commonObj:commonJSON})
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

app.get('/home',(request,response) =>{
    response.send("hello there !!!");
});

exports.app = functions.https.onRequest(app);
