class Milchproduktion {
    name;
    number;
    mps;
    cost;
    costMulti;
    id;
    timeId;
    upgrade;
    nextID


    constructor(number, mps, cost,costMulti, name,id,cssID,nextID,timeId) {
        this.number = number;
        this.mps = mps;
        this.cost = cost;
        this.costMulti=costMulti;
        this.name =name;
        this.id =id;
        this.cssID= cssID;
        this.timeId=timeId;
        this.nextID=nextID;
        this.upgrade=1;

    }
    add() {
        if (milk >= this.cost) {
            milk -= this.cost;

            if(this.number!==0){
                clearInterval(this.timeId);
            }

            this.number++;
            this.timeId=setInterval(addMilk, 200,(this.mps/5)*this.number*this.upgrade);
            this.cost*=this.costMulti;
            totalMps+=this.mps;
            //document.getElementById("mpscounter").innerHTML = Math.round(totalMps*10)/10+" MPS";
            document.getElementById(this.id).getElementsByClassName("sh_item_count")[0].innerHTML = this.number;
            document.getElementById(this.id).getElementsByClassName("sh_item_cost")[0].innerHTML = Math.round(this.cost*100)/100+"<span class=\"currency\">M</span>";
            roundCost(this.id,"sh_item_cost",this.cost, "<span class=\"currency\">M</span>")
            roundCost(this.id,"sh_item_count",this.number,"")
            if(document.getElementById(this.cssID).hidden){
                document.getElementById(this.cssID).hidden=false;
            }
            if(this.nextID!==null){
                document.getElementById(this.nextID).classList.remove("sh_item_hidden");
            }




        }
    }
    upgrading(multi,costs,index){
        if(milk>=costs){
            this.upgrade=multi;
            this.cost/=this.costMulti;
            milk-=costs-this.cost;
            this.number--;
            this.add()
            document.getElementsByClassName("u_productUpgrades")[index].classList.remove("u_toSell")
            document.getElementsByClassName("u_productUpgrades")[index].classList.add("u_bought")

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
    }

}