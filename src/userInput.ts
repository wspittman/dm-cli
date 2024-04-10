import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';

const rl = readline.createInterface({ input, output });

export async function getCommand(): Promise<{
  command: string;
  args: string;
}> {
  const input = (await rl.question('>')).trim();
  const index = input.indexOf(' ');

  return {
    command: (index > 0 ? input.slice(0, index) : input).toLowerCase(),
    args: index > 0 ? input.slice(index) : '',
  };
}

/**
 * Close the input stream
 */
export function closeInput() {
  rl.close();
}
