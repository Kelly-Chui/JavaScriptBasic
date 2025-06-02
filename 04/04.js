let id = setInterval(function() {
    console.log("1초");
}, 1000);
setTimeout(function() { 
    clearInterval(id); 
}, 10000);