import { ParseTree } from "antlr4ts/tree";
import { each, mapValues, size } from "lodash";
import {
  IAttributes,
  IEffect,
  IEvaluationScope,
  IStructure,
  isZVector,
  IType,
  IValue
} from "../api";
import { box } from "./box";
import { ZBox } from "./common";
import { nil } from "./null";
import { ZVector } from "./vector";

export class ZStructure
  extends ZBox<IAttributes>
  implements IStructure, IEvaluationScope
{
  private _unboxing: boolean;
  private _toStringing: boolean;
  readonly effects: IEffect[] = [];
  constructor(
    value: IAttributes = {},
    private readonly _parent?: IEvaluationScope,
    readonly state: IAttributes = {}
  ) {
    super(value);
    this._unboxing = false;
    this._toStringing = false;
  }
  get root(): IEvaluationScope {
    if (this._parent && !Object.isFrozen(this._parent)) {
      return this._parent.root;
    }
    return this;
  }
  get parent(): IEvaluationScope {
    return this._parent;
  }
  get type(): IType {
    return IType.STRUCTURE;
  }
  get isPrimitive(): boolean {
    return false;
  }
  get attributes(): IAttributes {
    return this.value;
  }
  unbox(): IAttributes {
    if (this._unboxing) {
      return {};
    } else {
      this._unboxing = true;
      const result = mapValues(this.attributes, (v) => v.unbox());
      this._unboxing = false;
      return result;
    }
  }
  toJsNumber(): number {
    throw new Error("ZStructure cannot be used as number");
  }
  toJsBoolean(): boolean {
    return size(this.attributes) > 0;
  }
  toJsString(): string {
    throw new Error("ZStructure cannot be used as string");
  }

  define(name: string, value: IValue, parseTree?: ParseTree): void {
    throw new Error("Method not implemented.");
  }
  resolve(name: string | IValue): IValue {
    const node = this.get(name);
    if (node != nil) {
      return node;
    }
    if (this._parent) {
      return this._parent.resolve(name);
    }
    return nil;
  }
  inspect(name: string): IValue {
    return this.resolve(name).evaluate();
  }
  inspectJsValue(name: string) {
    return this.resolve(name).unbox();
  }
  run(code: ParseTree): IValue {
    throw new Error("Method not implemented.");
  }

  appendEffect(effect: IEffect): void {
    this.root.effects.push(effect);
  }

  get(k: string | number | IValue): IValue {
    if (isZVector(k)) {
      const values: IValue[] = [];
      each(k.items, (i) => {
        const r = this.get(i);
        if (r != nil) {
          values.push(r);
        }
      });
      return new ZVector(values);
    } else {
      const name = k.toString();
      const node = this.value[name];
      return node ? node : nil;
    }
  }
  put(k: string | number | IValue, v: IValue): IValue {
    const name = k.toString();
    this.attributes[name]= box(v)
    return this;
  }
  delete(k: string | number | IValue): IValue {
    const name = k.toString();
    delete this.attributes[name];
    return this;
  }
  toZStructure(): IStructure {
    return this;
  }
  toJsStructure(): IAttributes {
    return this.attributes;
  }
}
