function init(){
    styleInit();

    if (localStorage.getItem("Speicherstand")!==null) {
        loadGame()
    }
    setInterval(saveGame,30000);
    document.getElementById("ma_klicker").addEventListener("click",ev=> addMilk(clickStrength));
    document.getElementById("m_save").addEventListener("click", saveGame);
    document.getElementById("m_export").addEventListener("click",exportieren);
    document.getElementById("m_load").addEventListener("click",importieren);
    document.getElementById("bauerID").addEventListener("click",ev=>bauer.add());
    document.getElementById("baumID").addEventListener("click",ev=> milchbaum.add());
    document.getElementById("kuhweideID").addEventListener("click",ev=> kuhweide.add());
    document.getElementById("bauernhofID").addEventListener("click",ev=> bauernhof.add());
    document.getElementById("saugmachineID").addEventListener("click",ev=> saugmaschine.add());
    document.getElementById("lkwID").addEventListener("click",ev=> milchLKW.add());
    document.getElementById("fabrikID").addEventListener("click",cv=>milchfabrik.add())
    document.getElementById("turmID").addEventListener("click",ev=> milchturm.add());
    document.getElementById("mieneID").addEventListener("click",ev=> milchmienen.add());
    document.getElementById("leitungID").addEventListener("click",ev=> milchleitung.add());
    document.getElementById("bauernhofID").addEventListener("click",ev=> bauernhof.add());
    document.getElementById("saugmachineID").addEventListener("click",ev=> saugmaschine.add());
    document.getElementById("m_upgrades").addEventListener("click",function (){
        document.getElementById("s_upgrades").hidden=false
    });
    document.getElementById("u_upgrades")
    document.getElementById("u_closeButton").addEventListener("click",function (){
        document.getElementById("s_upgrades").hidden=true
    })
    document.getElementById("u_2xClick").addEventListener("click",ev=>upgradeClick(2,100,"u_2xClick"));
    document.getElementById("u_5xClick").addEventListener("click",ev=>upgradeClick(5,500,"u_5xClick"));
    document.getElementById("u_10xClick").addEventListener("click",ev=>upgradeClick(10,1000,"u_10xClick"));
    document.getElementById("u_20xClick").addEventListener("click",ev=>upgradeClick(20,5000,"u_20xClick"));
    document.getElementById("u_40xClick").addEventListener("click",ev=>upgradeClick(40,7000,"u_40xClick"));
    document.getElementById("u_80xClick").addEventListener("click",ev=>upgradeClick(80,10000,"u_80xClick"));
    document.getElementById("u_125xClick").addEventListener("click",ev=>upgradeClick(125,12500,"u_125xClick"));

}

function addMilk(x) {
    milk+=x;
    document.getElementById("ma_currentMilk").innerHTML =(Math.round(milk*100)/100).toFixed(2)+" ";
    roundCurrency("ma_currentMilk",milk);
    checkMilkAchieve();
    checkProductionAchievements();
}
function upgradeClick(multi,cost,id){
    if(multi>clickStrength){
        if(cost<=milk){

            clickStrength=multi;
            milk-=cost+clickStrength;
            addMilk(clickStrength);
            document.getElementById(id).classList.remove("u_toSell");
            document.getElementById(id).classList.add("u_bought");
        }
    }
}

function checkMilkAchieve(){
    for(let i=0;i < milkAchieve.length;i++){
        milkAchieve[i].checkStone(milk);
    }
}
function checkProductionAchievements(){
   fuenfzigBauern.checkStone(bauer.number);
    fuenfzigBaum.checkStone(milchbaum.number);
    fuenfzigWeide.checkStone(kuhweide.number);
    fuenfzigHof.checkStone(bauernhof.number);
    fuenfzigSaugmaschine.checkStone(saugmaschine.number);
    fuenfzigLkw.checkStone(milchLKW.number);
    fuenfzigFabrik.checkStone(milchfabrik.number);
    fuenfzigTurm.checkStone(milchturm.number);
    fuenfzigMinen.checkStone(milchmienen.number);
    fuenfzigLeitung.checkStone(milchleitung.number);


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
        'saugmachineKosten':saugmaschine.cost,
        'saugmachineAnzahl':saugmaschine.number,
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
        'milkachieve10':zehnMilch.achieved,
        'milkachieve50':fuenfzigMilch.achieved,
        'milkachieve100':hundertMilch.achieved,
        'milkachieve500':fuenfhundertMilch.achieved,
        'milkachieve1000':tausendMilch.achieved,
        'milkachieve5000':fuenftausendMilch.achieved,
        'milkachieve10000':zehntausendMilch.achieved,
        'milkachieve50000':fuenfzigtausendMilch.achieved,
        'klickstaerke':clickStrength

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
        saugmaschine.load(saveStats.saugmachineKosten, saveStats.saugmachineAnzahl);
        milchLKW.load(saveStats.milchLKWKosten, saveStats.milchLKWAnzahl);
        milchfabrik.load(saveStats.milchfabrikKosten, saveStats.milchfabrikAnzahl);
        milchturm.load(saveStats.milchturmKosten, saveStats.milchturmAnzahl);
        milchmienen.load(saveStats.milchmienenKosten, saveStats.milchmienenAnzahl);
        milchleitung.load(saveStats.milchleitungKosten, saveStats.milchleitungAnzahl);
        zehnMilch.loadAchieve(saveStats.milkachieve10);
        fuenfzigMilch.loadAchieve(saveStats.milkachieve50);
        hundertMilch.loadAchieve(saveStats.milkachieve100);
        fuenfhundertMilch.loadAchieve(saveStats.milkachieve500);
        tausendMilch.loadAchieve(saveStats.milkachieve1000);
        fuenftausendMilch.loadAchieve(saveStats.milkachieve5000);
        zehntausendMilch.loadAchieve(saveStats.milkachieve10000);
        fuenfzigtausendMilch.loadAchieve(saveStats.milkachieve50000);
        loadClickstrenght(saveStats.klickstaerke);
}
function roundCurrency(id,currency){
    if(currency>=1000){
        document.getElementById(id).innerHTML=(Math.round(currency/10)/100).toFixed(2)+"K "
    }
    if(currency>=1000000){
        document.getElementById(id).innerHTML=(Math.round(currency/10000)/100).toFixed(2)+"M "
    }
    if(currency>=1000000000){
        document.getElementById(id).innerHTML=(Math.round(currency/1000000)/100).toFixed(2)+"B "
    }

}
function roundCost(id,clas,currency,exString) {
    if (currency >= 1000) {
        document.getElementById(id).getElementsByClassName(clas)[0].innerHTML = Math.round(currency / 100) / 10 + "K " + exString
    }
    if (currency >= 1000000) {
        document.getElementById(id).getElementsByClassName(clas)[0].innerHTML = Math.round(currency / 100000) / 10 + "M " + exString
    }
    if (currency >= 1000000000) {
        document.getElementById(id).getElementsByClassName(clas)[0].innerHTML = Math.round(currency / 10000000) / 10 + "B " + exString
    }
}

function exportieren (){
    saveGame();
    prompt("Kopiere den Speichercode!!!",localStorage.getItem('Speicherstand'))
}
function importieren(){
        let promptValue = prompt("Fügen Sie den Speichercode ein!!!")
        if(atob(promptValue).includes('Milch')) {
            localStorage.setItem('Speicherstand', promptValue);
            location.reload();
        }else
        {
            alert("Ungültiger Code.")
        }
}
function loadClickstrenght(x){
    clickStrength=x;
    for(let i=0;i<ClickUpgrade.length,i++;){
       if(clickStrength>ClickUpgrade[i]){
           document.getElementById("u_"+ClickUpgrade[i]+"xClick").classList.remove("u_toSell");
           document.getElementById("u_"+ClickUpgrade[i]+"xClick").classList.add("u_bought");
       }
    }
}



