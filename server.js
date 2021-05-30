const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/room",(req,res)=>{
    res.render("gameRoom");
});

app.listen(8080, ()=>{
    console.log("serveur en ecoute sur le port 8080");
});