class Gear{
    constructor(gear_type, gear_name, gear_description, cost, weight, bundle) {
        this.gear_type = gear_type;
        this.gear_name = gear_name;
        this.cost = cost;
        this.weight = weight;
        this.bundle = bundle;
    }
}
class Container extends Gear{
    constructor(filled_with, total_volume) {
        super();
        this.filled_with = filled_with;
        this.total_volume = total_volume;
    }
}

let abacus = new Gear("General", "Abacus", "Counting Device","200", "2", "1");

let acid = new Gear("General", "Acid", "As an action, you can splash the contents " +
    "of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In " +
    "either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a " +
    "hit, the target takes 2d6 acid damage.","2500", "1", "1");

let alchemists_fire = new Gear("General", "Alchemist's Fire", "This sticky, " +
    "adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on" +
    " impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. " +
    "On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by " +
    "using its action to make a DC 10 Dexterity check to extinguish the flames.", "5000", "1", "1");

let arrows = new Gear("Ammunition", "Arrows", "Ammunition for bows", "100", "1", "20");

let blowgun_needles = new Gear("Ammunition", "Blowgun Needles", "Ammunition for blowguns", "100", "1", "50");

let crossbow_bolts = new Gear("Ammunition", "Crossbow Bolts", "Ammunition for crossbows", "100", "1.5", "20");

let sling_bullets = new Gear("Ammunition", "Sling Bullets", "Ammunition for slings", "4", "1.5", "20");

let antitoxin = new Gear("General", "Antitoxin", "A creature that drinks this " +
    "vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or " +
    "constructs.", "5000", "0", "1");

let crystal = new Gear("Arcane Focus", "Crystal", "An arcane focus is a special " +
    "item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item — " +
    "designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting " +
    "focus.", "1000", "1", "1");

let orb = new Gear("Arcane Focus", "orb", "An arcane focus is a special " +
    "item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item — " +
    "designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting " +
    "focus.", "2000", "3", "1");

let staff = new Gear("Arcane Focus", "Staff", "An arcane focus is a special " +
    "item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item — " +
    "designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting " +
    "focus.", "500", "4", "1");

let wand = new Gear("Arcane Focus", "Wand", "An arcane focus is a special " +
    "item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item — " +
    "designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting " +
    "focus.", "1000", "1", "1");

let backpack = new Gear("General", "Backpack", "A pack for your back", "200", "5", "1");

let ball_bearings = new Gear("General", "Ball Bearings", "As an action, you can " +
    "spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature " +
    "moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving " +
    "through the area at half speed doesn’t need to make the save.", "100", "2", "1000");

let barrel = new Gear("General", "Barrel", "A sturdy barrel", "200", "70", "1");

let basket = new Gear("General", "Basket", "A nice wooded basket", "40", "2", "1");

let bedroll = new Gear("General", "Bedroll", "Some warm cozy bedding", "100", "7", "1");

let bell = new Gear("General", "Bell", "A basic bell", "100", "0", "1");

let blanket = new Gear("General", "Blanket", "A nice blanket", "50", "3", "1");

let block_and_tackle = new Gear("General", "Block and Tackle", "A set of pulleys " +
    "with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to " +
    "four times the weight you can normally lift.", "100", "5", "1");

let book = new Gear("General", "Book", "A book might contain poetry, historical" +
    " accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or " +
    "just about anything else that can be represented using text or pictures.", "2500", "5", "1");

let bottle = new Gear("General", "Bottle", "An empty glass bottle", "200", "2", "1");

let bucket = new Gear("General", "Bucket", "It's a bucket", "5", "2", "1");

let caltrops = new Gear("General", "Caltrops", "As an action, you can spread a " +
    "bag of caltrops to cover a square area that is 5 feet on a side. Any creature that enters the area must succeed on " +
    "a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the" +
    " creature’s walking speed by 10 feet until the creature regains at least 1 hit point. A creature moving through" +
    " the area at half speed does not need to make the save.", "100", "2", "20");

let candle = new Gear("General", "Candle", "For 1 hour, a candle sheds bright " +
    "light in a 5-foot radius and dim light for an additional 5 feet.", "1", "0", "1");

let crossbow_bolt_case = new Gear("Case", "Crossbow Bolt Case", "This wooden case " +
    "can hold up to twenty crossbow bolts.", "100", "1", "1");

let map_scroll_case = new Gear("Case", "Map or Scroll Case", "This cylindrical " +
    "leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.", "100", "1", "1");

let chain = new Gear("General", "Chain", "A chain has 10 hit points. It can be" +
    " burst with a successful DC 20 Strength check.", "500", "10", "10");

let chalk = new Gear("General", "Chalk", "A piece of chalk", "1", "0", "1");

let chest = new Gear("General", "Chest", "A sturdy wooden chest", "500", "25", "1");

let climbers_kit = new Gear("General", "Climbers Kit", "A climber’s kit includes" +
    " special pitons, boot tips, gloves, and a harness. You can use the climber’s kit as an action to anchor yourself;" +
    " when you do, you can’t fall more than 25 feet from the point where you anchored yourself, and you can’t climb" +
    " more than 25 feet away from that point without undoing the anchor.", "2500", "12", "1");

let clothes_common = new Gear("Clothes", "Common Clothes", "Run of the mill clothes", "50", "3", "1");

let clothes_costume = new Gear("Clothes", "Costume Clothes", "Clothes for dressing up, for a variety of purposes", "500", "6", "1");

let clothes_fine = new Gear("Clothes", "Fine Clothes", "Clothing of the finest quality", "1500", "6", "1");

let clothes_travelers = new Gear("Clothes", "Traveling Clothes", "Clothes fit for the road", "200", "4", "1");

let component_pouch = new Gear("General", "Component Pouch", "A component pouch " +
    "is a small, watertight leather belt pouch that has compartments to hold all the material components and other " +
    "special items you need to cast your spells, except for those components that have a specific cost" +
    " (as indicated in a spell's description).", "2500", "2", "1");

let crowbar = new Gear("General", "Crowbar", "Using a crowbar grants advantage to " +
    "Strength checks where the crowbar’s leverage can be applied.", "200", "5", "1");

let sprig_of_mistletoe = new Gear("Druidic Focus", "Sprig of Mistletoe", "A druidic " +
    "focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn " +
    "whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A " +
    "druid can use such an object as a spellcasting focus.", "100", "0", "1");

let totem = new Gear("Druidic Focus", "Totem", "A druidic " +
    "focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn " +
    "whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A " +
    "druid can use such an object as a spellcasting focus.", "100", "0", "1");

let wooden_staff = new Gear("Druidic Focus", "Wooden Staff", "A druidic " +
    "focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn " +
    "whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A " +
    "druid can use such an object as a spellcasting focus.", "500", "4", "1");

let yew_wand = new Gear("Druidic Focus", "Yew Wand", "A druidic " +
    "focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn " +
    "whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A " +
    "druid can use such an object as a spellcasting focus.", "1000", "1", "1");

let fishing_tackle = new Gear("General", "Fishing Tackle", "This kit includes a " +
    "wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.", "100", "4", "1");

let flask_or_tankard = new Gear("General", "Flask / Tankard", "A nice tankard/flask for storing drinks", "2", "1", "0");

let grappling_hook = new Gear("General", "Grappling Hook", "A hook attached to a rope", "200", "4", "1");

let hammer = new Gear("General", "Hammer", "A fine hammer", "100", "3", "1");

let sledgehammer = new Gear("General", "Sledgehammer", "A nice 10 pound sledgehammer", "200", "10", "1");

let healers_kit = new Gear("General", "Healer's Kit", "This kit is a leather pouch " +
    "containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to" +
    " stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.", "500", "3", "10");

let amulet = new Gear("Holy Symbol", "Amulet", "A holy symbol is a representation " +
    "of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully" +
    " engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Pantheons" +
    " lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy " +
    "symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it " +
    "visibly, or bear it on a shield.", "500", "1", "1");

let emblem = new Gear("Holy Symbol", "Emblem", "A holy symbol is a representation " +
    "of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully" +
    " engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Pantheons" +
    " lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy " +
    "symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it " +
    "visibly, or bear it on a shield.", "500", "0", "1");

let reliquary = new Gear("Holy Symbol", "Reliquary", "A holy symbol is a representation " +
    "of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully" +
    " engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Pantheons" +
    " lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy " +
    "symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it " +
    "visibly, or bear it on a shield.", "500", "2", "1");

let holy_water = new Gear("General", "Holy Water", "As an action, you can splash" +
    " the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on " +
    "impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised" +
    " weapon. If the target is a fiend or undead, it takes 2d6 radiant damage. A cleric or paladin may create holy " +
    "water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver," +
    " and requires the caster to expend a 1st-level spell slot.", "2500", "1", "1");

let hourglass = new Gear("General", "Hourglass", "A great way to count the seconds", "2500", "1", "1");

let hunting_trap = new Gear("General", "Hunting Trap", "Hunting Trap: When you" +
    " use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a" +
    " pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a" +
    " spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw" +
    " or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement" +
    " is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13" +
    " Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1" +
    " piercing damage to the trapped creature.", "500", "25", "1");

let ink = new Gear("General", "Ink", "1oz bottle of ink", "1000", "0", "1");

let ink_pen = new Gear("General", "Ink Pen", "A pen that uses ink to write", "2", "0", "1");

let jug_pitcher = new Gear("General", "Jug / Pitcher", "A Vessel that holds a gallon of liquid", "2", "4", "1");

let ladder = new Gear("General", "Ladder", "A 10 foot ladder", "10", "25", "1");

let lamp = new Gear("General", "Lamp", "A lamp casts bright light in a 15-foot " +
    "radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.", "50", "1", "1");

let lantern_bullseye = new Gear("General", "Bullseye Lantern", "A bullseye " +
    "lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 " +
    "hours on a flask (1 pint) of oil", "1000", "2", "1");

let lantern_hooded = new Gear("General", "Hooded Lantern", "A hooded lantern" +
    " casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours" +
    " on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot " +
    "radius.", "500", "2", "1");

let lock = new Gear("General", "Lock", "A key is provided with the lock. Without " +
    "the key, a creature proficient with thieves’ tools can pick this lock with a successful DC 15 Dexterity check. " +
    "Your GM may decide that better locks are available for higher prices.", "1000", "1", "1");

let magnifying_glass = new Gear("General", "Magnifying Glass", "This lens allows " +
    "a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting" +
    " a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes " +
    "for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item " +
    "that is small or highly detailed.", "10000", "0", "1");

let manacles = new Gear("General", "Manacles", "These metal restraints can bind " +
    "a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them " +
    "requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature " +
    "proficient with thieves’ tools can pick the manacles’ lock with a successful DC 15 Dexterity check. Manacles have" +
    " 15 hit points.", "200", "6", "1");

let mess_kit = new Gear("General", "Mess Kit", "This tin box contains a cup and" +
    " simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or " +
    "shallow bowl.", "20", "1", "1");

let mirror_steel = new Gear("", "", "", "", "", "");


//new Gear("", "", "", "", "", "");