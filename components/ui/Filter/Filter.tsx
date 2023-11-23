import { FilterStyled } from './FilterStyled'
import { useState } from 'react'
import { getAllMovements } from '../../../utils/getAllMovements'
import {
  clearFilter,
  handleFilter,
  handleSelect
} from '../../../utils/filterFunctions'
import { Item } from '../../../types/item'

import Button from '../Button/Button'

const Filter = ({ items, setExcludedItems }: Props) => {
  const movements = getAllMovements(items)
  const [selectedMovement, setSelectedMovement] = useState<string>('')

  return (
    <FilterStyled>
      <Button
        type='button'
        key='all'
        text='All movements'
        onClick={() => clearFilter(setExcludedItems, setSelectedMovement)}
        id='clear-filter'
      ></Button>
      {movements.sort().map((movement: string) => (
        <Button
          type='button'
          key={movement}
          text={movement}
          onClick={() => handleFilter(items, movement, setExcludedItems)}
        ></Button>
      ))}
      <select
        className='button'
        name='movement'
        value=''
        onChange={(event) =>
          handleSelect(items, event, setExcludedItems, setSelectedMovement)
        }
      >
        <option value='' disabled hidden>
          {selectedMovement === '' ? 'Movement' : selectedMovement}
        </option>
        {movements.map((movement: string) => (
          <option key={movement} value={movement}>
            {movement}
          </option>
        ))}
      </select>
    </FilterStyled>
  )
}
export type Props = {
  items: Item[]
  setExcludedItems: (arg0: Item[]) => void
}

export default Filter
