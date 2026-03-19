import { getSummaryFromOllama } from "./summarize-ollama";

(async () => {
  try {
    const summary = await getSummaryFromOllama("https://www.nature.com/");
    console.log(summary);
  } catch (err) {
    console.error(err);
  }
})();
