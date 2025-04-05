import { coins } from './coins';
import { price } from './price';
import { closeInput, getCommand } from './userInput';

/**
 * Log the help message
 */
function logHelp() {
  console.log('Commands:');
  console.log('  cls, clear: clear the console');
  console.log('  exit, quit: exit the program');
  console.log('  help: show this help message');
  console.log('  c, coin: convert coin list to average gold');
  console.log('  p, price [rarity]: price an item');
}

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
    case 'help': {
      logHelp();
      break;
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
