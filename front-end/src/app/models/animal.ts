export interface Animal {
  id: number;
  manejo: string;
  tag: string;
}

export const ANIMALS: Animal[] = [
  { id: 1, manejo: 'Boi', tag: 'abc4837df' },
  { id: 2, manejo: 'Boi', tag: 'abc4837df' },
  { id: 3, manejo: 'Boi', tag: 'abc4837df' },
  { id: 4, manejo: 'Boi', tag: 'abc4837df' },
];

export const NO_ANIMALS_MESSAGE = 'Ainda não há animais cadastrados';
