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

function saveGame(){
    saves={
        'Milch':milk,
        'MPS':totalMps,
        'bauerKosten':bauer.cost,
        'bauerAnzahl':bauer.number,
        'milchbaumKosten':milchbaum.cost,
        'milchbaumAnzahl':milchbaum.number,
        'kuhweideKosten':kuhweide.cost,
        'kuhweideAnzahl':kuhweide.number,
        'bauernhofKosten':bauernhof.cost,
        'bauernhofAnzahl':bauernhof.number,
        'saugmachineKosten':saugmachine.cost,
        'saugmachineAnzahl':saugmachine.number,
        'milchLKWKosten':milchLKW.cost,
        'milchLKWAnzahl':milchLKW.number,
        'milchfabrikKosten':milchfabrik.cost,
        'milchfabrikAnzahl':milchfabrik.number,
        'milchturmKosten':milchturm.cost,
        'milchturmAnzahl':milchturm.number,
        'milchmienenKosten':milchmienen.cost,
        'milchmienenAnzahl':milchmienen.number,
        'milchleitungKosten':milchleitung.cost,
        'milchleitungAnzahl':milchleitung.number,
    }
    const saveString=btoa(JSON.stringify(saves))
    localStorage.setItem('Speicherstand',saveString)
}

function loadGame(){

    let saveStats = JSON.parse(atob(localStorage.getItem('Speicherstand')))
    milk=saveStats.Milch;
    totalMps=saveStats.MPS;
    bauer.load(saveStats.bauerKosten,saveStats.bauerAnzahl);
    milchbaum.load(saveStats.milchbaumKosten,saveStats.milchbaumAnzahl);
    kuhweide.load(saveStats.kuhweideKosten,saveStats.kuhweideAnzahl);
    bauernhof.load(saveStats.bauernhofKosten,saveStats.bauernhofAnzahl);
    saugmachine.load(saveStats.saugmachineKosten,saveStats.saugmachineAnzahl);
    milchLKW.load(saveStats.milchLKWKosten,saveStats.milchLKWAnzahl);
    milchfabrik.load(saveStats.milchfabrikKosten,saveStats.milchfabrikAnzahl);
    milchturm.load(saveStats.milchturmKosten,saveStats.milchturmAnzahl);
    milchmienen.load(saveStats.milchmienenKosten,saveStats.milchmienenAnzahl);
    milchleitung.load(saveStats.milchleitungKosten,saveStats.milchleitungAnzahl);
}





