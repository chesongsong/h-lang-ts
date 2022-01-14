import { Visitor, ZNode } from "../type";

export default class Hospital implements ZNode {
    private id: string = 'id-hospital';
    getID(): string {
        return this.id;
    }
    accept(visit: Visitor): void {
        visit.visitHospital(this);
    }
    getName(): string {
        return "Hospital!"   
    }
}