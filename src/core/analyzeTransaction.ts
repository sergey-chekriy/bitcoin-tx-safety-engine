import type { AnalyzeTransactionInput, AnalysisResult } from '../types/index.js';

export async function analyzeTransaction(
  _input: AnalyzeTransactionInput,
): Promise<AnalysisResult> {
  return {
    ok: true,
    findings: [],
    summary: {
      info: 0,
      warn: 0,
      error: 0,
    },
  };
}
