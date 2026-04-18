#!/usr/bin/env node

import { analyzeTransaction } from '../core/analyzeTransaction.js';

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.length === 0) {
    console.log(`Bitcoin Transaction Safety Engine

Usage:
  btse analyze --tx <raw-tx-hex>
  btse analyze --file <path>
  btse analyze --json --tx <raw-tx-hex>
`);
    return;
  }

  if (args[0] !== 'analyze') {
    console.error(`Unknown command: ${args[0]}`);
    process.exitCode = 1;
    return;
  }

  const txIndex = args.indexOf('--tx');
  const fileIndex = args.indexOf('--file');
  const json = args.includes('--json');

  let transaction: string | undefined;

  if (txIndex !== -1 && args[txIndex + 1]) {
    transaction = args[txIndex + 1];
  }

  if (fileIndex !== -1 && args[fileIndex + 1]) {
    const fs = await import('node:fs/promises');
    transaction = (await fs.readFile(args[fileIndex + 1], 'utf8')).trim();
  }

  if (!transaction) {
    console.error('Provide --tx <raw-tx-hex> or --file <path>.');
    process.exitCode = 1;
    return;
  }

  const result = await analyzeTransaction({ transaction });

  if (json) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  console.log('Analysis summary');
  console.log(`ok: ${result.ok}`);
  console.log(`info: ${result.summary.info}`);
  console.log(`warn: ${result.summary.warn}`);
  console.log(`error: ${result.summary.error}`);

  if (result.findings.length === 0) {
    console.log('No findings.');
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
