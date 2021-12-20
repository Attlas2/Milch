// Variablen
let milk=0;
let totalMps=0;
let clickStrength =1;
let saves;

bauer = new Milchproduktion(0,0.1,10,1.28,"Bauer","bauerID","ma_bauer");
milchbaum= new Milchproduktion(0,0.5,50,1.26,"Milchbaum","baumID","ma_baum");
kuhweide= new Milchproduktion(0,1,100,1.24,"Kuhweide","kuhweideID","ma_weide");
bauernhof= new Milchproduktion(0,5,500,1.22,"Bauernhof","bauernhofID","ma_bauernhof");
saugmaschine= new Milchproduktion(0,10,1000,1.2,"Saugmachine","saugmachineID","ma_maschine");
milchLKW= new Milchproduktion(0,25,2500,1.18,"Milch LKW","lkwID","ma_lkw");
milchfabrik= new Milchproduktion(0,50,5000,1.16,"Milchfabrik","fabrikID","ma_fabrik");
milchturm= new Milchproduktion(0,75,7500,1.14,"Milchturm","turmID","ma_turm");
milchmienen= new Milchproduktion(0,100,10000,1.12,"Milchmiene","mieneID","ma_minen");
milchleitung= new Milchproduktion(0,150,15000,1.1,"Milchleitung","leitungID","ma_leitung");
/*
milchmanufaktur= new Milchproduktion(0,200,20000,1,26,"Milchmanufaktur","manufakturID");
milchkratzer= new Milchproduktion(0,250,25000,1.27,"Milchkratzer","kratzerID");
milchflugzeug= new Milchproduktion(0,350,35000,1.28,"Milchflugzeug","flugzeugID");
milchmagier= new Milchproduktion(0,500,50000,1.29,"Milchmagier","magierID");
milchrakete= new Milchproduktion(0,1000,100000,1.3,"Milchrakete","raketeID");
milchtopia= new Milchproduktion(0,2000,200000,1.31,"Milchtopia","topiaID");
milchwolke= new Milchproduktion(0,7500,750000,1.32,"Milchwolke","wolkeID");
milchterie= new Milchproduktion(0,15000,1500000,1.33,"Dunkle Milchterie","terieID");
*/
let milkAchieve=[
    zehnMilch= new Achievements(10,"10Milch","milkAchievement_10","10 Milch!"),
    fuenfzigMilch= new Achievements(50,"50Milch","milkAchievement_50","50 Milch!"),
    hundertMilch= new Achievements(100,"100Milch","milkAchievement_100","100 Milch!"),
    fuenfhundertMilch= new Achievements(500,"500Milch","milkAchievement_500","500 Milch!"),
    tausendMilch= new Achievements(1000,"1000Milch","milkAchievement_1000","1000 Milch!"),
    fuenftausendMilch= new Achievements(5000,"5000Milch","milkAchievement_5000","5000 Milch!"),
    zehntausendMilch= new Achievements(10000,"10000Milch","milkAchievement_10000","10000 Milch!"),
    fuenfzigtausendMilch= new Achievements(50000,"50000Milch","milkAchievement_50000","50000 Milch!"),

]

fuenfzigBauern = new Achievements(50,"50Bauern","50BauerKlasse","50 Bauern!");
fuenfzigBaum = new Achievements(50,"50Baume","50BaumKlasse","50 Bäume!");
fuenfzigWeide = new Achievements(50,"50Weide","50WeideKlasse","50 Weiden!");
fuenfzigHof = new Achievements(50,"50Hof","50HofKlasse");
fuenfzigSaugmaschine = new Achievements(50,"50Saugmaschine","50SaugmaschineKlasse","50 Saugmaschinen!");
fuenfzigLkw = new Achievements(50,"50LKW","50LkwKlasse","50 LKW\n's!");
fuenfzigFabrik = new Achievements(50,"50Fabrik","50FabrikKlasse","50 Fabriken!");
fuenfzigTurm = new Achievements(50,"50Turm","50TurmKlasse","50 Türme!");
fuenfzigMinen = new Achievements(50,"50Minen","50MinenKlasse","50 Minen!");
fuenfzigLeitung = new Achievements(50,"50Leitung","50LeitungKlasse","50 Leitungen!");




