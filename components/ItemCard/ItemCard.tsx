import { ItemCardStyled } from './ItemCardStyled'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext, MessageContext, ModalContext } from '../../pages/_app'
import { ModalTopContext } from '../../pages/_app'
import { handleDeleteModal } from '../../utils/handleDeleteModal'
import { getSrc } from '../../utils/getSrc'
import { Item } from '../../types/item'

import Link from 'next/link'
import Image from 'next/legacy/image'
import Button from '../ui/Button/Button'

const ItemCard = ({
  item,
  itemType,
  isModalOpen,
  filter,
  imageVisibility
}: Props) => {
  const router = useRouter()
  const currentPath = router.pathname

  const { setMessage } = useContext(MessageContext)
  const { token } = useContext(AuthContext)
  const { openModal, closeModal, setModalContent } = useContext(ModalContext)
  const { setModalTop } = useContext(ModalTopContext)

  const handleModalTop = (event: any) => {
    const rect = event.target.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const top = rect.top + scrollTop
    setModalTop(Math.round(top))
  }

  const src = getSrc(item)

  return (
    <ItemCardStyled
      filter={filter}
      isModalOpen={isModalOpen}
      imageVisibility={src === '' ? 'hidden' : 'visible'}
    >
      <h3>{item.title || item.name}</h3>
      <p>{item.author || item.movement}</p>
      <Link
        href={item.title ? `/artworks/${item._id}` : `/authors/${item._id}`}
        key={item._id}
      >
        <Image
          src={src}
          alt={
            item.title
              ? item.title || item.name || ''
              : `Artwork by ${item.name}`
          }
          height={100}
          width={100 * (16 / 9)}
        ></Image>
      </Link>

      {(currentPath === '/artworks' || currentPath === '/authors') && (
        <Button
          text='Delete'
          type='button'
          onClick={() => {
            handleDeleteModal(
              item,
              itemType,
              token,
              openModal,
              closeModal,
              setMessage,
              setModalContent,
              router
            )
            handleModalTop(event)
          }}
        />
      )}
    </ItemCardStyled>
  )
}

export type Props = {
  item: Item
  itemType: string
  isModalOpen: boolean
  filter: string
  imageVisibility?: string
}

export default ItemCard
