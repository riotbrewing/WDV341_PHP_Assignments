class Features {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

let darkvision = new Features("Darkvison", "Accustomed to life underground, you have superior " +
    "vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and " +
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

let breath_weapon_black = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 5 by 30 ft. line (Dex. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

let breath_weapon_blue = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 5 by 30 ft. line (Dex. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

let breath_weapon_brass = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 5 by 30 ft. line (Dex. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

let breath_weapon_bronze = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 5 by 30 ft. line (Dex. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

let breath_weapon_copper = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 5 by 30 ft. line (Dex. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

let breath_weapon_gold = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 15 ft. cone (Dex. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

let breath_weapon_green = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 15 ft. cone (Con. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

let breath_weapon_red = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 15 ft. cone (Dex. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

let breath_weapon_silver = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 15 ft. cone (Con. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

let breath_weapon_white = new Features("Breath Weapon", "You can use your action to exhale destructive " +
    "energy. Your draconic ancestry breath weapon area is a 15 ft. cone (Con. save). When you use your breath" +
    " weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your " +
    "draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature " +
    "takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, " +
    "4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a " +
    "short or long rest.")

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


//let test= new Features("","")