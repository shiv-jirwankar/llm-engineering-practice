**Project: LLM Engineering Practice**

- **Course:** This repository contains practice work based on the Udemy course "LLM Engineering: Master AI and Large Language Models" (https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/).
- **Language note:** The course examples are originally in Python. I am practicing the course material using TypeScript because I am more comfortable and productive in TS.
- **Progress:** I will be updating this repository as I learn and implement exercises from the course. Keep watching this space for more updates.

**What you'll find in this repo**

- **Summarizers:** compact TypeScript modules under the `website-summary` folder that implement web-page summarization examples inspired by the course.
- **Other experiments:** tokenizers, small agents, and utilities in other folders as I work through the curriculum.

**How I work**

- I translate original Python examples into idiomatic TypeScript, keeping behavior similar while using TS/Node tooling.
- I prefer small, focused commits and incremental updates so you can follow progress as I apply course lessons.

**Run / Test (example)**

To try the `website-summary` example locally you typically need an OpenAI API key set in your environment. Example (macOS/Linux):

```bash
export OPENAI_API_KEY=your_api_key_here
node --loader ts-node/esm website-summary/index.ts
```

Adjust commands to your environment or use `npm` scripts if present.

**Notes & Disclaimer**

- This repo mirrors my learning — it is not production-ready. Expect changes, refactors, and added tests over time.
- If you find issues or have suggestions, open an issue or submit a PR.

**Contact / Updates**

- I will keep updating the repo as I progress through the Udemy course. Follow the repository for new commits and experiments.
