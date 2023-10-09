import React, { useContext }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'

import Button from '../Button/Button';
import Container from '../Container/Container';

import { AuthContext, MessageContext } from '../../../pages/_app';
import { addFetch } from '../../../services/addFetch';
import { Item } from '../../../types/item';
import Message from '../Message/Message';



const AddForm = ( {itemType, closeModal} : Props) => {

const { token } = useContext(AuthContext) 
const {message, setMessage} = useContext(MessageContext);

const defaultValues = itemType === 'artworks' ? {
      title: '',
      author: '',
      year: undefined,
      area: '',
      movement: '',
      image: 'https://'
    }
  : {
      name: '',
      movement: '',
      area: []
    }
  
const { handleSubmit, register, formState, setValue } = useForm<Item>({
  defaultValues,
});

     
      const onSubmit = (values: Item) => { 
        formState.isValid && addFetch(itemType, token, values, setMessage);
      }
  
     
  return (

    <FormStyled onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h1>Add a new {itemType === 'authors' ? 'artist' : 'artwork'}</h1>
      <Container direction='column'>

        {itemType === 'artworks' && ( 
        <>
         <input type="text" id="title" placeholder="Title" 
          {...register('title', {
            required: true
          }
          )}
          />
   <input type="text" id="author" placeholder="Author" 
          {...register('author', {
            required: true
          }
          )}
          />
 <input type="number" id="year" placeholder="Year" 
          {...register('year', {
            required: true,
            pattern: {
              value: /^\d{3,4}$/,
              message: 'Please, do not use dots.'
            }
          }
          )}
          />
  <select id="area" {...register('area', {
            required: true
          })}
          >
  <option value="">Area</option>
                <option value="arquitecture">arquitecture</option>
                <option value="painting">painting</option>
                <option value="sculpture">sculpture</option>
            </select>
            <input type="text" id="movement" placeholder="Movement" 
          {...register('movement', {
            required: true
          }
          )}
          />
  <label htmlFor="image" id="image-input-label">Upload Image</label>
<input type="file" id="image" accept=".jpeg, .png, .gif, .webp"
          {...register('image', {
            required: false
          }
          )}
          />
        </>
        )}
      {itemType === 'authors' && (
        <>
        <input type="text" id="name" placeholder="Name"
          {...register('name', {
            required: true
          }
            )}
            />
        <input type="text" id="movement" placeholder="Movement" 
          {...register('movement', {
            required: true
          }
            )}
            />

<select id="area" {...register('area', {
            required: true
          })}>
            <option value="">Área</option>
                <option value="arquitecture">arquitecture</option>
                <option value="painting">painting</option>
                <option value="sculpture">sculpture</option>
            </select>


{/* obras podría llevar a añadir obra*/}      
       
        </>)}
  
        </Container>
        <Container>
        <Button type="submit" buttonText="Save" 
        disabled={!formState.isValid || formState.isSubmitting}
        />
    <Button buttonText="Cancel" type="button" onClick={closeModal}/>
    </Container>
    <Message shadow="transparent"></Message>
    </FormStyled>
     )
}

export type Props = {
  itemType: string
  closeModal: () => void
}


export default AddForm



