# Rules Engine Notes

## Intent

The rules engine should make it easy to add narrowly scoped checks without turning the codebase into an opaque policy blob.

## Desired properties

- each rule has a clear purpose
- each rule can explain why it emitted a finding
- each rule can be tested with focused fixtures
- rules can be enabled or disabled deliberately
- result codes are stable enough for downstream use

## Suggested finding shape

- `code` — stable identifier
- `severity` — info / warn / error
- `message` — short human-readable explanation
- `details` — structured context for downstream tools
- `rule` — rule identifier

## Notes

Some checks will be deterministic, others heuristic. The documentation should state that clearly to avoid creating false confidence.
