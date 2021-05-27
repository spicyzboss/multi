let per_day = `Ready`;
let AirPolution = `
<p class="quiz">   บริษัทของคุณ ตรวจพบว่ามีความเสียหายในส่วนของการผลิตที่อาจจะก่อให้เกิดมลพิษทางอากาศ แต่ไม่มีผลกระทบในด้านการผลิตสินค้า คุณจะแก้ไขอย่างไร</p>
 <div data-situation="Polution" class="ImgEvent"></div>
 <div class="allChoice">   
 <button class="choice" onclick="Answer(1, AirPolution)">ปิดปรับปรุง </button>
    <button class="choice" onclick="Answer(2, AirPolution)">ใช้ไปก่อน</button>
    <button class="choice" onclick="Answer(3, AirPolution)">ซ่อมแซมไปพร้อมกับทำการผลิตสินค้า</button>
</div>
`
let ProductProblem = `<p class="quiz">  สินค้าที่คุณผลิตไปนั้นมีความผิดพลาด ในด้านวัสดุซึ่งเป็นวัสดุไม่ได้มาตรฐาน และกำลังจะส่งออกไปขายคุณจะทำอย่างไร</p>
 <div data-situation="Product" class="ImgEvent"></div>
 <div class="allChoice">   
 <button class="choice" onclick="Answer(1, ProductProblem)">เรียกคืนสินค้าทั้งหมดแล้วกำจัดอย่างถูกวิธี</button>
    <button class="choice" onclick="Answer(2, ProductProblem)">ส่งขายตามปรกติ</button>
    <button class="choice" onclick="Answer(3, ProductProblem)">ชี้แจง และทำการขายในราคาถูก</button>
</div>
`
let EnvelonmentConcern = `<p class="quiz">  ตอนนี้ มีพลาสติกในทะเลที่ติดกับเมืองที่บริษัทคุณอาศัยอยู่ จำนวนมาก คุณจะทำสิ่งใด</p>
 <div data-situation="Envelonment" class="ImgEvent"></div>
 <div class="allChoice">   
 <button class="choice" onclick="Answer(1, EnvelonmentConcern)">ลดการผลิตสินค้าในช่วงเวลาหนึ่ง</button>
    <button class="choice" onclick="Answer(2, EnvelonmentConcern)">ทำการจัดตั้งองค์กรสำหรับเรื่องนี้</button>
    <button class="choice" onclick="Answer(3, EnvelonmentConcern)">คอยชี้แจงและ ให้งบแก่หน่วยงานที่เกี่ยวข้อง</button>
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
    let reply = [`<p class="quiz">คุณหยุดกระบวนการผลิตของคุณทั้งหมดเป็นระยะเวลาหนึ่ง(4 วินาที)เพื่อหลีกเลี่ยงปัญหาสุขภาพ ของคุณและลูกจ้างพร้อมทำการแก้ไขปัญหา 
    คุณต้องจ่ายเงินค่า ซ่อมบำรุง 500 <img class="coin" src="pic/coin.png"/> และ ได้รับคำชื่นชมจากลูกน้องและสื่อ 200 <img class="coin" src="pic/fame.png"/> ; 
    </p>
    `, `<p class="quiz">คุณและลูกน้องของคุณป่วยทำให้กระบวนการการผลิตถูกหยุดเป็นระยะเวลาหนึ่ง(6 วินาที) และต้องจ่ายค่ารักษาและ ค่าซ่อมแซม 1500 <img class="coin" src="pic/coin.png"/>
    และได้เสียตอบรับไม่ดี 250 <img class="coin" src="pic/fame.png"/>
    </p>
    `, `<p class="quiz">บริษัทของคุณเกิดอุบัติเหตุขณะซ่อมบำรุง คุณเสีบสาขาย่อย 1 สาขา
    </p>
    `, `<p class="quiz">คุณสามารถผ่านเหตุการนี้ไปได้ด้วยดี</p>
    ` 
    ];
    if(chose != 3){
        EventShowUp.innerHTML = reply[chose-1]+`<div data-situation="Polution" class="ImgEvent"></div>`;
    }
    if(chose === 1){
        produce_state = 0;
        setTimeout(()=>{
            produce_state = 1;
        }, 4000);
        my_curent_Fame+= 50;
        my_curent_Coin -= 500;
    }
    else if(chose === 2){
        produce_state = 0;
        my_curent_Coin -= 1500;
        setTimeout(()=>{
            produce_state = 1;
        }, 6000);
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
        setTimeout(()=>{
            EventShowUp.dataset.state = `off`;
        }, 1000);


}

function result_Product(chose){
    let reply = [`<p class="quiz">คุณขอสินค้าคืนและจ่ายค่าเสียหายให้กับลูกค้าของคุณ 750 <img class="coin" src="pic/coin.png"/> ลูกค้าชื่นชมในความรับผิดชอบของคุณและบอกต่อคุณได้รับ 5% <img class="coin" src="pic/fame.png"/>
    </p>
    `, `<p class="quiz">ลุกค้าของคุณเกิดความไม่พอใจในการกระทำของคุณและนำไปบอกต่อ คุณได้รับคำติจากสังคม 7.5% <img class="coin" src="pic/fame.png"/>
    </p>
    `, `<p class="quiz">คุณอธิบายสาเหตุของปัญหา และจ่ายค่าเสียหายให้ลูกค้า 500 <img class="coin" src="pic/coin.png"/> ลูกค้าเข้าใจปัญหาของและไม่ทำลายชื่อเสียงของคุณ
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
    }
    setTimeout(()=>{
        EventShowUp.dataset.state = `off`;
        }, 1000);

}
function result_Env(chose){
    let reply = [`<p class="quiz">คุณหยุดพักการผลิตเป็นช่วงเวลาหนึ่ง(6 วินาที) เพื่อลดปริมาณขยะที่คุณผลิต</p>
    `, `<p class="quiz">คุณจัดตั้งองค์กรเพื่อจัดการกับปัญหา จ่ายเงินลงทุน 750 <img class="coin" src="pic/coin.png"/> และได้ผลตอบรับที่ดี เป็น 8% <img class="coin" src="pic/fame.png"/></p>
    `, `<p class="quiz">คุณชี้แจงปัญหาให้กับหน่วยงานที่เกี่ยวข้อง และออกเงินช่วยเหลือ 300 <img class="coin" src="pic/coin.png"/> ผลตอบรับไม่ได้แย่นัก </p>
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
        my_curent_Coin -= 750
        my_curent_Fame += (my_curent_Fame-bad_fame)*8/100;

    }
    else if(chose === 3){
        my_curent_Coin -= 300

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
    let tableEnd = `<table class="report"><tr><td class="tableHead">ความรับผิดชอบของคุณเป็นอย่างไร</td><tr>
    <tr><td>ผลิต</td><td id="Total_produced" class="right-side"></td></tr>
    <tr><td>เก็บคืน</td><td id="Total_returned" class="right-side"></td></tr>
    <tr><td>รีไซเคิล</td><td id="Total_recycle" class="right-side"></td></tr>
    <div class="endFameBar" style="height: 2.5%;"><div class="bad_fame_percent" id="redEnd"></div></div>
    <a href="landing.html" target="_self"><button class="ButtPush">
    Read Campaign
</button>
</a>`

    let allWin = document.querySelectorAll(".WindowCanvas");
    allWin.forEach((el)=>{
        el.dataset.state= "off";
    });
    console.log(`:::`+good_fame_percent);

    if(good_fame_percent >= 40 && good_fame_percent <= 60){
        EndText.innerHTML = `
        <div><h1 class="EndHeader">ยินดีด้วย</h1>
        <p class="Ending-text">จากการกระทำของคุณทำให้บริษัทของคุณไปต่อได้อย่างราบรื่นโดยบริษัทไม่ได้ขาดทุนแถมคุณยังช่วยสิ่งแวดล้อม ไม่ให้ถูกทำลายไปมาก</p></div>
             
             `;
    }
    else if(good_fame_percent >= 0 && good_fame_percent < 50){
        EndText.innerHTML = `
        <div><h1 class="EndHeader">ยินดีด้วย</h1>
        <p class="Ending-text">จากการกระทำของคุณทำให้คุณร่ำรวย มีกิจการที่ดีมีรายได้เพิ่ม แต่คุณทำลายสภาพแวดล้อมโดยรอบ ทำให้เกิดมลพิษทางสิ่งแวดล้อม สิ่งมีชีวิตล้มตาย</p></div>
             
             `;

    }
    else{
        EndText.innerHTML = `
        <div><h1 class="EndHeader">ยินดีด้วย</h1>
        <p class="Ending-text">จากการกระทำของคุณทำให้บริษัทของคุณไปต่อได้อย่างราบรื่นโดยบริษัทไม่ได้ขาดทุนแถมคุณยังช่วยสิ่งแวดล้อม ไม่ให้ถูกทำลายไปมาก</p></div>

             `;
    }
    EndText.innerHTML += tableEnd
    Total_produced.innerHTML = produced;
    Total_returned.innerHTML = Math.round(all_returned);
    Total_recycle.innerHTML = RecycleUse;
    if(bad_fame_percent > 100){
        redEnd.style.width = `100%`;

    }
    else{
        redEnd.style.width = bad_fame_percent+`%`;
    }
}
