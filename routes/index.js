var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');



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





module.exports = router;
