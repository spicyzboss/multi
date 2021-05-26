
function showSummary(e){
    let textArray = [`
    <h1> สาขาย่อย </h1>
    <p style="color: black" class="preText">สถานที่สำหรับ เพิ่มอัตราผลิตสิ้นค้าของเราให้มากขึ้น โดยจะเพิ่มขึ้น 2 ขวดต่อวินาที </p>
    <div class="price"><div class="textPrice">500 <img class="coin" src="pic/coin.png"/></div></div>

    `, `<h1> ที่รับคืนขวด </h1>
    <p style="color: black" class="preText">สถานที่สำหรับรับคืนขวดที่ใช้แล้ว เพื่อนำไปแยกตามสภาพขวดไว้ใช้ในการรีไซเคิลต่อไป</p>
    <div class="price"><div class="textPrice">500 <img class="coin" src="pic/coin.png"/></div></div>

    `, `<h1> รีไซเคิล </h1>
    <p style="color: black" class="preText">สถานที่ไว้สำหรับ การรีไซเคิลขวดที่ได้จากที่รับคืนขวดโดยจะใช้งานได้ก็ต่อเมื่อ มีขวดสภาพแย่ 100 ขวด</p>
    <div class="price"><div class="textPrice">1500 <img class="coin" src="pic/coin.png"/></div></div>

    `]
    summaryText.innerHTML = textArray[e];
    summary.dataset.state = `on`;
}

function closeSummary(){
    summaryText.innerHTML = ``;
    summary.dataset.state = `off`;
}
let saveInner = ``
function Say(word, el){
    saveInner = el.innerHTML;
    el.innerHTML += word;
}
function stopSay(){
    el.innerHTML = saveInner;
}