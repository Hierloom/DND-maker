export interface Abilitiy {
    value: number;
    proficient: number;
    bonuses: {
        check: string,
        save: string
    }
}

export interface Attributes {
    ac: {
        flat: null;
        calc: string;
        formula: string;
    };
    hp: {
        value: number;
        min: number;
        max: number;
        temp: null;
        tempmax: null;
    };
    init: {
        value: number;
        bonus: number;
    },
    movement: {
        burrow: number;
        climb: number;
        fly: number;
        swim: number;
        walk: number;
        units: string;
        hover: boolean;
    },
    senses: {
        darkvision: number,
        blindsight: number,
        tremorsense: number,
        truesight: number,
        units: string;
        special: string;
    },
    spellcasting: Abilities,
    death: {
        success: number,
        failure: number
    },
    exhaustion: number,
    inspiration: false
}

export interface Details {
    biography: {
      value: string;
      public: string;
    };
    alignment: string;
    race: string;
    background: string;
    originalClass: string;
    xp: {
      value: number;
      min: number;
      max: number;
    };
    appearance: string;
    trait: string;
    ideal: string;
    bond: string;
    flaw: string;
}

export interface Traits {
    size: Sizes,
    di: {
      value: [],
      custom: string
    },
    dr: {
      value: [],
      custom: string
    },
    dv: {
      value: [],
      custom: string
    },
    ci: {
      value: [],
      custom: string
    },
    languages: {
      value: [],
      custom: string
    },
    weaponProf: {
      value: [],
      custom: string
    },
    armorProf: {
      value: [],
      custom: string
    },
    toolProf: {
      value: [],
      custom: string
    }
}

export interface Currency {
    currency: {
        pp: number,
        gp: number,
        ep: number,
        sp: number,
        cp: number
    },
}

export interface Skill {
    value: ProficiencyLevel,
    ability: Abilities,
    bonuses: {
      check: string,
      passive: string
    }
}

export enum ProficiencyLevel {
    NotProficient = 0,
    HalfProficient = 0.5,
    Proficient = 1,
    Expertise = 2,
}

export enum Abilities {
    Strength = 'str',
    Dexterity = 'dex',
    Constitution = 'con',
    Intelligence = 'int',
    Wisdom = 'wis',
    Charisma = 'cha',
}

export enum Skills {
    Acrobatics = 'acr',
    AnimalHandling = 'ani',
    Arcana = 'arc',
    Athletics = 'ath',
    Deception = 'dec',
    History = 'his',
    Insight = 'ins',
    Initimidation = 'itm',
    Investigation = 'inv',
    Medicine = 'med',
    Nature = 'nat',
    Perception = 'prc',
    Performance = 'prf',
    Persuasion = 'per',
    Religion = 'rel',
    SleightOfHand = 'slt',
    Stealth = 'ste',
    Survival = 'sur',
}

export enum Sizes {
    small = 'sma',
    medium = 'med',
    large = 'lar',
    giant = 'gia',
}

export interface CharacterSheet {
    id: string,
    name: string;
    type: string;
    img: string;
    data: {
        abilities: {
            [Abilities.Strength]: Abilitiy;
            [Abilities.Dexterity]: Abilitiy;
            [Abilities.Constitution]: Abilitiy;
            [Abilities.Intelligence]: Abilitiy;
            [Abilities.Wisdom]: Abilitiy;
            [Abilities.Charisma]: Abilitiy;
        },
        attributes: Attributes;
        details: Details;
        traits: Traits;
        currency: Currency;
        skills: {
            [Skills.Acrobatics]: Skill;
            [Skills.AnimalHandling]: Skill;
            [Skills.Arcana]: Skill;
            [Skills.Athletics]: Skill;
            [Skills.Deception]: Skill;
            [Skills.History]: Skill;
            [Skills.Insight]: Skill;
            [Skills.Initimidation]: Skill;
            [Skills.Investigation]: Skill;
            [Skills.Medicine]: Skill;
            [Skills.Perception]: Skill;
            [Skills.Performance]: Skill;
            [Skills.Persuasion]: Skill;
            [Skills.Religion]: Skill;
            [Skills.SleightOfHand]: Skill;
            [Skills.Stealth]: Skill;
            [Skills.Survival]: Skill;
        }
    }
}