# Instructions for Coding Agents

## Before changing files

- Inspect the existing repository and its current Git status before making changes.
- Read `PROJECT_CONTEXT.md`, `ROADMAP.md`, `PROGRESS.md` and `DECISIONS.md` as relevant to the task. Treat `DECISIONS.md` as the source for what is confirmed versus proposed.
- Confirm the requested scope and follow the agreed architecture. If a needed choice is unresolved, explain the options and ask the owner when it materially affects the outcome.
- Do not overwrite, remove or reformat unrelated user work. Keep changes focused and reviewable.
- Modify only files explicitly included in the requested task.
- Obtain permission before changing additional files.
- Preserve uncommitted user work, including untracked files.
- Do not perform unrelated cleanup or refactoring.
- Treat repository documentation as the durable source of project context, rather than relying on previous AI conversation history.

## While working

- Explain important technical choices in clear, appropriately sized steps so the owner can learn and review the generated code.
- Distinguish observed facts, assumptions and recommendations; do not claim a proposal is an approved decision.
- Avoid unnecessary dependencies, premature abstraction and scope beyond the requested checkpoint.
- Never expose secrets, credentials, tokens or private configuration in code, logs, examples or reports. Use safe placeholders when examples need them.
- Keep documentation current when a meaningful project decision or milestone changes; do not record plans as completed work.

## Scope and change control

- Before making any repository changes, inspect the current Git status and identify existing user modifications.
- Modify only files explicitly included in the requested task. If another file needs changing, explain why and obtain permission first.
- Do not silently expand the task or perform unrelated cleanup, refactoring or formatting.
- Preserve uncommitted user work, including untracked files.
- If requirements conflict with existing documentation or code, explain the conflict before proceeding.

## Documentation and project knowledge

- Treat the repository documentation as the durable source of project context, not previous AI conversation history.
- Check whether a proposed change contradicts an existing confirmed decision.
- Update `PROGRESS.md` only when meaningful work has actually been completed.
- Add entries to `DECISIONS.md` only after the owner explicitly approves the decision.
- Do not duplicate large amounts of information across documentation files.

## Progress tracking and commit workflow

- After completing a meaningful task or milestone, review whether `PROGRESS.md` needs updating.
- If the task changes the project's current state, completed milestones, or next steps, update `PROGRESS.md` before the final commit.
- Include a concise summary of what was completed and identify the next checkpoint.
- Do not update `PROGRESS.md` for trivial changes such as typo fixes, formatting adjustments or unrelated maintenance.
- When a task includes changes to `PROGRESS.md`, stage it together with the relevant implementation changes so the progress record and implementation are committed together.
- Never claim that work is completed unless it has been verified.
- Do not create an additional commit solely to update `PROGRESS.md` unless explicitly requested.

## Verification and Git

- Run relevant checks or tests when appropriate. Report exactly what was run and its actual result; do not imply that unrun checks passed.
- Do not commit, push, merge or change branches without the owner's explicit permission.
- Report the files changed, verification performed and any remaining assumptions or risks.
