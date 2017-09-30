/*Main node.js file for handling get/post requests*/

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
		picture: req.body.picture,
	};

	mongo.connect(url, function(err,db) {
		assert.equal(null,err);
		db.collection('Users').insertOne(item, function(err, result) {
			assert.equal(null,err);
			db.close();
		})
	})
	res.redirect('/');

});
function getUser(item, callback){
	var t = "";
	var k;

	mongo.connect(url, function(err,db) {
 		assert.equal(null,err);

 		
		db.collection('Users',function(err,collection){
			collection.findOne({username: "1"}, function(err,thing){
				db.close();
				callback(thing.event,item);
			});
		})
	});

	
}
function updateUser(t,item){
	mongo.connect(url, function(err,db) {
		console.log("update t:" + t);
		var x = t.concat(JSON.stringify(item))
		db.collection('Users').update({username: "1"}, {$set: {event : x}})
		db.close();
	});

}




app.post('/newevent', function(req,res,next) {
	var item = {
		eventname: req.body.eventname,
		eventtype: req.body.eventtype,
		date: req.body.date,
		moment: req.body.moment,
		learn: req.body.learn,
		picture: req.body.picture,
	};
	 getUser(item,updateUser);

 	
});

app.get('/getevent', function(req,res,next){
	mongo.connect(url,function(err,db){
		assert.equal(null,err);
		var x;
		db.collection('Users').findOne({username: "1"}, function(err,con){
			res.send(con.event);
		});
	});
	res.redirect('/');
});

app.listen(port,'0.0.0.0',  ()  => console.log('Server running on port '+ port))
