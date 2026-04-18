export type Severity = 'info' | 'warn' | 'error';

export interface AnalysisFinding {
  code: string;
  severity: Severity;
  message: string;
  rule: string;
  details?: Record<string, unknown>;
}

export interface AnalysisResult {
  ok: boolean;
  findings: AnalysisFinding[];
  summary: {
    info: number;
    warn: number;
    error: number;
  };
}

export interface AnalyzeTransactionInput {
  transaction: string | Record<string, unknown>;
  metadata?: Record<string, unknown>;
}
