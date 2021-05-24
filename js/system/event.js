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
    // let get_event = Math.floor(Math.random()*all_event.length);
    // EventShowUp.dataset.state = `on`;
    // EventShowUp.innerHTML = all_event[get_event];
    EventShowUp.dataset.state = `on`;
    EventShowUp.innerHTML = AirPolution;
}

function Answer(chose, question){
    all_event.splice(question, 1);
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
    `, `<p class="quiz">nothing happen.<br>Good luck.</p>
    ` 
];
    if(chose != 3){
        EventShowUp.innerHTML = reply[chose]+`<div data-situation="Product" class="ImgEvent"></div>`;
    }
    if(chose === 1){
        produce_state = 0;
        setTimeout(()=>{
            produce_state = 1;
        }, 10000);
        my_curent_Fame+= 50;
    }
    else if(chose === 2){
        produce_state = 0;
        setTimeout(()=>{
            produce_state = 1;
        }, 20000);
    }
    else if(chose === 3){
        let chance = Math.floor(Math.random()*2);
        if(chance === 1){
            EventShowUp.innerHTML =  reply[2]+`<div data-situation="Product" class="ImgEvent"></div>`;
        produce_state = 0;
        setTimeout(()=>{
            produce_state = 1;
        }, 15000);
        }
        else{
            EventShowUp.innerHTML =  reply[3]+`<div data-situation="Product" class="ImgEvent"></div>`;
        }
        
    }
    setTimeout(()=>{
        EventShowUp.dataset.state = `off`;
    }, 3000);

}