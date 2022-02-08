import { IString, IType } from "../api";
import { ZBox } from "./common";

export class ZString extends ZBox<string> implements IString {
  constructor(value: string) {
    console.log(value)
    super(String(value || ""));
  }
  
  public get type(): IType {
    return IType.STRING;
  }

  public get isPrimitive(): boolean {
    return true;
  }

  toJsNumber(): number {
    /*
        TODO 
        1. 判断字符串中有没有数字，有数字没有单位，就提取该数字
        2. 有单位的话，将该数字以及其单位转化为没有单位的数字返回
    */
    return 0;
  }
  toJsBoolean(): boolean {
    return !!this.value;
  }
  toJsString(): string {
    return this.value;
  }

}
