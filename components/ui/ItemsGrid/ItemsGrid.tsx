import { ItemsGridStyled } from './ItemsGridStyled';

import { Item } from '../../../types/item';

import ItemCard from '../../ItemCard/ItemCard';


const ItemsGrid = ( { items, flow, isModalOpen } : Props ) => {

  return (
    <ItemsGridStyled flow={flow} isModalOpen={isModalOpen}>
          {items.map((item) => (
         <ItemCard key={item._id} item={item}></ItemCard>
))}
    </ItemsGridStyled>
  )
}
export type Props = {
    items: Item[]
  flow?: string
  isModalOpen: boolean
 }

export default ItemsGrid