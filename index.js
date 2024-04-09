var express = require ('express')
var ejs     = require ('ejs')


var app= express ( );
app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080); //localhost8080
app.get('/',function(req,res){

    res.render('pages/index');x

});

app.get('/about', function(req,res){
    res.render('page/about')
}) 

app.get('/contact', function (req,res){
    res.render('page/contact')
})