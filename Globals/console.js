console.info("console data started ");

console.time("data");
setTimeout(function(){
    console.log("this is log after 1500 ms");
},1500);
console.timeEnd("data");

console.warn("this is warning by console");