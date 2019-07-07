var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
//var AWS = require('aws-sdk');

videos = []

async function listFiles(bucketName) {
    // [START storage_list_files]
    // Imports the Google Cloud client library
    const {Storage} = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage();

    const url = "https://storage.googleapis.com/vivecam/"

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';

    // Lists files in the bucket
    const [files] = await storage.bucket(bucketName).getFiles();

    console.log('Files:');
    files.forEach(file => {
	    videos.push(url + file.name)
	    console.log(file.name);
	});
    // [END storage_list_files]
}

listFiles('vivecam')











/*
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
	    });
    });

*/

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		getVideos: function() {
		    return videos;
		}});
});





module.exports = router;
