import { isArray, isBoolean, isNil, isNumber, isPlainObject, isString, map, mapValues } from "lodash";
import { IAttributes, IBoolean, INull, INumber, INumberUnit, IString, IStructure, isZValue, IValue, IVector } from "../api";
import { f, t } from "./boolean";
import { nil } from "./null";
import ZNumber from "./number";
import { ZString } from "./string";
import { ZStructure } from "./structure";
import { ZVector } from "./vector";

  export function box(x: any[]): IVector;
  export function box(x: object): IStructure;
  export function box(x: number): INumber;
  export function box(x: boolean): IBoolean;
  export function box(x: string): IString;
  export function box(x: null | undefined): INull;
//   export function box(x: Moment): IDatetime;
  export function box(x: IValue): IValue;
  export function box(x: any): IValue {
    if (isZValue(x)) {
      return x;
    } else if (isNumber(x)) {
      return nbox(x);
    }
    //  else if (isDatetime(x)) {
    //   const time = toMoment(x);
    //   return new ZDatetime(time);
    // } 
    else if (isString(x)) {
      return sbox(x);
    } else if (isBoolean(x)) {
      return bbox(x);
    } else if (isArray(x)) {
      const values: IValue[] = map(x, (n) => box(n));
      return new ZVector(values);
    } else if (isPlainObject(x)) {
      const values: IAttributes = mapValues(x, (n) => box(n));
      return new ZStructure(values);
    } else if (isNil(x)) {
      return nil;
    } else {
      throw new Error('unknown data type: ' + typeof x);
    }
  }
  
  export const unbox = (v: IValue) => v.unbox();
  export const bbox = (v: boolean) => (v ? t : f);
  export const nbox = (v: number, u?: INumberUnit) => new ZNumber(v, u);
  export const sbox = (v: string) => new ZString(v);
//   export const tbox = (v: string) => new ZDatetime(toMoment(v));
  