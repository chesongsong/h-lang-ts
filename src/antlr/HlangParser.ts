// Generated from src/antlr/Hlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { HlangListener } from "./HlangListener";
import { HlangVisitor } from "./HlangVisitor";


export class HlangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly MUL = 4;
	public static readonly DIV = 5;
	public static readonly ADD = 6;
	public static readonly SUB = 7;
	public static readonly BooleanLiteral = 8;
	public static readonly ID = 9;
	public static readonly INT = 10;
	public static readonly NEWLINE = 11;
	public static readonly WS = 12;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_expr = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "expr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'('", "')'", "'*'", "'/'", "'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "MUL", "DIV", "ADD", "SUB", 
		"BooleanLiteral", "ID", "INT", "NEWLINE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HlangParser._LITERAL_NAMES, HlangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HlangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Hlang.g4"; }

	// @Override
	public get ruleNames(): string[] { return HlangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return HlangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(HlangParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, HlangParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 6;
				this.stat();
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HlangParser.T__1) | (1 << HlangParser.BooleanLiteral) | (1 << HlangParser.ID) | (1 << HlangParser.INT) | (1 << HlangParser.NEWLINE))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, HlangParser.RULE_stat);
		try {
			this.state = 20;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				_localctx = new PrintExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 11;
				this.expr(0);
				this.state = 12;
				this.match(HlangParser.NEWLINE);
				}
				break;

			case 2:
				_localctx = new AssignContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 14;
				this.match(HlangParser.ID);
				this.state = 15;
				this.match(HlangParser.T__0);
				this.state = 16;
				this.expr(0);
				this.state = 17;
				this.match(HlangParser.NEWLINE);
				}
				break;

			case 3:
				_localctx = new BlankContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 19;
				this.match(HlangParser.NEWLINE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, HlangParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HlangParser.INT:
				{
				_localctx = new IntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 23;
				this.match(HlangParser.INT);
				}
				break;
			case HlangParser.ID:
				{
				_localctx = new IdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 24;
				this.match(HlangParser.ID);
				}
				break;
			case HlangParser.BooleanLiteral:
				{
				_localctx = new BooleanExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 25;
				this.match(HlangParser.BooleanLiteral);
				}
				break;
			case HlangParser.T__1:
				{
				_localctx = new ParensContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 26;
				this.match(HlangParser.T__1);
				this.state = 27;
				this.expr(0);
				this.state = 28;
				this.match(HlangParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 46;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 44;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicationContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, HlangParser.RULE_expr);
						this.state = 32;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 33;
						this.match(HlangParser.MUL);
						this.state = 34;
						this.expr(9);
						}
						break;

					case 2:
						{
						_localctx = new AdditionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, HlangParser.RULE_expr);
						this.state = 35;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 36;
						this.match(HlangParser.ADD);
						this.state = 37;
						this.expr(8);
						}
						break;

					case 3:
						{
						_localctx = new DivisionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, HlangParser.RULE_expr);
						this.state = 38;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 39;
						this.match(HlangParser.DIV);
						this.state = 40;
						this.expr(7);
						}
						break;

					case 4:
						{
						_localctx = new SubtractionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, HlangParser.RULE_expr);
						this.state = 41;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 42;
						this.match(HlangParser.SUB);
						this.state = 43;
						this.expr(6);
						}
						break;
					}
					}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02" +
		"\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\x17\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04!\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04/\n\x04" +
		"\f\x04\x0E\x042\v\x04\x03\x04\x02\x02\x03\x06\x05\x02\x02\x04\x02\x06" +
		"\x02\x02\x02\x02:\x02\t\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06 \x03" +
		"\x02\x02\x02\b\n\x05\x04\x03\x02\t\b\x03\x02\x02\x02\n\v\x03\x02\x02\x02" +
		"\v\t\x03\x02\x02\x02\v\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x05" +
		"\x06\x04\x02\x0E\x0F\x07\r\x02\x02\x0F\x17\x03\x02\x02\x02\x10\x11\x07" +
		"\v\x02\x02\x11\x12\x07\x03\x02\x02\x12\x13\x05\x06\x04\x02\x13\x14\x07" +
		"\r\x02\x02\x14\x17\x03\x02\x02\x02\x15\x17\x07\r\x02\x02\x16\r\x03\x02" +
		"\x02\x02\x16\x10\x03\x02\x02\x02\x16\x15\x03\x02\x02\x02\x17\x05\x03\x02" +
		"\x02\x02\x18\x19\b\x04\x01\x02\x19!\x07\f\x02\x02\x1A!\x07\v\x02\x02\x1B" +
		"!\x07\n\x02\x02\x1C\x1D\x07\x04\x02\x02\x1D\x1E\x05\x06\x04\x02\x1E\x1F" +
		"\x07\x05\x02\x02\x1F!\x03\x02\x02\x02 \x18\x03\x02\x02\x02 \x1A\x03\x02" +
		"\x02\x02 \x1B\x03\x02\x02\x02 \x1C\x03\x02\x02\x02!0\x03\x02\x02\x02\"" +
		"#\f\n\x02\x02#$\x07\x06\x02\x02$/\x05\x06\x04\v%&\f\t\x02\x02&\'\x07\b" +
		"\x02\x02\'/\x05\x06\x04\n()\f\b\x02\x02)*\x07\x07\x02\x02*/\x05\x06\x04" +
		"\t+,\f\x07\x02\x02,-\x07\t\x02\x02-/\x05\x06\x04\b.\"\x03\x02\x02\x02" +
		".%\x03\x02\x02\x02.(\x03\x02\x02\x02.+\x03\x02\x02\x02/2\x03\x02\x02\x02" +
		"0.\x03\x02\x02\x0201\x03\x02\x02\x021\x07\x03\x02\x02\x0220\x03\x02\x02" +
		"\x02\x07\v\x16 .0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HlangParser.__ATN) {
			HlangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HlangParser._serializedATN));
		}

		return HlangParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HlangParser.RULE_prog; }
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HlangParser.RULE_stat; }
	public copyFrom(ctx: StatContext): void {
		super.copyFrom(ctx);
	}
}
export class PrintExprContext extends StatContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(HlangParser.NEWLINE, 0); }
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterPrintExpr) {
			listener.enterPrintExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitPrintExpr) {
			listener.exitPrintExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitPrintExpr) {
			return visitor.visitPrintExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignContext extends StatContext {
	public ID(): TerminalNode { return this.getToken(HlangParser.ID, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(HlangParser.NEWLINE, 0); }
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlankContext extends StatContext {
	public NEWLINE(): TerminalNode { return this.getToken(HlangParser.NEWLINE, 0); }
	constructor(ctx: StatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterBlank) {
			listener.enterBlank(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitBlank) {
			listener.exitBlank(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitBlank) {
			return visitor.visitBlank(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HlangParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class MultiplicationContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode { return this.getToken(HlangParser.MUL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterMultiplication) {
			listener.enterMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitMultiplication) {
			listener.exitMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitMultiplication) {
			return visitor.visitMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditionContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(HlangParser.ADD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterAddition) {
			listener.enterAddition(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitAddition) {
			listener.exitAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitAddition) {
			return visitor.visitAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(HlangParser.DIV, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterDivision) {
			listener.enterDivision(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitDivision) {
			listener.exitDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitDivision) {
			return visitor.visitDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractionContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public SUB(): TerminalNode { return this.getToken(HlangParser.SUB, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterSubtraction) {
			listener.enterSubtraction(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitSubtraction) {
			listener.exitSubtraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitSubtraction) {
			return visitor.visitSubtraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntContext extends ExprContext {
	public INT(): TerminalNode { return this.getToken(HlangParser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(HlangParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanExprContext extends ExprContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(HlangParser.BooleanLiteral, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterBooleanExpr) {
			listener.enterBooleanExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitBooleanExpr) {
			listener.exitBooleanExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitBooleanExpr) {
			return visitor.visitBooleanExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParensContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HlangListener): void {
		if (listener.enterParens) {
			listener.enterParens(this);
		}
	}
	// @Override
	public exitRule(listener: HlangListener): void {
		if (listener.exitParens) {
			listener.exitParens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HlangVisitor<Result>): Result {
		if (visitor.visitParens) {
			return visitor.visitParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


