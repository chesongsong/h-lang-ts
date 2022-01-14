import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { AdditionContext, AssignContext, BooleanExprContext, DivisionContext, IdContext, IntContext, MultiplicationContext, ParensContext, PrintExprContext, SubtractionContext } from "./antlr/HlangParser";
import { HlangVisitor } from "./antlr/HlangVisitor";

interface IMemoryProps {
    [key : string]: number
};
export default class ExprBaseVisitor
  extends AbstractParseTreeVisitor<number>
  implements HlangVisitor<number>
{
  private memory: IMemoryProps = {};

  protected defaultResult(): number {
    return 0;
  }
  visitPrintExpr(ctx: PrintExprContext) {
    const value: number = this.visit(ctx.expr());
    const exprString: string = ctx.expr().text;
    console.log(exprString+":"+value.toString());
    return value;
  }
  visitAssign(ctx: AssignContext) {
    const id: string = ctx.ID().text;
    const value: number = this.visit(ctx.expr());
    this.memory[id]=value;
    return value;
  }
  
  visitMultiplication(ctx: MultiplicationContext){
      const left: number = this.visit(ctx.expr(0));
      const right: number = this.visit(ctx.expr(1));
      return left*right;
  };
  visitAddition(ctx: AdditionContext){
    const left: number = this.visit(ctx.expr(0));
    const right: number = this.visit(ctx.expr(1));
    return left+right;
  };
  visitDivision (ctx: DivisionContext){
    const left: number = this.visit(ctx.expr(0));
    const right: number = this.visit(ctx.expr(1));
    return left/right;
  };
  visitSubtraction (ctx: SubtractionContext){
    const left: number = this.visit(ctx.expr(0));
    const right: number = this.visit(ctx.expr(1));
    return left-right;
  };
  visitInt (ctx: IntContext){
      return parseInt(ctx.INT().text);
  };
    // 取值
  visitId (ctx: IdContext){
    const id: string = ctx.ID().text;
    if(this.memory[id]!=null){
        return this.memory[id]
    }
    return 0;
  };
  visitBooleanExpr(ctx: BooleanExprContext){
      const booleanStrig: string = ctx.BooleanLiteral().text;
      return booleanStrig =='true'?1:0
  };
  visitParens(ctx: ParensContext){
      return this.visit(ctx.expr());
  };

}
