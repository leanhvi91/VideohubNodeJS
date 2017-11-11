var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var util = require('util')
var db = require('./database.js');


/* List subtitles */
router.get('/', function(req, res, next) {
    listSubtitles(res);
});

/* Get a subtitle by id */
router.get('/get/:id', function(req, res, next) {
	var id = req.params.id;
    getSubtitleById(id, res);
});

/* Delete a subtitle by id */
router.get('/delete/:id', function(req, res, next) {
	var id = req.params.id;
    deleteSubtitleById(id, res);
});


/* Insert new subtitle */
router.post('/insert', function(req, res, next) {
	var title = req.param('title');
	var content = req.param('content');
    insertSubtitles(title, content, res);
});

/* Update a subtitle by id */
router.post('/update', function(req, res, next) {
	var id = req.param('id');
	var title = req.param('title');
	var content = req.param('content');
	if( id == undefined || title == undefined || content == undefined){
		res.send("Invalid parameters")		
		return;
	}
	updateSubtitle(id, title, content, res);
});

/* Search subtitle */
router.get('/search/:text', function(req, res, next) {
	var text = req.params.text;
    searchSubtitle(text, res);
});


function getSubtitleById(id, res){
	var pool = db.getPool(); 
	pool.getConnection(function(err, connection) {
		if(err) throw err;
		var queryString = "SELECT * FROM subtitles WHERE id = ?;"
		var params = [id];
		connection.query(queryString, params, function(err, rows) {
			connection.release();
			console.log(queryString);
			res.send(rows);
		});

	});
}

function deleteSubtitleById(id, res){
	var pool = db.getPool(); 
	pool.getConnection(function(err, connection) {
		if(err) throw err;
		var queryString = "DELETE FROM subtitles WHERE id = ?;"
		var params = [id];
		connection.query(queryString, params, function(err, rows) {
			connection.release();
			console.log(queryString);
			res.send(rows);
		});
	});
}

function listSubtitles(res){
	var pool = db.getPool(); 
	pool.getConnection(function(err, connection) {
		if(err) throw err;
		var query = util.format("SELECT * FROM subtitles;")
		connection.query(query, function(err, rows) {
			connection.release();
			console.log(query);
			res.send(rows);
		});
	});
}

function insertSubtitles(title, content, res){
	var pool = db.getPool(); 
	pool.getConnection(function(err, connection) {
		if(err) throw err;
		var queryString = "INSERT INTO subtitles (title, content) VALUES ( ?, ?);";
		var params = [title, content];
		connection.query(queryString, params, function(err, rows) {
			connection.release();
			console.log(queryString);
			res.send(rows);
		});
	});
}

function updateSubtitle(id, title, content, res){
	var pool = db.getPool(); 
	pool.getConnection(function(err, connection) {
		if(err) throw err;
		var queryString = "UPDATE subtitles SET title = ?, content = ? WHERE id=?;";
		var params = [title, content, id];
		connection.query(queryString, params, function(err, rows) {
			connection.release();
			console.log(queryString);
			res.send(rows);
		});
	});
}

function searchSubtitle(text, res){
	var pool = db.getPool(); 
	pool.getConnection(function(err, connection) {
		if(err) throw err;
		var queryString = "SELECT * FROM subtitles WHERE MATCH (title) AGAINST (? IN NATURAL LANGUAGE MODE);"
		var params = text;
		connection.query(queryString, text, function(err, rows) {
			connection.release();
			console.log(queryString);
			res.send(rows);
		});
	});
}

module.exports = router;
