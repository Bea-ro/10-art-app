import { Item } from '../types/item';

export const handleFilter = (
  items: Item[],
  movement: string,
  setExcludedItems: (arg0: Item[]) => void
) => {
  const newExcludedItems = items.filter((item) => item.movement !== movement);
  setExcludedItems(newExcludedItems);
};

export const handleSelect = (
  items: Item[],
  event: React.ChangeEvent<HTMLSelectElement>,
  setExcludedItems: (arg0: Item[]) => void,
  setSelectedMovement: (arg0: string) => void
) => {
  const newExcludedItems = items.filter(
    (item) => item.movement !== event.target.value
  );
  setExcludedItems(newExcludedItems);
  setSelectedMovement(event.target.value);
};

export const clearFilter = (
  setExcludedItems: (arg0: Item[]) => void,
  setSelectedMovement: (arg0: string) => void
) => {
  setExcludedItems([]);
  setSelectedMovement("");
};
