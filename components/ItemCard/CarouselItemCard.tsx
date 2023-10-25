import { ItemCardStyled } from "./ItemCardStyled";
import { Item } from "../../types/item";

import Link from "next/link";
import Image from "next/legacy/image";

const CarouselItemCard = ({ item, display, width, imagefit, mobile, tablet }: Props) => {

  return (
    <ItemCardStyled display={display} width={width} imagefit={imagefit} mobile={mobile}
    tablet={tablet}>
      <Link
        href={item.title ? `/artworks/${item._id}` : `/authors/${item._id}`}
        key={item._id}
      >
        <h2>{item.title || item.name}</h2>
        {item.title ? (
          <Image
            src={(typeof item.image === "string" && item.image) || ""}
            alt={item.title}
            height={400}
            width={400 * (16 / 9)}
          ></Image>
        ) : null}
      </Link>
    </ItemCardStyled>
  );
};

export type Props = {
  item: Item;
  display: string;
  width: string;
  imagefit: string;
  mobile?: string
  tablet?: string
};

export default CarouselItemCard;
