# Personal Cockpit — Project Context

## Purpose

Personal Cockpit is a local-first personal knowledge dashboard. Its initial form is a web application running on the owner's Mac through `localhost` (a web server on the same computer). It should provide one place to organise and interact with personal knowledge. The first release is a proof of concept, not a replacement for a broad product such as Notion.

Example knowledge areas include:

- Cooking: recipes, techniques and ingredients.
- Kitchenware: equipment and recommendations.
- Fitness: workouts and training notes.
- Computers: GitHub, programming languages and technical knowledge.

## Intended capabilities

- Categories and nested subcategories.
- Create, edit and organise notes.
- Search and navigate saved information.
- Embed interactive HTML diagrams.
- Persist data locally.
- Provide a clean, appealing and responsive interface.

These describe the intended direction; they do not mean the capabilities have been implemented or that every detail has been decided.

## Learning objectives and working style

The owner is a Computer Science student learning AI-assisted software engineering. Coding agents are expected to handle much of the implementation while explaining the concepts and important generated code so the owner can understand and critically review changes.

The preferred learning style is sequential, practical and checkpoint-based. Keep explanations focused and build understanding through working examples rather than presenting too many concepts at once.

The project has four learning and development tracks:

A. Personal Cockpit application development.
B. AI agent engineering.
C. Software engineering and code review.
D. Personal automation and agents — a future direction, not an immediate implementation priority.

## Constraints and proposed technical direction

- Begin with HTML, CSS and JavaScript as the proposed baseline.
- Start without a frontend framework unless an actual requirement justifies one.
- Keep the proof of concept simple; avoid unnecessary dependencies and premature abstraction.
- Analyse persistence requirements before selecting IndexedDB or another storage solution.
- Treat these technology points as proposals, not approved architecture decisions. See `DECISIONS.md` for the distinction between requirements and decisions.
- Keep the initial experience local to the Mac. Any later networking, synchronisation or hosting scope requires a separate decision.
