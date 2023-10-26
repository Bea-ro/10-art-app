import { FilterStyled } from './FilterStyled';
import { getAllMovements } from '../../../utils/getAllMovements';
import { Item } from '../../../types/item';

import Button from '../Button/Button';

const Filter = ({ items, setExcludedItems }: Props) => {
const movements = getAllMovements(items)

const handleFilter = (movement: string) => {
    const newExcludedItems = items.filter((item) => item.movement !== movement)
    setExcludedItems(newExcludedItems)
    }

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newExcludedItems = items.filter((item) => item.movement !== event.target.value)
      console.log(newExcludedItems)
      setExcludedItems(newExcludedItems)
      }

const clearFilter = () => {
  setExcludedItems([])
}

  return (
    <FilterStyled>
      <Button type="button" key="all" text="All movements" onClick={clearFilter} id="clear-filter"></Button>
   {movements.map((movement: string) => (
        <Button type="button" key={movement} text={movement} onClick={() => handleFilter(movement)}></Button>
      ))}
      <select className="button" name="movement" value="" onChange={handleSelect}>
      <option value="" disabled hidden>
                Movement
              </option>
      {movements.map((movement: string) => (
            <option key={movement} value={movement}>
            {movement}
          </option>
      ))}
      </select>
    </FilterStyled>
  );
};
export type Props = {
items : Item[]
setExcludedItems: (arg0: Item[]) => void
};

export default Filter;
