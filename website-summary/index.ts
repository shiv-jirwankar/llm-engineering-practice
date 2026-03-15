import { getSummary } from "./website-summary";

(async () => {
  try {
	const summary = await getSummary("https://www.nature.com/");
	console.log(summary);
  } catch (err) {
	console.error(err);
  }
})();