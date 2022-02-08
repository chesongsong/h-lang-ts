import { ParseTree } from "antlr4ts/tree";
import { IEvaluationScope, ISymbol, IType, IValue } from "../api";
import { ZBox } from "./common";
import { nil } from "./null";

export class ZSymbol extends ZBox<string> implements ISymbol {
  constructor(
    readonly name: string,
    readonly scope: IEvaluationScope,
    public binding: IValue = nil,
    readonly parseTree?: ParseTree
  ) {
    super(name);
  }

  get type(): IType {
    return IType.SYMBOL;
  }

  get isPrimitive(): boolean {
    return true;
  }
  unbox(): string {
    return this.binding ? this.binding.unbox() : null;
  }

  toJsNumber(): number {
    throw new Error("cannot conver to number");
  }
  toJsBoolean(): boolean {
    return true;
  }
  toJsString(): string {
    return this.name;
  }

  invoke(..._: IValue[]): IValue {
    throw new Error("symbol cannot be invoked directly, need evaluate first");
  }

  evaluate(): IValue {
    return this.binding.evaluate();
  }
}
