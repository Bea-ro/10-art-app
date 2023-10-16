import { useContext } from 'react'
import { useModal } from '../../../customHooks/useModal'
import { MessageContext } from '../../../pages/_app';
import { Item } from '../../../types/item'

import Link from 'next/link';
import Button from '../Button/Button'
import Container from '../Container/Container'
import Subtitle from '../Subtitle/Subtitle'
import Modal from '../Modal/Modal'
import ItemsGrid from '../ItemsGrid/ItemsGrid'
import AddForm from '../Form/AddForm'


const ItemsInHome = ( { items, itemType } : Props ) => {

const {setMessage} = useContext(MessageContext)  
const {isModalOpen, modalDisplay, modalContent, setModalContent, openModal, closeModal} = useModal(setMessage)

const handleAddModal = (itemType: string) => {
    setModalContent(<AddForm itemType={itemType} closeModal={closeModal}/>);
    openModal()
  }

    return (
<div>
<Subtitle subtitle={itemType === 'authors' ? 'artists' : itemType}/>
<Container>
{modalDisplay && <Button buttonText={`Add a new ${itemType === 'authors' ? 'artist' : itemType.slice(0, -1)}`} 
type="button" onClick={()=>handleAddModal(itemType)}/>}
{modalDisplay && <Link className="button" href={`/${itemType}`}>See {itemType === 'authors' ? 'artists' : itemType} detail</Link>}
{isModalOpen && <Modal>{modalContent}</Modal>}
</Container>
<ItemsGrid items={items}></ItemsGrid>
</div>
)
}

export type Props = {
    items: Item[]
    itemType: string
 }

export default ItemsInHome
