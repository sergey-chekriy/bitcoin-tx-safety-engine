# Roadmap

This roadmap intentionally favors a modest, shippable MVP.

## Phase 0 — Public setup

- create public repository and project structure
- publish architecture and scope notes
- define issue labels, milestones, and decision process
- document initial assumptions and non-goals

## Phase 1 — Core engine MVP

- define input model and normalized analysis result format
- implement baseline analysis pipeline
- add fee sanity, dust, and output-structure rules
- establish fixture format and unit test coverage

## Phase 2 — CLI and developer usability

- implement CLI entrypoint
- support human-readable and JSON output
- improve errors and exit codes
- publish usage examples for local review workflows

## Phase 3 — Expanded rule coverage

- add change expectation heuristics
- add additional suspicious-pattern checks
- expand fixtures and edge-case scenarios
- refine rule semantics based on early public feedback

## Phase 4 — MVP release

- stabilize API surface for early adopters
- finalize docs and examples
- publish known limitations
- prepare release notes and project report

## Possible later directions

- stronger descriptor-aware analysis
- PSBT-oriented adapters
- richer explainability for findings
- compatibility fixtures for external wallet workflows

These later directions are intentionally not promised for the initial grant period.
