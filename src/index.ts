import { coins } from './coins';
import { closeInput, getCommand } from './userInput';

async function main() {
  const { command, args } = await getCommand();

  switch (command) {
    case 'clear':
    case 'cls': {
      console.clear();
      break;
    }
    case 'exit':
    case 'quit': {
      closeInput();
      return;
    }
    case 'coins':
    case 'coin':
    case 'c':
      coins(args);
      break;
    default:
      console.log('What?');
  }

  main();
}

main();
