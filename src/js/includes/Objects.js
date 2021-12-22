// Variablen
let milk=0;
let totalMps=0;
let clickStrength =1;
let saves;
const ClickUpgrade=[2,5,10,20,40,80,125];

bauer = new Milchproduktion(0,0.1,10,1.2,"Bauer","bauerID","ma_bauer","baumID");
milchbaum= new Milchproduktion(0,0.5,100,1.15,"Milchbaum","baumID","ma_baum","kuhweideID");
kuhweide= new Milchproduktion(0,1,1100,1.15,"Kuhweide","kuhweideID","ma_weide","bauernhofID");
bauernhof= new Milchproduktion(0,5,5200,1.15,"Bauernhof","bauernhofID","ma_bauernhof","saugmachineID");
saugmaschine= new Milchproduktion(0,10,13000,1.15,"Saugmachine","saugmachineID","ma_maschine","lkwID");
milchLKW= new Milchproduktion(0,25,80000,1.15,"Milch LKW","lkwID","ma_lkw","fabrikID");
milchfabrik= new Milchproduktion(0,50,280000,1.15,"Milchfabrik","fabrikID","ma_fabrik","turmID");
milchturm= new Milchproduktion(0,75,750000,1.15,"Milchturm","turmID","ma_turm","mieneID");
milchmienen= new Milchproduktion(0,100,2500000,1.15,"Milchmiene","mieneID","ma_minen","leitungID");
milchleitung= new Milchproduktion(0,150,8000000,1.15,"Milchleitung","leitungID","ma_leitung",null);
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

fuenfzigBauern = new Achievements(15,"50Bauern","50BauerKlasse","15 Bauern!");
fuenfzigBaum = new Achievements(15,"50Baume","50BaumKlasse","15 Bäume!");
fuenfzigWeide = new Achievements(15,"50Weide","50WeideKlasse","15 Weiden!");
fuenfzigHof = new Achievements(15,"50Hof","50HofKlasse");
fuenfzigSaugmaschine = new Achievements(15,"50Saugmaschine","50SaugmaschineKlasse","15 Saugmaschinen!");
fuenfzigLkw = new Achievements(15,"50LKW","50LkwKlasse","15 LKW\n's!");
fuenfzigFabrik = new Achievements(15,"50Fabrik","50FabrikKlasse","15 Fabriken!");
fuenfzigTurm = new Achievements(15,"50Turm","50TurmKlasse","15 Türme!");
fuenfzigMinen = new Achievements(15,"50Minen","50MinenKlasse","15 Minen!");
fuenfzigLeitung = new Achievements(15,"50Leitung","50LeitungKlasse","15 Leitungen!");





