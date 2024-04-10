type CoinType = 'cp' | 'sp' | 'ep' | 'gp' | 'pp';

const conversion: Record<CoinType, number> = {
  cp: 0.01,
  sp: 0.1,
  ep: 0.5,
  gp: 1,
  pp: 10,
};

function parse(str: string) {
  return str
    .split(/[;,]/)
    .map((entry) => {
      const [rawAmount, type] = entry.trim().split(/\s+/);
      const amount = Number(rawAmount);
      const rate = conversion[type as CoinType];

      if (!amount || !rate) {
        console.error(`Invalid coin entry: ${entry}`);
        return { amount: 0, type: 'gp', equivalent: 0 };
      }

      return { amount, type, equivalent: amount * rate };
    })
    .filter(({ amount }) => amount > 0);
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
