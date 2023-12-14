class Race{
    constructor(race_name, description, strength, dexterity, constitution,intelligence, wisdom, charisma, speed, abilities, bonus_ability,
                languages, extra_languages, sub_races, skills, skills_number)
    {
        this.race_name=race_name;
        this.description=description;
        this.strength=strength;
        this.dexterity=dexterity;
        this.constitution=constitution;
        this.intelligence=intelligence;
        this.wisdom=wisdom;
        this.charisma=charisma;
        this.speed=speed;
        this.abilities=abilities;
        this.bonus_ability = bonus_ability;
        this.languages=languages;
        this.extra_languages=extra_languages;
        this.sub_races=sub_races;
        this.skills=skills;
        this.skills_number=skills_number;
    }

}

class Dragon
{
    constructor(color, breath_weapon, damage_type)
    {
        this.color = color;
        this.breath_weapon = breath_weapon;
        this.damage_type= damage_type;
    }
}

let black = new Dragon("Black","5 by 30 ft. line (Dex. save)","Acid");
let blue = new Dragon("Blue","5 by 30 ft. line (Dex. save)","Lightning");
let brass = new Dragon("Brass","5 by 30 ft. line (Dex. save)","Fire");
let bronze = new Dragon("Bronze","5 by 30 ft. line (Dex. save)","Lightning");
let copper = new Dragon("Copper","5 by 30 ft. line (Dex. save)","Acid");
let gold = new Dragon("Gold","15 ft. cone (Dex. save)","Fire");
let green = new Dragon("Green","15 ft. cone (Con. save)","Poison");
let red = new Dragon("Red","15 ft. cone (Con. save)","Fire");
let silver = new Dragon("Silver","15 ft. cone (Con. save)","Cold");
let white = new Dragon("White","15 ft. cone (Con. save)","Cold");

class Features {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

let darkvision = new Features("Darkvison", "Accustomed to life underground, you have superior " +
    "vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and " +
    "in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray");

let superior_darkvision = new Features("Darkvison", "Accustomed to life underground, you have superior " +
    "vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and " +
    "in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray");

let dwarven_resilience = new Features("Dwarven Resilience", "Accustomed to life underground, you " +
    "have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright " +
    "light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.");

let dwarven_combat_training = new Features("Dwarven Combat Training", "You have proficiency with " +
    "the battleaxe, hand axe, light hammer, and war hammer.");

let tool_proficiency = new Features("Tool Proficiency","You gain proficiency with the artisan’s " +
    "tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.");

let stonecunning = new Features("Stonecunning", "Whenever you make an Intelligence (History) check " +
    "related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency " +
    "bonus to the check, instead of your normal proficiency bonus.");

let dwarven_toughness = new Features("Dwarven Toughness", "Your hit point maximum increases by " +
    "1, and it increases by 1 every time you gain a level.");

let dwarven_armor_training = new Features("Dwarven Armor Training", "You have proficiency with light and medium armor.");

let keen_senses = new Features("Keen Senses", "You have proficiency in the Perception skill.");

let fey_ancestry = new Features("Fey Ancestry", "You have advantage on saving throws against being " +
    "charmed, and magic can’t put you to sleep.");

let trance = new Features("Trance","Elves don’t need to sleep. Instead, they meditate deeply, " +
    "remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, " +
    "you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of " +
    "practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.");

let elf_weapon_training = new Features("Elf Weapon Training", "You have proficiency with the " +
    "longsword, short sword, short bow, and longbow.");

let cantrip = new Features("Cantrip", "You know one cantrip of your choice from the wizard spell " +
    "list. Intelligence is your spell casting ability for it.");

let extra_language = new Features("Extra Language", "You can speak, read, and write one extra language of your choice.");

let fleet_of_foot = new Features("Fleet of Foot", "Your base walking speed increases to 35 feet");

let mask_of_the_wild = new Features("Mask of the Wild", "You can attempt to hide even when you " +
    "are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.");

let lucky = new Features("Lucky", "When you roll a 1 on the d20 for an attack roll, ability " +
    "check, or saving throw, you can reroll the die and must use the new roll.");

let brave = new Features("Brave","You have advantage on saving throws against being frightened.");

let halfling_nimbleness = new Features("Halfling Nimbleness", "You can move through the space" +
    " of any creature that is of a size larger than yours.");

let naturally_stealthy = new Features("Naturally Stealthy","You can attempt to hide even when" +
    " you are obscured only by a creature that is at least one size larger than you.");

let stout_resilience = new Features("Stout Resilience", "You have advantage on saving throws " +
    "against poison, and you have resistance against poison damage.");

let draconic_ancestry = new Features("Draconic Ancestry","You have draconic ancestry. Choose one type of dragon " +
    "from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type.");

let damage_resistance_fire = new Features("Damage Resistance","You have resistance to the damage type - fire.");

let damage_resistance_lightning = new Features("Damage Resistance","You have resistance to the damage type - lightning.");

let damage_resistance_acid = new Features("Damage Resistance","You have resistance to the damage type - acid.");

let damage_resistance_poison = new Features("Damage Resistance","You have resistance to the damage type - poison.");

let damage_resistance_cold = new Features("Damage Resistance","You have resistance to the damage type - cold.");

let gnome_cunning = new Features("Gnome Cunning","You have advantage on all Intelligence, Wisdom, " +
    "and Charisma saving throws against magic.");

let natural_illusionist = new Features("Natural Illusionist","You know the minor illusion cantrip. " +
    "You know the minor illusion cantrip");

let speak_with_small_beasts = new Features("Speak with Small Beasts", "Through sounds and gestures, " +
    "you can communicate simple ideas with small or smaller beasts. Forest Gnomes love animals and often keep squirrels, " +
    "badgers, rabbits, moles, woodpeckers and other creatures as pets");

let artificers_lore = new Features("Artificer’s Lore", "Whenever you make an Intelligence (History) " +
    "check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, " +
    "instead of any proficiency bonus you normally apply.");

let tinker = new Features("Tinker", "You have proficiency with artisan’s tools (tinker’s tools). " +
    "Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). " +
    "The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning)," +
    " or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have " +
    "up to three such devices active at a time. When you create a device, choose one of the following options: \nClockwork Toy. " +
    "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the " +
    "ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as " +
    "appropriate to the creature it represents.\nFire Starter. The device produces a miniature flame, which you can use to " +
    "light a candle, torch, or campfire. Using the device requires your action\nMusic Box. When opened, this music box plays " +
    "a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.");

let ability_score_bonus_two = new Features("Ability", "2");

let skill_versatility_two = new Features("Skills", "2");

let menacing = new Features("Intimidation", "1");

let relentless_endurance = new Features("Relentless Endurance", "When you are reduced to 0 hit points " +
    "but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest");

let savage_attacks = new Features("Savage Attacks", "When you score a critical hit with a melee weapon attack," +
    " you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.");

let hellish_resistance = new Features("Hellish Resistance", "You have resistance to fire damage.");

let infernal_legacy = new Features("Infernal Legacy", "You know the thaumaturgy cantrip. When you reach " +
    "3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do " +
    "so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the " +
    "ability to do so when you finish a long rest. Charisma is your spell casting ability for these spells");

let hill_dwarf = new Race("Hill Dwarf","As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn " +
    "in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.",
    "","","","","1","","25",[dwarven_toughness],
    "",[""],"",[""], [""],"");

let mountain_dwarf = new Race("Mountain Dwarf","As a mountain dwarf, you’re strong and hardy, accustomed to a " +
    "difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. " +
    "The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, " +
    "are mountain dwarves.","2","","","","","","25",[dwarven_armor_training],
    "",[""],"",[""], [""],"");


let dwarf = new Race("Dwarf","Bold and hardy, dwarves are known as skilled warriors, miners, and " +
    "workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh " +
    "as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.\n" +
    "\n" +
    "Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or " +
    "deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, " +
    "though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully.",
    "","","2","","","", "25",[darkvision, dwarven_resilience,dwarven_combat_training,tool_proficiency,stonecunning],
    "",["Common", "Dwarvish"],"",[hill_dwarf, mountain_dwarf], [""],"");

let high_elf = new Race("High Elf","As a high elf, you have a keen mind and a mastery of at least " +
    "the basics of magic. There are two kinds of high elves. One type (which includes the gray " +
    "elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty " +
    "and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high " +
    "elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more " +
    "friendly, and often encountered among humans and other races.","","","","1","","", "30",
    [elf_weapon_training, cantrip, extra_language],"",[""],"1",[""], [""],"");

let wood_elf = new Race("Wood Elf","As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly " +
    "and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of " +
    "Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves " +
    "(also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves.",
    "","","","","1","","30",[elf_weapon_training,fleet_of_foot,mask_of_the_wild],
    "",[""],"",[""], [""],"");

let elf = new Race("Elf","With their unearthly grace and fine features, elves appear hauntingly " +
    "beautiful to humans and members of many other races. They are slightly shorter than humans on average, ranging from " +
    "well under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145 pounds. " +
    "Males and females are about the same height, and males are only marginally heavier than females.\n",
    "","2","","","","","30",[darkvision, keen_senses,fey_ancestry,trance],
    "",["Common", "Elvish"],"",[high_elf, wood_elf], [""],"");

let lightfoot_halfling = new Race("Lightfoot Halfling","As a lightfoot halfling, you can easily hide from notice, " +
    "even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot " +
    "halflings have spread the farthest and thus are the most common variety.",
    "","","","","","1", "25",[naturally_stealthy],
    "",[""],"",[""], [""],"");

let stout_halfling = new Race("Stout Halfling","As a stout halfling, you’re hardier than average " +
    "and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings " +
    "are called stronghearts, and they’re most common in the south.","","","1","","","", "25",[stout_resilience],
    "",[""],"",[""], [""],"");

let halfling = new Race("Halfling","The diminutive halflings survive in a world full of larger creatures " +
    "by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and " +
    "so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They " +
    "are inclined to be stout, weighing between 40 and 45 pounds.\n" +
    "\n" +
    "Halflings’ skin ranges from tan to pale with a ruddy cast, and their hair is usually brown or sandy brown and wavy. " +
    "They have brown or hazel eyes. Halfling men often sport long sideburns, but beards are rare among them and mustaches even " +
    "more so. They like to wear simple, comfortable, and practical clothes, favoring bright colors.\n" +
    "\n" +
    "Halfling practicality extends beyond their clothing. They’re concerned with basic needs and simple pleasures and have " +
    "little use for ostentation. Even the wealthiest of halflings keep their treasures locked in a cellar rather than on " +
    "display for all to see. They have a knack for finding the most straightforward solution to a problem, and have little " +
    "patience for dithering.","","2","","","","","25",[lucky, brave,halfling_nimbleness],
    "",["Common", "Halfling"],"",[lightfoot_halfling, stout_halfling], [""],"");


let human = new Race("Human","With their penchant for migration and conquest, humans are more physically diverse " +
    "than other common races. There is no typical human. An individual can stand from 5 feet to a little over 6 feet tall and weigh from 125 to " +
    "250 pounds. Human skin shades range from nearly black to very pale, and hair colors from black to blond (curly, kinky, or straight); males " +
    "might sport facial hair that is sparse or thick. A lot of humans have a dash of nonhuman blood, revealing hints of elf, orc, or other lineages. " +
    "Humans reach adulthood in their late teens and rarely live even a single century.","1","1","1","1","1",
    "1", "30",[],"",["Common"],"1",[""], [""],"");

let dragonborn = new Race("Dragonborn","Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings " +
    "or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more " +
    "uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are " +
    "tall and strongly built, often standing close to 6½ feet tall and weighing 300 pounds or more. Their hands and feet are strong, talonlike claws with " +
    "three fingers and a thumb on each hand.","2","","","","","1", "30",[draconic_ancestry],
    "",["Common", "Draconic"],"",[black, blue, brass, bronze, copper, gold,green, red, silver, white], [""],"");

let forest_gnome = new Race("Forest Gnome","Forest gnomes, as a race, trace their origins back to ancient folklore and mythological tales. " +
    "Rooted in European folklore, they are often depicted as diminutive beings dwelling within the depths of forests, hidden from human eyes.",
    "","1","","","","", "25",[natural_illusionist, speak_with_small_beasts],"",[""],"",
    [""], [""],"");

let rock_gnome = new Race("Rock Gnome","As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. " +
    "Most gnomes in the world are rock gnomes, including the tinker gnomes of the Dragonlance setting.","","","1",
    "","","", "25",[artificers_lore, tinker],"",[""],"",[""], [""],"");

let gnome = new Race("Gnome","A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly" +
    " over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are usually adorned with broad smiles (beneath their prodigious noses), and their bright " +
    "eyes shine with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing the gnome’s insatiable interest in everything around.",
    "","","","2","","", "25",[darkvision,gnome_cunning],"",["Common", "Gnomish"],
    "",[forest_gnome, rock_gnome], [""],"");

let half_elf = new Race("Half-Elf","Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities " +
    "of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. " +
    "Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. " +
    "Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, " +
    "unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.",
    "","","","","","2", "30",[darkvision, fey_ancestry, extra_language],"2",["Common", "Elvish"],"1",[""], [""],"2");

let half_orc = new Race("Half-Orc","Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human communities, sometimes form alliances. " +
    "When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud leaders of orc communities. Some venture into the " +
    "world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.","2","","1",
    "","","", "30",[darkvision, relentless_endurance,savage_attacks],"",["Common", "Orc"],"",[""], ["intimidation"],"");

let tiefling = new Race("Tiefling","To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in " +
    "every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of " +
    "Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which " +
    "they and their children and their children’s children will always be held accountable.","","","","1","","2",
    "30",[darkvision, hellish_resistance, infernal_legacy],"",["Common", "Infernal"],"",[""], [""],"");


function add_race_to_db(input)
{
        let request = new XMLHttpRequest();
        let temp_name= input.race_name.toString();
        let temp_details = JSON.stringify(input);

        let url = "insert_race.php?race_name=" + temp_name + "&race_details=" + temp_details;

        request.open('Get', url, true);
        request.onload = function()
        {
            let response = this.response;
            console.log(response);
        }
        request.send();
}

class Weapons
{
    constructor(weapon_name, weapon_type, cost, damage, weight, properties)
    {
        this.weapon_name= weapon_name;
        this.weapon_type= weapon_type;
        this.cost = cost;
        this.damage= damage;
        this.weight= weight;
        this.properties= properties;
    }
}

let club = new Weapons("Club","Simple Melee","10","1d4 bludgeoning","2", "Light");

let dagger = new Weapons("Dagger","Simple Melee","200","1d4 piercing","1", "Finesse, Light, Thrown(range 20/60");

let greatclub = new Weapons("Greatclub","Simple Melee","20","1d8 bludgeoning","10", "Two-handed");

let handaxe = new Weapons("Handaxe","Simple Melee","500","1d6 slashing","2", "Light, Thrown(range 20/60");

let javelin = new Weapons("Javelin","Simple Melee","50","1d6 piercing","2", "Thrown(range 30/120)");

let light_hammer = new Weapons("Light Hammer","Simple Melee","200","Light hammer","2", "Light, Thrown(range 20/60");

let mace = new Weapons("Mace","Simple Melee","500","1d6 bludgeoning","4", "");

let quarterstaff = new Weapons("Quarterstaff","Simple Melee","20","1d6 bludgeoning","4", "Versatile (1d8)");

let sickle = new Weapons("Sickle","Simple Melee","100","1d4 slashing","2", "Light");

let spear = new Weapons("Spear","Simple Melee","100","1d6 piercing","3", "Thrown(range 20/60), Thrown (range 20/60)");

let crossbow_light = new Weapons("Crossbow, light","Simple Ranged","2500","1d8 piercing","5", "Ammunition(range 80/320), Loading, Two-handed");

let dart = new Weapons("Dart","Simple Ranged","5","1d4 piercing",".25", "Finesse, Thrown(range 20/60)");

let shortbow = new Weapons("Shortbow","Simple Ranged","2500","1d6 piercing","2", "Ammunition(range 80/320), Two-handed");

let sling = new Weapons("Sling","Simple Ranged","10","1d4 bludgeoning","0", "Ammunition(range 30/120)");

let battleaxe = new Weapons("Battleaxe","Martial Melee","1000","1d8 slashing","4", "Versatile (1d10)");

let flail = new Weapons("Flail","Martial Melee","1000","1d8 bludgeoning","2", "");

let glaive = new Weapons("Glaive","Martial Melee","2000","1d10 slashing","6", "Heavy, Reach, Two-handed");

let greataxe = new Weapons("Greataxe","Martial Melee","3000","1d12 slashing","7", "Heavy, Two-handed");

let greatsword = new Weapons("Greatsword","Martial Melee","5000","2d6 slashing","6", "Heavy, Two-handed");

let halberd = new Weapons("Halberd","Martial Melee","2000","1d10 slashing","6", "Heavy, Reach, Two-handed");

let lance = new Weapons("Lance","Martial Melee","1000","1d12 piercing","6", "Reach, Special");

let longsword = new Weapons("Longsword","Martial Melee","1500","1d12 piercing","3", "Versatile (1d10)");

let maul = new Weapons("Maul","Martial Melee","1000","2d6 bludgeoning","10", "Heavy, Two-handed");

let morningstar = new Weapons("Morningstar","Martial Melee","1500","1d8 piercing","4", "H");

let pike = new Weapons("Pike","Martial Melee","500","1d10 piercing","18", "Heavy, Reach, Two-handed");

let rapier = new Weapons("Rapier","Martial Melee","2500","1d8 piercing","2", "Finesse");

let scimitar = new Weapons("Scimitar","Martial Melee","2500","1d6 slashing","3", "Finesse, Light");

let shortsword = new Weapons("Shortsword","Martial Melee","1000","1d6 piercing","2", "Finesse, Light");

let trident = new Weapons("Trident","Martial Melee","500","1d6 piercing","4", "Thrown (range 20/60), Versatile (1d8)");

let war_pick = new Weapons("War Pick","Martial Melee","500","1d8 piercing","2", "");

let warhammer = new Weapons("Warhammer","Martial Melee","1500","1d8 bludgeoning","2", "Versatile (1d10)");

let whip = new Weapons("Whip","Martial Melee","200","1d4 slashing","3", "Finesse, Reach");

let blowgun = new Weapons("Blowgun","Martial Ranged","1000","1 piercing","1", "Ammunition (range 25/100), Loading");

let crossbow_hand = new Weapons("Crossbow, hand","Martial Ranged","7500","1d6 piercing","3", "Ammunition(range 30/120), Light, Loading");

let crossbow_heavy = new Weapons("Crossbow, heavy","Martial Ranged","5000","1d10 piercing","18", "Ammunition(range 100/400), Heavy, Loading, Two-handed");

let longbow = new Weapons("Longbow","Martial Ranged","5000","1d8 piercing","2", "Ammunition(range 150/600), Heavy, Two-handed");

let net = new Weapons("Net","Martial Ranged","100","","3", "Special, Thrown(range 5/15)");

class CharacterClass
{
    constructor() {
        this.name = "";
        this.description = "";
        this.hit_dice = "";
        this.hit_points = "";
        this.armor_prof = "";
        this.weapon_prof = "";
        this.tools_number = 0;
        this.tools_prof = "";
        this.saving_throws = "";
        this.features = "";
        this.skills_number = 0;
        this.skills = "";
        this.spells_check = false;
        this.spells_number = 0;
        this.cantrip_number = 0;
        this.spell_modifier = "";
    }
}

class FeaturesClass
{
    constructor(name, level, description)
    {
        this.name = name;
        this.level = level;
        this.description = description;
    }
}

class DivineDomain
{
    constructor(name, description, spells, features)
    {
        this.name = name;
        this.desciption = description;
        this.spells = spells;
        this.features = features;
    }
}

class DomainSpells
{
    constructor(name, level, spells)
    {
        this.name = name
        this.level = level;
        this.spells = spells;
    }
}


/*BARBARIAN*/
let rage = new FeaturesClass("Rage", "1", "In battle, you fight with primal ferocity. On your turn, " +
    "you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren’t wearing heavy armor: You have " +
    "advantage on Strength checks and Strength saving throws.  When you make a melee weapon attack using Strength, you gain a bonus to " +
    "the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.  " +
    "You have resistance to bludgeoning, piercing, and slashing damage.  If you are able to cast spells, you can’t cast them or concentrate on them while raging.  " +
    "Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last " +
    "turn or taken damage since then. You can also end your rage on your turn as a bonus action.  Once you have raged the number of times shown for your " +
    "barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.");

let unarmored_defense = new FeaturesClass("Unarmored Defense", "1", "While you are not " +
    "wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.");

let reckless_attack = new FeaturesClass("Reckless Attack", "2", "Starting at 2nd level, you can throw aside all concern " +
    "for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly." +
    " Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn");

let danger_sense = new FeaturesClass("Danger Sense", "2", "At 2nd level, you gain an uncanny sense of when things nearby aren’t as " +
    "they should be, giving you an edge when you dodge away from danger.  You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. " +
    "To gain this benefit, you can’t be blinded, deafened, or incapacitated.");

let primal_path = new FeaturesClass("Primal Path", "3", "At 3rd level, you choose a path that shapes the nature of your rage. Your choice grants you " +
    "features at 3rd level and again at 6th, 10th, and 14th levels.");

let ability_score_improvement_barbarian = new FeaturesClass("Ability Score Improvement", "4", "When you reach 4th level, and again at 8th, 12th, 16th, " +
    "and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase " +
    "an ability score above 20 using this feature.");

let extra_attack_barbarian = new FeaturesClass("Extra Attack", "5", "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.");

let fast_movement = new FeaturesClass("Fast Movement", "5", "Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.");

let feral_instinct = new FeaturesClass("Feral Instinct", "7", "By 7th level, your instincts are so honed that you have advantage on initiative rolls.  " +
    "Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, " +
    "but only if you enter your rage before doing anything else on that turn.");

let brutal_critical = new FeaturesClass("Brutal Critical", "9", "Beginning at 9th level, " +
    "you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.  " +
    "This increases to two additional dice at 13th level and three additional dice at 17th level.");

let relentless_rage = new FeaturesClass("Relentless Rage", "11", "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, " +
    "you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.");

let persistent_rage = new FeaturesClass("Persistent Rage", "15", "Beginning at 15th level, your rage is so fierce that " +
    "it ends early only if you fall unconscious or if you choose to end it.");

let indomitable_might = new FeaturesClass("Indomitable Might", "18", "Beginning at 18th level, if your total for a Strength" +
    " check is less than your Strength score, you can use that score in place of the total.");

let primal_champion = new FeaturesClass("Primal Champion", "20", "At 20th level, you embody the power of the wilds. Your " +
    "Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.");

let barbarian_features_list = [rage, unarmored_defense, reckless_attack, danger_sense, primal_path, ability_score_improvement_barbarian, extra_attack_barbarian, fast_movement, feral_instinct,
brutal_critical, relentless_rage, persistent_rage, indomitable_might, primal_champion];

let barbarian = new CharacterClass();
barbarian.name= "Barbarian";
barbarian.description = "Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes " +
    "over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few " +
    "times without resting, but those few rages are usually sufficient to defeat whatever threats arise."
barbarian.hit_dice = '1d12 per level';
barbarian.hit_points = '12 + constitution modifier';
barbarian.armor_prof = ['Light Armor', 'Medium Armor', 'Shields'];
barbarian.weapon_prof = ['Simple Weapons', 'Martial Weapons'];
barbarian.tools_prof = ['None'];
barbarian.saving_throws = ['Strength', 'Constitution'];
barbarian.features = barbarian_features_list;
barbarian.skills_number = 2;
barbarian.skills = ['Animal Handling', 'Athletics', 'Intimidation', 'Nature', 'Perception', 'Survival'];
barbarian.spells_check=false;

/*BARD*/
let bardic_inspiration = new FeaturesClass("", "", "");
let jack_of_all_trades = new FeaturesClass("", "", "");
let song_of_rest = new FeaturesClass("", "", "");
let bard_college = new FeaturesClass("", "", "");
let expertise = new FeaturesClass("", "", "");
let ability_score_improvement_bard = new FeaturesClass("", "", "");
let font_of_inspiration = new FeaturesClass("", "", "");
let counter_charm = new FeaturesClass("", "", "");
let magical_secrets = new FeaturesClass("", "", "");
let superior_inspiration = new FeaturesClass("", "", "");

let bard = new CharacterClass();
bard.name = "Bard";
bard.description = "The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the " +
    "sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards" +
    " are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor." +
    " Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging" +
    " knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of" +
    " the talents they set their minds to perfecting, from musical performance to esoteric knowledge.";
bard.hit_dice = '1d8 per bard level'
bard.hit_points = '8 + your Constitution modifier';
bard.armor_prof = ['Light Armor'];
bard.weapon_prof = ['Simple Weapons', 'Hand Crossbows', 'Longswords', 'Rapiers', 'Shortswords'];
bard.tools_number = 3;

let bard_cantrips= ["Blade Wind","Dancing Lights","","","","","","","","",""]


let bard_list = [bardic_inspiration, jack_of_all_trades, song_of_rest, bard_college, expertise, ability_score_improvement_bard, font_of_inspiration,
counter_charm, magical_secrets,superior_inspiration];

/*CLERIC*/
//domain spells
let knowledge_spells = new DomainSpells("", [],[])
let life_spells = new DomainSpells("", [],[])
let light_spells = new DomainSpells("", [],[])
let nature_spells = new DomainSpells("", [],[])
let tempest_spells = new DomainSpells("", [],[])
let trickery_spells = new DomainSpells("", [],[])
let war_spells = new DomainSpells("", [],[])

//features
let divine_domain = new FeaturesClass("", "", "");
let channel_divinity = new FeaturesClass("", "", "");
let channel_divinity_undead = new FeaturesClass("", "", "");
let ability_score_improvement_cleric = new FeaturesClass("", "", "");
let destroy_undead = new FeaturesClass("", "", "");
let divine_intervention = new FeaturesClass("", "", "");

//knowledge
let blessing_of_knowledge = new FeaturesClass("", "", "");
let channel_divinity_knowledge_of_ages = new FeaturesClass("", "", "");
let channel_divinity_read_thoughts = new FeaturesClass("", "", "");
let potent_spell_casting = new FeaturesClass("", "", "");
let visions_of_the_past = new FeaturesClass("", "", "");

//life
let bonus_proficiency_life = new FeaturesClass("", "", "");
let disciple_of_life = new FeaturesClass("", "", "");
let channel_divinity_preserve_life = new FeaturesClass("", "", "");
let blessed_healer = new FeaturesClass("", "", "");
let divine_strike_life = new FeaturesClass("", "", "");
let supreme_healer = new FeaturesClass("", "", "");

//light
let bonus_cantrip = new FeaturesClass("", "", "");
let warding_flare = new FeaturesClass("", "", "");
let channel_divinity_radiance_of_the_dawn = new FeaturesClass("", "", "");
let improved_flare = new FeaturesClass("", "", "");
let potent_spellcasting = new FeaturesClass("", "", "");
let corona_of_light = new FeaturesClass("", "", "");

//nature
let acolyte_of_nature = new FeaturesClass("", "", "");
let bonus_proficiency_nature = new FeaturesClass("", "", "");
let channel_divinity_charm_animals = new FeaturesClass("", "", "");
let dampen_elements = new FeaturesClass("", "", "");
let divine_strike_nature = new FeaturesClass("", "", "");
let master_of_nature = new FeaturesClass("", "", "");

//tempest
let bonus_proficiency_tempest = new FeaturesClass("", "", "");
let wrath_of_storm = new FeaturesClass("", "", "");
let channel_divinity_destructive_wrath = new FeaturesClass("", "", "");
let thunderbolt_strike = new FeaturesClass("", "", "");
let divine_strike_tempest = new FeaturesClass("", "", "");
let stormborn = new FeaturesClass("", "", "");

//trickery
let blessing_of_the_trickster = new FeaturesClass("", "", "");
let channel_divinity_invoke_duplicity = new FeaturesClass("", "", "");
let channel_divinity_cloak_of_shadows = new FeaturesClass("", "", "");
let divine_strike_trickery = new FeaturesClass("", "", "");
let improved_duplicity = new FeaturesClass("", "", "");

//war
let bonus_proficiency_war = new FeaturesClass("", "", "");
let war_priest = new FeaturesClass("", "", "");
let channel_divinity_guiding_star = new FeaturesClass("", "", "");
let channel_divinity_war_god_blessing = new FeaturesClass("", "", "");
let divine_strike_wart = new FeaturesClass("", "", "");
let avatar_of_battle = new FeaturesClass("", "", "");

//domains
let knowledge = new DivineDomain("","",[],[],);
let life = new DivineDomain("","",[],[],);
let light = new DivineDomain("","",[],[],);
let nature = new DivineDomain("","",[],[],);
let tempest = new DivineDomain("","",[],[],);
let trickery = new DivineDomain("","",[],[],);
let war = new DivineDomain("","",[],[],);



/*DRUID*/
let druidic = new FeaturesClass("", "", "");
let wild_shape = new FeaturesClass("", "", "");
let druid_circle = new FeaturesClass("", "", "");
let ability_score_improvement_druid = new FeaturesClass("", "", "");
let timeless_body = new FeaturesClass("", "", "");
let beast_spells = new FeaturesClass("", "", "");
let archdruid = new FeaturesClass("", "", "");


/*FIGHTER*/
let fighter_style = new FeaturesClass("", "", "");
let second_wind = new FeaturesClass("", "", "");
let action_surge = new FeaturesClass("", "", "");
let martial_archetype = new FeaturesClass("", "", "");
let ability_score_improvement_fighter = new FeaturesClass("", "", "");
let extra_attack_fighter = new FeaturesClass("", "", "");
let indomitable = new FeaturesClass("", "", "");


//champion
let improved_critical = new FeaturesClass("", "", "");
let remarkable_athlete = new FeaturesClass("", "", "");
let additional_fighting_style = new FeaturesClass("", "", "");
let superior_critical = new FeaturesClass("", "", "");
let survivor = new FeaturesClass("", "", "");



/*MONK*/

/*PALADIN*/

/*RANGER*/

/*ROGUE*/

/*SORCERER*/

/*WARLOCK*/

/*WIZARD*/














