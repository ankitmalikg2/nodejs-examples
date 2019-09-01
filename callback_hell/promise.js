var fs = require("fs");
var Bluebird = require("bluebird");
Bluebird.promisifyAll(fs);
// fs.readFileAsync("simple.txt","utf-8").then(function(result){
//     console.log(result);
// }).catch(function(err){
//     console.log(err.message);
// });

var myFile = 'simple.txt';
fs.readFileAsync(myFile, 'utf8').then(function(txt) {
    txt = txt + '\nAppended something!';
    console.log(txt);
}).then(function() {
	console.log('Appended text!');
}).then(function(){
    console.log("work here on some other fucntion");
}).catch(function(err) {
	console.log(err);
});