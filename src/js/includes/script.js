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

    document.getElementById("u_2xClick").addEventListener("click",ev=>upgradeClick(2,500,"u_2xClick"));
    document.getElementById("u_5xClick").addEventListener("click",ev=>upgradeClick(5,1800,"u_5xClick"));
    document.getElementById("u_10xClick").addEventListener("click",ev=>upgradeClick(10,2900,"u_10xClick"));
    document.getElementById("u_20xClick").addEventListener("click",ev=>upgradeClick(20,5800,"u_20xClick"));
    document.getElementById("u_40xClick").addEventListener("click",ev=>upgradeClick(40,7700,"u_40xClick"));
    document.getElementById("u_80xClick").addEventListener("click",ev=>upgradeClick(80,13000,"u_80xClick"));
    document.getElementById("u_125xClick").addEventListener("click",ev=>upgradeClick(125,18000,"u_125xClick"));
    document.getElementById("s_audio").volume = 0;
    document.getElementById("s_audio").autoplay;
    document.getElementById("m_settings").addEventListener("click",function (){
        document.getElementById("s_audio").play();
        if(document.getElementById("s_audio").volume>0){
            document.getElementById("s_audio").volume=0;
        }else{
            document.getElementById("s_audio").volume=0.1;
        }});
    document.getElementsByClassName("u_productUpgrades")[0].addEventListener("click",ev=>bauer.upgrading(2,100,0));
    document.getElementsByClassName("u_productUpgrades")[1].addEventListener("click",ev=>bauer.upgrading(5,250,1));
    document.getElementsByClassName("u_productUpgrades")[2].addEventListener("click",ev=>bauer.upgrading(10,400,2));
    document.getElementsByClassName("u_productUpgrades")[3].addEventListener("click",ev=>milchbaum.upgrading(2,450,3));
    document.getElementsByClassName("u_productUpgrades")[4].addEventListener("click",ev=>milchbaum.upgrading(5,700,4));
    document.getElementsByClassName("u_productUpgrades")[5].addEventListener("click",ev=>milchbaum.upgrading(10,1200,5));
    document.getElementsByClassName("u_productUpgrades")[6].addEventListener("click",ev=>kuhweide.upgrading(2,1800,6));
    document.getElementsByClassName("u_productUpgrades")[7].addEventListener("click",ev=>kuhweide.upgrading(5,4000,7));
    document.getElementsByClassName("u_productUpgrades")[8].addEventListener("click",ev=>kuhweide.upgrading(10,8000,8));
    document.getElementsByClassName("u_productUpgrades")[9].addEventListener("click",ev=>bauernhof.upgrading(2,5000,9));
    document.getElementsByClassName("u_productUpgrades")[10].addEventListener("click",ev=>bauernhof.upgrading(5,10000,10));
    document.getElementsByClassName("u_productUpgrades")[11].addEventListener("click",ev=>bauernhof.upgrading(10,15000,11));
    document.getElementsByClassName("u_productUpgrades")[12].addEventListener("click",ev=>saugmaschine.upgrading(2,10000,12));
    document.getElementsByClassName("u_productUpgrades")[13].addEventListener("click",ev=>saugmaschine.upgrading(5,18000,13));
    document.getElementsByClassName("u_productUpgrades")[14].addEventListener("click",ev=>saugmaschine.upgrading(10,22000,14));
    document.getElementsByClassName("u_productUpgrades")[15].addEventListener("click",ev=>milchLKW.upgrading(2,18000,15));
    document.getElementsByClassName("u_productUpgrades")[16].addEventListener("click",ev=>milchLKW.upgrading(5,25000,16));
    document.getElementsByClassName("u_productUpgrades")[17].addEventListener("click",ev=>milchLKW.upgrading(10,30000,17));
    document.getElementsByClassName("u_productUpgrades")[18].addEventListener("click",ev=>milchfabrik.upgrading(2,23000,18));
    document.getElementsByClassName("u_productUpgrades")[19].addEventListener("click",ev=>milchfabrik.upgrading(5,33000,19));
    document.getElementsByClassName("u_productUpgrades")[20].addEventListener("click",ev=>milchfabrik.upgrading(10,50000,20));
    document.getElementsByClassName("u_productUpgrades")[21].addEventListener("click",ev=>milchturm.upgrading(2,33000,21));
    document.getElementsByClassName("u_productUpgrades")[22].addEventListener("click",ev=>milchturm.upgrading(5,55000,22));
    document.getElementsByClassName("u_productUpgrades")[23].addEventListener("click",ev=>milchturm.upgrading(10,85000,23));
    document.getElementsByClassName("u_productUpgrades")[24].addEventListener("click",ev=>milchmienen.upgrading(2,50000,24));
    document.getElementsByClassName("u_productUpgrades")[25].addEventListener("click",ev=>milchmienen.upgrading(5,100000,25));
    document.getElementsByClassName("u_productUpgrades")[26].addEventListener("click",ev=>milchmienen.upgrading(10,150000,26));

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
        'milkachieve100000000':hundertMillionenMilch.achieved,
        'milkachieve1000000000':milliardeMilch.achieved,
        'klickstaerke':clickStrength,
        'bauerUpgrade':bauer.upgrade,
        'baumUpgrade':milchbaum.upgrade,
        'weideUpgrade':kuhweide.upgrade,
        'hofUpgrade':bauernhof.upgrade,
        'maschineUpgrade':saugmaschine.upgrade,
        'lkwUpgrade':milchLKW.upgrade,
        'fabrikUpgrade':milchfabrik.upgrade,
        'turmUpgrade':milchturm.upgrade,
        'minenUpgrade':milchmienen.upgrade,

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
        hundertMillionenMilch.loadAchieve(saveStats.milkachieve100000000);
        milliardeMilch.loadAchieve(saveStats.milkachieve1000000000);
        loadClickstrenght(saveStats.klickstaerke);
        loadUpgrade(0,saveStats.bauerUpgrade);
        bauer.upgrade=saveStats.bauerUpgrade;
        loadUpgrade(1,saveStats.baumUpgrade);
        milchbaum.upgrade=saveStats.baumUpgrade;
        loadUpgrade(2,saveStats.weideUpgrade);
        kuhweide.upgrade=saveStats.weideUpgrade;
        loadUpgrade(3,saveStats.hofUpgrade);
        bauernhof.upgrade=saveStats.hofUpgrade;
        loadUpgrade(4,saveStats.maschineUpgrade);
        saugmaschine.upgrade=saveStats.maschineUpgrade;
        loadUpgrade(5,saveStats.lkwUpgrade);
        milchLKW.upgrade=saveStats.lkwUpgrade;
        loadUpgrade(6,saveStats.fabrikUpgrade);
        milchfabrik.upgrade=saveStats.fabrikUpgrade;
        loadUpgrade(7,saveStats.turmUpgrade);
        milchturm.upgrade=saveStats.turmUpgrade;
        loadUpgrade(8,saveStats.minenUpgrade);
        milchmienen.upgrade=saveStats.minenUpgrade;

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
    for(let i = 0; i < ClickUpgrade.length; i++){
       if(clickStrength >= ClickUpgrade[i]){
           document.getElementById("u_"+ClickUpgrade[i]+"xClick").classList.remove("u_toSell");
           document.getElementById("u_"+ClickUpgrade[i]+"xClick").classList.add("u_bought");
       }
    }
}
function loadUpgrade(order,savedUpgrade){
    order*=3
    switch(savedUpgrade){
        case 2:
            document.getElementsByClassName("u_productUpgrades")[order].classList.remove("u_toSell");
            document.getElementsByClassName("u_productUpgrades")[order].classList.add("u_bought");
            break;
        case 5:
            document.getElementsByClassName("u_productUpgrades")[order].classList.remove("u_toSell");
            document.getElementsByClassName("u_productUpgrades")[order].classList.add("u_bought");
            document.getElementsByClassName("u_productUpgrades")[order+1].classList.remove("u_toSell");
            document.getElementsByClassName("u_productUpgrades")[order+1].classList.add("u_bought");
            break;
        case 10:
            document.getElementsByClassName("u_productUpgrades")[order].classList.remove("u_toSell");
            document.getElementsByClassName("u_productUpgrades")[order].classList.add("u_bought");
            document.getElementsByClassName("u_productUpgrades")[order+1].classList.remove("u_toSell");
            document.getElementsByClassName("u_productUpgrades")[order+1].classList.add("u_bought");
            document.getElementsByClassName("u_productUpgrades")[order+2].classList.remove("u_toSell");
            document.getElementsByClassName("u_productUpgrades")[order+2].classList.add("u_bought");
            break;
    }
}



