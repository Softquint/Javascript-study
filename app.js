var express = require ('express');
var app = express();

app.get('/',function(req,res){
    res.send('Welcome to express framework');
});

app.get('/home',function(req,res){
    res.send('Welcome Home Page');
});

app.get('/home/:name?',function(req,res){
    var name = req.params.name
    res.send('Hello ' + name);
});

app.get('/data',function(req,res){
   var data = {
       fname : 'Fareed',
       lname: 'Ahmed',
       address:'Kondwa',
       dob:'28/08/1989'
   }
    res.send(JSON.stringify(data, null ,10));
    console.log(data);
});

app.listen(2001,function(){
    console.log('apllication works on http://localhost:2001');
})