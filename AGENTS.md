# Instructions for Coding Agents

## Before changing code

- Inspect the existing repository and its current Git status before making changes.
- Read `PROJECT_CONTEXT.md`, `ROADMAP.md`, `PROGRESS.md` and `DECISIONS.md` as relevant to the task. Treat `DECISIONS.md` as the source for what is confirmed versus proposed.
- Confirm the requested scope and follow the agreed architecture. If a needed choice is unresolved, explain the options and ask the owner when it materially affects the outcome.
- Do not overwrite, remove or reformat unrelated user work. Keep changes focused and reviewable.

## While working

- Explain important technical choices in clear, appropriately sized steps so the owner can learn and review the generated code.
- Distinguish observed facts, assumptions and recommendations; do not claim a proposal is an approved decision.
- Avoid unnecessary dependencies, premature abstraction and scope beyond the requested checkpoint.
- Never expose secrets, credentials, tokens or private configuration in code, logs, examples or reports. Use safe placeholders when examples need them.
- Keep documentation current when a meaningful project decision or milestone changes; do not record plans as completed work.

## Verification and Git

- Run relevant checks or tests when appropriate. Report exactly what was run and its actual result; do not imply that unrun checks passed.
- Do not commit, push, merge or change branches without the owner's explicit permission.
- Report the files changed, verification performed and any remaining assumptions or risks.
