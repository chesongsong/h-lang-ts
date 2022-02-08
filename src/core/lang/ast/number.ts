import { clone } from "lodash";
import { INumber, INumberUnit, IType } from "../api";
import { ZBox } from "./common";


class ZNumber extends ZBox<number> implements INumber {
  constructor(value: number, readonly unit?: INumberUnit) {
    super(value);
    this.unit = unit;
  }

  get type(): IType {
    return IType.NUMBER;
  }

  get isPrimitive(): boolean {
    return true;
  }

  toJsString(): string {
    if (this.unit) {
      return `${this.value}${this.unit}`;
    }
    return String(this.value);
  }

  toJsBoolean(): boolean {
    return !!this.value;
  }

  toJsNumber(): number {
    return this.value;
  }

  toZNumber(): INumber {
    return this;
  }

  clone(): INumber {
    return clone(this)
  }

  toString(): string {
    return this.toJsString();
  }
}

export default ZNumber