import { ItemCardStyled } from "./ItemCardStyled";
import { useState, useContext } from "react";
import { useRouter } from 'next/router';
import { AuthContext, MessageContext, ModalContext } from "../../pages/_app";
import { ModalTopContext } from '../../pages/_app';
import { randomArtwork } from '../../utils/randomArtwork';
import { handleDeleteModal } from '../../utils/handleDeleteModal';
import { Item } from '../../types/item';

import Link from 'next/link';
import Image from 'next/legacy/image';
import Button from '../ui/Button/Button';


const ItemCard = ({ item, itemType, display, isModalOpen }: Props) => {

  const router = useRouter();
  const currentPath = router.pathname;

  const { setMessage } = useContext(MessageContext);
  const { token } = useContext(AuthContext);
  const { openModal, closeModal, setModalContent, modalDisplay } =
    useContext(ModalContext);
  const { setModalTop } = useContext(ModalTopContext);


  const handleModalTop = (event) => {
    const rect = event.target.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
   const top = rect.top + scrollTop;
    setModalTop(Math.round(top));
  }

  return (
    <ItemCardStyled display={display} isModalOpen={isModalOpen}>
      <h3>{item.title || item.name}</h3>
      <p>{item.author || item.movement}</p>
      <Link
        href={item.title ? `/artworks/${item._id}` : `/authors/${item._id}`}
        key={item._id}
      >
        <Image
          src={
            (typeof item.image === "string" && item.image) ||
            (
              item.mainArtworks && Array.isArray(item.mainArtworks) &&
              item.mainArtworks[0] && randomArtwork(item.mainArtworks).image             
            )
            || ""
          }
          alt={
            item.title
              ? item.title || item.name || ""
              : `Artwork by ${item.name}`
          }
          height={100}
          width={100 * (16 / 9)}
        ></Image>
      </Link>
         
      {(currentPath === '/artworks' || currentPath === '/authors') && (
        <Button
          buttonText="Delete"
          type="button"
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
          }
          }
        />)
      }

    </ItemCardStyled>
  );
};

export type Props = {
  item: Item;
  itemType: string;
  display: string;
  isModalOpen: boolean;
};

export default ItemCard;
