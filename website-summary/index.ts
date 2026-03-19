import { getSummary } from "./summarize";

(async () => {
  try {
	const summary = await getSummary("https://www.nature.com/");
	console.log(summary);
  } catch (err) {
	console.error(err);
  }
})();