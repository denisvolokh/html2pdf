#!/usr/bin/env node
const puppeteer = require("puppeteer");
const fs = require("fs");

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const html2pdf = async (options) => {
	const browser = await puppeteer.launch({
		args: ["--no-sandbox", "--disable-setuid-sandbox"]
	});
	const page = await browser.newPage();
	await page.goto(options.url, {
		waitUntil: 'networkidle'
	});

	await timeout(5000);
	
	const parameters = {
		"format": options.format, 
		"printBackground": options.printBackground, 
		"scale": options.scale, 
		"margin": {
			"left" : options.marginLeft, 
			"right": options.marginRight, 
			"top": options.marginTop,
			"bottom": options.marginBottom
		}
	}

	const pdf_in_buffer = await page.pdf(parameters);
	await browser.close();

	fs.writeFileSync(options.pdf, pdf_in_buffer);

	console.log("[+] Successfully Saved to ${options.pdf}");
};

module.exports = { html2pdf };