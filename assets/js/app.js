var cl = console.log;
// var currentDate = new Date();
// var  futureDate = new Date(2022,7,15);

// var diff = futureDate.getTime() - currentDate.getTime();

// 1 sec = 100ms


// var sec = diff / (1000);
// cl(sec);

// var min = diff / (1000*60*60);
// cl(min);
//milli
//days =milli /(1000*60*60*24)

// var hours = diff /(1000*60*60*24);
// cl(sec);

// var days = diff /(1000*60*60*24);
// cl(days);

// var days = diff % (1000*60*60*12); 
// cl(days);

// var hours = diff % (1000*60*60*24);

// var hours = diff % (1000*60*60*24);
// cl(hours);

// var hours = diff % (1000*60*60*12); 
// cl(hours); 

// var days = Math.floor(diff / (1000*60*60*24)); 
// cl(days);
// var days = Math.floor(diff / (1000*60*60*12)); 
// cl(days);

// var hours = diff /(1000*60*60*24);
// cl(hours);

// var days = diff %(1000*60*60*24);
// cl(days);

// var days = diff %(1000*60*60*24);
// var hours = (diff %(1000*60*60*24))/(1000*60*60);
// cl(days);
// cl(hours);

// var days = Math.floor(diff %(1000*60*60*24));
// var hours = Math.floor((diff %(1000*60*60*24))/(1000*60*60));
// var min =Math.floor((diff %(1000*60*60) / (1000*60)));
// var min =(diff %(1000*60*60) / (1000*60));

// var sec = Math.floor((diff %(1000*60)) / 1000);

// cl(days);
// cl(hours);
// cl(min);
// cl(sec);

var countdown = document.getElementById("count");
function countDownTimer(){
	var currentDate = new Date();
var  futureDate = new Date(2022,7,15);

var diff = futureDate.getTime() - currentDate.getTime();

var days = Math.floor(diff /(1000 * 60 * 60 * 24));
var hours = Math.floor((diff %(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var min =Math.floor((diff %(1000 * 60 * 60)) / (1000 * 60));

var sec = Math.floor((diff %(1000 * 60)) / 1000);

countdown.innerHTML = `${days} day. ${time(hours)} hr : ${time(min)} min : ${time(sec)} sec`;
}
setInterval(countDownTimer , 1000);
countDownTimer();

function time(y){
	return y = (y < 10)? "0" +y:y;
}
