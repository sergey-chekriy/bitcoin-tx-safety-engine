import { describe, expect, it } from 'vitest';
import { analyzeTransaction } from '../../src/core/analyzeTransaction.js';

describe('analyzeTransaction', () => {
  it('returns an empty result for the initial scaffold', async () => {
    const result = await analyzeTransaction({ transaction: 'deadbeef' });

    expect(result.ok).toBe(true);
    expect(result.findings).toEqual([]);
    expect(result.summary.warn).toBe(0);
  });
});
