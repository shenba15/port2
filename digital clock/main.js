var todaydate=document.getElementById("date");
console.log(todaydate);
var todaymonth=document.getElementById("month");
console.log(todaymonth);
var todayyear=document.getElementById("year");
console.log(todayyear);


var seconds=document.getElementById("sec");
var minute=document.getElementById("min");
var hours=document.getElementById("hour");
var aam=document.getElementById("am");
console.log(aam);
var ppm=document.getElementById("pm");
console.log(ppm);


var sun=document.getElementById("sun");
console.log(sun);
var mon=document.getElementById("mon");
console.log(mon);
var tue=document.getElementById("tue");
console.log(tue);
var wed=document.getElementById("wed");
console.log(wed);
var thu=document.getElementById("thu");
console.log(thu);
var fri=document.getElementById("fri");
console.log(fri);
var sat=document.getElementById("sat");
console.log(sat);
var today=new Date();
console.log(today);

//date
var date=today.getDate();
console.log(date);
todaydate.innerHTML=date;

//month
var months=["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC "];
var month=months[today.getMonth()];
console.log(month);
todaymonth.innerHTML=month;

//year
var year=today.getFullYear();
console.log(year);
todayyear.innerHTML=year;

//hour
var hr=today.getHours();
console.log(hr);
hours.innerHTML=hr;

//min
var min=today.getMinutes();
console.log(min);
minute.innerHTML=min;


//ssec
var sec=today.getSeconds();
console.log(sec);
//var a=seconds.innerHTML=sec;

/*var hr=today.getHours();
var min=today.getMinutes();
var sec=today.getSeconds();*/


ms=setInterval(timer,1000);

seconds.innerHTML=sec;
minute.innerHTML=min;
hours.innerHTML=hr;


function timer(){
    if(sec<9){
        sec++;
        seconds.innerHTML="0"+sec;
    }
    else if(sec>=9 && sec<59){
        sec++;
        seconds.innerHTML=sec;
    }
    else{
       clearInterval(seconds);
       sec=0;
       if(min<9){
        min++;
        minute.innerHTML="0"+min;
       

         }
        else if(min>=9 && min<59){
            min++;
            minute.innerHTML=min;
           
    
         }

    else{
       clearInterval(minute);
       min=0;
       if(hr<9){
        
        hr++;
        hours.innerHTML="0"+hr;
        }
        else if(hr>=9 && hr<23){
        
            hr++;
            hours.innerHTML=hr;
            }
        else{
            clearInterval(hours);
            hr=0;
            }
    }
    }
}

//ampm
if(hr<12){
   aam.style.color="red";
}
else{
   ppm.style.color="red"; 
}


//day
var day=today.getDay();
console.log(day);


if(day==0){
    sun.style.color="red";
}
else if(day==1){
    mon.style.color="red";
}
else if(day==2){
    tue.style.color="red";
}
else if(day==3){
    wed.style.color="red";
}
else if(day==4){
    thu.style.color="red";
}
else if(day==5){
    fri.style.color="red";
}
else if(day==6){
    sat.style.color="red";
}