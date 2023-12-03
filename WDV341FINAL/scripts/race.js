class Race
{
        constructor(name, strength, dexterity, constitution, intelligence, wisdom, charisma, strength_save, dexterity_save,
                    constitution_save, intelligence_save, wisdom_save, charisma_save, acrobatics, animal_handling,
                    arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature,
                    perception, performance, persuasion, religion, slight_of_hand, stealth, survival,speed, features, proficiencies,
                    languages, sub_races, hit_points) {
                this.name= name;
                this.strength = strength;
                this.dexterity = dexterity;
                this.constitution = constitution;
                this.intelligence= intelligence;
                this.wisdom= wisdom;
                this.charisma= charisma;
                this.strength_save= strength_save;
                this.dexterity_save= dexterity_save;
                this.constitution_save= constitution_save;
                this.intelligence_save= intelligence_save;
                this.wisdom_save= wisdom_save;
                this.charisma_save= charisma_save;
                this.acrobatics= acrobatics;
                this.animal_handling= animal_handling;
                this.arcana= arcana;
                this.athletics= athletics;
                this.deception= deception;
                this.history= history;
                this.insight= insight;
                this.intimidation= intimidation;
                this.investigation= investigation;
                this.medicine= medicine;
                this.nature= nature;
                this.perception= perception;
                this.performance= performance;
                this.persuasion= persuasion;
                this.religion= religion;
                this.slight_of_hand= slight_of_hand;
                this.stealth= stealth;
                this.survival = survival;
                this.speed= speed;
                this.features= features;
                this.proficiencies= proficiencies;
                this.languages= languages;
                this.sub_races= sub_races;
                this.hit_points= hit_points;
        }
}

let dwarfqq = new Race("Dwarf",0,0,2,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0, 25, [darkvision, dwarven_resilience],
    [dwarven_combat_training, tool_proficiency, stonecunning], ["Common", "Dwarvish"], ["Hill Dwarf", "Mountian Dwarf"], 0)
