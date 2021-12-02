export const typeColors = {
  normal: '#ACA974',
  grass: '#3E9709',
  fire: '#FC0C0B',
  water: '#0A7ABC',
  flying: '#5EB9B2',
  bug: '#BDDD6E',
  poison: '#A819D7',
  electric: '#FFFA24',
  ground: '#706515',
  fighting: '#800B11',
  psychic: '#F55792',
  rock: '#474026',
  ice: '#C4CEE5',
  ghost: '#472B53',
  dragon: '#8A55FD',
  dark: '#000000',
  steel: '#7B8E8A',
  fairy: '#FFA0C2',
};

export type Type = keyof typeof typeColors;
