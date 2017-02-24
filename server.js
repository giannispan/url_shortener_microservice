//Required modules
var http = require('http')
var express = require('express')

// Build the app
var app = express();

//get request
app.get('/new/:url(*)', function (req, res, next) {
//request the url parameter
var url = req.params.url
var host_url = 'http://' + req.headers.host + '/'

//check if url string is valid
 function validateURL(url) {
   var match_url_re = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return match_url_re.test(url);
}

//Generate four digit random number
var random = Math.floor(1000 + Math.random() * 9000);

if(validateURL(url)) {
res.send({original_url: url, short_url:host_url+random})

}
else{
	var message = {error: 'please provide a valid url'}
res.send(message)
}
next()
})

//redirection
app.get('/:url', function (req, res) {
res.redirect()
console.log(req.params.url)
})

// Start server up!
http.createServer(app).listen(8080);