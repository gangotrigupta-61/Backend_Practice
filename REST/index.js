const express=require("express");
const app=express();

const PORT=8080;

app.get("/",(req,res)=>{
    res.send("Server working well!!");
});


app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
});