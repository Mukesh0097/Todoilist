const express = require("express");

const bodyParser = require("body-parser");

const app = express();
var inputs = ["buy food","cook food","eat food"];
var workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"))

app.get("/",function(req,res){

  
    
   var options = {
    weekday: "long",
    day :"numeric",
    month:"long"
   };

   var today = new Date();

   var currentday = today.toLocaleDateString("en-US", options);

    res.render("list",{listTittle:currentday,listname:inputs});
    
    
});

app.post("/",function(req,res){
  var input = req.body.newItem;
 


  if(req.body.list =="work"){
    workItems.push(input);
    res.redirect("/work");
  }else{
  inputs.push(input);
  res.redirect("/");
  }
  
  
   
})

app.get("/work",function(req,res){
  res.render("list",{listTittle:"work",listname:workItems});
})

app.get("/about", function(req,res){
  res.render("about");
})


app.listen(3000,function(){
    console.log("server is runnig on port 5000");
})