// Generated from src/antlr/Hlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class HlangLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "MUL", "DIV", "ADD", "SUB", "BooleanLiteral", 
		"ID", "INT", "NEWLINE", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'('", "')'", "'*'", "'/'", "'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "MUL", "DIV", "ADD", "SUB", 
		"BooleanLiteral", "ID", "INT", "NEWLINE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HlangLexer._LITERAL_NAMES, HlangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HlangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(HlangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Hlang.g4"; }

	// @Override
	public get ruleNames(): string[] { return HlangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return HlangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return HlangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return HlangLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0EJ\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t3\n\t\x03\n\x06\n6\n\n\r\n\x0E\n7\x03\v\x06" +
		"\v;\n\v\r\v\x0E\v<\x03\f\x05\f@\n\f\x03\f\x03\f\x03\r\x06\rE\n\r\r\r\x0E" +
		"\rF\x03\r\x03\r\x02\x02\x02\x0E\x03\x02\x03\x05\x02\x04\x07\x02\x05\t" +
		"\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x03\x02\x05\x06\x02C\\aac|\u4E02\u9FA7\x03\x022;\x04" +
		"\x02\v\v\"\"\x02N\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
		"\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r" +
		"\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13" +
		"\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19" +
		"\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1D\x03\x02\x02\x02\x07\x1F" +
		"\x03\x02\x02\x02\t!\x03\x02\x02\x02\v#\x03\x02\x02\x02\r%\x03\x02\x02" +
		"\x02\x0F\'\x03\x02\x02\x02\x112\x03\x02\x02\x02\x135\x03\x02\x02\x02\x15" +
		":\x03\x02\x02\x02\x17?\x03\x02\x02\x02\x19D\x03\x02\x02\x02\x1B\x1C\x07" +
		"?\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x07*\x02\x02\x1E\x06\x03\x02" +
		"\x02\x02\x1F \x07+\x02\x02 \b\x03\x02\x02\x02!\"\x07,\x02\x02\"\n\x03" +
		"\x02\x02\x02#$\x071\x02\x02$\f\x03\x02\x02\x02%&\x07-\x02\x02&\x0E\x03" +
		"\x02\x02\x02\'(\x07/\x02\x02(\x10\x03\x02\x02\x02)*\x07v\x02\x02*+\x07" +
		"t\x02\x02+,\x07w\x02\x02,3\x07g\x02\x02-.\x07h\x02\x02./\x07c\x02\x02" +
		"/0\x07n\x02\x0201\x07u\x02\x0213\x07g\x02\x022)\x03\x02\x02\x022-\x03" +
		"\x02\x02\x023\x12\x03\x02\x02\x0246\t\x02\x02\x0254\x03\x02\x02\x0267" +
		"\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\x14\x03\x02\x02" +
		"\x029;\t\x03\x02\x02:9\x03\x02\x02\x02;<\x03\x02\x02\x02<:\x03\x02\x02" +
		"\x02<=\x03\x02\x02\x02=\x16\x03\x02\x02\x02>@\x07\x0F\x02\x02?>\x03\x02" +
		"\x02\x02?@\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x07\f\x02\x02B\x18\x03" +
		"\x02\x02\x02CE\t\x04\x02\x02DC\x03\x02\x02\x02EF\x03\x02\x02\x02FD\x03" +
		"\x02\x02\x02FG\x03\x02\x02\x02GH\x03\x02\x02\x02HI\b\r\x02\x02I\x1A\x03" +
		"\x02\x02\x02\b\x0227<?F\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HlangLexer.__ATN) {
			HlangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HlangLexer._serializedATN));
		}

		return HlangLexer.__ATN;
	}

}

