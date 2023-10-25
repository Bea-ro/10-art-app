import { FormStyled } from "./FormStyled";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, MessageContext, ModalContext } from "../../../pages/_app";
import { editFetch, uploadImageFetch } from "../../../services/editFetch";
import { upperCaseArea } from "../../../utils/upperCaseArea";
import { Item } from "../../../types/item";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Message from "../Message/Message";
import Text from "../Text/Text";

const EditForm = ({ item, itemType }: Props) => {
  const { token } = useContext(AuthContext);
  const { setMessage } = useContext(MessageContext);
  const { closeModal, setModalContent } = useContext(ModalContext);

  const defaultValues =
    itemType === "artworks"
      ? {
          title: item.title,
          author: item.author,
          year: item.year,
          area: item.area,
          movement: item.movement,
          image: item.image,
        }
      : {
          name: item.name,
          movement: item.movement,
          area: item.area,
        };

  const { handleSubmit, register, formState, watch } = useForm<Item>({
    defaultValues,
  });

  const fileName = watch("image")?.[0]?.name || "";

  const router = useRouter();

  const closeWithNavigate = (itemType: string, id: string) => {
    closeModal();
    router.push(`/${itemType}/${id}`);
  };

  const onSubmit = (values: Item) => {
    if (formState.isValid) {
      editFetch(itemType, item, token, values, setMessage);
      itemType === "artworks" &&
        values.image &&
        uploadImageFetch(itemType, item, token, values.image);
      setModalContent(
        <>
          <Button
            type="button"
            text="x"
            onClick={() => closeWithNavigate(itemType, item._id)}
          />
          <Message></Message>
        </>
      );
    }
  };

  const allAreas = ["Arquitecture", "Painting", "Sculpture"];

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <h1>Edit {item.title || item.name} data</h1>
      <Text
        text="Please, fill in the field/s you want to update."
        color="#535353"
        fontSize="14px"
      ></Text>
      <Container direction="column">
        {item.name && (
          <>
            <input
              type="text"
              id="name"
              placeholder={item.name}
              {...register("name", {
                required: false,
              })}
            />
            <input
              type="text"
              id="movement"
              placeholder={item.movement}
              {...register("movement", {
                required: false,
              })}
            />

            <label id="area">
              {allAreas.map((area) => (
                <div key={area} id="area-names">
                  <input
                    {...register("area", {
                      required: false,
                    })}
                    type="checkbox"
                    id={area}
                    name="area"
                    value={area.toLowerCase()}
                  />
                  <label htmlFor={area} id={area}>
                    {area}
                  </label>
                </div>
              ))}
            </label>
          </>
        )}

        {item.title && (
          <>
            <input
              type="text"
              id="title"
              placeholder={item.title}
              {...register("title", {
                required: false,
              })}
            />
            <input
              type="text"
              id="author"
              placeholder={item.author}
              {...register("author", {
                required: false,
              })}
            />
            <input
              type="number"
              id="year"
              placeholder={item.year?.toString()}
              {...register("year", {
                required: false,
                pattern: {
                  value: /^\d{3,4}$/,
                  message: "Please, do not use dots.",
                },
              })}
            />

            <select
              id="area"
              {...register("area", {
                required: false,
              })}
            >
              <option value={item.area} disabled hidden>
                {upperCaseArea(item.area as string)}
              </option>
              {allAreas.map((area) => (
                <option key={area} value={area} id={area}>
                  {area}
                </option>
              ))}
            </select>

            <input
              type="text"
              id="movement"
              placeholder={item.movement}
              {...register("movement", {
                required: false,
              })}
            />

            <label htmlFor="image" id="image-input-label">
              Upload Image
            </label>
            <span>{fileName}</span>
            <input
              type="file"
              id="image"
              accept=".jpg, .jpeg, .png, .gif, .webp"
              {...register("image", {
                required: false,
              })}
            />
          </>
        )}
      </Container>
      <Container>
        <Button
          type="submit"
          text="Save"
          disabled={!formState.isValid || formState.isSubmitting}
        />
        <Button type="button" text="Cancel" onClick={closeModal} />
      </Container>
      <Message></Message>
    </FormStyled>
  );
};

export type Props = {
  item: Item;
  itemType: string;
};

export default EditForm;
