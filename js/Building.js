let lands = document.querySelectorAll(".land");
let recycle_inuse = 0;
let fac2_inuse = 0;
let returnPackage_inuse = 0;
let coin_per_sec_building = 0;
let trash_per_sec = 0
let fame_per_sec_building = 0;
let bad_fame_per_sec_building = 0;
let return_product_per_sec = 0;
var recycle_on_map, bodyRect, elemRect, offset;
console.log(lands);
function countBuilding(){
    recycle_inuse = 0;
    fac2_inuse = 0;
    returnPackage_inuse = 0;
    lands.forEach((land)=>{
        if(land.dataset.building === "Return")
            returnPackage_inuse++;
        else if(land.dataset.building === "Recycle")
            recycle_inuse++;
        else if(land.dataset.building === "Fac2")
            fac2_inuse++;
});
bad_fame_per_sec_building = 4*fac2_inuse
fame_per_sec_building = bad_fame_per_sec_building +(3*(returnPackage_inuse+recycle_inuse));
console.log(`fac2: `+fac2_inuse);
console.log(`returnPackage: `+returnPackage_inuse);
console.log(`recycle: `+recycle_inuse);
}
function RecycleActivate(){
    if(my_curent_Returned> 100){
    my_curent_Returned -= 100;
    my_curent_Product += 50;
    my_curent_Fame+= 10;
    }
}