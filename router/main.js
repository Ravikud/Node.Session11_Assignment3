

module.exports=function(app){
	app.get('/',function(req,res){
		res.render('index.html');
		//index page
	});
	app.get('/about',function(req,res){
		res.render('about.html');
		//about page
	});
	
};

router = express.Router();
router.get(‘/’, function(req,res) {
//stuff
});
app.use(‘/’, router);