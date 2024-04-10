import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { popFirstWord } from './parsing';

const rarities: Record<string, number> = {
  common: 0,
  uncommon: 1,
  rare: 2,
  veryrare: 3,
  vrare: 3,
  legendary: 4,
  legend: 4,
};

const highPrices: Record<string, number> = {
  breastplate: 400,
  halfplate: 750,
  chainmail: 75,
  splint: 200,
  plate: 1500,
  handcrossbow: 75,
};

export function price(str: string) {
  const { word: rarity, rest } = popFirstWord(str);
  const name = rest.toLowerCase();
  const basePrice = highPrices[name] ?? 50;
  const multiplier = rarities[rarity.toLowerCase()];

  if (multiplier == null) {
    console.error(`Invalid rarity: ${rarity}`);
    return;
  }

  const { total: purchase } = new DiceRoll(
    `${basePrice} + 1d100 * 10^${multiplier}`,
  );
  const { total: saleModifier } = new DiceRoll('2d4');
  const consumable = purchase / 2;
  const sale = purchase / saleModifier;
  const saleConsumable = sale / 2;

  console.log();
  console.log(`Base Price${name ? ` (${name})` : ''}: ${basePrice} gp`);
  console.log(
    `Purchase price: ${purchase} gp (${consumable.toFixed(0)} gp if consumable)`,
  );
  console.log(
    `Sale Price: ${sale.toFixed(0)} gp (${saleConsumable.toFixed(0)} gp if consumable)`,
  );
  console.log();
}
