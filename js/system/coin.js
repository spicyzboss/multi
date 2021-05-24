let my_curent_Coin = 500, my_curent_Fame = 0,
    my_curent_Product = 0, my_curent_Returned = 0,
  produced = 0, bad_fame = 0, all_returned = 0, produce_state=1, fame_make_money;
  let bad_fame_percent;
  let good_fame_percent;
let per_Sec = setInterval(()=>{
    if(100-Math.round(bad_fame*100/my_curent_Fame) < 25){
        return_package_per_sec = Math.floor(Math.random()*4)/10;
        fame_make_money = 1;
    }
    else if(100-Math.round(bad_fame*100/my_curent_Fame) < 40){
        return_package_per_sec = (Math.floor(Math.random()*(6-3))+3)/10;
        fame_make_money = 1.2;
    }
    else if(100-Math.round(bad_fame*100/my_curent_Fame) < 80){
        return_package_per_sec = (Math.floor(Math.random()*(8-5))+5)/10;
        fame_make_money = 1.5;
    }
    else{
        return_package_per_sec = (Math.floor(Math.random()*(10-7))+7)/10;
        fame_make_money = 2;
    }
    if(returnPackage_inuse > 0 && my_curent_Returned<produced){
        all_returned += returnPackage_inuse*return_package_per_sec;
        my_curent_Returned += returnPackage_inuse*return_package_per_sec;
    }
    good_fame_percent = 100 - Math.round(bad_fame*100/my_curent_Fame);
    bad_fame_percent =  Math.round(bad_fame*100/my_curent_Fame)+'%';
    my_curent_Fame += (fame_per_sec_package+fame_per_sec_building)*produce_state;
    my_curent_Product += (4+2*fac2_inuse)*produce_state;
    produced += (4+2*fac2_inuse)*produce_state;
    bad_fame += bad_fame_per_sec_package+bad_fame_per_sec_building;
    myCoin.innerHTML = Math.round(my_curent_Coin);
    myFame.innerHTML = Math.round(my_curent_Fame);
    myStock.innerHTML = my_curent_Product;
    myReturned_package.innerHTML = Math.round(my_curent_Returned);
    cashFlow.innerHTML = Math.round(cash_per_sec_package+coin_per_sec_building);
    Bonus.innerHTML = Math.round(fame_make_money*(cash_per_sec_package+coin_per_sec_building)-(cash_per_sec_package+coin_per_sec_building));
    fameFlow.innerHTML = fame_per_sec_package+fame_per_sec_building;
    badFame.style.width = Math.round(bad_fame*100/my_curent_Fame)+'%';

    if(my_curent_Product >= 100){
        bubble_sell_product.dataset.for = `sell_product_ready`;
    }
    else{
        bubble_sell_product.dataset.for = `sell_product_notReady`;
    }
    if(my_curent_Returned>= 100 && recycle_inuse>0){
        if(recycle_inuse >0){
            recycle_on_map = Array.prototype.slice.call(lands).filter(a => a.dataset.building=="Recycle");
            console.log(`re_on_map`+ recycle_on_map);
            bodyRect = document.body.getBoundingClientRect();
            elemRect = recycle_on_map[0].getBoundingClientRect();
            recycle_offsetX   = elemRect.left - bodyRect.left;
            recycle_offsetY   = elemRect.top - bodyRect.top;
            console.log(`offsetX: `+recycle_offsetX);
            console.log(`offsetY: `+recycle_offsetY);
        
        }
        bubble_recycle.dataset.state = "onShow";
        console.log(bubble_recycle);
        bubble_recycle.style.top = recycle_offsetY-30;
        bubble_recycle.style.left = recycle_offsetX+90;
    }
    else{
        bubble_recycle.dataset.state = "onHide";
    }
}, 1000);

function sellProduct(){
    if(my_curent_Product >= 100){
        my_curent_Product -= 100;
        my_curent_Coin += 100*fame_make_money*curent_coin_package_status.innerHTML;
    }
}
function showStatus(){
    RecZone.style.transition = "1s";
    RecZone.classList.toggle("hideStatus");
    setTimeout(()=>{RecZone.style.transition = "none";},1000)
    hideToggle.classList.toggle("rotateInvert");
}