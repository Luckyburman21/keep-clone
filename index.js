const express=require("express");
const app=express();
const path=require("path");

const staticpath=path.join(__dirname,"/front-end");
app.use(express.static(staticpath));


app.get("/",(req,res)=>{
    res.sendFile(staticpath + "/home.html");
})

app.get("/main",(req,res)=>{
    res.sendFile(staticpath + "/main.html");
})
app.get("/about",(req,res)=>{
    res.sendFile(staticpath + "/about.html");
})
app.listen(3000,()=>{
    console.log("server working");
})