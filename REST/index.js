const express=require("express");
const app=express();

const PORT=8080;

app.get("/",(req,res)=>{
    res.send("Server working well!!");
});

const path= require("path");
app.use(express.urlencoded({extended:true}));
app.set("viewengine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
});