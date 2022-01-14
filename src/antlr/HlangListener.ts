// Generated from src/antlr/Hlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PrintExprContext } from "./HlangParser";
import { AssignContext } from "./HlangParser";
import { BlankContext } from "./HlangParser";
import { MultiplicationContext } from "./HlangParser";
import { AdditionContext } from "./HlangParser";
import { DivisionContext } from "./HlangParser";
import { SubtractionContext } from "./HlangParser";
import { IntContext } from "./HlangParser";
import { IdContext } from "./HlangParser";
import { BooleanExprContext } from "./HlangParser";
import { ParensContext } from "./HlangParser";
import { ProgContext } from "./HlangParser";
import { StatContext } from "./HlangParser";
import { ExprContext } from "./HlangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HlangParser`.
 */
export interface HlangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `printExpr`
	 * labeled alternative in `HlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterPrintExpr?: (ctx: PrintExprContext) => void;
	/**
	 * Exit a parse tree produced by the `printExpr`
	 * labeled alternative in `HlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitPrintExpr?: (ctx: PrintExprContext) => void;

	/**
	 * Enter a parse tree produced by the `assign`
	 * labeled alternative in `HlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by the `assign`
	 * labeled alternative in `HlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by the `blank`
	 * labeled alternative in `HlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterBlank?: (ctx: BlankContext) => void;
	/**
	 * Exit a parse tree produced by the `blank`
	 * labeled alternative in `HlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitBlank?: (ctx: BlankContext) => void;

	/**
	 * Enter a parse tree produced by the `Multiplication`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `Multiplication`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMultiplication?: (ctx: MultiplicationContext) => void;

	/**
	 * Enter a parse tree produced by the `Addition`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddition?: (ctx: AdditionContext) => void;
	/**
	 * Exit a parse tree produced by the `Addition`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddition?: (ctx: AdditionContext) => void;

	/**
	 * Enter a parse tree produced by the `Division`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDivision?: (ctx: DivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `Division`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDivision?: (ctx: DivisionContext) => void;

	/**
	 * Enter a parse tree produced by the `Subtraction`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSubtraction?: (ctx: SubtractionContext) => void;
	/**
	 * Exit a parse tree produced by the `Subtraction`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSubtraction?: (ctx: SubtractionContext) => void;

	/**
	 * Enter a parse tree produced by the `int`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `int`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by the `id`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by the `id`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by the `BooleanExpr`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpr?: (ctx: BooleanExprContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanExpr`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpr?: (ctx: BooleanExprContext) => void;

	/**
	 * Enter a parse tree produced by the `parens`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParens?: (ctx: ParensContext) => void;
	/**
	 * Exit a parse tree produced by the `parens`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParens?: (ctx: ParensContext) => void;

	/**
	 * Enter a parse tree produced by `HlangParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `HlangParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `HlangParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `HlangParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `HlangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

