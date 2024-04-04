// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

// 3000 포트로 서버 오픈
app.listen(3456, function() {
    console.log("start! express server on port 3456")
})

app.get('/', function(req, res){
    //res.send("<h3>ExpressJS 준비완료</h3>")
    res.sendFile(__dirname+"/main.html")
})

app.get('/main.html', function(req, res) {
	res.sendFile(__dirname+"/main.html")
})

app.get('/another.html', function(req, res) {
	res.sendFile(__dirname+"/another.html")
})
