class Features_Class_Spec {
    constructor(name, description, level) {
        this.name = name;
        this.description = description;
        this.level = level;
    }
}

let rage = new Features_Class_Spec("Rage","In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\n" +
    "\n" +
    "While raging, you gain the following benefits if you aren’t wearing heavy armor:\n" +
    "\n" +
    "You have advantage on Strength checks and Strength saving throws.\n" +
    "When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.\n" +
    "You have resistance to bludgeoning, piercing, and slashing damage.\n" +
    "If you are able to cast spells, you can’t cast them or concentrate on them while raging.\n" +
    "\n" +
    "Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t " +
    "attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\n" +
    "\n" +
    "Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, " +
    "you must finish a long rest before you can rage again.", 1);

let unarmored_defense = new Features_Class_Spec("Unarmored Defense","While you are not wearing any armor, " +
    "your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",1);

let reckless_attack = new Features_Class_Spec ("Reckless Attack", "Starting at 2nd level, you can throw " +
    "aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide " +
    "to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but " +
    "attack rolls against you have advantage until your next turn.",2);

let danger_sense = new Features_Class_Spec("Danger Sense","At 2nd level, you gain an uncanny sense of when things nearby " +
    "aren’t as they should be, giving you an edge when you dodge away from danger.\n" +
    "\n" +
    "You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this " +
    "benefit, you can’t be blinded, deafened, or incapacitated.",2);

let primal_path = new Features_Class_Spec("Primal Path", "At 3rd level, you choose a path that shapes the " +
    "nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.",3);

let ability_score_improvement= new Features_Class_Spec("Ability Score Improvement","When you reach 4th level, " +
    "and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase" +
    " two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\n" +
    "\n" +
    "Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.",4);

let extra_attack= new Features_Class_Spec("Extra Attack","Beginning at 5th level, you " +
    "can attack twice, instead of once, whenever you take the Attack action on your turn.", 5);

let fast_movement = new Features_Class_Spec("Fast Movement","Starting at 5th level, your speed increases " +
    "by 10 feet while you aren’t wearing heavy armor.", 5)

let feral_instinct = new Features_Class_Spec("Feral Instinct","By 7th level, your instincts are so honed " +
    "that you have advantage on initiative rolls.\n" + "\n" + "Additionally, if you are surprised at the beginning of combat " +
    "and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.", 7);

let brutal_critical = new Features_Class_Spec("Brutal Critical","Beginning at 9th level, you can roll one " +
    "additional weapon damage die when determining the extra damage for a critical hit with a melee attack.\n" +
    "\n" + "This increases to two additional dice at 13th level and three additional dice at 17th level.\n This increases to three additional dice at 17th level.",9);

let relentless_rage = new Features_Class_Spec("Relentless Rage","Starting at 11th level, your rage can keep you " +
    "fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. " +
    "If you succeed, you drop to 1 hit point instead.\n" + "\n" + "Each time you use this feature after the first, the DC increases by 5. " +
    "When you finish a short or long rest, the DC resets to 10.", 11);

let persistence_rage = new Features_Class_Spec("Persistent Rage","Beginning at 15th level, your rage is so fierce that it ends " +
    "early only if you fall unconscious or if you choose to end it.",15);

let indomitable_might = new Features_Class_Spec("Indomitable Might","Beginning at 18th level, if your total for a Strength check " +
    "is less than your Strength score, you can use that score in place of the total.", 18);

let primal_champion = new Features_Class_Spec("Primal Champion","At 20th level, you embody the power of the wilds. Your Strength and Constitution " +
    "scores increase by 4. Your maximum for those scores is now 24.", 20);


