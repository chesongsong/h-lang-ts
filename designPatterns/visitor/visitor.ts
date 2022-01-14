import { Visitor, ZNode } from "./type";

export default class VisitorClass implements Visitor {
    visitSupermarket(element: ZNode): void {
        console.log(element.getID());
        
    }
    visitHospital(element: ZNode): void {
        console.log(element.getName());
    }
}