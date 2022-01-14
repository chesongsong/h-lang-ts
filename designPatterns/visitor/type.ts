export interface Visitor{
    visitSupermarket(element: ZNode): void;
    visitHospital(element: ZNode): void;
}
export interface ZNode {
    accept(visit: Visitor): void
    getName(): string;
    getID():string;
}