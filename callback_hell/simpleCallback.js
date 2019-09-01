
function functionOne(x) { console.log(x); }

function functionTwo(var1, callback) {
    console.log("this is in function 2");
    callback("testing");	
}

functionTwo("5",function(var_test){
    console.log("this is testing callback with params :"+var_test);
});