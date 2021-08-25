const express = require("express")
const app = express()
const path = require('path');
app.set('view engine', 'ejs')
app.use(express.static('src'))
app.listen(3400,()=>{
    console.log("Cổng 3400")
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/modules/index.html'));
})
app.get('/src/js/angular.js', function(req, res) {
    res.sendFile(__dirname + '/src/js/angular.js');
});
app.get('/src/modules/app.js', function(req, res) {
    res.sendFile(__dirname + '/src/modules/app.js');
});