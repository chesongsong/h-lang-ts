import {
    ANTLRInputStream, BufferedTokenStream, CharStream, CommonTokenStream
} from "antlr4ts";
import { HlangLexer } from "./antlr/HlangLexer";
import { HlangParser } from "./antlr/HlangParser";
import ExprBaseVisitor from "./ExprBaseVisitor";

const input1 = "a=1+2\nb=a*2+1\nc=a*3+2*b\n" //23
const input2 = "a=2*3\n" //6
const input3 = "a=true\n"
let inputStream: CharStream = new ANTLRInputStream(input3);
let lexer: HlangLexer = new HlangLexer(inputStream);
let tokenStream: BufferedTokenStream = new CommonTokenStream(lexer);
let parser = new HlangParser(tokenStream);
let tree = parser.prog();

const exprBaseVisitor: ExprBaseVisitor = new ExprBaseVisitor();
const result: number = exprBaseVisitor.visit(tree);
console.log("计算结果是：",result);