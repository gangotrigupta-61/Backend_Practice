const express=require("express");
const app=express();

const PORT=8080;

const path= require("path");
const { v4: uuidv4 } = require('uuid');
const methodoverride = require("method-override");
app.use(methodoverride("_method"));


app.use(express.urlencoded({extended:true}));
app.set("viewengine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
{
    id:uuidv4(),
    username:"Gangotri",
    content:"I am doing coding",
},
{
    id:uuidv4(),
    username:"Shradha Khapra",
    content:"I am Teacher",
},
{
    id:uuidv4(),
    username:"Gangotri",
    content:"I am doing paid Internship!!",
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
    let post= posts.find((p)=> id===p.id);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent =req.body.content;
    let post = posts.find((p)=> id===p.id);
    post.content = newcontent;
    console.log(id);
    console.log(newcontent);
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id}= req.params;
    posts=posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
});

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
});


