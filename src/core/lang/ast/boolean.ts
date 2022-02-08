import { IBoolean, IType } from "../api";
import { ZBox } from "./common";

class ZBoolean extends ZBox<boolean> implements IBoolean {
  static t = new ZBoolean(true);
  static f = new ZBoolean(false);

  constructor(value: boolean) {
    super(value);
  }
  public get type(): IType {
    return IType.BOOLEAN;
  }

  public get isPrimitive(): boolean {
    return true;
  }

  toJsNumber(): number {
    return this.value ? 1 : 0;
  }
  toJsBoolean(): boolean {
    return this.value;
  }
  toJsString(): string {
    return String(this.value);
  }
  toZBoolean(): IBoolean {
    return this;
  }
  clone(): IBoolean {
    return this;
  }
  toString(): string {
    return this.toJsString();
  }
}

export const t = ZBoolean.t;
export const f = ZBoolean.f;


export default ZBoolean