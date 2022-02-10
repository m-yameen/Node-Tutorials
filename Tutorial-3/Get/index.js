var http = require('http')
var url = require('url')
var querytring = require('querystring')

http.createServer(function(req,res){
    query = url.parse(req.url).query;
    uname = querytring.parse(query)['uname'];
    lname = querytring.parse(query)['lname'];
    console.log(uname +" "+ lname)
}).listen(3000)