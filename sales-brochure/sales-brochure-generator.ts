/* 
This module is responsible for generating a sales brochure by extracting relevant links from a company's webpage.
Steps to implement:
1. Fetch the webpage content of the company website.
2. Extract all the links from the webpage.
3. Create a system prompt for OpenAI to identify which of these links are relevant for a sales brochure (eg: About page, Careers page, etc.)
4. Send the list of links and the system prompt to OpenAI API.
5. Get the response from OpenAI which will be a JSON containing the relevant links for the brochure.
6. Display or return the relevant links to be used in the sales brochure. */

import OpenAI from "openai";
import { getApiKey } from "../utils/api-key";

const apiKey = getApiKey();

const openai = new OpenAI({
  apiKey,
});

const systemPrompt = `You are provied with list of links found on a webpage.
You are tasked with providing which of these links are likely to be relevant to 
include in a brochure about the company, eg: links of About page, or Company 
page, or Carrers/jobs pages etc.
You should response in JSON as in this example:
{
 "links": [
    {
    "type": "about page",
    "url": "https://www.example.com/about"
    },
    {
    "type": "careers page",
    "url": "https://www.example.com/careers"        
    }]
}`;

async function getLinksFromWebpage(webpageUrl: string) {
  const response = await fetch(webpageUrl);
  const html = await response.text();
  // get all the href or anchor links from the html
  const regex = /href="(http[s]?:\/\/[^"]+)"/g;
  const links = [];
  let match;

  while ((match = regex.exec(html))) {
    links.push(match[1]);
  }
  return links;
}

async function createUserPrompt(webpageUrl: string) {
  const links = await getLinksFromWebpage(webpageUrl);
  const userPrompt = `Here is a list of links found on the webpage ${webpageUrl}: ${JSON.stringify(links)}.
Which of these links are likely to be relevant to include in a brochure about the company? 
eg: links of About page, or Company page, or Carrers/jobs pages etc.`;

  return userPrompt;
}

export async function getBrochureLinks(webpageUrl: string) {
    const userPrompt = await createUserPrompt(webpageUrl);
    
    const messages = [
        {
            role: "system",
            content: systemPrompt
        },
        {
            role: "user",
            content: userPrompt
        }
    ];

    const completion = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: messages as any,
        max_tokens: 500,
    });

    const brochureLinks = completion.choices[0].message.content;
    return brochureLinks;
}

