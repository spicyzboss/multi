let timeState;
let days =  1;
let min = [5, 0];
let hour = [0, 8];
let diff = 0;
var root = document.querySelector(':root');
let nowLight = (48-((hour[0]*10+hour[1])+diff)+8);
let eventTime = Math.floor((Math.random()*(21-12))+12);
console.log(eventTime);
var looktime = ()=>{
    min[1]++;
    if(min[1] >=  10){
        min[1] = 0;
        min[0]++;
        if(min[0] >= 6){
            min[0] = 0;
            diff += 0.1;
            hour[1]++;
            nowLight = (48-((hour[0]*10+hour[1])+diff)+8);
            if(nowLight >= 35){
                root.style.setProperty('--light', (48-((hour[0]*10+hour[1])+diff)+8)+`%`);
            }
            if(hour[1] >= 10){
                hour[1] = 0;
                hour[0]++;
            }
        }
    }
    if((hour[0]*10+hour[1]) == eventTime && per_day === `Ready`){
        clearInterval(timeState);
        clearInterval(coinState);
        eventCall();
    }

    if(hour[0] == 2 && hour[1] == 2){
        if(days < 3){
            min[1] = 0;
            min[0] = 0;
            hour[1] = 8;
            hour[0] = 0;
            days++;
            diff = 0;
            root.style.setProperty('--light', (48-((hour[0]*10+hour[1])+diff)+8)+`%`);
            eventTime = Math.floor((Math.random()*(21-12))+12);
            per_day = `Ready`
            console.log(eventTime);
        }
        else{
            clearInterval(timeState);
            EndGame()
        }
    }
    showTime.innerHTML = `${hour[0]}${hour[1]}:${min[0]}${min[1]}`;
    showDay.innerHTML = days;

};

