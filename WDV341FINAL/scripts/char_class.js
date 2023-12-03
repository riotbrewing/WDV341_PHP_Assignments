class Char_Class{
    constructor(name, hit_dice, hit_points, hit_point_modifier, proficiencies, tools, saving_throws, skills, features, gold) {
        this.name = name;
        this.hit_dice = hit_dice;
        this.hit_points = hit_points;
        this.hit_point_modifier = hit_point_modifier;
        this.proficiencies = proficiencies;
        this.tools = tools;
        this.saving_throws = saving_throws;
        this.skills = skills;
        this.features = features;
        this.gold = gold;
    }
    add_proficiencies(input)
    {
        this.proficiencies.push(input);
    }
    add_tools(input)
    {
        this.tools.push(input);
    }
    add_saving_throws(input)
    {
        this.saving_throws.push(input);
    }
    add_features(input)
    {
        this.features.push(input);
    }

}

let barbarian_equipment =
    {
        weapon_choice: ["Great Axe", "Any Martial Weapon"],
        armor: [],
        weapon_choice_two: ["Two Hand Axes", "Any Simple Weapons"],
        equipment: ["Explorers Pack"],
        tools: [],
        extras: ["4 Javelins"]
    };

let bard =
    {
        weapon_choice: ["Rapier", "Longsword", "Any Simple Weapons"],
        armor: [],
        weapon_choice_two: [],
        equipment: ["Diplomat's Pack", "Entertainers Pack"],
        tools: ["A lute", "Any other musical instrument"],
        extras: ["4 Javelins"]
    }

let cleric_equipment =
    {
        weapon_choice: ["Mace", "Warhammer(if proficient)"],
        armor: ["Scale Mail", "Leather Armor", "Chain Mail(if proficient)"],
        weapon_choice_two: ["Light Crossbow and 20 Bolts", "Any Simple Weapons"],
        equipment: ["Priest Pack", "Explorers Pack"],
        tools: [],
        extras: ["Shield and Holy Symbol"]
    };




let barbarian = new Char_Class("Barbarian", "1d12", "12", "Constitution",
    ["Light Armor, Medium Armor, Shields, Simple Weapons, Martial Weapons"], [], ["Strength", "Constitution"],
    "Choose Two From Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival", [], "2d4 X 10 gp");