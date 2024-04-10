import { coins } from './coins';
import { price } from './price';
import { closeInput, getCommand } from './userInput';

async function main() {
  const { command, rest } = await getCommand();

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
      coins(rest);
      break;
    case 'price':
    case 'p':
      price(rest);
      break;
    default:
      console.log('What?');
  }

  main();
}

main();
