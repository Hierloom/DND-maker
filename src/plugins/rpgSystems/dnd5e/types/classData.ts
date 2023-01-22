
export interface HitDice {
    number: number;
    faces: number;
}

export interface Skills {
    from: string[];
    count: number;
}

export interface StartingProficiencies {
    weapons: string[];
    skills: Skills;
}

export interface Dice {
    count: number;
    sides: number;
}

export interface GoldAlternative {
    dice: Dice;
    times: number;
}

export interface StartingEquipment {
    default: string[][];
    goldAlternative: GoldAlternative;
}

export interface Requirements {
    int: number;
}

export interface Multiclassing {
    requirements: Requirements;
}

export interface ClassTableGroup {
    colLabels: any;
    rows: number[][];
    title: string;
    rowsSpellProgression: number[][];
}

export interface Fluff {
    name: string;
    type: string;
    entries: any[];
    page: number;
    source: string;
}

export interface Class {
    name: string;
    hitDice: HitDice;
    proficiencies: string[];
    spellcastingAbility: string;
    preparedSpells: string;
    cantripProgression: number[];
    spellsKnownProgression: number[];
    startingProficiencies: StartingProficiencies;
    startingEquipment: StartingEquipment;
    multiclassing: Multiclassing;
    classTableGroups: ClassTableGroup[];
    classFeatures: any[];
    subclassTitle: string;
    fluff: Fluff[];
}

export interface Known {
    1: string[];
}

export interface AdditionalSpell {
    known: Known;
}

export interface OtherSource {
    source: string;
    page: number;
}

export interface Subclass {
    name: string;
    shortName: string;
    className: string;
    subclassFeatures: string[];
    source: string;
    classSource: string;
    page?: number;
    srd?: boolean;
    basicRules?: boolean;
    additionalSpells: AdditionalSpell[];
    isReprinted?: boolean;
    otherSources: OtherSource[];
}

export interface ClassFeature {
    name: string;
    source: string;
    page: number;
    srd: boolean;
    basicRules: boolean;
    className: string;
    classSource: string;
    level: number;
    entries: any[];
    isClassFeatureVariant?: boolean;
}

export interface OtherSource2 {
    source: string;
    page: number;
}

export interface SubclassFeature {
    name: string;
    className: string;
    level: number;
    entries: any[];
    source: string;
    page?: number;
    classSource: string;
    subclassShortName: string;
    subclassSource: string;
    header?: number;
    srd?: boolean;
    basicRules?: boolean;
    otherSources: OtherSource2[];
    type: string;
}

export interface ClassData {
    class: Class;
    subclass: Subclass[];
    classFeature: ClassFeature[];
    subclassFeature: SubclassFeature[];
}
