# Bitcoin Transaction Safety Engine

Bitcoin Transaction Safety Engine is an open-source developer tool for analyzing Bitcoin transactions before signing or broadcast and returning clear, reusable safety warnings.

The project is intentionally narrow in scope. It is not a wallet, a hosted service, or a policy replacement for Bitcoin Core. The initial goal is to provide a practical analysis engine, a CLI, public documentation, and test fixtures that other Bitcoin projects can run locally and integrate into their own tooling.

## Why this project exists

Transaction review logic is often implemented ad hoc. Some wallets and internal tools perform limited checks, some duplicate the same logic in slightly different ways, and some miss entire classes of avoidable mistakes. This project aims to provide a shared, auditable building block that helps teams inspect transactions more consistently.

## Initial MVP goals

- Analyze candidate transactions before signing or broadcast
- Return human-readable warnings and machine-readable results
- Implement a narrow initial ruleset focused on practical safety checks
- Provide examples, fixtures, and documentation for developers
- Stay small enough to ship, audit, and maintain in public

## Initial rule areas

- fee sanity and fee outlier detection
- dust and uneconomic output checks
- change-output expectation checks
- output review warnings for suspicious or unexpected structure
- normalized result codes for downstream integrations

## Planned repository contents

- `src/` core engine, rules, result types, CLI entrypoints
- `tests/` unit tests, integration tests, fixtures
- `docs/` architecture, scope, roadmap, ADRs, API notes, runbooks
- `examples/` integration and usage examples
- `.github/` CI and issue templates

## Status

Scaffold / pre-MVP.

This repository currently contains project structure, architectural notes, roadmap, and contributor-oriented documentation intended to support public development.

## Principles

- Bitcoin-only scope
- free and open-source
- practical over ambitious
- explicit limitations over vague claims
- public development with documented milestones

## Non-goals for the initial version

- replacing wallet UX
- replacing Bitcoin Core policy or mempool behavior
- making signing decisions on behalf of users
- supporting every possible transaction flow in v1
- becoming a hosted API service

## Getting started

See:

- [`docs/problem-statement.md`](docs/problem-statement.md)
- [`docs/mvp-scope.md`](docs/mvp-scope.md)
- [`docs/architecture/overview.md`](docs/architecture/overview.md)
- [`docs/roadmap.md`](docs/roadmap.md)
- [`docs/api/overview.md`](docs/api/overview.md)

## Planned package shape

The initial implementation is expected to expose:

- a core analysis library
- a CLI for local inspection
- stable result types for downstream consumers
- fixtures and examples for wallet / backend integration


## Local development

Basic workflow:

- `npm install`
- `npm run dev`
- `npm run typecheck`
- `npm run test`

Helper commands are also available through `Makefile`:

- `make install`
- `make build`
- `make test`
- `make docker-run`
- `make docker-test`

Container files are provided for reproducible local work. The Docker setup is intended for development and CI-style validation, not as a hosted production service.

## License

MIT
