
var express = require('express');
var router = express.Router();
var util = require('util')
var hash = require('object-hash');

var location = {};

router.get('/', function(req, res, next) {
 	res.send(location);
});

router.get('/push', function(req, res, next) {
	var id = req.param('id');
	var name = req.param('name');
	var lat = req.param('lat');
	var lon = req.param('lon');
	id = hash(id);
 	push_location(id, name, lat, lon);
 	msg = util.format("%s\t%s\t%s\t%s", id, lat, lon, name)
 	res.send(msg)
 	console.log(msg)
});

router.get('/reset_location', function(req, res, next) {
 	reset_location();
 	res.send(location);
});

function push_location(id, name, lat, lon){
	obj = {};
	obj.id = id;
	obj.name = name;
	obj.lat = lat;
	obj.lon = lon;
	location[id] = obj;
}

function reset_location(){
	location = {};
}

module.exports = router;
