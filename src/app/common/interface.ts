export interface Cards {
  cards: Card[];
}

export interface Card {
  ability: IAbility;
  artist: string;
  attacks: IAttack[];
  convertedRetreatCost: number;
  evolvesFrom: string;
  hp: string;
  id: string;
  imageUrl: string;
  imageUrlHiRes: string;
  name: string;
  nationalPokedexNumber: number;
  number: string;
  rarity: string;
  resistances: IResistance[];
  retreatCost: string[];
  series: string;
  set: string;
  setCode: string;
  subtype: string;
  supertype: string;
  text: string[];
  types: string[];
  weaknesses: IWeakness[];
  card?: Card;
}

export interface IAbility {
  name: string;
  text: string;
  type: string;
}

export interface IAttack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: string;
}

export interface IResistance {
  type: string;
  value: string;
}

export interface IWeakness {
  type: string;
  value: string;
}

export interface Set {
  code: string;
  expandedLegal: boolean;
  logoUrl: string;
  name: string;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  standardLegal: boolean;
  symbolUrl: string;
  totalCards: number;
  updatedAt: string;
}

export interface IQuery {
  name: string;
  value: string | number;
}
