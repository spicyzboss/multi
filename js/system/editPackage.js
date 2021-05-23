Edit.innerHTML = `<div class="modelCollect">
            <div class="model" type="top"><svg id="modelTop" viewBox="0 0 100 100"></svg></div>
            <div class="model" type="cen"><svg id="modelCen" viewBox="0 0 100 100"></svg></div>
            <div class="model" type="bot"><svg  id="modelBot" viewBox="0 0 100 100"></svg></div>
            </div>
            <div class="statusModel">
                <div class="status" type="top"><span class="titleM">Bottle cap:</span><span id="nameMTop" class="titleM larger">Green cap</span><br>Status:<img class="coin" src="pic/coin.png"/>+<span id="c_top">3</span>/s <img class="coin" src="pic/fame.png"/> +<span id="f_top">1</span>/s</div>
                <div class="status" type="cen"><span class="titleM">Bottle style:</span><span id="nameMCen" class="titleM larger">Colorful bottle</span><br>Status:<img class="coin" src="pic/coin.png"/>+<span id="c_cen">3</span>/s <img class="coin" src="pic/fame.png"/> +<span id="f_cen">1</span>/s</div>
                <div class="status" type="bot"><span class="titleM">Bottle label:</span><span id="nameMBot" class="titleM larger">Ful scale Label</span><br>Status:<img class="coin" src="pic/coin.png"/>+<span id="c_bot">3</span>/s <img class="coin" src="pic/fame.png"/> +<span id="f_bot">1</span>/s</div>
            </div>
            <button class="preButt head" onclick="navi('pre', allModel[0], curentTop)"><div class="arrowPre"></div></button>
            <button class="nextButt head" onclick="navi('next', allModel[0], curentTop)"><div class="arrowNext"></div></button>
            <button class="preButt cen" onclick="navi('pre', allModel[1], curentCen)"><div class="arrowPre"></div></button>
            <button class="nextButt cen" onclick="navi('next', allModel[1], curentCen)"><div class="arrowNext"></div></button>
            <button class="preButt bot" onclick="navi('pre', allModel[2], curentBot)"><div class="arrowPre"></div></button>
            <button class="nextButt bot" onclick="navi('next', allModel[2], curentBot)"><div class="arrowNext"></div></button>
            <div id="CloseEd"></div>
            <div class="status_package">Curent status: <img class="coin" src="pic/coin.png"/> <span id="curent_coin_package_status">9</span>/s  <img class="coin" src="pic/fame.png"/> <span id="curent_fame_package_status">3</span>/s</div>
            `;
let curentTop = 0;
let curentCen = 0;
let curentBot = 0;
var allModel = [[`<g transform="scale(2) translate(15 5)">
<rect x="4.5" y="5" rx="1" ry="1" width="12" height="5"
fill="#009F09" />
<ellipse cx="10.5" cy="10" rx="6" ry="3.5"
fill="#009F09" />
<ellipse cx="10.5" cy="5" rx="6" ry="3.5"
fill="#009F09" style="stroke-width:0.5;stroke:#0002" />
</g>`, `<g transform="scale(2) translate(15 5)"> 
<rect x="4.5" y="5" rx="1" ry="1" width="12" height="5"
fill="#ddd7" />
<ellipse cx="10.5" cy="10" rx="6" ry="3.5"
fill="#ddd7" />
<ellipse cx="10.5" cy="5" rx="6" ry="3.5"
fill="#fff9" style="stroke-width:0.5;stroke:#0001"/>
</g>`], [`<g transform="scale(1.25) translate(32 -5)"> 
<rect x="5.5" y="5" rx="1" ry="1" width="5" height="7.5"
fill="#555" />
 <rect x="0.5" y="10" rx="10" ry="10" width="15" height="25"
fill="#555" />
<rect x="0.5" y="25" rx="1.5" ry="1.5" width="15" height="20"
fill="#555" />    
<rect x="5" y="5" rx="1" ry="1" width="6" height="4"
fill="#555" />

<rect x="5" y="5" rx="1" ry="1" width="5" height="7.5"
fill="#2275FF" />
 <rect x="0" y="10" rx="10" ry="10" width="15" height="25"
fill="#2275FF" />
<rect x="0" y="25" rx="1.5" ry="1.5" width="15" height="20"
fill="#2275FF" />
<rect x="4.5" y="5" rx="1" ry="1" width="6" height="3.5"
fill="#D8E90D" />
</g>`, `<g transform="scale(1.25) translate(32 -5)">
<rect x="0.5" y="15" rx="3" ry="4" width="15" height="15"
fill="#555" />
  <rect x="5.5" y="5" rx="1" ry="1" width="5" height="7.5"
fill="#555" />
   <rect x="0.5" y="10" rx="10" ry="10" width="15" height="15"
fill="#555" />
  <rect x="0.5" y="35" rx="1.5" ry="1.5" width="15" height="10"
fill="#555" />
<rect x="1.5" y="25" rx="4" ry="4" width="13" height="15"
fill="#555" />
<rect x="5" y="5.15" rx="1" ry="1" width="6" height="3.4"
fill="#555" />

  <rect x="0" y="15" rx="3" ry="4" width="15" height="15"
fill="#ddd" />
  <rect x="5" y="5" rx="1" ry="1" width="5" height="7.5"
fill="#ddd" />
   <rect x="0" y="10" rx="10" ry="10" width="15" height="15"
fill="#ddd" />
  <rect x="0" y="35" rx="1.5" ry="1.5" width="15" height="10"
fill="#ddd" />
<rect x="1" y="25" rx="4" ry="4" width="13" height="15"
fill="#ddd" />
<rect x="4.5" y="5" rx="1" ry="1" width="6" height="3.5"
fill="lightblue" />
  </g>`, `<g transform="scale(1.25) translate(32 -5)">
  <rect x="5" y="5" width="5" height="5"
  fill="#eee6" />
   <rect x="0" y="10" rx="3" ry="5" width="15" height="15"
  fill="#eee6" />
  <rect x="1" y="25" rx="1" ry="2.5" width="13" height="3"
  fill="#eee6" />
  <rect x="1" y="28" rx="1" ry="2.5" width="13" height="3"
  fill="#eee6" />
  <rect x="1" y="31" rx="1" ry="2.5" width="13" height="3"
  fill="#eee6" />
  <rect x="0" y="34" rx="2" ry="3.5" width="15" height="11"
  fill="#eee6" />
  <rect x="4.5" y="5" rx="1" ry="1" width="6" height="4"
  fill="#009F09" />
  </g>`], [`<g transform="scale(1.5) translate(25 -8)">     
        
  <rect x="5" y="5" rx="1" ry="1" width="5" height="7.5"
fill="hsla(240, 10%, 0%, 0)" />
   <rect x="0" y="10" rx="10" ry="10" width="15" height="25"
fill="hsla(240, 10%, 0%, 0)" />
  <rect x="0" y="25" rx="1.5" ry="1.5" width="15" height="20"
fill="hsla(240, 10%, 0%, 0)" />
<rect x="4.5" y="5" rx="1" ry="1" width="6" height="3.5"
fill="hsla(240, 10%, 0%, 0)" />
    
<rect x="5" y="9.5" width="5" height="7.5"
fill="#D7D7D7" />
   <rect x="0" y="10" rx="10" ry="10" width="15" height="25"
fill="#D7D7D7" />
  <rect x="0" y="25" rx="1.5" ry="1.5" width="15" height="20"
fill="#D7D7D7" />
  </g>`, `<g transform="scale(1.7) translate(22 -5)">  
  <rect x="5" y="5" rx="1" ry="1" width="5" height="7.5"
fill="hsla(240, 10%, 0%, 0)" />
   <rect x="0" y="10" rx="10" ry="10" width="15" height="25"
fill="hsla(240, 10%, 0%, 0)" />
  <rect x="0" y="25" rx="1.5" ry="1.5" width="15" height="20"
fill="hsla(240, 10%, 0%, 0)" />
<rect x="4.5" y="5" rx="1" ry="1" width="6" height="3.5"
fill="hsla(240, 10%, 0%, 0)" />
<rect x="0" y="19" width="15" height="7.25"
fill="#D7D7D7" style="stroke-width:0.5;stroke:rgb(0,0,0)"/>
  </g>`, `<g transform="scale(1.7) translate(22 -5)">
  <rect x="5" y="5" rx="1" ry="1" width="5" height="7.5"
fill="hsla(240, 10%, 0%, 0)" />
   <rect x="0" y="10" rx="10" ry="10" width="15" height="25"
fill="hsla(240, 10%, 0%, 0)" />
  <rect x="0" y="25" rx="1.5" ry="1.5" width="15" height="20"
fill="hsla(240, 10%, 0%, 0)" />
<rect x="4.5" y="5" rx="1" ry="1" width="6" height="3.5"
fill="hsla(240, 10%, 0%, 0)" />
<rect x="0" y="19" width="15" height="7.25"
fill="none" style="stroke-width:0.5;stroke:rgb(255,255,255)"/>
  </g>`]];

var cnf_stat = [[3, 2, 1], [1, 0, 0.75]];

console.log(allModel[0]);

modelTop.innerHTML = allModel[0][0];
modelCen.innerHTML = allModel[1][0];
modelBot.innerHTML = allModel[2][0];
let cash_per_sec_package = 9;
let cash_at = [3, 3, 3];
let fame_per_sec_package = 3;
let fame_at = [1, 1, 1];
let nameModel = [[`Green Cap`, `Colorless Cap`], [`Colorful Bottle`, `Thick Bottle`, `Thin Bottle`], [`Full Scale Label`, `Middle wrap`, `Embed`]];
let bad_fame_per_sec_package=3;

function navi(direct, type, num){
    if(direct === 'next')
        num++;
    else
        num--;
    if(num < 0)
        num = type.length-1;
    else if(num >= type.length)
        num = 0;
    if(type === allModel[0]){
        curentTop = num;
        modelTop.innerHTML = type[num];
        cash_at[0] = cnf_stat[0][num]
        fame_at[0] = cnf_stat[1][num]
        c_top.innerHTML = cash_at[0];
        f_top.innerHTML = fame_at[0];
        nameMTop.innerHTML = nameModel[0][num];
    }
    else if(type === allModel[1]){
        curentCen = num;
        modelCen.innerHTML = type[num];
        cash_at[1] = cnf_stat[0][num]
        fame_at[1] = cnf_stat[1][num]
        c_cen.innerHTML = cash_at[1];
        f_cen.innerHTML = fame_at[1];
        nameMCen.innerHTML = nameModel[1][num];
    }
    else{
        curentBot = num;
        modelBot.innerHTML = type[num];
        cash_at[2] = cnf_stat[0][num]
        fame_at[2] = cnf_stat[1][num]
        c_bot.innerHTML = cash_at[2];
        f_bot.innerHTML = fame_at[2];
        nameMBot.innerHTML = nameModel[2][num];
    }
    cash_per_sec_package = cash_at.reduce((a, b)=>a+b, 0);
    fame_per_sec_package = Math.round(fame_at.reduce((a, b)=>a+b, 0)*100)/100;
    bad_fame_per_sec_package = 1*([curentTop, curentCen, curentBot].filter(a => a == 0)).length;
    console.log(`bad: `+bad_fame_per_sec_package)
    curent_coin_package_status.innerHTML = cash_per_sec_package; 
    curent_fame_package_status.innerHTML = fame_per_sec_package; 
}
