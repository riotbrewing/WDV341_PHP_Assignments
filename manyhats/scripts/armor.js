class Armor{

    constructor(category, armor_name, cost, armor_class, strength, stealth, weight, dexterity) {
        this.category = category;
        this.armor_name = armor_name;
        this.cost = cost;
        this.armor_class = armor_class;
        this.strength = strength;
        this.stealth = stealth;
        this.weight = weight;
        this.dexterity = dexterity;
    }
    //modify the armor class with the character dexterity modifier
    modified_armor_class()
    {
        if(this.category === "Light Armor")
        {
            let x = parseInt(this.armor_class) + parseInt(this.dexterity);
            this.armor_class = x.toString();
            return x.toString();
        }
        else if(this.category === "Medium Armor")
        {
            if(this.dexterity >= 2)
            {
                let x = parseInt(this.armor_class) + 2;
                this.armor_class = x.toString();
                return x.toString();
            }
            else
            {
                let x = parseInt(this.armor_class) + parseInt(this.dexterity);
                this.armor_class = x.toString();
                return x.toString();
            }
        }
        else
        {
            return this.armor_class;
        }
    }

}

let padded = new Armor("Light Armor", "Padded", "500", "11", "none", "Disadvantage", "8", "0");

let leather = new Armor("Light Armor", "Leather", "1000", "11", "none", "none", "10", "0");

let studded_leather = new Armor("Light Armor", "Studded Armor", "4500", "12", "none", "none", "13", "0");

let hide = new Armor("Medium Armor", "Hide", "1000", "12", "none", "none", "12", "0");

let chain_shirt = new Armor("Medium Armor", "Chain Shirt", "5000", "13", "none", "none", "20", "0");

let scale_mail = new Armor("Medium Armor", "Scale Mail", "5000", "14", "none", "Disadvantage", "45", "0");

let breastplate = new Armor("Medium Armor", "Breastplate", "40000", "14", "none", "none", "20", "0");

let half_plate = new Armor("Medium Armor", "Half Plate", "75000", "15", "none", "Disadvantage", "40", "0");

let ring_mail =new Armor("Heavy Armor", "Ring Mail", "3000", "14", "none", "Disadvantage", "40", "0");

let chain_mail = new Armor("Heavy Armor", "Chain Mail", "7500", "16", "13", "Disadvantage", "55", "0");

let splint = new Armor("Heavy Armor", "Splint", "20000", "17", "15", "Disadvantage", "60", "0");

let plate = new Armor("Heavy Armor", "Plate", "150000", "18", "15", "Disadvantage", "65", "0");

let shield = new Armor("Shield", "Shield", "1000", "+2", "none", "none", "none", "0");

//new Armor("", "", "", "", "", "", "", "");