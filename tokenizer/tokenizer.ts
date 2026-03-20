import { encodingForModel } from "js-tiktoken";

// Get the tokenizer encoding for the gpt-4 model. This will be used to count tokens in the input and output, ensuring we stay within limits.
const enc = encodingForModel("gpt-4");

// encode the setence into token ids
const tokens = enc.encode("Hello, how are you?");
console.log(tokens); 
// e.g. [12194, 11, 922, 1308, 374, 4072] — numeric IDs, one per token chunk

// decode each token id back into text
for(const token of tokens) {
    const decoded = enc.decode([token]);
    console.log(`Token ID: ${token}, Decoded Text: "${decoded}"`);
// Token ID: 9906, Decoded Text: "Hello"
// Token ID: 11, Decoded Text: ","
// Token ID: 1268, Decoded Text: " how"
// Token ID: 527, Decoded Text: " are"
// Token ID: 499, Decoded Text: " you"
// Token ID: 30, Decoded Text: "?"
}

function countTokens(text: string): number {
    const tokens = enc.encode("Hello, how are you?");
    return tokens.length;
}

console.log(`Number of tokens in the input: ${countTokens("Hello, how are you?")}`);
// Number of tokens in the input: 6