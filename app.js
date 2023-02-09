const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.resolve(__dirname, "views")));

app.listen(port, () => console.log("servidor corriendo"));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,'views', 'index.html'));
})