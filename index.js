#!/usr/bin/env node
const program = require("commander")
const {html2pdf} = require("./cli/html2pdf")

program
	.version("0.0.1")
	.description("Convert HTML page to PDF document");

program
    .option("--url <url>", "url to load, for local files use: file:///path/to/file")
    .option("--pdf <pdf>", "output for generated file can be relative to current directory")
  	.option('--format <format>', 'Paper format, Default is A4.', "A4")
    .option('--print-background <print_background>', 'Print background graphics. Defaults to true', true)
    .option('--scale <scale>', 'Scale of the webpage rendering. Defaults to 1', 1)
    .option('--margin-top', 'Margin top. Defaults to 3mm', "3mm")
    .option('--margin-bottom', 'Margin bottom. Defaults to 3mm', "3mm")
    .option('--margin-left', 'Margin left. Defaults to 3mm', "3mm")
    .option('--margin-right', 'Margin right. Defaults to 3mm', "3mm")
    .parse(process.argv);

if (!program.url) program.help();

html2pdf(program);

// program
// 	.version("0.0.1")
// 	.description("Convert HTML page to PDF document");

// program
// 	// .command("html2pdf")
// 	.arguments("<url> <pdf> <format>")
// 	.description("Convert html to pdf")
// 	.option("--url <url>", "url to load, for local files use: file:///path/to/file")
// 	.option("--pdf <pdf>", "output for generated file can be relative to current directory")
// 	.option("--format <format>", "Paper format. If set, takes priority over width or height options. Defaults to A4.", "A4")
// 	.action(function(url, pdf, format) {
// 		console.log("url");
// 		html2pdf({url, pdf, format});
// 	});

// program.parse(process.argv);