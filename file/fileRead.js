var fs = require("fs");

fs.readFile("simple2.txt",function(err,data){
    console.log("this is callback function");
    if (err) return console.error(err);
    console.log(data.toString());
});


console.log("this is sync function");
var data = fs.readFileSync('simple.txt');
console.log(data.toString());
