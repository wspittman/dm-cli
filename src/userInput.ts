import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';
import { popFirstWord } from './parsing';

const rl = readline.createInterface({ input, output });

export async function getCommand(): Promise<{
  command: string;
  rest: string;
}> {
  const input = await rl.question('>');
  const { word, rest } = popFirstWord(input);

  return {
    command: word,
    rest,
  };
}

/**
 * Close the input stream
 */
export function closeInput() {
  rl.close();
}
