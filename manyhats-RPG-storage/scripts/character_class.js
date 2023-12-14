class PlayerCharacter{
    constructor() {
        this.name = "";
        this.race = "";
        this.sub_race = "";
        this.class_name ="";
        this.dragon = "";
        this.user_id = "";

        this.hit_dice="";

        this.strength = "0";
        this.dexterity = "0";
        this.constitution = "0";
        this.intelligence = "0";
        this.wisdom = "0";
        this.charisma = "0";

        this.strength_mod = "0";
        this.dexterity_mod = "0";
        this.constitution_mod = "0";
        this.intelligence_mod = "0";
        this.wisdom_mod = "0";
        this.charisma_mod = "0";

        this.strength_save = "0";
        this.dexterity_save = "0";
        this.constitution_save = "0";
        this.intelligence_save = "0";
        this.wisdom_save = "0";
        this.charisma_save = "0";

        this.strength_prof = "0";
        this.dexterity_prof = "0";
        this.constitution_prof = "0";
        this.intelligence_prof = "0";
        this.wisdom_prof = "0";
        this.charisma_prof = "0";

        this.proficiency_bonus = 2;

        this.speed = "";
        this.current_hit_points = "";
        this.max_hit_points = "";



        this.acrobatics_prof = "0";
        this.animal_handling_prof = "0";
        this.arcana_prof = "0";
        this.athletics_prof = "0";
        this.deception_prof = "0";
        this.history_prof = "0";
        this.insight_prof = "0";
        this.intimidation_prof = "0";
        this.investigation_prof = "0";
        this.medicine_prof = "0";
        this.nature_prof = "0";
        this.perception_prof = "0";
        this.performance_prof = "0";
        this.persuasion_prof = "0";
        this.religion_prof = "0";
        this.slight_of_hand_prof = "0";
        this.stealth_prof = "0";
        this.survival_prof = "0";

        this.acrobatics = "";
        this.animal_handling = "";
        this.arcana = "";
        this.athletics = "";
        this.deception = "";
        this.history = "";
        this.insight = "";
        this.intimidation = "";
        this.investigation = "";
        this.medicine = "";
        this.nature = "";
        this.perception = "";
        this.performance = "";
        this.persuasion = "";
        this.religion = "";
        this.slight_of_hand = "";
        this.stealth = "";
        this.survival = "";

        this.passive_wisdom_perception = "";
        this.passive_investigation = "";
        this.passive_wisdom_insight = ""

        this.armor_prof="";
        this.weapon_prof = "";
        this.tool_prof = "";
        this.language_prof = "" ;

        this.weapons = [];
        this.armor =[];
        this.cantrips = [];
        this.spells = [];
        this.inventory = [];
        this.features = [];
        this.class_features = [];
        this.background = "";
        this.background_description = "";
        this.fighting_style = "";

        this.alignment = "";
        this.faith = "";

        this.hair = "";
        this.skin = "";
        this.eyes = "";
        this.height = "";
        this.age = "";
        this.gender = "";
        this.personality_trait = "";
        this.ideal = "";
        this.bonds = "";
        this.flaws = "";

        this.organizations = ""
        this.allies = "";
        this.enemies = "";
        this.backstory = ""

        this.backpack = ""

    }

    push_lang(input)
    {
        this.language_prof.push(input);
    }

    push_spell(input)
    {
        this.spells.push(input);
    }

    push_cantrip(input)
    {
        this.cantrips.push(input);
    }
    push_weapon(input)
    {
        this.weapons.push(input);
    }
    push_armor(input)
    {
        this.armor.push(input);
    }

}