var fs = require("fs");
var streamrdr = fs.createReadStream("simple.txt");

var data = "";
streamrdr.setEncoding("utf-8");

streamrdr.on("data",function(chunk){
    console.log("inside data");
    data +=chunk;
});

streamrdr.on("err",function(err){
    console.log("error");
    console.log(err);
});

streamrdr.on("end",function(){
    console.log('inside end ');
    console.log(data);
});