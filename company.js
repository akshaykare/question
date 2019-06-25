var express = require('express');
var app = express();
var customerController = function(req,resp)
{
	console.log("Reading json data");
	var customers=[
	{name:"Raj",ratings:3,description:"good"},
		{name:"John",ratings:4,description:"bad"}
	];
	resp.send(customers);
}

app.get("/",customerController);
var server = app.listen(8088,function()
{
	var host = server.address().address;
	var port = server.address().port;
	console.log("Listening on port number 8088",host,port)
	
})