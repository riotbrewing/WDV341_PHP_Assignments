class weapon{

    constructor(category, weapon_name, cost, damage, damage_type, weight, properties) {
        this.category = category;
        this.weaopon_name = weapon_name;
        this.cost = cost;
        this.damage = damage;
        this.damage_type = damage_type;
        this.weight = weight;
        this.properties = properties;

    }


}

let club = new weapon("Simple Melee","Club","10","1d4","bludgeoning","2", ["Light"]);

let dagger = new weapon("Simple Melee","Dagger","200","1d4","piercing","1", ["Finesse", "Light", "Thrown(range 20/60)"]);

let great_club =  new weapon("Simple Melee","Greatclub","20","1d8","bludgeoning","10", ["Two-Handed"]);

let hand_axe = new weapon("Simple Melee", "Handaxe", "500", "1d6", "slashing" ,"2", ["Light", "Thrown(range 20/60"]);

let javelin = new weapon("Simple Melee", "Javelin", "50", "1d6", "piercing" ,"2", ["Thrown(range 30/120)"]);

let light_hammer = new weapon("Simple Melee", "Light Hammer", "200", "1d4", "bludgeoning" ,"2", ["Light", "Thrown(range 20/60)"])

let mace = new weapon("Simple Melee", "Mace", "500", "1d6", "bludgeoning" ,"4", [""])

let quarter_staff = new weapon("Simple Melee", "Quarter Staff", "20", "1d6", "bludgeoning" ,"4", ["Versatile(1d8)"]);

let sickle = new weapon("Simple Melee", "Sickle", "100", "1d4", "slashing" ,"2", ["Light"]);

let spear = new weapon("Simple Melee", "Spear", "100", "1d5", "piercing" ,"3", ["Thrown(range 20/60)", "Versatile(1d8)"]);

let crossbow_light = new weapon("Simple Ranged", "Crossbow (light)", "2500", "1d8", "piercing" ,"5", ["Ammunition(range 80/320)", "Loading", "Two-Handed"]);

let dart = new weapon("Simple Ranged", "Dart", "5", "1d4", "piercing" ,".25", ["Finesse", "Thrown(range 20/60)"]);

let short_bow = new weapon("Simple Ranged", "Short Bow", "2500", "1d6", "piercing" ,"2", ["Ammunition(range 80/320), Two-Handed"]);

let sling = new weapon("Simple Ranged", "Sling", "10", "1d4", "bludgeoning" ,"0", ["Ammunition(range 30/120"]);

let battle_axe = new weapon("Martial Melee", "Battle Axe", "1000", "1d8", "slashing" ,"4", ["Versatile(1d10)"]);

let flail = new weapon("Martial Melee", "Flail", "1000", "1d8", "bludgeoning" ,"2", [""]);

let glaive = new weapon("Martial Melee", "Glaive", "2000", "1d10", "slashing" ,"6", ["Heavy", "Reach", "Two-Handed"]);

let great_axe = new weapon("Martial Melee", "Great Axe", "3000", "1d12", "slashing" ,"7", ["Heavy", "Two-Handed"]);

let great_sword = new weapon("Martial Melee", "Great Sword", "5000", "2d6", "slashing" ,"6", ["Heavy", "Two-Handed"]);

let halberd = new weapon("Martial Melee", "Halberd", "2000", "1d10", "slashing" ,"6", ["Heavy", "Reach", "Two-Handed"]);

let lance = new weapon("Martial Melee", "Lance", "1000", "1d12", "piercing" ,"6", ["Reach", "Special"]);

let long_sword = new weapon("Martial Melee", "Long Sword", "1500", "1d8", "slashing" ,"3", ["Versatile(1d10)"]);

let maul = new weapon("Martial Melee", "Maul", "1000", "2d6", "bludgeoning" ,"10", ["Heavy", "Two-Handed"]);

let morningstar = new weapon("Martial Melee", "Morningstar", "1500", "1d8", "piercing" ,"4", [""]);

let pike = new weapon("Martial Melee", "Pike", "500", "1d10", "piercing" ,"18", ["Heavy", "Reach", "Two-Handed"]);

let rapier = new weapon("Martial Melee", "Rapier", "2500", "1d8", "piercing" ,"2", ["Finesse"]);

let scimitar = new weapon("Martial Melee", "Scimitar", "2500", "1d6", "slashing" ,"3", ["Finesse", "Light"]);

let short_sword = new weapon("Martial Melee", "Short Sword", "1000", "1d6", "piercing" ,"2", ["Finesse", "Light"]);

let trident = new weapon("Martial Melee", "Trident", "500", "1d6", "piercing" ,"4", ["Thrown(range 20/60)", "Versatile(1d8)"]);

let war_pick = new weapon("Martial Melee", "War Pick", "500", "1d8", "piercing" ,"2", [""]);

let war_hammer = new weapon("Martial Melee", "War Hammer", "1500", "1d8", "bludgeoning" ,"2", ["Versatile(1d10)"]);

let whip = new weapon("Martial Melee", "Whip", "200", "1d4", "slashing" ,"3", ["Finesse", "Reach"]);

let blowgun = new weapon("Martial Ranged", "Blowgun", "1000", "1", "piercing" ,"1", ["Ammunition(range 25/100", "Loading"]);

let crossbow_hand = new weapon("Martial Ranged", "Crossbow (hand)", "7500", "1d6", "piercing" ,"3", ["Ammunition(range 30/120)", "Light", "Loading"]);

let crossbow_heavy = new weapon("Martial Ranged", "Crossbow (heavy)", "5000", "1d10", "piercing" ,"18", ["Ammunition(range 100/400)", "Heavy", "Loading", "Two-Handed"]);

let long_bow = new weapon("Martial Ranged", "Longbow", "5000", "1d8", "piercing" ,"2", ["Ammunition(range 150/600)", "Heavy", "Two-Handed"]);

let net = new weapon("Martial Ranged", "Net", "100", "none", "none" ,"3", ["Special", "Thrown(range 5/15)"]);

//new weapon("", "", "", "", "" ,"", []);