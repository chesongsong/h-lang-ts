import { each, map } from "lodash";
import { isZNumber, isZVector, IType, IValue, IVector } from "../api";
import ZBoolean from "./boolean";
import { ZBox } from "./common";
import { nil } from "./null";



export class ZVector extends ZBox<IValue[]> implements IVector {
  private unboxing: boolean;
  constructor(value: IValue[] = []) {
    super(value);
    this.unboxing = false;
  }

  get type(): IType {
    return IType.VECTOR;
  }

  get isPrimitive(): boolean {
    return false;
  }

  get items(): IValue[] {
    return this.value;
  }
  unbox(): IValue[] {
    if (this.unboxing) {
      return [];
    } else {
      this.unboxing = true;
      const result = map(this.value, (v) => v && v.unbox());
      this.unboxing = false;
      return result;
    }
  }
  toJsNumber(): number {
    return 0;
  }
  toJsBoolean(): boolean {
    return this.items.length > 0;
  }
  toJsString(): string {
    const items = map(this.value, (v) => v && v.toString());
    return `[${items.join(", ")}]`;
  }
  toJsArray(): any[] {
    return this.items;
  }
  promote(x: IValue): IVector {
    throw new Error("Method not implemented.");
  }
  get(k: string | number | IValue): IValue {
    if (isZNumber(k)) {
      const index = k.toJsNumber() - 1;
      return this.items[index] || nil;
    } else if (isZVector(k)) {
      const values: IValue[] = [];
      each(k.items, (item, index) => {
        const type = item.type;
        if (type === IType.BOOLEAN && item === ZBoolean.t) {
          const r = this.items[index];
          if (r) {
            values.push(r);
          }
        } else if (type === IType.NUMBER) {
          const r = this.get(item);
          if (r !== nil) {
            values.push(r);
          }
        }
      });
      return new ZVector(values);
    }
    throw new Error("ZVector accessor currently only support number index");
  }
  put(k: string | number | IValue, v: IValue): IValue {
    if (isZNumber(k)) {
      const index = k.toJsNumber() - 1;
      this.items[index] = v;
    }
    return this;
  }
  delete(k: IValue): IValue {
    const index = k.toJsNumber();
    this.items.splice(index, 1);
    return this;
  }
}
