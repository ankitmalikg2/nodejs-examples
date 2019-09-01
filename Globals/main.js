console.log(__filename);
console.log(__dirname);

function printHello(){
    console.log("hello hero");
}

function printwelcome(){
    console.log("welcome hero");
}

setTimeout(printHello,7000);
// clearTimeout(5500);

setInterval(printwelcome,1000);