const express=require("express");
const app=express();
let port=3000;

app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});



app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});




