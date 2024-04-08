// import 'express' files and save as express
var express = require('express')

// func express to save as variable
var app = express()

var nunjucks = require("nunjucks")

app.set("view engine", "html")
nunjucks.configure("./views", {express: app})

// Open server with 3456
app.listen(3456, function() {
    console.log("start! express server on port 3456")
})

app.get('/', function(req, res){
    //res.send("<h3>ExpressJS 준비완료</h3>")
    //res.sendFile(__dirname+"/main.html")
	res.render("main.html")
})

app.get('/main.html', function(req, res) {
	res.sendFile(__dirname+"/main.html")

})

app.get('/another.html', function(req, res) {
	res.sendFile(__dirname+"/another.html")
})

app.get('/download', function(req, res) {
	//res.sendFile(__dirname+"/download.html")
	const file = `${__dirname}/test.txt`;
	res.download(file, function (err){
		if (err) {
			console.log("occured error : ", err.name)
			console.log("messages : ", err.message)
			res.end()
		} else {
			console.log("Success?")
		}
	})
	res.end()
})

