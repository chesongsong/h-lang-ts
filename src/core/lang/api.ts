import { ParseTree } from "antlr4ts/tree";
import { Moment } from "moment";

export interface IBox<T> {
  readonly value: T;
}
export enum IType {
  NULL,
  BOOLEAN,
  NUMBER,
  STRING,
  VECTOR,
  STRUCTURE,
  DATETIME,
  FUNCTION,
  SYMBOL,
  MODEL,
}

interface IToBoolean {
  toJsBoolean(): boolean;
  toZBoolean(): IBoolean;
}

interface IToNumber {
  toJsNumber(): number;
  toZNumber(): INumber;
}

interface IToString {
  toJsString(): string;
  toZString(): IString;
}
interface IToVector {
  toZVector(): IVector;
  toJsArray(): any[];
}

export interface ITypeCast
  extends IToBoolean,
    IToNumber,
    IToString,
    IToVector {}

export interface IValue extends ICallable, ITypeCast {
  oid: string;
  type: IType;
  isPrimitive: boolean;
  toString(): string;
  unbox(): any;
  evaluate(): IValue;
}
type IKey = IValue | string | number;
interface IStateSupport {
  state: IAttributes;

  getState(name: string): IValue;
  setState(name: string, value: IValue): void;
}
interface IEffectSupport {
  effects: IEffect[];
  appendEffect(effect: IEffect): void;
}

export interface IEffect {
  name: string;
  value: any;
  data: IStructure;
}
export interface ICollection {
  get(k: IKey): IValue;
  put(k: IKey, v: IValue): IValue;
  delete(k: IKey): IValue;
}
export interface ICallable {
  invoke(...xs: IValue[]): IValue;
}
export interface IToStructure {
  toZStructure(): IStructure;
  toJsStructure(): IAttributes;
}
export type INumberUnit = "y" | "m" | "d" | "年" | "月" | "日" | "天";
export interface IBoolean extends IBox<boolean>, IValue, ICallable {}
export interface IString extends IBox<string>, IValue, ICallable {}
export interface INumber extends IBox<number>, IValue, ICallable {
  unit?: INumberUnit;
}
export interface INull extends IBox<null>, IValue {}
export interface IDateTime extends IBox<Moment>, IValue {}
export interface IAttributes {
  [name: string]: IValue;
}
export interface IStructure
  extends ICollection,
    IBox<IAttributes>,
    IValue,
    IToStructure {
  readonly attributes: IAttributes;
}
export interface IEvaluationScope extends IStructure, IEffectSupport {
  root: IEvaluationScope;
  parent?: IEvaluationScope;
  define(name: string, value: IValue, parseTree?: ParseTree): void;
  resolve(name: IValue | string): IValue;
  inspect(name: string): IValue;
  inspectJsValue(name: string): any;
  run(code: ParseTree): IValue;

  invoke(...args: IValue[]): IValue;
  evaluate(): IValue;
}

export interface IVector extends ICollection, IBox<IValue[]>, IValue {
  readonly items: IValue[];

  promote(x: IValue): IVector;
}

export interface ISymbol extends IValue {
  // 符号名称
  name: string;
  binding: IValue;
  // 符号生效的范围
  scope: IEvaluationScope;
  parseTree?: ParseTree;
}
export const isZValue = (a: any): a is IValue =>
  a && typeof a === "object" && a.type !== undefined;
export const isZNull = (a: any): a is INull =>
  isZValue(a) && a.type === IType.NULL;
export const isZBoolean = (a: any): a is IBoolean =>
  isZValue(a) && a.type === IType.BOOLEAN;
export const isZNumber = (a: any): a is INumber =>
  isZValue(a) && a.type === IType.NUMBER;
export const isZString = (a: any): a is IString =>
  isZValue(a) && a.type === IType.STRING;
export const isZVector = (a: any): a is IVector =>
  isZValue(a) && a.type === IType.VECTOR;
export const isZStructure = (a: any): a is IStructure =>
  isZValue(a) && a.type === IType.STRUCTURE;
export const isZDatetime = (a: any): a is IDateTime =>
  isZValue(a) && a.type === IType.DATETIME;
// export const isZFunction = (a: any): a is IFunction =>
//   isZValue(a) && a.type === IType.FUNCTION;
// export const isZSymbol = (a: any): a is ISymbol =>
//   isZValue(a) && a.type === IType.SYMBOL;
// export const isZModel = (a: any): a is IModel =>
//   isZValue(a) && a.type === IType.MODEL;
// export const isZStructureLike = (a: any): a is IToStructure => {
//   return a && typeof a === 'object' && a.toZStructure !== undefined;
// };
