# Requirements and Decisions

This file separates confirmed project requirements from technical proposals. A suggestion is not an approved decision. Add a dated decision only after the owner confirms it, including enough context to explain its scope.

## Confirmed project requirements

- The project is a local-first personal knowledge dashboard, initially web-based and running on the owner's Mac through `localhost`.
- Its purpose is to organise and interact with personal knowledge across areas such as cooking, kitchenware, fitness and computers.
- Intended capabilities include nested categories, note creation/editing/organisation, search/navigation, interactive HTML diagrams, local persistence and a clean responsive interface.
- The initial goal is a proof of concept, not a full Notion replacement.
- The owner is learning AI-assisted software engineering and prefers sequential, practical, checkpoint-based explanations that support critical review of generated code.
- There are four tracks: application development, AI agent engineering, software engineering and code review, and personal automation and agents. Track D is a future direction, not an immediate priority.
- Keep the initial implementation simple; avoid unnecessary dependencies and premature abstraction.

## Confirmed technical decisions

No specific implementation technology, framework, storage mechanism, project structure or testing tool has been approved yet.

## Proposals awaiting evaluation or approval

- Start with HTML, CSS and JavaScript.
- Start without a frontend framework unless a genuine requirement justifies one.
- Compare IndexedDB and other local storage options after analysing the application's data and recovery requirements.

These are proposed starting points from the project brief. Do not treat them as settled architecture until evaluated and confirmed.
