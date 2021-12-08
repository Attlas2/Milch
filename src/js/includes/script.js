function addMilk(x) {
    milk+=x;
    document.getElementById("milkcounter").innerHTML =Math.round(milk*10)/10+" Milch"
    if(milk>1000){
        document.getElementById("milkcounter").innerHTML=Math.round(milk/100)/10+"K Milch"
    }

    checkMilkAchieve();
    checkProductionAchievements();
}

function checkMilkAchieve(){
    for(let i=0;i < milkAchieve.length;i++){
        milkAchieve[i].checkStone(milk);
    }
}
function checkProductionAchievements(){
    for(let i=0;i < productionAchieve.length;i++) {
        zehnBauern.checkStone(bauer.number);
        fuenfHoefe.checkStone(bauernhof.number);

    }
}
function empowerClick(cost,multi){
    if(milk>=cost){
        milk-=cost;
    }
    clickStrength=ä
    multi;
}
function saveGame(){
    saves={
        'Milsch':milk,
        'MPS':totalMps,
        'bauerKosten':bauer.cost,
        'bauerAnzahl':bauer.number
    }
    const saveString=JSON.stringify(saves)
    localStorage.setItem('Speicherstand',saveString)
}
function loadGame(){
    let saveStats = JSON.parse(localStorage.getItem('Speicherstand'))
    bauer.cost=saveStats.bauerKosten/bauer.costMulti;
    milk=saveStats.Milsch+bauer.cost;
    bauer.number=saveStats.bauerAnzahl-1;
    totalMps=saveStats.MPS-bauer.mps;
    bauer.add();

}




function checkAllAchieve(){
    let entries = Object.entries(achievments);
    for(let i=0;i < entries.length;i++){
      console.log(eval('achievments.' + entries[i][0] + ".achieved"));
    }
}




