# Roadmap

This roadmap is a proposed sequence of learning checkpoints, not a schedule or a record of completed work. Complete a stage in small, reviewable steps; adjust it when experience or requirements call for a change. Track D is intentionally later.

## 1. Repository and development environment

- Review the repository and its instructions before editing.
- Confirm the local development environment and choose a simple way to serve a static web app on `localhost`.
- Establish the smallest useful project structure and a run guide.
- **Learning checkpoint:** explain the repository layout, how a local web server serves files, and how to inspect a Git diff.

## 2. First runnable application

- Create a minimal HTML page with linked CSS and JavaScript; render a useful initial screen in a browser.
- Keep the first implementation dependency-free unless a concrete need emerges.
- **Learning checkpoint:** trace how HTML, CSS and JavaScript combine to display and update the page; make and review one small change.

## 3. Core knowledge organisation

- Define a small first use case and a simple in-app note shape before building broad features; adding a separate HTML file for every topic is not the intended authoring workflow.
- Add the minimum UI and behavior to create, view and edit notes within the application.
- Introduce categories and nested subcategories incrementally, based on the first use case.
- Explore consistent visual styling within a category and suitable structures or templates for different topic types.
- **Learning checkpoint:** explain the data model, user interactions and how changes flow through the code.

## 4. Local persistence

- Analyse data size, query, privacy and recovery needs before selecting browser storage.
- Add local persistence and handle empty, invalid or older stored data deliberately.
- Consider export/import or another backup path before relying on stored personal knowledge.
- **Learning checkpoint:** explain the chosen storage trade-offs and verify what happens after reload and when stored data is unavailable.

## 5. Search and navigation

- Add navigation across categories and notes, then a search experience that fits the actual data model.
- Keep empty results and no-content states understandable.
- **Learning checkpoint:** follow a search from user input through matching data to displayed results.

## 6. Interactive HTML diagrams

- Identify a specific diagram use case and define how an interactive diagram relates to an in-app note; the owner should be able to code or customise diagrams.
- Evaluate the supplied `github-grimoire_Version3.html` as an optional prototype for the experience. Inspect its behavior and risks before considering any reuse.
- Only after evaluation, choose a safe, maintainable rendering approach; do not assume arbitrary embedded HTML is safe to execute.
- **Learning checkpoint:** explain the rendering boundary, relevant browser security concerns and how the interaction is tested.

## 7. Testing, security and refinement

- Add checks appropriate to the implemented behavior, starting with core note and persistence flows.
- Review handling of untrusted text and diagram content, keyboard access, responsive layouts and error states.
- Refine the visual design based on use, not speculative features.
- **Learning checkpoint:** read a test, describe what it proves and what it does not, and review an AI-generated change for edge cases.

## 8. AI agent engineering and software engineering practice

- Develop reusable task briefs and review habits as the application grows.
- Learn to break work into small changes, inspect diffs, reason about boundaries and request evidence for claims.
- Introduce agent tooling only when a real workflow benefits from it; keep generated code understandable and reviewable.
- **Learning checkpoint:** compare an agent's proposed approach with the requirements and justify accepting or revising it.

## 9. Personal automation and agents (later)

- Revisit Track D only after the core personal knowledge workflow is useful and stable.
- Begin with a clearly bounded automation need and separately assess permissions, privacy and failure handling.
- No automation or agent integration is an immediate implementation priority.
