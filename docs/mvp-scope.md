# MVP Scope

## Included in the first version

- transaction analysis pipeline
- narrow initial ruleset
- machine-readable results
- human-readable warning output
- CLI for local developer use
- documentation, examples, and fixtures

## Initial checks

- fee sanity and fee outlier detection
- dust and uneconomic output checks
- change-output expectation checks
- suspicious or unexpected output structure warnings
- normalized warning / finding codes

## Explicitly out of scope for MVP

- broad wallet integration work for many products
- hosted API service
- mempool prediction or fee estimation research
- full policy emulation of Bitcoin Core behavior
- hardware-wallet-specific integrations
- every transaction edge case from day one

## Success criteria for MVP

- documented rules and limitations
- usable CLI output for common developer workflows
- test fixtures covering baseline expected cases
- enough stability for early feedback and small integrations
