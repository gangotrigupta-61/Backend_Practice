const express=require("express");
const app=express();
let port=3000;

app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello I am hello path and HELLO EVERYONE!!");
});

// Passing data to ejs

app.get("/ludo",(req,res)=>{
    let diceval=  Math.floor(Math.random()*6)+1;;
    res.render("rolldice.ejs",{diceval:diceval});
});

// app.get("/ludo",(req,res)=>{
//     res.render("rolldice.ejs");
// })

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});

// serving static file
app.use(express.static("public/css"));
app.use(express.static("public/js"));


app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data= instaData[username];
    if(data){
        res.render("insta.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
});







