// This code demonstrates how to maintain a conversation history 
// with the OpenAI API, allowing the assistant to provide 
// context-aware responses based on previous interactions.

// We need to make sure that a conversation message that we 
// are sending to the OpenAI API contains the entire 
// conversation history, including the system prompt, 
// user messages, and assistant replies.
// This way, the assistant can understand the context 
// of the conversation and provide more relevant 
// and accurate responses.

import OpenAI from "openai";
import 'dotenv/config';

const openAI = new OpenAI( { apiKey: process.env.OPENAI_API_KEY } );

type Message = {
    role: "system" | "user" | "assistant";
    content: string;
};

const conversationHistory: Message[] = [
    {
        role: "system",
        content: "You are a helpful assistant that provides concise and accurate answers to user questions."
    }
];

async function chat(message: string) {
    // first add the user message to the conversation history
    conversationHistory.push({
        role: "user",
        content: message
    });

    // now send the conversation history to the OpenAI API
    const response = await openAI.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: conversationHistory as any,
        max_tokens: 100,
    });

    // get the assistant's reply from the response
    const assistantReply = response.choices[0].message.content;

    // add the assistant's reply to the conversation history
    conversationHistory.push({
        role: "assistant",
        content: assistantReply as string
    });

    return assistantReply;
}

chat("Hello, my name is Shiv. Can you tell me a joke?").then(reply => {
    console.log("Assistant's reply:", reply);
}).catch(err => {
    console.error("Error during chat:", err);
});

chat("What is my name?").then(reply => {
    console.log("Assistant's reply:", reply);
}).catch(err => {
    console.error("Error during chat:", err);
});