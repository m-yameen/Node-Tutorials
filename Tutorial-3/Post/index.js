var http = require('http')
var querytring = require('querystring')
var body='';
http.createServer(function(req,res){
    req.on('data',(data)=>{
        body+=data;
    });
    req.on('end',function(){
        uname = querytring.parse(body)['uname'];
        lname = querytring.parse(body)['lname'];
        console.log(uname +" "+ lname)
    });
}).listen(3000)