const express = require("express");
const { get } = require("http");
const app = express();
const path = require("path");

//localhost:3000
app.listen(process.env.PORT || 3000, ()=>{
    console.log("servido encendido");
});

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res) =>{
    const rutaHome = path.join(__dirname, "views/home.html");
    res.sendFile(rutaHome);
});

app.get("/register", (req,res)=> {
    const rutaRegister = path.join(__dirname, "views/register.html");
    res.sendFile(rutaRegister);
});

app.get("/login", (req,res)=> {
    const rutaRegister = path.join(__dirname, "views/login.html");
    res.sendFile(rutaRegister);
});