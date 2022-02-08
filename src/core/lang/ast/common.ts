import { uniqueId } from "lodash";
import { IBoolean, IBox, INumber, IString, IType, IValue, IVector } from "../api";

export abstract class ZBox<V> implements IBox<V>, IValue {
  private readonly _oid: string;
  public get oid(): string {
    return this._oid;
  }
  abstract type: IType;
  abstract isPrimitive: boolean;

  protected constructor(readonly value: V) {
    this._oid = uniqueId("zval-");
  }
  toZBoolean(): IBoolean {
    return box(this.toJsBoolean())
  }
  toZNumber(): INumber {
    return box(this.toJsNumber());
  }
  toZString(): IString {
    return box(this.toJsString());
  }
  toZVector(): IVector {
    return box(this.toJsArray());
  }
  abstract toJsNumber(): number;
  abstract toJsBoolean(): boolean;
  abstract toJsString(): string;

//   toZString(): IString{
      
//   }
  toJsArray(): any[] {
    return [this.value];
  }
  invoke(): IValue {
    return this;
  }
  toString(): string {
    return this.toJsString();
  }
  unbox() {
    return this.value;
  }
  evaluate(): IValue {
    return this;
  }
  clone(): IValue {
    return this;
  }
}
import { box } from "./box";