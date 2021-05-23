let my_curent_Coin = 300;
let my_curent_Fame = 0;
let my_curent_Product = 0;
let my_curent_Returned = 0;
let producted = 0;
let bad_fame = 0;

setInterval(()=>{
    my_curent_Coin += cash_per_sec_package+coin_per_sec_building;
    my_curent_Fame += fame_per_sec_package+fame_per_sec_building;
    my_curent_Product += 2;
    producted += 2;
    bad_fame += bad_fame_per_sec_package+bad_fame_per_sec_building
    myCoin.innerHTML = my_curent_Coin;
    myFame.innerHTML = Math.round(my_curent_Fame*100)/100;
    myStock.innerHTML = my_curent_Product;
}, 100);
