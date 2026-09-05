const express=require("express");
const app=express();

app.use((req,res)=>{
    console.log("Request received!!");
    
    // res.send("this is a basic response");
    // res.send({
    //     name:"apple",
    //     color:"red",
    // });

    res.send("<h1>FRUITS</h1><ul> <li>Apple</li><li>Orange</li><li>Mango</li></ul>");
});


let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});