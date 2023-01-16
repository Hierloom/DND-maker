import { v4 as uuidv4 } from 'uuid';

export default class Character {
    id: string;
    name: string;
    bio: Bio;
    stats: Stats;
    currency: Currency[];
    level: number;
    maxLevel: number;
    experiencePoints: number;
    background: Background | Background[];
    alignment: Alignment | Alignment[];
    attributes: Attribute[];
    spells: Spell[];
    feats: Feat[];
    token: string;
    inspiration: {
        hasInspiration: boolean;
        value: number;
    };
    proficiencyBonus: number;

    constructor() {
        this.id = uuidv4();
        this.name = '';
        this.bio = {
            age: 0,
            size: '',
            height: 0,
            weight: 0,
            gender: '',
            eyes: '',
            skin: '',
            hair: '',
        };
        this.stats = {
            ac: 10,
            speed: [],
            hp: 0,
            thp: 0,
            passivePerception: 0,
            deathSaves: {
                success: 0,
                fails: 0,
            },
            exhaustionLevel: 0,
            hitDice: {
                type: 4,
                value: 0,
            }
        };
        this.attributes = [];
        this.currency = [];
        this.level = 0;
        this.maxLevel = 20;
        this.experiencePoints = 0;
        this.background = [];
        this.alignment = [];
        this.spells = [];
        this.feats = [];
        this.token = '';
        this.inspiration = {
            hasInspiration: false,
            value: 0,
        };
        this.proficiencyBonus = 0;

    }
}

export interface Stats {
    ac: number;
    speed: Speed[];
    hp: number;
    thp: number;
    passivePerception: number;
    deathSaves: {
        success: number;
        fails: number;
    },
    exhaustionLevel: number;
    hitDice: HitDice
}

export interface Speed {
    id: string;
    type: string;
    value: number;
}

export interface Attribute {
    name: string;
    modifier: number;
    value: number;
}

export interface Skill {
    name: string;
    attribute: string;
    value: number;
    proficiency: boolean;
    expertise: boolean;
}

export interface SavingTrow {
    name: string;
    value: number;
    proficiency: boolean;
}

export interface Currency {
    id: number;
    name: string;
    value: number;
}

export interface Exhaustion {
    level: number;
    name: string;
    description: string;
}

export interface HitDice {
    type: number;
    value: number;
}

export interface Feat {
    id: number;
    name: string;
    description: string;
}

export interface Bio {
    age: number;
    size: string;
    height: number;
    weight: number;
    gender: string;
    eyes: string;
    skin: string;
    hair: string;
}

export interface Spell {
    id: number;
    name: string;
}

export interface Alignment {
    id: number;
    name: string;
    description: string;
}

export interface Background {
    id: number;
    name: string;
    description: string;
    traits: string;
    ideals: string;
    bonds: string;
    flaws: string;
}