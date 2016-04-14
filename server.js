




require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server     =    app.listen(3000,function(){
    console.log("We have started our server on port 3000");
});

app.get('/',function(req,res){
	res.send('Hello');
});