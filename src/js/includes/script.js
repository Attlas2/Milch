function init(){
    if (localStorage.getItem("Speicherstand")!=null) {
        loadGame()
    }
    document.getElementById("ma_klicker").addEventListener("click",ev =>  addMilk(1));
    document.getElementById("m_save").addEventListener("click",ev=> saveGame());
    document.getElementById("bauerID").addEventListener("click",ev=>bauer.add());
    document.getElementById("baumID").addEventListener("click",ev=> milchbaum.add());
    document.getElementById("bauernhofID").addEventListener("click",ev=> bauernhof.add());
    document.getElementById("saugmachineID").addEventListener("click",ev=> saugmachine.add());



}

function addMilk(x) {
    milk+=x;
    document.getElementById("ma_currentMilk").innerHTML =Math.round(milk*10)/10+""
    if(milk>=1000){
        document.getElementById("ma_currentMilk").innerHTML=Math.round(milk/100)/10+"K"
    }
    if(milk>=1000000){
        document.getElementById("ma_currentMilk").innerHTML=Math.round(milk/100000)/10+"M"
    }
    if(milk>=1000000000){
        document.getElementById("ma_currentMilk").innerHTML=Math.round(milk/10000000)/10+"Mrd"
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

function loadGame() {
        let saveStats = JSON.parse(atob(localStorage.getItem('Speicherstand')))
        milk = saveStats.Milch;
        totalMps = saveStats.MPS;
        bauer.load(saveStats.bauerKosten, saveStats.bauerAnzahl);
        milchbaum.load(saveStats.milchbaumKosten, saveStats.milchbaumAnzahl);
        kuhweide.load(saveStats.kuhweideKosten, saveStats.kuhweideAnzahl);
        bauernhof.load(saveStats.bauernhofKosten, saveStats.bauernhofAnzahl);
        saugmachine.load(saveStats.saugmachineKosten, saveStats.saugmachineAnzahl);
        milchLKW.load(saveStats.milchLKWKosten, saveStats.milchLKWAnzahl);
        milchfabrik.load(saveStats.milchfabrikKosten, saveStats.milchfabrikAnzahl);
        milchturm.load(saveStats.milchturmKosten, saveStats.milchturmAnzahl);
        milchmienen.load(saveStats.milchmienenKosten, saveStats.milchmienenAnzahl);
        milchleitung.load(saveStats.milchleitungKosten, saveStats.milchleitungAnzahl);
}





