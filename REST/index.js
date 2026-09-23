const express=require("express");
const app=express();

const { v4: uuidv4 } = require('uuid');
uuidv4();

const PORT=8080;

const path= require("path");
app.use(express.urlencoded({extended:true}));
app.set("viewengine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
{
    id:"1a",
    username:"Gangotri",
    content:"I love coding",
},
{
    id:"2b",
    username:"Shradha Khapra",
    content:"I am Teacher",
},
{
    id:"3c",
    username:"Shi",
    content:"I am doctor",
}
];


app.get("/",(req,res)=>{
    res.send("Server working well!!");
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts:posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
  console.log(req.body);
  let {username, content}=req.body;
    let id=uuidv4();
  posts.push({id,username,content});
  res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post= posts.find((p)=> id==p.id);
    res.render("show.ejs",{post});
});

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
});


