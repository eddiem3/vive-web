var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var admin = require('firebase-admin');


videos = []

//joining path of directory 
const directoryPath = path.join(__dirname, '../public/videos');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
	//handling error
	if (err) {
	    return console.log('Unable to scan directory: ' + err);
	} 
	//listing all files using forEach
	files.forEach(function (file) {
		// Do whatever you want to do with the file
		videos.push(file);
		console.log(file); 
	    });
    });


var h = "hi";

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		getVideos: function() {
		    return videos;
		}});
});


//firebase init
admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	    databaseURL: 'https://vive-cam.firebaseio.com',
	    storageBucket: 'gs://vive-cam.appspot.com/'
	    });

var storage = firebase.storage();

// Create a reference under which you want to list
var listRef = storageRef.child('videos');

// Find all the prefixes and items.
listRef.listAll().then(function(res) {
	res.prefixes.forEach(function(folderRef) {
		// All the prefixes under listRef.
		// You may call listAll() recursively on them.
	    });
	res.items.forEach(function(itemRef) {
		// All the items under listRef.
		console.log(itemRef);
	    });
    }).catch(function(error) {
	    // Uh-oh, an error occurred!
	});



module.exports = router;
