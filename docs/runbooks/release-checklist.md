# Release Checklist

Use this checklist before publishing a tagged release or npm package.

## Scope and documentation

- Confirm the release scope is intentionally small and documented.
- Update `CHANGELOG.md`.
- Update README and docs for any user-visible behavior changes.
- Confirm non-goals and limitations are still accurately described.

## Quality gates

- Run `npm install` on a clean checkout.
- Run `npm run typecheck`.
- Run `npm run test`.
- Verify CLI help output still works.
- Review test fixtures and expected outputs for regressions.

## Security and trust

- Review dependency changes and remove anything unnecessary.
- Confirm no secrets, tokens, or local config files are tracked.
- Re-read any rule changes for false confidence or misleading wording.
- Confirm SECURITY.md contact details are still correct.

## Packaging and release

- Confirm package name, version, repository, homepage, and bugs URL in `package.json`.
- Build the project and verify the `dist/` output looks correct.
- Tag the release in Git after final review.
- Publish release notes.
- Publish to npm only if the package is ready for public consumption.

## Post-release

- Open follow-up issues for deferred work.
- Note any known limitations discovered during release review.
- Update roadmap status if a milestone was completed.
