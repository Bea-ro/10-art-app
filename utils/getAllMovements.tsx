import { Item } from "../types/item";

export const getAllMovements = (items: Item[]) => {
  const movementsWithDuplicates = items.map((item: Item) => item.movement);
  const movements: string[] = [];
  movementsWithDuplicates.forEach((movement) => {
    if (!movements.includes(movement)) {
      movements.push(movement);
    }
  });
  return movements;
};
