import { FormStyled } from './FormStyled'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext, MessageContext } from '../../../pages/_app'
import { ItemsContext } from '../../../pages'
import { addFetch } from '../../../services/addFetch'
import { Item } from '../../../types/item'

import Button from '../Button/Button'
import Container from '../Container/Container'
import Message from '../Message/Message'
import Text from '../Text/Text'

const AddForm = ({ itemType, closeModal, setModalContent }: Props) => {
  const { token } = useContext(AuthContext)
  const { setMessage } = useContext(MessageContext)
  const { artworks, setArtworks, authors, setAuthors } =
    useContext(ItemsContext)

  const defaultValues =
    itemType === 'artworks'
      ? {
          title: '',
          author: '',
          year: undefined,
          area: '',
          movement: ''
        }
      : {
          name: '',
          movement: '',
          area: '' || [],
          title: '',
          year: undefined
        }

  const { handleSubmit, register, formState, watch } = useForm<Item>({
    defaultValues
  })

  const fileName: string = watch('image')?.[0]?.name || ''

  const onSubmit = (values: Item) => {
    formState.isValid &&
      addFetch(
        itemType,
        token,
        values,
        setMessage,
        artworks,
        setArtworks,
        authors,
        setAuthors
      )

    formState.isValid &&
      setModalContent(
        <>
          <Button type='button' text='x' onClick={closeModal} />
          <Message></Message>
        </>
      )
  }

  const allAreas = ['Arquitecture', 'Painting', 'Sculpture']

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <h1>Add a new {itemType === 'authors' ? 'artist' : 'artwork'}</h1>
      <Text
        text='All fields are required.'
        color='#535353'
        fontSize='14px'
      ></Text>
      <Container direction='column'>
        {itemType === 'artworks' && (
          <>
            <input
              type='text'
              id='title'
              placeholder='Title'
              {...register('title', {
                required: true
              })}
            />
            <input
              type='text'
              id='author'
              placeholder='Author'
              {...register('author', {
                required: true
              })}
            />
            <input
              type='number'
              id='year'
              placeholder='Year'
              {...register('year', {
                required: true,
                pattern: {
                  value: /^\d{3,4}$/,
                  message: 'Please, do not use dots.'
                }
              })}
            />

            <select
              id='area'
              {...register('area', {
                required: true
              })}
            >
              <option value='' disabled hidden>
                Area
              </option>
              {allAreas.map((area) => (
                <option key={area} value={area.toLowerCase()} id={area}>
                  {area}
                </option>
              ))}
            </select>
            <input
              type='text'
              id='movement'
              placeholder='Movement'
              {...register('movement', {
                required: true
              })}
            />
            <label htmlFor='image' id='image-input-label'>
              Upload Image
            </label>
            <span>{fileName}</span>
            <input
              type='file'
              id='image'
              accept='.jpeg, .jpg, .png, .gif, .webp'
              {...register('image', {
                required: true
              })}
            />
          </>
        )}
        {itemType === 'authors' && (
          <>
            <input
              type='text'
              id='name'
              placeholder='Name'
              {...register('name', {
                required: true
              })}
            />
            <input
              type='text'
              id='movement'
              placeholder='Movement'
              {...register('movement', {
                required: true
              })}
            />

            <label id='area'>
              {allAreas.map((area) => (
                <div key={area} id='area-names'>
                  <input
                    {...register('area', {
                      required: true
                    })}
                    type='checkbox'
                    id={area}
                    name='area'
                    value={area.toLowerCase()}
                    placeholder={area}
                  />
                  <label htmlFor={area} id={area}>
                    {area}
                  </label>
                </div>
              ))}
            </label>
          </>
        )}
      </Container>
      <Container>
        <Button
          type='submit'
          text='Save'
          disabled={!formState.isValid || formState.isSubmitting}
        />
        <Button text='Cancel' type='button' onClick={closeModal} />
      </Container>
    </FormStyled>
  )
}

export type Props = {
  itemType: string
  closeModal: () => void
  setModalContent: (arg0: any) => void
}

export default AddForm
