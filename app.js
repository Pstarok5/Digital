let Year = document.querySelector(".yr");
let Month = document.querySelector(".mon");
let Day = document.querySelector(".dy");
let  Hour = document.querySelector(".hr");
let  Minutes = document.querySelector(".min");
let Seconds = document.querySelector(".sec");




function clock() {
    let today = new Date();
    yr = today.getFullYear();
    mon = today.getMonth();
    dy = today.getDay();
    hr = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();




    yr = yr < 10 ? 0 + yr : yr;
    mon = mon < 10 ? 0 + mon : mon;
    dy = dy < 10 ? 0 + dy : dy;
    hr = hr < 10 ? 0 + hr : hr;
    min = min < 10 ? 0 + min : min;
    sec = sec < 10 ? 0 + sec : sec;



    Year.innerHTML = yr;
    Month.innerHTML = mon;
    Day.innerHTML = dy;
    Hour.innerHTML = hr;
    Minutes.innerHTML = min;
    Seconds.innerHTML = sec;





    switch (mon) {

        case 00:
        Month.innerHTML = "Jan";    
        break;


        case 01:
        Month.innerHTML = "Feb";    
        break;


        case 02:
        Month.innerHTML = "Mar";    
        break;


        case 03:
        Month.innerHTML = "Apr";    
        break;


        case 04:
        Month.innerHTML = "May";    
        break;


        case 05:
        Month.innerHTML = "Jun";    
        break;


        case 06:
        Month.innerHTML = "Jul";    
        break;


        case 07:
        Month.innerHTML = "Aug";    
        break;


        case 08:
        Month.innerHTML = "Sept";    
        break;


        case 09:
        Month.innerHTML = "Oct";    
        break;


        case 10:
        Month.innerHTML = "Nov";    
        break;


        case 11:
        Month.innerHTML = "Dec";    
        break;
        

        default:
            break;
    }




    
    switch (dy) {

        case 00:
        Day.innerHTML = "Sun";    
        break;


        case 01:
        Day.innerHTML = "Mon";    
        break;


        case 02:
        Day.innerHTML = "Tues";    
        break;


        case 03:
        Day.innerHTML = "Wed";    
        break;


        case 04:
        Day.innerHTML = "Thur";    
        break;


        case 05:
        Day.innerHTML = "Fri";    
        break;


        case 06:
        Day.innerHTML = "Sat";    
        break;



        default:
            break;
    }



}



setInterval(() => {
    clock();
}, 1000);