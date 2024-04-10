import { popFirstWord, splitAndMap } from './parsing';

const conversion: Record<string, number> = {
  cp: 0.01,
  sp: 0.1,
  ep: 0.5,
  gp: 1,
  pp: 10,
};

function parse(str: string) {
  return splitAndMap(str, /[;,]/, (entry) => {
    const { word: rawAmount, rest: type } = popFirstWord(entry);
    const amount = Number(rawAmount);
    const rate = conversion[type];

    if (!amount || !rate) {
      console.error(`Invalid coin entry: ${entry}`);
      return;
    }

    return { amount, type, equivalent: amount * rate };
  });
}

export function coins(str: string) {
  const entries = parse(str);
  const totalGold = entries.reduce(
    (sum, { equivalent }) => sum + equivalent,
    0,
  );

  const boss = (totalGold * 0.7).toFixed(2);
  const minions = ((totalGold * 0.3) / (entries.length - 1)).toFixed(2);

  console.log();
  console.log(`Pile of gold: ${totalGold.toFixed(2)} gp`);
  console.log(
    `Split evenly: ${(totalGold / entries.length).toFixed(2)} gp each`,
  );
  console.log(`Boss & minions: ${boss} gp and ${minions} gp each`);
  console.log();
}
