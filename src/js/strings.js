// Useful for finding characters that need to be encoded: [^-&;*=a-zA-Z:/\s,"_0-9.{}\\']

var LANG = {};
LANG.us = {
	//Village
	Ambrosia: "Ambrosia",
	Amulet_of_Power: "Amulet of Power",
	Arcane_Energies: "Arcane Energies",
	Augmentation_Amulet: "Augmentation Amulet",
	Banish: "Banish",
	Barkeep: "Barkeep",
	Battle_Fury: "Battle Fury",
	Blacksmith: "Blacksmith",
	Blessed_Hammer: "Blessed Hammer",
	Bluefire_Staff: "Bluefire Staff",
	Bolt_of_Purity: "Bolt of Purity",
	Border_Guard: "Border Guard",
	Burnt_Offering: "Burnt Offering",
	Chieftan_s_Drum: "Chieftan\'s Drum",
	Claymore: "Claymore",
	Creeping_Death: "Creeping Death",
	Cursed_Bow: "Cursed Bow",
	Cursed_Mace: "Cursed Mace",
	Cyclone: "Cyclone",
	Demon_Vision: "Demon Vision",
	Divine_Staff: "Divine Staff",
	Doomgate_Squire: "Doomgate Squire",
	Drill_Sergeant: "Drill Sergeant",
	Elite_Militia: "Elite Militia",
	Entrail_Reader: "Entrail Reader",
	Feast: "Feast",
	Fireball: "Fireball",
	Flaming_Sword: "Flaming Sword",
	Flask_of_Oil: "Flask of Oil",
	Foresight_Elixir: "Foresight Elixir",
	Fortune_Teller: "Fortune Teller",
	Frost_Bolt: "Frost Bolt",
	Frost_Giant_Axe: "Frost Giant Axe",
	Glowberries: "Glowberries",
	Goodberries: "Goodberries",
	Greed_Blade: "Greed Blade",
	Guardian_Blade: "Guardian Blade",
	Guide: "Guide",
	Guiding_Light: "Guiding Light",
	Hatchet: "Hatchet",
	Highland_Officer: "Highland Officer",
	Icon_of_Inversion: "Icon of Inversion",
	Illusory_Blade: "Illusory Blade",
	Insight_Blade: "Insight Blade",
	Lantern: "Lantern",
	Lightstone_Gem: "Lightstone Gem",
	Magi_Staff: "Magi Staff",
	Magic_Missile: "Magic Missile",
	Magical_Aura: "Magical Aura",
	Pawnbroker: "Pawnbroker",
	Pious_Chaplain: "Pious Chaplain",
	Plaguesmiter: "Plaguesmiter",
	Polearm: "Polearm",
	Polymorph: "Polymorph",
	Power_Word_Kill: "Power Word: Kill",
	Quartermaster: "Quartermaster",
	Reclusive_Mystic: "Reclusive Mystic",
	Recurve_Bow: "Recurve Bow",
	Sage: "Sage",
	Scout: "Scout",
	Scroll_of_Chaos: "Scroll of Chaos",
	Short_Bow: "Short Bow",
	Short_Sword: "Short Sword",
	Silverstorm: "Silverstorm",
	Skullbreaker: "Skullbreaker",
	Soul_Gem: "Soul Gem",
	Soul_Jar: "Soul Jar",
	Spear: "Spear",
	Spirit_Blast: "Spirit Blast",
	Spirit_Hunter: "Spirit Hunter",
	Spoiled_Food: "Spoiled Food",
	Stalking_Spell: "Stalking Spell",
	Tavern_Brawl: "Tavern Brawl",
	Tax_Collector: "Tax Collector",
	Thieves_Blade: "Thieves\' Blade",
	Thunder_Ring: "Thunder Ring",
	Time_Bend: "Time Bend",
	Toryn_Gauntlet: "Toryn Gauntlet",
	Town_Guard: "Town Guard",
	Trader: "Trader",
	Trainer: "Trainer",
	Unicorn_Steak: "Unicorn Steak",
	Village_Mob: "Village Mob",
	Warhammer: "Warhammer",

	//Monster
	Abyssal: "Abyssal",
	Abyssal_Elite: "Abyssal &bull; Elite",
	Abyssal_Horde: "Abyssal &bull; Horde",
	Abyssal_Malformed: "Abyssal &bull; Malformed",
	Abyssal_Thunderspawn: "Abyssal &bull; Thunderspawn",
	Bandit_Humanoid: "Bandit &bull; Humanoid",
	Centaur: "Centaur",
	Cultist_Humanoid: "Cultist &bull; Humanoid",
	Dark_Enchanted: "Dark Enchanted",
	Doomknight_Death: "Doomknight &bull; Death",
	Doomknight_Humanoid: "Doomknight &bull; Humanoid",
	Dragon: "Dragon",
	Dragon_Chromatic: "Dragon &bull; Chromatic",
	Dragon_Humanoid: "Dragon &bull; Humanoid",
	Elemental_Fire: "Elemental &bull; Fire",
	Elemental_Nature: "Elemental &bull; Nature",
	Elemental_Pain: "Elemental &bull; Pain",
	Enchanted: "Enchanted",
	Evil_Druid_Humanoid: "Evil Druid &bull; Humanoid",
	Giant: "Giant",
	Golem: "Golem",
	Horde: "Horde",
	Humanoid: "Humanoid",
	Hydra_Dragon: "Hydra &bull; Dragon",
	Ooze: "Ooze",
	Orc_Humanoid: "Orc &bull; Humanoid",
	Raider_Humanoid: "Raider &bull; Humanoid",
	Siege: "Siege",
	The_Swarm: "The Swarm",
	Undead_Doom: "Undead &bull; Doom",
	Undead_Lich: "Undead &bull; Lich",
	Undead_Plague: "Undead &bull; Plague",
	Undead_Spirit: "Undead &bull; Spirit",
	Undead_Stormwraith: "Undead &bull; Stormwraith",
	Verminfolk_Animal: "Verminfolk &bull; Animal",
	Werewolf: "Werewolf",

	//Thunderstones
	Stone_of_Agony: "Stone of Agony",
	Stone_of_Blight: "Stone of Blight",
	Stone_of_Avarice: "Stone of Avarice",
	Stone_of_Mystery: "Stone of Mystery",
	Stone_of_Scorn: "Stone of Scorn",
	Stone_of_Terror: "Stone of Terror",

	//Traps
	Trap_Death: "Trap &bull; Death",
	Trap_Dire: "Trap &bull; Dire",
	Trap_Draconic: "Trap &bull; Draconic",

	//Guardians
	Dark_Champion: "Dark Champion",
	Death_Sentinel: "Death Sentinel",
	Guardian_of_Night: "Guardian of Night",
	Guardian_of_Revenge: "Guardian of Revenge",
	Guardian_of_Strength: "Guardian of Strength",
	Guardian_of_Torment: "Guardian of Torment",
	Guardian_of_Virulence: "Guardian of Virulence",
	Unholy_Guardian: "Unholy Guardian",

	//Treasures
	Amulet_Treasure: "Amulet Treasure",
	Figurine_Treasure: "Figurine Treasure",
	Ulbrick_s_Treasure: "Ulbrick\'s Treasure",

	//Settings
	Barrowsdale: "Barrowsdale",
	Doomgate: "Doomgate",
	Dragonspire: "Dragonspire",
	Dreadwatch: "Dreadwatch",
	Feayn_Swamp: "Feayn Swamp",
	Grimhold: "Grimhold",
	Regian_Cove: "Regian Cove",
	Stormhold: "Stormhold",
	Thornwood_Forest: "Thornwood Forest",

	//Heroes
	Amazon: "Amazon",
	Belzur: "Belzur",
	Blind: "Blind",
	Cabal: "Cabal",
	Chalice: "Chalice",
	Chulian: "Chulian",
	Clan: "Clan",
	Deep: "Deep",
	Diin: "Diin",
	Drunari: "Drunari",
	Divine: "Divine",
	Dwarf: "Dwarf",
	Elf: "Elf",
	Evoker: "Evoker",
	Feayn: "Feayn",
	Flame: "Flame",
	Gangland: "Gangland",
	Gohlen: "Gohlen",
	Gorinth: "Gorinth",
	Grim: "Grim",
	Half_Orc: "Half-Orc",
	Harruli: "Harruli",
	Krell: "Krell",
	Lorigg: "Lorigg",
	Lurker: "Lurker",
	Magehunter: "Magehunter",
	Nightblade: "Nightblade",
	Outlands: "Outlands",
	Phalanx: "Phalanx",
	Redblade: "Redblade",
	Regian: "Regian",
	Runespawn: "Runespawn",
	Selurin: "Selurin",
	Sidhe: "Sidhe",
	Slynn: "Slynn",
	Stoneguard: "Stoneguard",
	Tempest: "Tempest",
	Terakian: "Terakian",
	Thornwood: "Thornwood",
	Tholis: "Tholis",
	Thyrian: "Thyrian",
	Toryn: "Toryn",
	Verdan: "Verdan",
	Veris: "Veris",
	Veteran: "Veteran",
	Woodfolk: "Woodfolk",
	Xenomorph: "Xenomorph",

	//Card types
	Setting: "Setting",
	Thunderstone: "Thunderstone",
	Monster: "Monster",
	Guardian: "Guardian",
	Trap: "Trap",
	Treasure: "Treasure",
	Hero: "Hero",
	Village: "Village",

	//Sets
	Base: "Base",
	Doomgate_Legion: "Doomgate Legion",
	Dragonspire: "Dragonspire",
	Promo: "Promo",
	Thornwood_Siege: "Thornwood Siege",
	Wrath_Of_The_Elements: "Wrath Of The Elements",

	//===Heart of Doom===
	Heart_of_Doom: "Heart of Doom",
	//Heroes
	Bluefire: "Bluefire",
	Canon: "Canon",
	Dark: "Dark",
	Highland: "Highland",
	Isri: "Isri",
	Jondul: "Jondul",
	Nyth: "Nyth",

	//Village
	Bag_of_Holding: "Bag of Holding",
	Belzurs_Blessing: "Belzur\'s Blessing",
	Chalice_Mace: "Chalice Mace",
	Dredging_Net: "Dredging Net",
	Grognard: "Grognard",
	Jondul_Bow: "Jondul Bow",
	Magma_Hammer: "Magma Hammer",
	Ritual_of_Cleansing: "Ritual of Cleansing",
	Short_Spear: "Short Spear",
	Soulfire: "Soulfire",
	Swamp_Provisions: "Swamp Provisions",
	Village_Thief: "Village Thief",
	War_Hero: "War Hero",

	//Monsters
	Abyssal_Darkspawn: "Abyssal &bull; Darkspawn",
	Basilisk_Animal: "Basilisk &bull; Animal",
	Doppelganger_Humanoid: "Doppelganger &bull; Humanoid",
	Dryad: "Dryad",
	Lizardfolk_Humanoid: "Lizardfolk &bull; Humanoid",
	Spider_Animal: "Spider &bull; Animal",
	Undead_Spectral: "Undead &bull; Spectral",

	//Other
	Gem_Treasure: "Gem Treasure",
	Last_Refuge: "Last Refuge",
	Mournwater_Swamp: "Mournwater Swamp",
	Rite_of_Banishing: "Rite of Banishing",
	Stone_of_Fate: "Stone of Fate",
	The_Last_Doomknight: "The Last Doomknight",
	Mournwater_Witch: "Mournwater Witch",

	//===Towers of Ruin===
	Towers_of_Ruin: "Towers of Ruin",

	//Heroes
	Aird: "Aird",
	Bhoidwood: "Bhoidwood",
	Caliginite: "Caliginite",
	Criochan: "Criochan",
	Deepstrider: "Deepstrider",
	Drua: "Drua",
	Glamercast: "Glamercast",
	Sternnkin: "Sternnkin",
	Thundermage: "Thundermage",
	Veilminder: "Veilminder",
	Whetmage: "Whetmage",

	//Monsters
	Burnmarked_Fire: "Burnmarked &bull; Fire",
	Corvaxis_Avian: "Corvaxis &bull; Avian",
	Djinni_Efreet: "Djinni &bull; Efreet",
	Dragon_Fire: "Dragon &bull; Fire",
	Kobold_Humanoid: "Kobold &bull; Humanoid",
	Ogre_Humanoid: "Ogre &bull; Humanoid",
	Undead_Horde: "Undead &bull; Horde",
	Undead_Skeleton: "Undead &bull; Skeleton",
	Undead_Treefolk: "Undead &bull; Treefolk",

	//Village
	Bandia_s_Wisdom: "Bandia\'s Wisdom",
	Battle_scarred_Soldier: "Battle-scarred Soldier",
	Bounty_Hunter: "Bounty Hunter",
	Dancing_Sword: "Dancing Sword",
	Dwarven_Bear_Hammer: "Dwarven Bear Hammer",
	Falcon_Arbalest: "Falcon Arbalest",
	Filigree_Amulet: "Filigree Amulet",
	Innkeeper: "Innkeeper",
	King_Caelan_s_Writ: "King Caelan\'s Writ",
	Longsword: "Longsword",
	Mass_Teleport: "Mass Teleport",
	Moonstone: "Moonstone",
	Pike: "Pike",
	Ranger_s_Wilderness_Map: "Ranger\'s Wilderness Map",
	Royal_Summons: "Royal Summons",
	Snakehead_Flail: "Snakehead Flail",
	Smuggler: "Smuggler",
	Summon_Storm: "Summon Storm",
	Veteran_Trainer: "Veteran Trainer",

	//Misc
	Belac: "Belac",
	Orseg: "Orseg",
	Stramst: "Stramst",
	Dungeon: "Dungeon",
	Wilderness: "Wilderness",
	Curses: "Curses",

	//===Caverns of Bane===
	Caverns_of_Bane: "Caverns of Bane",

	//Heroes
	Disowned: "Disowned",
	Forcemage: "Forcemage",
	Patternmage: "Patternmage",
	Rapparee: "Rapparee",
	Skinshifter: "Skinshifter",
	Spellsword: "Spellsword",
	Tuath: "Tuath",

	//Village
	Animal_Talisman: "Animal Talisman",
	Bloodhound: "Bloodhound",
	Castellan: "Castellan",
	Charm_of_Venery: "Charm of Venery",
	Dwarven_Ale: "Dwarven Ale",
	Force_Blast: "Force Blast",
	Historian: "Historian",
	Liveoak_Staff: "Liveoak Staff",
	Owl_Eyes: "Owl Eyes",
	Reckless_Conjure: "Reckless Conjure",
	Seedbomb: "Seedbomb",
	Taproot_Blade: "Taproot Blade",
	Thorn_Caltrops: "Thorn Caltrops",

	//Monster
	Chiroptid_Humanoid: "Chiroptid &bull; Humanoid",
	Doomknight_Undead: "Doomknight &bull; Undead",
	Elemental_Salamander: "Elemental &bull; Salamander",
	Ooze_Cavern: "Ooze &bull; Cavern",
	Troll_Humanoid: "Troll &bull; Humanoid",
	Worm_Vermin: "Worm &bull; Vermin",

	//Thunderstone Bearer
	Goron_Singlemind: "Goron Singlemind",
	Mowtil_Djinni_Lich: "Mowtil, Djinni Lich",
	Xobmokt_Ichor_King: "Xobmokt, Ichor King",

	//Other
	Treasures_of_Caligin: "Treasures of Caligin",

	//===Root of Corruption===
	Root_of_Corruption: "Root of Corruption",

	//Heroes

	Armsman: "Armsman",
	Blademage: "Blademage",
	Honormain: "Honormain",
	Moonclaw: "Moonclaw",
	Profaned: "Profaned",
	Silvertongue: "Silvertongue",
	Woodguard: "Woodguard",

	//Monsters

	Djinnbound_Corrupted: "Djinnbound &bull; Corrupted",
	Elemental_Earth: "Elemental &bull; Earth",
	Gnoll_Humanoid: "Gnoll &bull; Humanoid",
	Incarnate_Abyssal: "Incarnate &bull; Abyssal",
	Royal_Guard_Corrupted: "Royal Guard &bull; Corrupted",
	Summon_Old_World: "Summon &bull; Old World",

	//Guardian
	Archdruid: "Archdruid",

	//Thunderstone Bearer
	King_Caelan: "King Caelan",

	//Village
	Blood_Debt: "Blood Debt",
	Circle_of_Protection: "Circle of Protection",
	Cursed_Dagger: "Cursed Dagger",
	Debased_Wizard: "Debased Wizard",
	Elven_Waybread: "Elven Waybread",
	Greatsword: "Greatsword",
	Hedge_Witch: "Hedge Witch",
	Hysterical_Villager: "Hysterical Villager",
	Labrys: "Labrys",
	Liveoak_Bow: "Liveoak Bow",
	Maul: "Maul",
	Mind_Control: "Mind Control",
	Rage_of_the_Disowned: "Rage of the Disowned",
	Stablehand: "Stablehand",
	Tincture_of_Victims: "Tincture of Victims",

	//Treasure
	Treasures_of_Dun_Ordha: "Treasures of Dun Ordha",

    //===Starter Set===
    Starter_Set: "Starter Set",

    //Heroes
    Blackhand: "Blackhand",
    Cathedral: "Cathedral",
    Garrison: "Garrison",
    Tower: "Tower",
    Wildwood: "Wildwood",

    //Village
    Curative_Draught: "Curative Draught",
    Radiant_Orb: "Radiant Orb",
    Insight: "Insight",
    Rolling_Sparks: "Rolling Sparks",
    Summon_Aid: "Summon Aid",
    Novice_Mage: "Novice Mage",
    Opportunist: "Opportunist",
    Bardiche: "Bardiche",
    Champion_Sword: "Champion Sword",
    Runed_Hammer: "Runed Hammer",

    //Monster
    Bestial_Humanoid: "Bestial &bull; Humanoid",
    Virulent_Undead: "Virulent &bull; Undead",
    Behemoth_Giant: "Behemoth &bull; Giant",

    //Thunderstone Bearer
    Wraithlyn_Dragon_General: "Wraithlyn, Dragon General",

	//Diseases
	Diseases: "Diseases",

	//===Numenera===
	Numenera: "Numenera",

	//Heroes
	Aeon: "Aeon",
	Charming: "Charming",
	Clever: "Clever",
	Graceful: "Graceful",
	Intelligent: "Intelligent",
	Learned: "Learned",
	Mystic: "Mystic",
	Rugged: "Rugged",
	Stealthy: "Stealthy",
	Strong: "Strong",
	Strong_Willed: "Strong-Willed",
	Swift: "Swift",
	Tough: "Tough",

	//Village
	Backpack: "Backpack",
	Bio_Energy_Cutter: "Bio-Energy Cutter",
	Bio_Salvager: "Bio-Salvager",
	Chemical_Injector: "Chemical Injector",
	Dart_Thrower: "Dart Thrower",
	Disruption_Blade: "Disruption Blade",
	Fearemaker: "Fearmaker",
	Mental_Scrambler: "Mental Scrambler",
	Nevajin: "Nevajin",
	Paired_Swords: "Paired Swords",
	Partisan: "Partisan",
	Phase_Disruptor: "Phase Disruptor",
	Punch_Dagger: "Punch Dagger",
	Ray_Emitter: "Ray Emitter",
	Retaliation_Nodule: "RetaliationNodule",
	Shield_Bearer: "Shield Bearer",
	Shock_Nodule: "Shock Nodule",
	Unstable_Crytals: "Unstable Crystals",
	Village_Headman: "Village Headman",
	Village_Jack: "Village Jack",
	Warder: "Warder",

	//Monster
	Abhuman: "Abhuman",
	Beasts: "Beasts",
	Verminous: "Verminous",
	Automatons: "Automatons",
	Bandit_Raider: "Bandit &bull; Raider",
	Infected: "Infected",
	Ultraterrestrial: "Ultraterrestrial",
	Ancient_Ones: "Ancient Ones",
	Horrors: "Horrors",
	Monstrosity: "Monstrosity",

	//Treasure
	Treasures_of_Numenera: "Treasures of Numenera",

	//Thunderstone Bearer
	Convergence_Master: "Convergence Master",
	Sarrak: "Sarrak",
	Phylethis: "Phylethis",

	//Diseases
	Iron_Wind: "Iron Wind",

	//==Worlds Collide
	Worlds_Collide: "Worlds Collide",
	Void_Apocalypse: "Void Apocalypse",

	//===Into the Abyss===
	Into_the_Abyss: "Into the Abyss",
	Oblivion_Deathkeeper: "Oblivion, Deathkeeper",



	//UI
	Allowed: "Allowed",
	Disallowed: "Disallowed",
	Disease: "Disease",
	If_Required: "If Required",
	Instructions: "Click a card to toggle it, or a set to toggle all cards in that set",
	Maybe: "Maybe",
	MonsterLevels123: "Monster Levels 1, 2, &amp; 3",
	No: "No",
	QuickD6: "Quick d6",
	RandomBoard: "Random Board",
	Randomize: "Randomize",
	Required: "Required",
	Set: "Set",
	Sets: "Sets",
	ShowCode: "Display Set Codes",
	Show_Debug_Information: "Show Debug Information",
	Solo_Game: "Solo Game",
	Special: "Special",
	Special_Diseases: "Special Diseases",
	Standard: "Standard",
	Thunderstone_Advance: "Thunderstone Advance",
	Use_Special_Diseases: "Use Special Diseases",
	VillageLimits: "Village Type Limits",
	Yes: "Yes"
};

LANG.de = {
	//Village
	Ambrosia: "Ambrosia",
	Amulet_of_Power: "Amulet der St&auml;rke",
	Arcane_Energies: "Arkane Energie",
	Banish: "Verbannung",
	Barkeep: "Wirt",
	Battle_Fury: "Kampfeswut",
	Blacksmith: "Schmied",
	Blessed_Hammer: "Gesegneter Hammer",
	Bluefire_Staff: "Stab des blauen Feuers",
	Border_Guard: "Grenzwache",
	Burnt_Offering: "Brandopfer",
	Chieftan_s_Drum: "H&auml;uptlingstrommel",
	Claymore: "Breitschwert",
	Creeping_Death: "Schleichender Tod",
	Cursed_Bow: "Verfluchter Bogen",
	Cursed_Mace: "Verfluchter Streitkolben",
	Cyclone: "Zyklon",
	Divine_Staff: "Heiliger Stab",
	Doomgate_Squire: "Knappe von Doomgate",
	Drill_Sergeant: "Ausbilder",
	Elite_Militia: "Elite-Miliz",
	Feast: "Festmahl",
	Fireball: "Feuerball",
	Flaming_Sword: "Flammenschwert",
	Flask_of_Oil: "&Ouml;lflasche",
	Foresight_Elixir: "Elixier der Voraussicht",
	Fortune_Teller: "Wahrsagerin",
	Frost_Bolt: "Frostblitz",
	Frost_Giant_Axe: "Axt des Frostriesen",
	Glowberries: "Gl&uuml;hbeeren",
	Goodberries: "Zauberbeeren",
	Greed_Blade: "Klinge der Habgier",
	Guardian_Blade: "Besch&uuml;tzerklinge",
	Guide: "Stadtf&uuml;hrer",
	Guiding_Light: "F&uuml;hrungsleuchte",
	Hatchet: "Beil",
	Highland_Officer: "Berglandoffizier",
	Illusory_Blade: "Klinge der T&auml;uschung",
	Insight_Blade: "Klinge der Erkenntnis",
	Lantern: "Laterne",
	Lightstone_Gem: "Magischer Lichtstein",
	Magi_Staff: "Zauberstab",
	Magic_Missile: "Magisches Geschoss",
	Magical_Aura: "Magische Aura",
	Pawnbroker: "Pfandleiher",
	Pious_Chaplain: "Fromme Seelsorgerin",
	Plaguesmiter: "Seuchentotschl&auml;ger",
	Polearm: "Hellebarde",
	Polymorph: "Gestaltwandlung",
	Power_Word_Kill: "Machtwort: T&ouml;ten",
	Quartermaster: "Quartiermeister",
	Recurve_Bow: "Reflexbogen",
	Sage: "Weiser Mann",
	Scout: "Kundschafter",
	Scroll_of_Chaos: "Schriftrolle des Chaos",
	Short_Bow: "Kurzbogen",
	Short_Sword: "Kurzschwert",
	Silverstorm: "Silbersturm",
	Skullbreaker: "Sch&auml;delspalter",
	Soul_Gem: "Seelenjuwel",
	Soul_Jar: "Seelengef&auml;&szlig;",
	Spear: "Speer",
	Spirit_Blast: "Explosion des Geistes",
	Spirit_Hunter: "J&auml;ger des Geistes",
	Spoiled_Food: "Verdorbene Speise",
	Stalking_Spell: "Bann der Verfolgung",
	Tavern_Brawl: "Kneipenschl&auml;gerei",
	Tax_Collector: "Steuereintreiber",
	Thieves_Blade: "Diebesklinge",
	Thunder_Ring: "Ring des Donners",
	Time_Bend: "Kr&uuml;mmung der Zeit",
	Toryn_Gauntlet: "Torischer Panzerhandschuh",
	Town_Guard: "Stadtwache",
	Trader: "H&auml;ndler",
	Trainer: "Lehrmeisterin",
	Unicorn_Steak: "Einhornfleisch",
	Village_Mob: "Dorfgesindel",
	Warhammer: "Kriegshammer",

	//Monster
	Abyssal: "Tiefenwesen",
	Abyssal_Malformed: "Tiefenwesen &bull; Missgestaltet",
	Abyssal_Thunderspawn: "Tiefenwesen &bull; Sturmgespenst",
	Bandit_Humanoid: "R&auml;uber &bull; Humanoid",
	Centaur: "Zentaur",
	Cultist_Humanoid: "Kultist &bull; Humanoid",
	Dark_Enchanted: "Dunkles Zauberwesen",
	Doomknight_Humanoid: "Ritter der Verdammnis &bull; Humanoid",
	Dragon: "Drache",
	Dragon_Humanoid: "Drache &bull; Humanoid",
	Elemental_Fire: "Elementar &bull; Feuer",
	Elemental_Nature: "Elementar &bull; Natur",
	Elemental_Pain: "Elementar &bull; Qual",
	Enchanted: "Zauberwesen",
	Evil_Druid_Humanoid: "Teuflischer Druide &bull; Humanoid",
	Giant: "Riese",
	//Golem: "Golem",
	Horde: "Horde",
	Humanoid: "Humanoid",
	Hydra_Dragon: "Hydra &bull; Drache",
	Ooze: "Schleim",
	Orc_Humanoid: "Ork &bull; Humanoid",
	Raider_Humanoid: "Pl&uuml;nderer, Humanoid",
	Siege: "Belagerung",
	The_Swarm: "Der Schwarm &bull; Tier",
	Undead_Doom: "Untoter &bull; Verdammter",
	Undead_Lich: "Untoter &bull; Leiche",
	Undead_Plague: "Untoter &bull; Verseucht",
	Undead_Spirit: "Untoter &bull; Geist",
	Undead_Stormwraith: "Untoter &bull; Sturmgespenst",
	Verminfolk_Animal: "Sch&auml;dlingsvolk &bull; Tier",
	Werewolf: "Werwolf",

	//Thunderstones
	Stone_of_Agony: "Stein der H&ouml;llenqual",
	Stone_of_Blight: "Stein des Pesthauchs",
	Stone_of_Avarice: "Stein der Habgier",
	Stone_of_Mystery: "Stein der Mysterien",
	Stone_of_Scorn: "Stein der Verachtung",
	Stone_of_Terror: "Stein des Terrors",

	//Traps
	Trap_Death: "Falle &bull; t&ouml;dlich",
	Trap_Dire: "Falle &bull; grausam",
	Trap_Draconic: "Falle &bull; drakonisch",

	//Guardians
	Dark_Champion: "Dunkler Meister",
	Death_Sentinel: "W&auml;chter des Todes",
	Guardian_of_Night: "W&auml;chter der Nacht",
	Guardian_of_Revenge: "W&auml;chter der Rache",
	Guardian_of_Strength: "W&auml;chter der St&auml;rke",
	Guardian_of_Torment: "W&auml;chter der Qualen",
	Guardian_of_Virulence: "W&auml;chter der Bosheit",
	Unholy_Guardian: "Unheiliger W&auml;chter",

	//Treasures
	Amulet_Treasure: "Amulett &bull; Schatz",
	Figurine_Treasure: "Figur &bull; Schatz",
	Ulbrick_s_Treasure: "Ulbricks Schatz",

	//Settings
	//Barrowsdale: "Barrowsdale",
	//Doomgate: "Doomgate",
	Dragonspire: "Drachenturm",
	Dreadwatch: "Furchteinfl&ouml;&szlig;ende Wache",
	Feayn_Swamp: "Feaynischer Sumpf",
	//Grimhold: "Grimhold",
	Regian_Cove: "Regische Bucht",
	//Stormhold: "Stormhold",
	Thornwood_Forest: "Wald von Thornwood",

	//Heroes
	Amazon: "Amazone",
	Belzur: "Belzurier",
	Blind: "Blinder",
	Cabal: "Cabalier",
	Chalice: "Gralsritter",
	Chulian: "Chulianer",
	//Clan: "Clan",
	Deep: "Minen-K&auml;mpfer",
	Diin: "Diin",
	Drunari: "Drunarier",
	Divine: "Geweihter",
	Dwarf: "Zwerg",
	Elf: "Elf",
	Evoker: "Beschw&ouml;rer",
	Feayn: "Feayn",
	Flame: "Flamme",
	Gangland: "Gangl&auml;nder",
	Gohlen: "Gohlier",
	Gorinth: "Gorinther",
	Half_Orc: "Halb-Ork",
	Harruli: "Harrulier",
	Krell: "Krell",
	Lorigg: "Lorigg",
	Lurker: "Lauscher",
	Magehunter: "Magierj&auml;ger",
	Nightblade: "Nachtklinge",
	Outlands: "Barbar",
	//Phalanx: "Phalanx",
	Redblade: "Rote Klinge",
	Regian: "Regier",
	Runespawn: "Runenmagier",
	Selurin: "Selurier",
	Sidhe: "Sidhier",
	Slynn: "Slynn",
	Stoneguard: "Steinwache",
	Tempest: "Sturm-K&auml;mpfer",
	Terakian: "Terakianer",
	Thornwood: "Thornwood",
	Tholis: "Tholier",
	Thyrian: "Thyrier",
	Toryn: "Torier",
	Verdan: "Verdaner",
	Veris: "Veris",
	//Veteran: "Veteran",
	Woodfolk: "Waldvolk",

	//Card types
	Setting: "Szenario",
	Thunderstone: "Donnerstein",
	Monster: "Monster",
	Guardian: "W&auml;chter",
	Trap: "Falle",
	Treasure: "Schatz",
	Hero: "Held",
	Village: "Dorf",

	//Sets
	Base: "Basisspiel",
	Doomgate_Legion: "Die W&auml;chter von Doomgate",
	Dragonspire: "Drachenturm",
	Promo: "Promo",
	Thornwood_Siege: "Belagerung von Thornwood",
	Wrath_Of_The_Elements: "Zorn der Elemente",

	//===Heart of Doom===
	//Heroes
	Bluefire: "Blaues Feuer",
	Canon: "Kanoniker",
	Dark: "Dunkle",
	Highland: "Bergl&auml;nder",
	Isri: "Isrier",
	Jondul: "Jondulier",
	Nyth: "Nythier",

	//Village
	Bag_of_Holding: "Beutesack",
	Belzurs_Blessing: "Belzurs Segnung",
	Chalice_Mace: "Heiliger Streitkolben",
	Dredging_Net: "Schleppnetz",
	Grognard: "Veteran",
	Jondul_Bow: "Jondulischer Bogen",
	Magma_Hammer: "Magmahammer",
	Ritual_of_Cleansing: "Ritual der Reinigung",
	Short_Spear: "Kurzspeer",
	Soulfire: "Seelenfeuer",
	Swamp_Provisions: "Sumpfvorr&auml;te",
	Village_Thief: "Dorfdieb",
	War_Hero: "Kriegsheld",

	//Monsters
	Abyssal_Darkspawn: "Tiefenwesen &bull; D&uuml;stere Brut",
	Basilisk_Animal: "Basilisk &bull; Tier",
	Doppelganger_Humanoid: "Doppelg&auml;nger &bull; Humanoid",
	Dryad: "Baumgeist",
	Lizardfolk_Humanoid: "Echsenvolk &bull; Humanoid",
	Spider_Animal: "Spinne &bull; Tier",
	Undead_Spectral: "Untoter &bull; Gespenstisch",

	//===Towers of Ruin===
	Towers_of_Ruin: "Die T&uuml;rme des Verderbens",

	//Heroes
	Aird: "Airdaner",
	Bhoidwood: "Bhoidwood",
	Caliginite: "Caliginer",
	Criochan: "Criochaner",
	Deepstrider: "Dunkellauf",
	Drua: "Druaner",
	Glamercast: "Glamercast",
	Sternnkin: "Sternnsippe",
	Thundermage: "Donnermagier",
	Veilminder: "Schleierw&auml;chter",
	Whetmage: "Wassermagier",

	//Monsters
	Burnmarked_Fire: "Gebranntmarkter &bull; Feuer",
	Corvaxis_Avian: "Corvaxis &bull; Vogelartig",
	Djinni_Efreet: "Dschinn &bull; Efreet",
	Dragon_Fire: "Drache &bull; Feuer",
	Kobold_Humanoid: "Kobold &bull; Humanoid",
	Ogre_Humanoid: "Oger &bull; Humanoid",
	Undead_Horde: "Untoter &bull; Horde",
	Undead_Skeleton: "Untoter &bull; Skelett",
	Undead_Treefolk: "Untoter &bull; Baumvolk",

	//Village
	Bandia_s_Wisdom: "Bandias Weisheit",
	Battle_scarred_Soldier: "Kampferprobter Soldat",
	Bounty_Hunter: "Kopfgeldj&auml;gerin",
	Dancing_Sword: "Tanzendes Schwert",
	Dwarven_Bear_Hammer: "Zwergen-B&auml;renhammer",
	Falcon_Arbalest: "Falken-Armbrust",
	Filigree_Amulet: "Filigranes Amulett",
	Innkeeper: "Gastwirt",
	King_Caelan_s_Writ: "K&ouml;nig Caelans Erlass",
	Longsword: "Langschwert",
	Mass_Teleport: "Massenteleportation",
	Moonstone: "Mondstein",
	Pike: "Pike",
	Ranger_s_Wilderness_Map: "Ranger-Wildniskarte",
	Royal_Summons: "K&ouml;niglicher Aufruf",
	Snakehead_Flail: "Schlangenflegel",
	Smuggler: "Schmuggler",
	Summon_Storm: "Sturmbeschw&ouml;rung",
	Veteran_Trainer: "Erfahrener Ausbilder",

	//Misc
	Belac: "Belac",
	Orseg: "Orseg",
	Stramst: "Stramst",
	Dungeon: "Dungeon",
	Wilderness: "Wildnis",
	Curses: "Fluch",

	//===Caverns of Bane===
	Caverns_of_Bane: "Verfluchte H&ouml;hlen",

	//Heroes
	Disowned: "Verleugnete",
	Forcemage: "Kraftmagier",
	Patternmage: "Strukturmagier",
	Rapparee: "Rapparee",
	Skinshifter: "Hautwandler",
	Spellsword: "Zauberschwerter",
	Tuath: "Tuather",

	//Village
	Animal_Talisman: "Talisman des Tieres",
	Bloodhound: "Bluthund",
	Castellan: "Kastellan",
	Charm_of_Venery: "Amulett der Jagd",
	Dwarven_Ale: "Zwergenbier",
	Force_Blast: "Druckwelle der Macht",
	Historian: "Geschichtsschreiber",
	Liveoak_Staff: "Stab der Lebenseiche",
	Owl_Eyes: "Eulenaugen",
	Reckless_Conjure: "R&uuml;cksichtslose Beschw&ouml;rung",
	Seedbomb: "Saatbombe",
	Taproot_Blade: "Pfahlwurzelklinge",
	Thorn_Caltrops: "Dornige Erdsterne",

	//Monster
	Chiroptid_Humanoid: "Fledermaus &bull; Humanoid",
	Doomknight_Undead: "Ritter der Verdamnis &bull; Untoter",
	Elemental_Salamander: "Elementar &bull; Salamander",
	Ooze_Cavern: "Schleim &bull; H&ouml;hle",
	Troll_Humanoid: "Troll &bull; Humanoid",
	Worm_Vermin: "Wurm &bull; Ungeziefer",

	//Thunderstone Bearer
	Goron_Singlemind: "Goron der Zielstrebige",
	Mowtil_Djinni_Lich: "Mowtil, Dschinnleiche",
	Xobmokt_Ichor_King: "Xobmokt, K&ouml;nig des G&ouml;tterbluts",

	//Other
	Treasures_of_Caligin: "Sch&auml;tze aus Caligin",

	//===Root of Corruption===
	Root_of_Corruption: "Ursprung alles B&ouml;sen",

	//Heroes

	Armsman: "Soldaten",
	Blademage: "Klingenmagier",
	Honormain: "Ehrengarde",
	Moonclaw: "Mondklauen",
	Profaned: "Entweihte",
	Silvertongue: "Silberzungen",
	Woodguard: "Baumwachen",

	//Monsters

	Djinnbound_Corrupted: "Besessener &bull; Verdorben",
	Elemental_Earth: "Elementar &bull; Erde",
	Gnoll_Humanoid: "Gnoll &bull; Humanoid",
	Incarnate_Abyssal: "Leibhaftiger &bull; Tiefenwesen",
	Royal_Guard_Corrupted: "K&ouml;nigliche Garde &bull; Bestechlich",
	Summon_Old_World: "Beschw&ouml;rer &bull; Alte Welt",

	//Guardian
	Archdruid: "&Auml;ltester Druide",

	//Thunderstone Bearer
	King_Caelan: "K&ouml;nig Caelan",

	//Village
	Blood_Debt: "Blutschuld",
	Circle_of_Protection: "Schutzkreis",
	Cursed_Dagger: "Verfluchter Dolch",
	Debased_Wizard: "Verdorbene Zauberin",
	Elven_Waybread: "Elfisches Wegebrot",
	Greatsword: "Grossschwert",
	Hedge_Witch: "Erfahrene Hexe",
	Hysterical_Villager: "Hysterischer Dorfbewohner",
	Labrys: "Labrys",
	Liveoak_Bow: "Bogen der Lebenseiche",
	Maul: "Schl&auml;gel",
	Mind_Control: "Gedankenkontrolle",
	Rage_of_the_Disowned: "Wut der Verleugneten",
	Stablehand: "Stallbursche",
	Tincture_of_Victims: "Opfer-Tinktur",

	//Treasure
	Treasures_of_Dun_Ordha: "Sch&auml;tze von Dun Ordha",

	//Other
	Gem_Treasure: "Schatz &bull; Edelstein",
	Heart_of_Doom: "Herz der Verdammnis",
	Last_Refuge: "Letzte Zuflucht",
	Mournwater_Swamp: "Sumpf am Trauersee",
	Rite_of_Banishing: "Ritual der Verbannung",
	Stone_of_Fate: "Stein des Schicksals",
	The_Last_Doomknight: "Der letzte Ritter der Verdammnis",
	Mournwater_Witch: "Hexe des Trauersees",

	//UI
	Special_Diseases: "Spezielle Krankheiten",
	Solo_Game: "Solo Spiel",
	Show_Debug_Information: "Debug Infos",
	Required: "auf jeden Fall",
	Allowed: "erlaubt",
	Disallowed: "verboten",
	Instructions: "Klicke zum Wechseln oder Ein- und Ausschalten",
	QuickD6: "Schnell d6",
	Randomize: "Setup generieren",
	Set: "Set",
	Use_Special_Diseases: "Spezielle Krankheiten",
	Yes: "immer",
	No: "nie",
	Maybe: "zuf&auml;llig",
	If_Required: "bei Bedarf",

	"":""
};

LANG.fr = {
	//Village
	Ambrosia: "Ambroisie",
	Amulet_of_Power: "Amulette de Pouvoir",
	Arcane_Energies: "Energies des Arcanes",
	Banish: "Bannir",
	Barkeep: "Tavernier",
	Battle_Fury: "Fureur au Combat",
	Blacksmith: "Forgeron",
	Blessed_Hammer: "Marteau B&eacute;ni",
	Border_Guard: "Garde Fronti&egrave;re",
	Claymore: "Claymore",
	Creeping_Death: "Mort Rampante",
	Cursed_Mace: "Masse Maudite",
	Cyclone: "Cyclone",
	Divine_Staff: "B&acirc;ton Divin",
	Doomgate_Squire: "Ecuyer Doomgate",
	Feast: "Festin",
	Fireball: "Boule de Feu",
	Flaming_Sword: "&Eacute;p&eacute;e de Feu",
	Flask_of_Oil: "Fiole d\'Huile",
	Foresight_Elixir: "Elixir de vision",
	Fortune_Teller: "Cartomancienne",
	Glowberries: "Baies Luisantes",
	Goodberries: "Bonnes Baies",
	Greed_Blade: "Lame de Cupidit&eacute;",
	Hatchet: "Hachette",
	Illusory_Blade: "Lame d\'Illusion",
	Lantern: "Lanterne",
	Lightstone_Gem: "Gemme de Lumi&egrave;re",
	Magi_Staff: "B&acirc;ton de Mage",
	Magic_Missile: "Projectile Magique",
	Magical_Aura: "Aura Magique",
	Pawnbroker: "Pr&ecirc;teur sur Gages",    
	Pious_Chaplain: "Chapelaine Pieuse", 
	Polearm: "Arme d\'Hast",
	Sage: "Sage",
	Short_Bow: "Arc Court",
	Short_Sword: "Ep&eacute;e Courte",
	Soul_Jar: "Jarre de l\'Ame",
	Spear: "Lance",
	Spirit_Blast: "Explosion Spirituelle",
	Spirit_Hunter: "Chasseur d\'Esprit",
	Tavern_Brawl: "Bagarre &agrave; la Taverne",
	Tax_Collector: "Percepteur",
	Town_Guard: "Garde de la Ville",
	Trainer: "Formateur",
	Warhammer: "Marteau de Guerre",

	//Monster
	Abyssal: "Abyssal",
	Abyssal_Thunderspawn: "Abyssal &bull; Rejeton Tonnerre",
	Cultist_Humanoid: "Cultiste &bull; Humano&iuml;de",
	Doomknight_Humanoid: "Chevalier Maudit &bull; Humano&iuml;de",
	Dragon: "Dragon",
	Dragon_Humanoid: "Dragon &bull; Humano&iuml;d",
	Elemental_Nature: "El&eacute;mentaire &bull; Nature",
	Elemental_Pain: "El&eacute;mentaire &bull; Douleur",
	Enchanted: "Enchant&eacute;",
	Evil_Druid_Humanoid: "Druide Mal&eacute;fique &bull; Humano&iuml;de",
	Golem: "Golem",
	Horde: "Horde",
	Humanoid: "Humano&iuml;de",
	Ooze: "Visqueux",
	The_Swarm: "L\'Essaim",
	Undead_Doom: "Mort-vivant &bull; Maudit",
	Undead_Spirit: "Mort-vivant &bull; Esprit",
	Undead_Stormwraith: "Mort-vivant &bull; Spectre temp&ecirc;te",
	Werewolf: "Loup-Garou",

	//Thunderstones
	Stone_of_Agony: "Pierre d\'agonie",
	Stone_of_Avarice: "Pierre d\'Avarice",
	Stone_of_Mystery: "Pierre Myst&egrave;re",

	//Traps
	Trap_Death: "Pi&egrave;ge &bull; Mortel",
	Trap_Dire: "Pi&egrave;ge &bull; Sinistre",

	//Guardians
	Dark_Champion: "Sombre Champion",
	Death_Sentinel: "Sentinelle Mortelle",
	Unholy_Guardian: "Gardien Impie",
	Guardian_of_Strength: "Gardien de la Force",
	Guardian_of_Revenge: "Gardien de la Vengeance",
	Guardian_of_Virulence: "Gardien de Pestilence",

	//Treasures
	Amulet_Treasure: "Tr&eacute;sor Amulette",
	Ulbrick_s_Treasure: "Tr&eacute;sor d\'Ulbrick",

	//Heroes
	Amazon: "Amazone",
	Blind: "Aveugle",
	Chalice: "Calice",
	Clan: "Clan",
	Deep: "Profond",    
	Diin: "Diin",
	Drunari: "Drunari",
	Divine: "Divin",
	Dwarf: "Nain",
	Elf: "Elfe",
	Feayn: "Feayn",
	Gangland: "Bas-fonds",
	Gohlen: "Gohlen",
	Harruli: "Harruli",
	Lorigg: "Lorigg",
	Outlands: "Etranger",
	Redblade: "Lamerouge",
	Regian: "Regian",
	Runespawn: "Runespawn",
	Selurin: "Selurin",
	Sidhe: "Sidhe",
	Slynn: "Slynn",
	Tempest: "Temp&ecirc;te",
	Tholis: "Tholis",
	Thyrian: "Thyrian",
	Toryn: "Toryn",
	Verdan: "Verdan",

	//Card types
	//Setting: "Setting",
	Thunderstone: "Thunderstone",
	Monster: "Monstre",
	Guardian: "Gardien",
	Trap: "Pi&egrave;ge",
	Treasure: "Tr&eacute;sor",
	Hero: "H&eacute;ros",
	Village: "Village",

	//Sets
	Base: "Base",
	Doomgate_Legion: "L&eacute;gion Doomgate",
	Dragonspire: "Le pic du dragon",
	Promo: "Promo",
	Wrath_Of_The_Elements: "Col&egrave;re des &eacute;l&eacute;ments",

	//UI
	Special_Diseases: "Maladies Sp&eacute;ciales",
	Solo_Game: "Jeu Solo",
	Show_Debug_Information: "Montrer les infos Debug",
	Required: "Requis",
	Allowed: "Permis",
	Disallowed: "Exclu",
	Instructions: "Cliquer sur une carte pour changer son statut, ou sur un set pour changer l\'&eacute;tat de toutes ses cartes",
	QuickD6: "d6 Rapide",
	Randomize: "G&eacute;n&eacute;rer",
	Set: "Set",
	Use_Special_Diseases: "Maladies sp&eacute;ciales",
	Yes: "Oui",
	No: "Non",
	Maybe: "Enventuellement",
	If_Required: "Si requis",

	// Promo settings
	Stormhold: "Stormhold",
	Thornwood_Forest: "For&ecirc;t de Thornwood",

	//Dragonspire cards
	Bandit_Humanoid: "Bandit &bull; Humano&iuml;d",
	Barrowsdale: "Barrowsdale",
	Belzur: "Belzur",
	Bluefire_Staff: "B&acirc;ton Feubleu",
	Burnt_Offering: "Offrande Ardente",
	Cabal: "Cabale",
	Chieftan_s_Drum: "Tambour du Chef",
	Chulian: "Chulian",
	Dark_Enchanted: "Enchanteresse Sombre",
	Doomgate: "Doomgate",
	Dragonspire: "Pic du Dragon",
	Dreadwatch: "Dreadwatch",
	Elemental_Fire: "El&eacute;mentaire &bull; Feu",
	Evoker: "Evocateur",
	Feayn_Swamp: "Marais Feayn",
	Figurine_Treasure: "Statuette &bull; Tr&eacute;sor",
	Flame: "Flamme",
	Frost_Bolt: "Eclair de Givre",
	Frost_Giant_Axe: "H&acirc;che de G&eacute;ant du Froid",
	Giant: "G&eacute;ant",
	Gorinth: "Gorinth",
	Grimhold: "Grimhold",
	Guardian_Blade: "L&acirc;me Gardienne",
	Guardian_of_Night: "Gardien de la Nuit",
	Guardian_of_Torment: "Gardien du Tourment",
	Guide: "Guide",
	Half_Orc: "Semi-Orque",
	Hydra_Dragon: "Hydre &bull; Dragon",
	Orc_Humanoid: "Orque &bull; Humano&iuml;de",
	Phalanx: "Phalange",
	Polymorph: "Polymorphe",
	Quartermaster: "Bosco",
	Recurve_Bow: "Arc Recourb&eacute;",
	Regian_Cove: "Havre Regian",
	Scout: "Eclaireur",
	Silverstorm: "Temp&ecirc;te d\'Argent",
	Skullbreaker: "Brisecr&acirc;ne",
	Soul_Gem: "Gemme de l\'Ame",
	Spoiled_Food: "Nourriture g&acirc;t&eacute;e",
	Stone_of_Scorn: "Pierre de M&eacute;pris",
	Stone_of_Terror: "Pierre de Terreur",
	Stoneguard: "Gardepierre",
	Terakian: "Terakian",
	Thunder_Ring: "Anneau du Tonnerre",
	Toryn_Gauntlet: "Gantelet Toryn",
	Trader: "Marchand",
	Trap_Draconic: "Pi&egrave;ge &bull; Draconique",
	Undead_Lich: "Mort-Vivant &bull; Liche",
	Undead_Plague: "Mort-Vivant &bull; Peste",
	Veteran: "V&eacute;t&eacute;ran",

	//Thornwood Siege
	Abyssal_Malformed: "Abyssal &bull; Malform&eacute;",
	Centaur: "Centaure",
	Cursed_Bow: "Arc Maudit",
	Drill_Sergeant: "Sergent Instructeur",
	Elite_Militia: "Milice d\'Elite",
	Guardian_of_Virulence: "Gardien de Pestilence",
	Guiding_Light: "Flambeau",
	Highland_Officer: "Officier Hautes Terres",
	Insight_Blade: "Lame de Perspicacit&eacute;",
	Krell: "Krell",
	Lurker: "Furtif",
	Magehunter: "Chassemage",
	Nightblade: "Lame Nocturne",
	Plaguesmiter: "Rebouteuse",
	Power_Word_Kill: "Mot de Pouvoir: Meurs",
	Raider_Humanoid: "Pillard &bull; Humano&iuml;de",
	Scroll_of_Chaos: "Parchemin du Chaos",
	Siege: "Si&egrave;ge",
	Stalking_Spell: "Sort de Traque",
	Stone_of_Blight: "Pierre de Fl&eacute;trissure",
	Thieves_Blade: "Lame des voleurs",
	Thornwood: "Thornwood",
	Thornwood_Siege: "Si&egrave;ge de Thornwood",
	Time_Bend: "Courbure du Temps",
	Unicorn_Steak: "Steaks de Licorne",
	Veris: "Veris",
	Verminfolk_Animal: "Vermine &bull; Animal",
	Village_Mob: "Foule du Village",
	Woodfolk: "Des Bois",

	"":"" // Always leave this line last
};