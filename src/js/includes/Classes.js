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
class Achievements{
    milestone;
    id;
    klasse;
    message;
    achieved;

    constructor(milestone,id,klasse,message,) {
        this.milestone=milestone;
        this.id=id;
        this.klasse=klasse;
        this.message=message;
        this.achieved=false;

    }
    checkStone(x){
        if(!this.achieved){
            if(x>=this.milestone){
                this.achieved=true;
                document.getElementById(this.klasse).style.background = 'url("../assets/img/ui_assets/menu/menu_achivement_completed.png") no-repeat center' // Hier den Pfad von dem anderen Bild.
                document.getElementById(this.klasse).style.backgroundSize = "100% 100%";
                document.getElementById(this.id).innerHTML=this.message
            }
        }
    }
    loadAchieve(a){
        if(a){
            document.getElementById(this.klasse).style.background = 'url("../assets/img/ui_assets/menu/menu_achivement_completed.png") no-repeat center' // Hier den Pfad von dem anderen Bild.
            document.getElementById(this.klasse).style.backgroundSize = "100% 100%";
            document.getElementById(this.id).innerHTML=this.message
        }
    }
}


