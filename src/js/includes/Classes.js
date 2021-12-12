class Milchproduktion {
    name;
    number;
    mps;
    cost;

    costMulti;
    id;
    timeId;
    klasse;
    upgrade;


    constructor(number, mps, cost,costMulti, name,id,timeId,klasse) {
        this.number = number;
        this.mps = mps;
        this.cost = cost;
        this.costMulti=costMulti;
        this.name =name;
        this.id =id;
        this.timeId=timeId;
        this.klasse="Milchproduktion";
        this.upgrade=1;

    }
    add() {
        if (milk >= this.cost) {
            milk -= this.cost;

            if(this.number!=0){
                clearInterval(this.timeId);
            }

            this.number+=this.upgrade;
            this.timeId=setInterval(addMilk, 1000,this.mps*this.number);
            this.cost*=this.costMulti;
            totalMps+=this.mps;
            document.getElementById("mpscounter").innerHTML = Math.round(totalMps*10)/10+" MPS";
            document.getElementById(this.id).innerHTML = this.number + " " +this.name+" Kosten: "+Math.round(this.cost*10)/10;

        }
    }
    load(price,count){
        if(count>0){
            this.cost=price/this.costMulti;
            milk+=this.cost;
            this.number=count-1;
            totalMps-=this.mps;
            this.add();
        }

        /*
        bauer.cost=saveStats.bauerKosten/bauer.costMulti;
        milk=saveStats.Milsch+bauer.cost;
        bauer.number=saveStats.bauerAnzahl-1;
        totalMps=saveStats.MPS-bauer.mps;
        bauer.add();
        */

    }

}
class Achievements{
    milestone;
    id;
    achieved;
    klasse;
    constructor(milestone,id,achieved,klasse) {
        this.milestone=milestone;
        this.id=id;
        this.achieved=false;
        this.klasse="Achievements"
    }
    checkStone(x){
    if(x>=this.milestone){
        this.achieved=true;
        }
    }
}

