import { Moment } from "moment";
import { IDateTime, IType } from "../api";
import { ZBox } from "./common";

export class ZDateTime extends ZBox<Moment> implements IDateTime {
    
    public get type(): IType {
        return IType.DATETIME
    }
    
    
    public get isPrimitive(): boolean {
        return true
    }
    
    toJsNumber(): number {
        return 1;
    }
    toJsBoolean(): boolean {
        return true;
    }
    toJsString(): string {
        return this.value.format("YYYY-MM-DD HH:mm:ss")
    }
    
}