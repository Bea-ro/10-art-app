import { useContext } from 'react'
import { useModal } from '../../customHooks/useModal'
import { MessageContext } from '../../pages/_app';
import { Item } from '../../types/item'

import Link from 'next/link';
import Button from '../ui/Button/Button'
import Container from '../ui/Container/Container'
import Subtitle from '../ui/Subtitle/Subtitle'
import Modal from '../ui/Modal/Modal'
import ItemsGrid from '../ui/ItemsGrid/ItemsGrid'
import AddForm from '../ui/Form/AddForm'


const ItemsInHome = ( { items, itemType } : Props ) => {

const {setMessage} = useContext(MessageContext)  
const {isModalOpen, modalDisplay, modalContent, setModalContent, openModal, closeModal} = useModal(setMessage)

const handleAddModal = (itemType: string) => {
    setModalContent(<AddForm itemType={itemType} closeModal={closeModal} setModalContent={setModalContent}/>);
    openModal()
  }

    return (
<div style={{position: 'relative'}}>
<Subtitle subtitle={itemType === 'authors' ? 'artists' : itemType}/>
<Container>
{modalDisplay && <Button buttonText={`Add a new ${itemType === 'authors' ? 'artist' : itemType.slice(0, -1)}`} 
type="button" onClick={()=>handleAddModal(itemType)}/>}
{modalDisplay && <Link className="button" href={`/${itemType}`}>See {itemType === 'authors' ? 'artists' : itemType} detail</Link>}
{isModalOpen && <Modal top="3%">{modalContent}</Modal>}
</Container>
<ItemsGrid isModalOpen={isModalOpen} items={items}></ItemsGrid>
</div>
)
}

export type Props = {
    items: Item[]
    itemType: string
 }

export default ItemsInHome
