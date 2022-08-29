let express = require("express");
let path = require("path");

let app = express();

app.use(express.static(path.join(__dirname,"public")));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/register", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get("/login", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});