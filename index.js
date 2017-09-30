const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const assert = require('assert');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = 3000
var url = 'mongodb://34.201.37.121:27017/local';

app.use(express.static(__dirname ));

app.get("/", function(req, res, next){
	res.sendFile(__dirname + "/event-form.html");
});

app.get('/get-data', function(req,res,next) {
	var resultArray = [];
	mongo.connect(url, function(err,db) {
		assert.equal(null,err);
		var cursor = db.collection('User').find();
		cursor.forEach(function(doc,err){
			assert.equal(null,err);
			resultArray.push(doc);

		}, function(){
			db.close();
		});
	});
	res.redirect('/');
});

app.post('/newuser', function(req,res,next) {
	var item = {
		name: req.body.name,
		mentor: req.body.mentor,
		grade: req.body.grade,
		subject: req.body.subject,
		sport: req.body.sport,
		show: req.body.show,
		describe: req.body.describe,
		event: req.body.event,
		username: req.body.username,
		password: req.body.password,
	};

	mongo.connect(url, function(err,db) {
		assert.equal(null,err);
		db.collection('Users').insertOne(item, function(err, result) {
			assert.equal(null,err);
			console.log('item inserted');
			db.close();
		})
	})
	res.redirect('/');

});

app.post('/newevent', function(req,res,next) {
	var item = {
		eventname: req.body.eventname,
		eventtype: req.body.eventtype,
		date: req.body.date,
		moment: req.body.moment,
		learn: req.body.learn,
	};

 	mongo.connect(url, function(err,db) {
 		assert.equal(null,err);
 		query = {"mentor": "Dennis"};
		var k = db.collection('Users').find(query).toArray();
		db.collection('Users').update(query, {$set: {event : 200}})
	});
});


app.listen(port,'0.0.0.0',  ()  => console.log('Server running on port '+ port))
