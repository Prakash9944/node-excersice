setInterval(function() {
    console.log('call every 0.5 second')
}, 500)

function parseName (pharse, who){
    console.log(pharse + ', '+who)
}
setInterval(parseName, 1000, "Raj", "PrakashS");

