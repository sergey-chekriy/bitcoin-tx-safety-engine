# Problem Statement

Bitcoin transaction review is often fragmented.

Different wallets, internal tools, QA harnesses, and backend services may implement narrow review checks in inconsistent ways. Some checks are incomplete, some are absent, and some are hard to reuse outside a single codebase. This increases duplicated effort and makes behavior harder to reason about.

The goal of this project is to provide a small, auditable, reusable transaction analysis component that helps developers inspect transactions before signing or broadcast and surface practical warnings in a consistent format.

## Why this matters

- mistakes around fees, outputs, and change can be costly
- smaller teams often do not prioritize reusable review tooling
- QA and fixture coverage are often weaker than they should be
- consistent result codes and examples can reduce duplicated implementation work

## Intended users

- wallet developers
- backend and custody-tooling teams
- QA engineers
- Bitcoin developers building internal automation or review workflows
