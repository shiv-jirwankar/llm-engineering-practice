/** 1. user defines the URL to get the summary of
2. Create a util function to get the title and the text content of that web app.
3. Create a connection to OpenAI API
4. Send the request in JSON Array to OpenAI:
	Eg: [ {
		"role": "system",
		"content": ""
	}]
5. Get the response from the Open AI LLM
6. Display the response to the user. */

import { OpenAI } from "openai";
import 'dotenv/config';
import { parse } from 'node-html-parser';

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    throw new Error('Missing OPENAI_API_KEY. Set it in your environment or in a .env file.');
}

const openai = new OpenAI({
    apiKey,
});

export async function getSummary(url: string) {
    // Step 1: Fetch the webpage content
    const response = await fetch(url);
    const html = await response.text();

    // Step 2: Extract the title and text content from the HTML (Node-friendly)
    const root = parse(html);
    const title = root.querySelector("title")?.text || "No title found";
    const body = root.querySelector("body");
    const rawText = body ? body.text : root.text;
    const textContent = rawText ? rawText.slice(0, 2000) : "No content found";

    // Step 3: Create a prompt for OpenAI
    const prompt = '\nYou are a snarky assistant that analyzes the contents of a website,\nand provides a short, snarky, humorous summary, ignoring text that might be navigation related.\nRespond in markdown. Do not wrap the markdown in a code block - respond just with the markdown.\n';

    // Step 4: Send the request to OpenAI
    const messages = [ {
        role: "system",
        content: prompt
    }, {
        role: "user",
        content: `Title: ${title}\nContent: ${textContent}`
    }];

    const completion = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: messages as any,
        max_tokens: 500,
    });

    // Step 5: Get the response from OpenAI
    const summary = completion.choices[0].message.content;

    // Step 6: Display the response to the user
    return summary;
}
