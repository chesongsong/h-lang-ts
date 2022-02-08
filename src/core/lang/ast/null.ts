import { INull, IType } from "../api";
import { ZBox } from "./common";

export class ZNull extends ZBox<null> implements INull{
    static instance = new ZNull();

     get type(): IType {
        return IType.NULL
    }
    
     get isPrimitive(): boolean {
        return true;
    }
    constructor(){
        super(null);
    }
    toJsNumber(): number {
        return 0
    }
    toJsBoolean(): boolean {
        return false;
    }
    toJsString(): string {
        return 'nil';
    }
    
}

export const nil = ZNull.instance;