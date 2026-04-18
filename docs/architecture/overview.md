# Architecture Overview

## Design goals

- keep the core engine small and inspectable
- separate parsing, normalization, analysis, and presentation
- make rule behavior testable in isolation
- support both human-readable and machine-readable output
- avoid coupling the core to a hosted service or specific wallet

## Proposed logical components

### 1. Input adapters

Responsible for accepting supported input forms and converting them into a normalized internal representation.

Expected initial focus:
- raw transaction hex or decoded transaction JSON
- optionally additional metadata supplied by the caller

### 2. Normalization layer

Produces a consistent internal transaction view used by downstream rules.

Responsibilities:
- normalize inputs
- validate required structural assumptions
- preserve enough context for later explanations

### 3. Analysis engine

Executes enabled rules and collects findings.

Responsibilities:
- rule orchestration
- severity assignment
- result aggregation
- consistent finding identifiers

### 4. Rule modules

Each rule should be independently understandable and testable.

Initial rule families:
- fee checks
- dust and uneconomic output checks
- change expectation checks
- suspicious output structure checks

### 5. Presentation layer

Converts results into:
- human-readable CLI output
- machine-readable JSON output

## Proposed data flow

1. receive input
2. normalize transaction view
3. execute configured rules
4. aggregate findings
5. render result for API or CLI caller

## Architectural principles

- no silent assumptions when they materially affect findings
- document what is heuristic vs deterministic
- prefer stable result codes
- keep rule interfaces explicit
- keep core logic independent from UI or network calls
