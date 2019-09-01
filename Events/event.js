var events = require("events");
var eventEmitter = new events.EventEmitter();

function listener1(){
    console.log("event listener 1");
}

function listener2(){
    console.log("event listener 2");
}

function listener3(){
    console.log("event listener 3");
}

eventEmitter.on("connection",listener1);
eventEmitter.on("connection",listener3);
eventEmitter.on("database",listener2);

eventEmitter.removeListener("connection",listener1);
eventEmitter.emit("connection");
eventEmitter.emit("database");
