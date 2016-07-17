//This is the main file which handles routing of urls
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');
var logger = require('../logger.js');

var path = require('path');
var appDir = path.dirname(require.main.filename);

router.get('/', function(req, res) {
  res.sendFile(appDir+'/public/index.html');
});
router.get('/cats',function(req,res) {
    apiUrl = 'https://api.gettyimages.com:443/v3/search/images?phrase=cats';
    request.get({
        url : apiUrl,
        headers : {
            'Api-Key' : config.apiKey
        }
    },function(error,response,body){
        if(!error && response.statusCode == 200) {
            logger.info("Api response found");
            res.json(body);
        }
        else{
            res.json("{}");
            logger.error('Api response not found');
        }
    });
});

module.exports = router;
