// Generated from src/antlr/Hlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HlangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HlangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `printExpr`
	 * labeled alternative in `HlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintExpr?: (ctx: PrintExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `assign`
	 * labeled alternative in `HlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `blank`
	 * labeled alternative in `HlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlank?: (ctx: BlankContext) => Result;

	/**
	 * Visit a parse tree produced by the `Multiplication`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Addition`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddition?: (ctx: AdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Division`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivision?: (ctx: DivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Subtraction`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtraction?: (ctx: SubtractionContext) => Result;

	/**
	 * Visit a parse tree produced by the `int`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by the `id`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by the `BooleanExpr`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpr?: (ctx: BooleanExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `parens`
	 * labeled alternative in `HlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParens?: (ctx: ParensContext) => Result;

	/**
	 * Visit a parse tree produced by `HlangParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `HlangParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `HlangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
}

