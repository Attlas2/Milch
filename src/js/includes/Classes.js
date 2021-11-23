class Milchproduktion {
    name;
    number;
    mps;
    cost;
    id;
    timeId;
    klasse;

    constructor(number, mps, cost, name,id,timeId,klasse) {
        this.number = number;
        this.mps = mps;
        this.cost = cost;
        this.name =name;
        this.id =id;
        this.timeId=timeId;
        this.klasse="Milchproduktion";
    }
    add() {
        if (milk >= this.cost) {
            milk -= this.cost;

            if(this.number!=0){
                clearInterval(this.timeId);
            }
            this.number++;
            this.timeId=setInterval(addMilk, 1000,this.mps*this.number);
            this.cost+=this.number;
            totalMps+=this.mps;
            document.getElementById("mpscounter").innerHTML = Math.round(totalMps*10)/10+" MPS";
            document.getElementById(this.id).innerHTML = this.number + " " +this.name+" Kosten: "+this.cost;


        }
    }
}
class Achievements{
    milestone;
    id;
    achieved;
    stat;
    klasse;
    constructor(milestone,id,stat,achieved,klasse) {
        this.milestone=milestone;
        this.id=id;
        this.stat=stat;
        this.achieved=false;
        this.klasse="Achievements"
    }
    checkStone(){
    if(this.stat>=this.milestone){
        this.achieved=true;
    }
}

}
