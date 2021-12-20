// Variablen
let milk=0;
let totalMps=0;
let clickStrength =1;
let saves;



bauer = new Milchproduktion(0,0.1,10,1.28,"Bauer","bauerID");
milchbaum= new Milchproduktion(0,0.5,50,1.26,"Milchbaum","baumID");
kuhweide= new Milchproduktion(0,1,100,1.24,"Kuhweide","kuhweideID");
bauernhof= new Milchproduktion(0,5,500,1.22,"Bauernhof","bauernhofID");
saugmachine= new Milchproduktion(0,10,1000,1.2,"Saugmachine","saugmachineID");
milchLKW= new Milchproduktion(0,25,2500,1.18,"Milch LKW","lkwID");
milchfabrik= new Milchproduktion(0,50,5000,1.16,"Milchfabrik","fabrikID");
milchturm= new Milchproduktion(0,75,7500,1.14,"Milchturm","turmID");
milchmienen= new Milchproduktion(0,100,10000,1.12,"Milchmiene","mieneID");
milchleitung= new Milchproduktion(0,150,15000,1.1,"Milchleitung","leitungID");
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
    zehnMilch= new Achievements(1000,"1000Milch","milkAchievement_1000","1000 Milch!"),
    zehnMilch= new Achievements(5000,"5000Milch","milkAchievement_5000","5000 Milch!"),
    zehnMilch= new Achievements(10000,"10000Milch","milkAchievement_10000","10000 Milch!"),
    zehnMilch= new Achievements(50000,"50000Milch","milkAchievement_50000","50000 Milch!"),

]

let productionAchieve=[
    zehnBauern = new Achievements(10,"10Bauern"),
    fuenfHoefe = new Achievements(5,"5Höfe")
]

