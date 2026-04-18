# API Overview

The concrete API may change during early development, but the initial intended shape is small and explicit.

## Core library

Possible usage shape:

```ts
import { analyzeTransaction } from 'bitcoin-tx-safety-engine';

const result = await analyzeTransaction({
  transaction: '<raw tx or normalized object>',
  metadata: {
    expectedChangeScriptPubKey: '...'
  }
});
```

## Intended result shape

```ts
{
  ok: false,
  findings: [
    {
      code: 'FEE_OUTLIER',
      severity: 'warn',
      message: 'Observed fee appears materially higher than expected range.',
      rule: 'fee-sanity'
    }
  ],
  summary: {
    info: 0,
    warn: 1,
    error: 0
  }
}
```

## CLI

Planned commands:

- `btse analyze --tx <hex>`
- `btse analyze --file <path>`
- `btse analyze --json`

The exact command surface should remain modest for the MVP.
