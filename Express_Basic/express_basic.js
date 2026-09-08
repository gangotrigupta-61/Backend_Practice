const express=require("express");
const app=express();

// app.use((req,res)=>{
//     console.log("Request received!!");
    
//     // res.send("this is a basic response");
//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // });

//     res.send("<h1>FRUITS</h1><ul> <li>Apple</li><li>Orange</li><li>Mango</li></ul>");

// });

app.get("/", (req,res)=>{
    res.send("You contacted root path!!");
});

app.get("/apple",(req,res)=>{
    res.send("You are apple!!");
});

app.get("/mango",(req,res)=>{
    res.send("You are a mango!!");
});


// app.get("/*any",(req,res)=>{
//     res.send("This path does not exist!!");
// });

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    console.log(req.params);
    res.send(`<h1>Welcome to the path of @${username} and roll no. is ${id}</h1>`);
});

app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q}=req.query;
    if(!q){
        res.send("<h1>nothing special </h1>");
    }
    res.send(`Search results for ${q}`);
});

app.post("/",(req,res)=>{
    res.send("THIS IS POST PATH!!")
});

//  post is test by post man or hopscotch or using REST Client extension from the VS Code Extensions marketplace

let port=5000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});



