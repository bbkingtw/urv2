function init_http(PORT) {
  var clients=[];

  var express=require('express');
  app=express();
  
  app.use("/", express.static(__dirname));
  app.set('views', __dirname + '/');
  app.set('view engine','jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.errorHandler());  

  app.listen(PORT);

  return app;
}

init_http(80)

app.get('/',function(req,res){
  res.render('urv.jade',{});
});