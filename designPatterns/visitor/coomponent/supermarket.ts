import { Visitor, ZNode } from "../type";

export default class Supermarket implements ZNode {
    private id: string = 'id-supermarket';
    getID(): string {
        return this.id;
    }
    accept(visit: Visitor): void {
        visit.visitSupermarket(this);
    }
    getName(): string {
        return "Supermarket!"   
    }
}