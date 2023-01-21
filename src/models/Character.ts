import { v4 as uuidv4 } from 'uuid';
import Class from './Class';

export default class Character {
    id: string;
    bio: Bio;
    stats: Stats;
    currency: Currency[];
    level: number;
    maxLevel: number;
    experiencePoints: number;
    background: Background | Background[];
    class: Class | null;
    alignment: Alignment | Alignment[];
    attributes: Attribute[];
    feats: Feat[];
    token: string;
    inspiration: {
        hasInspiration: boolean;
        value: number;
    };
    proficiencyBonus: number;

    constructor() {
        this.id = uuidv4();
        this.bio = {
            name: '',
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
        };
        this.attributes = [];
        this.currency = [];
        this.level = 0;
        this.maxLevel = 20;
        this.experiencePoints = 0;
        this.background = [];
        this.alignment = [];
        this.class = null;
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
    name: string;
    age: number;
    size: string;
    height: number;
    weight: number;
    gender: string;
    eyes: string;
    skin: string;
    hair: string;
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