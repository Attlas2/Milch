function addMilk(x) {
    milk+=x;
    document.getElementById("milkcounter").innerHTML =Math.round(milk*10)/10+" Milch"
    if(milk>1000){
        document.getElementById("milkcounter").innerHTML=Math.round(milk/100)/10+"K Milch"
    }
    checkMilkAchieve();
}
function checkMilkAchieve(){
    for(let i=0;i < milkAchieve.length;i++){
        milkAchieve[i].checkStone(milk);
    }
}
function checkProductionAvievements(){
    for(let i=0;i < productionAchieve.length;i++){
        zehnBauern.checkStone(bauer.number);
        fuenfHoefe.checkStone(bauernhof.number);
    }

}



