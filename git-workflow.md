# Git Workflow — Stinet Digital

## Branches
- main          : production-ready only. No direct pushes once remote is set.
- develop       : integration branch for completed tasks.
- feat/<slug>   : new feature work.
- fix/<slug>    : bug fixes.
- chore/<slug>  : setup, tooling, non-functional changes.
- docs/<slug>   : documentation only.

## Commit message format
type: short description

Allowed types:
- feat
- fix
- chore
- refactor
- docs

Examples:
feat: scaffold nextjs app
chore: add gitignore
fix: correct consultation form validation
docs: update database entity list

## Commit rules
- One commit per completed task.
- Never commit secrets, .env files, live databases or backups.
- Push after every completed task.
- A commit is not a backup until it is pushed.

## Pull request rules (once remote is set)
- PRs target develop.
- develop merges to main only at release.
- Each PR references its Task ID (e.g. T3).
