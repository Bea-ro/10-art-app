import { ItemCardStyled } from "./ItemCardStyled";
import { useContext, useState } from "react";
import { AuthContext, MessageContext, ModalContext } from "../../pages/_app";
import { handleDeleteModal } from "../../utils/handleDeleteModal";
import { randomArtwork } from "../../utils/randomArtwork";
import { Item } from "../../types/item";

import Link from "next/link";
import Image from "next/legacy/image";
import Button from "../ui/Button/Button";

const CarouselItemCard = ({
  item,
  itemType,
  display,
  width,
  imageFit,
}: Props) => {
  const { setMessage } = useContext(MessageContext);
  const { token } = useContext(AuthContext);
  const { openModal, closeModal, setModalContent, modalDisplay } =
    useContext(ModalContext);
  const [deletedItem, setDeletedItem] = useState(false);

  const closeWithHideItem = () => {
    closeModal();
    setDeletedItem(true);
  };

  return (
    <ItemCardStyled
      display={deletedItem ? "none" : display}
      width={width}
      imageFit={imageFit}
    >
      <h2>{item.title || item.name}</h2>
      <p>{item.title ? item.author : item.movement} </p>
      <Link href={`/${itemType}/${item._id}`}>
        <Image
          src={
            (typeof item.image === "string" && item.image) ||
            (typeof item.mainArtworks === "string" && item.mainArtworks &&
              Array.isArray(item.mainArtworks) &&
              item.mainArtworks[0] &&
              randomArtwork(item.mainArtworks).image) ||
            ""
          }
          alt={
            item.title
              ? item.title || item.name || ""
              : `Artwork by ${item.name}`
          }
          height={400}
          width={400 * (16 / 9)}
        ></Image>
      </Link>
      {modalDisplay && (
        <Button
          buttonText="Delete"
          type="button"
          onClick={() =>
            handleDeleteModal(
              item,
              itemType,
              token,
              openModal,
              closeModal,
              setMessage,
              setModalContent,
              closeWithHideItem
            )
          }
        />
      )}
    </ItemCardStyled>
  );
};

export type Props = {
  item: Item;
  itemType: string;
  display: string;
  width: string;
  imageFit: string;
};

export default CarouselItemCard;
