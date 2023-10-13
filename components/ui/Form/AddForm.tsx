import React, { useContext }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'

import { AuthContext, MessageContext } from '../../../pages/_app';
import { addFetch } from '../../../services/addFetch';
import { Item } from '../../../types/item';

import Button from '../Button/Button';
import Container from '../Container/Container';
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
      // image: 'https://'
    }
  : {
      name: '',
      movement: '',
      area: []
    }
  
const { handleSubmit, register, formState } = useForm<Item>({defaultValues});

     
      const onSubmit = (values: Item) => { 
        formState.isValid && addFetch(itemType, token, values, setMessage);
        }
  
      const allAreas = ['Arquitecture', 'Painting', 'Sculpture']
         
  return (

    <FormStyled onSubmit={handleSubmit(onSubmit)}>
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
          
  <select id="area"
  {...register('area', {
            required: true
          })}  
          >
            <option value="" disabled hidden>Area</option> 
     {allAreas.map((area) => (
          <option key={area} value={area.toLowerCase()} id={area}>{area}</option>
          )
          )}             
              
            </select>
            <input type="text" id="movement" placeholder="Movement" 
          {...register('movement', {
            required: true
          }
          )}
          />
  <label htmlFor="image" id="image-input-label">Upload Image</label>
<input type="file" id="image" accept=".jpeg, .jpg, .png, .gif, .webp"
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


<label id="areas">
      {allAreas.map((area) => (
        <div key={area} id="area-names">
      <input {...register('area', {
            required: false
          })}
            type="checkbox"
            id={area}
            name="areas"
            value={area}
            // onChange={evento lo que sea}
            />
            <label htmlFor={area} id={area}>{area}</label>
            </div>
              )
          )}
</label>


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


