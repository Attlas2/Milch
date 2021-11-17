class Milchproduktion {
    name;
    number;
    mps;
    cost;
    id;
    timeId;

    constructor(number, mps, cost, name,id,timeId) {
        this.number = number;
        this.mps = mps;
        this.cost = cost;
        this.name =name;
        this.id =id;
        this.timeId=timeId;
    }
    add() {
        if (milk > this.cost) {
            milk -= this.cost;

            if(this.number!=0){
                clearInterval(this.timeId);
            }
            this.number++;
            this.timeId=setInterval(addMilk, 1000,this.mps*this.number);
            this.cost+=this.number;
            document.getElementById(this.id).innerHTML = this.number + " " +this.name+" Kosten: "+this.cost;


        }
    }
}