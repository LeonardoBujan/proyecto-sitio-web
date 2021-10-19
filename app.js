const express = require("express");
const { get } = require("http");
const app = express();
const path = require("path");

//localhost:3000
app.listen(3000, ()=>{
    console.log("servido encendido");
});

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res) =>{
    const rutaHome = path.join(__dirname, "views/home.html");
    res.sendFile(rutaHome);
});