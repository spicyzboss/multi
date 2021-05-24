let per_day = `Ready`;
let AirPolution = `
<p class="quiz">   Your company has detected that there is damage to production that could cause air pollution.
 But there is no impact on product manufacturing How do you fix it?</p>
 <div data-situation="Polution" class="ImgEvent"></div>
 <div class="allChoice">   
 <button class="choice" onclick="Answer(1, AirPolution)">Closed for renovations</button>
    <button class="choice" onclick="Answer(2, AirPolution)">Use it anyway</button>
    <button class="choice" onclick="Answer(3, AirPolution)">Repair along with the production of the product</button>
</div>
`
let ProductProblem = `<p class="quiz">  The product you have produced is faulty. In the material side,
 which is a non-standard material And are going to be sent out to sell, what do you do?</p>
 <div data-situation="Product" class="ImgEvent"></div>
 <div class="allChoice">   
 <button class="choice" onclick="Answer(1, ProductProblem)">Reclaim</button>
    <button class="choice" onclick="Answer(2, ProductProblem)">Send it anyway</button>
    <button class="choice" onclick="Answer(3, ProductProblem)">Explain the problem & give them discount</button>
</div>
`
let EnvelonmentConcern = `<p class="quiz">  Right now, there is a lot of plastic on the beach right next to the city where your company lives, what will you do?</p>
 <div data-situation="Envelonment" class="ImgEvent"></div>
 <div class="allChoice">   
 <button class="choice" onclick="Answer(1, EnvelonmentConcern)">Reduce the production of products over a period of time</button>
    <button class="choice" onclick="Answer(2, EnvelonmentConcern)">Establish an organization for this matter</button>
    <button class="choice" onclick="Answer(3, EnvelonmentConcern)">To clarify and give statements to the relevant departments</button>
</div>

`
var all_event = [AirPolution, ProductProblem, EnvelonmentConcern];

function eventCall(){
    if(per_day === `Ready`){
        per_day = `AlreadyUse`
        let get_event = Math.floor(Math.random()*all_event.length);
        EventShowUp.dataset.state = `on`;
        EventShowUp.innerHTML = all_event[get_event];
    }
}

function Answer(chose, question){
    all_event.splice(all_event.indexOf(question), 1);
    if(question === AirPolution)
        result_Polution(chose);
    else if(question === ProductProblem)
        result_Product(chose);
    else
        result_Env(chose);

}

function result_Polution(chose){
    let reply = [`<p class="quiz">You have closed the companty so you product will not be produce in a while(5s); 
    </p>
    `, `<p class="quiz">Your health is deteriorating from working in polluted areas. You have to heal for a while
    </p>
    `, `<p class="quiz">The accident happened while you and the employee were working. Your company must be closed for repair for a while(10s)
    </p>
    `, `<p class="quiz">nothing happen.Good luck.</p>
    ` 
];
    if(chose != 3){
        EventShowUp.innerHTML = reply[chose-1]+`<div data-situation="Polution" class="ImgEvent"></div>`;
    }
    if(chose === 1){
        produce_state = 0;
        setTimeout(()=>{
            produce_state = 1;
        }, 6000);
        my_curent_Fame+= 50;
    }
    else if(chose === 2){
        produce_state = 0;
        setTimeout(()=>{
            produce_state = 1;
        }, 8000);
    }
    else if(chose === 3){
        let chance = Math.floor(Math.random()*2);
        if(chance === 1){
            EventShowUp.innerHTML =  reply[2]+`<div data-situation="Polution" class="ImgEvent"></div>`;
        let accident = Math.floor(Math.random()*3);
        lands[accident].dataset.building = `none`
        lands[accident].innerHTML = `<g transform="translate(-130 -20) skewY(-26.5) skewX(45)">
        <rect width="45" height="62" x="30" y="140" stroke-width="2" fill="#d4c342" />
    </g>`;

        }
        else{
            EventShowUp.innerHTML =  reply[3]+`<div data-situation="Polution" class="ImgEvent"></div>`;
        }
        
    }
        EventShowUp.dataset.state = `off`;
        console.log(`+++`+EventShowUp.dataset.state)


}

function result_Product(chose){
    let reply = [`<p class="quiz">Lose 1000 coins, but will receive praise from the townspeople with a 5% increase in reputation. 
    </p>
    `, `<p class="quiz">Your costumer give you the bad comment, So you received a bad response from the townspeople with 7.5%
    </p>
    `, `<p class="quiz">Wasted  500 coins, but the response of the townspeople wasn't too bad, get bad reputation 5%
    </p>
    `];
    EventShowUp.innerHTML = reply[chose-1]+`<div data-situation="Product" class="ImgEvent"></div>`;
    if(chose === 1){
        my_curent_Coin -= 1000
        my_curent_Fame += (my_curent_Fame-bad_fame)*5/100;
    }
    else if(chose === 2){
        my_curent_Fame += bad_fame*7.5/100;
        bad_fame += bad_fame*7.5/100
    }
    else if(chose === 3){
        my_curent_Coin -= 500
        my_curent_Fame += bad_fame*5/100;
        bad_fame += bad_fame*7.5/100
    }
    setTimeout(()=>{
        EventShowUp.dataset.state = `off`;
    }, 1000);

}
function result_Env(chose){
    let reply = [`<p class="quiz">Coins do not increase over a period of time but received a positive response from the townspeople with a 6.5% increase in reputation</p>
    `, `<p class="quiz">Wasted 500 coin, but the townspeople's response was great, with an 8% increase in reputation</p>
    `, `<p class="quiz">Wasted $ 450, but the response of the townspeople was not very good, with a 5.5% drop in reputation</p>
    `];
    EventShowUp.innerHTML = reply[chose-1]+`<div data-situation="Envelonment" class="ImgEvent"></div>`;
    if(chose === 1){
        produce_state = 0;
        setTimeout(()=>{
            produce_state = 1;
        }, 6000);
        my_curent_Fame += (my_curent_Fame-bad_fame)*6/100;
    }
    else if(chose === 2){
        my_curent_Coin -= 500
        my_curent_Fame += (my_curent_Fame-bad_fame)*8/100;

    }
    else if(chose === 3){
        my_curent_Coin -= 450
        my_curent_Fame += bad_fame*5.5/100;
        bad_fame += bad_fame*5.5/100
    }
    setTimeout(()=>{
        EventShowUp.dataset.state = `off`;
    }, 1000);

}
function EndGame(){
    clearInterval(per_Sec);
    Ending.classList.add("visible");
    Ending.style.top = 0;
    Ending.style.left = 0;
    let tableEnd = `<table class="report"><tr><td class="tableHead">Your Responsibility</td><tr>
    <tr><td>Produced</td><td id="Total_produced" class="right-side"></td></tr>
    <tr><td>Returned</td><td id="Total_returned" class="right-side"></td></tr>
    <tr><td>Recycle</td><td id="Total_recycle" class="right-side"></td></tr>
    <div class="endFameBar" style="height: 2.5%;"><div class="bad_fame_percent" id="redEnd"></div></div>`

    let allWin = document.querySelectorAll(".WindowCanvas");
    allWin.forEach((el)=>{
        el.dataset.state= "off";
    });

    if(good_fame_percent >= 50 && good_fame_percent <= 60){
        EndText.innerHTML = `
        <div><h1 class="EndHeader">Balance is everythings</h1>
        <p class="Ending-text">Congratulations on your action,
             make your company go smoothly without any loss. Plus you help the environment Not to be destroyed much</p></div>
             `
    }
    else if(good_fame_percent >= 0 && good_fame_percent < 50){
        EndText.innerHTML = `
        <div><h1 class="EndHeader"> You're good at business</h1>
        <p class="Ending-text">Congratulations from your actions making you rich.
             Have a good business with additional income But you destroy the surrounding environment Causing environmental pollution Living things die</p></div>
             
             `;

    }
    else{
        EndText.innerHTML = `
        <div><h1 class="EndHeader">For the world!!, good bye my money </h1>
        <p class="Ending-text">Congratulations on your actions that make the environment better.
             You have done what the operator should do. But you lost some amount</p></div>
             <a href="https://plastic-epr.netlify.app/" target="_blank"><button class="ToLanding">
             Read Campaign
        </button>
        </a>
             `;
    }
    EndText.innerHTML += tableEnd
    Total_produced.innerHTML = produced;
    Total_returned.innerHTML = Math.round(all_returned);
    Total_recycle.innerHTML = RecycleUse;
    redEnd.style.width = bad_fame_percent;
}

