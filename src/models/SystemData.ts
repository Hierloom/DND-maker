import { Attribute } from "./Character";

export interface SystemData {
    determinationTypes: DeterminationType[];
    attributes: Attribute[];
};

export interface DeterminationType {
    value: string;
    label: string;
}