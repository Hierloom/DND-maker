import { HitDice } from './Character';

export default class Class {
    name: string;
    level: number;
    hitDice: HitDice;
    proficiencies: string[];
    spellCastingAbility: string;
    startingProficiencies: StartingProficiencies;
    startingEquipment: StartingEquipment;
    multiclassing: MultiClassing | null;
    spells: Spell[];
    classFeatures: ClassFeature[];
    subClass: SubClass | null;

    constructor(data?: Class) {
        this.name = data?.name ?? '';
        this.level = 1;
        this.hitDice = data?.hitDice ?? {
            type: 0,
            value: 0,
        };
        this.proficiencies = data?.proficiencies ?? [];
        this.spellCastingAbility = data?.spellCastingAbility ?? '';
        this.startingProficiencies = data?.startingProficiencies ?? {
            armor: [],
            weapons: [],
            tools: [],
            skills: [],
        };
        this.startingEquipment = data?.startingEquipment ?? {
            additionalFromBackground: false,
            armor: [],
            weapons: [],
            tools: [],
            misc: [],
        };
        this.multiclassing = data?.multiclassing ?? null;
        this.spells = data?.spells ?? [];
        this.classFeatures = data?.classFeatures ?? [];
        this.subClass = data?.subClass ?? null;
    }
}

interface StartingProficiencies {
    armor: string[];
    weapons: string[];
    tools: string[];
    skills: string[];
}

interface StartingEquipment {
    additionalFromBackground: boolean;
    armor: string[];
    weapons: string[];
    tools: string[];
    misc: string[];
}

interface MultiClassing {
    "requirements": {
        [key: string]: number;
    }
}

export interface Spell {
    id: number;
    name: string;
    type: string;
}

interface ClassFeature {
    name: string;
    className: string;
    subClassName: string;
    level: number;
    description: FeatureDescription;
}

interface FeatureDescription {
    type: 'entries' | 'inset' | 'table';
    title: string;
    entries: string[];
}

interface SubClass {
    name: string;
    className: string;
    features: ClassFeature[];
}
