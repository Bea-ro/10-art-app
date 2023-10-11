import React, { useContext }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'

import { AuthContext, MessageContext } from '../../../pages/_app';
import { editFetch, uploadImageFetch } from '../../../services/editFetch';
import { Item } from '../../../types/item';

import Button from '../Button/Button';
import Container from '../Container/Container';
import Message from '../Message/Message';


const EditForm = ({item, itemType, closeModal}: Props) => {

const { token } = useContext(AuthContext) 
const {message, setMessage} = useContext(MessageContext);

const defaultValues = itemType === 'artworks' ? {
  title: item.title,
  author: item.author,
  year: item.year,
  area: item.area,
  movement: item.movement,
  image: item.image
}
: {
  name: item.name,
  movement: item.movement,
  area: item.area
}

const { handleSubmit, register, formState } = useForm<Item>({
defaultValues,
});


      const onSubmit = (values: Item) => { 
      
      if (formState.isValid) {
        editFetch(itemType, item, token, values, setMessage)
        itemType === 'artworks' && uploadImageFetch(itemType, item, token, values)
      }
      }


      const allAreas = ['Arquitecture', 'Painting', 'Sculpture']
    
  return (

    <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <h1>Please, fill in the field/s you want to update.</h1>
      <Container direction='column'>

     {item.name && ( 
        <>
        <input type="text" id="name" placeholder={item.name}
          {...register('name', {
            required: false
          }
            )}
            />
        <input type="text" id="movement" placeholder={item.movement} 
          {...register('movement', {
            required: false
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
            {/* <label htmlFor={(item.mainArtworks)?.map((artwork) => artwork._id)} id="artworks">
        Main artworks
      </label>
      
      {item.mainArtworks && (item.mainArtworks).map((artwork) => (  
          <input
          key={artwork._id}
            type="checkbox"
            id={artwork._id}
            name="main artworks"
            value={artwork.title}
            // onChange={evento lo que sea}
            />
          ))} */}
    
        </>)}

        {item.title && ( 
        <>
         <input type="text" id="title" placeholder={item.title} 
          {...register('title', {
            required: false
          }
          )}
          />
   <input type="text" id="author" placeholder={item.author} 
          {...register('author', {
            required: false
          }
          )}
          />
 <input type="number" id="year" placeholder={item.year} 
          {...register('year', {
            required: false,
            pattern: {
              value: /^\d{3,4}$/,
              message: 'Please, do not use dots.'
            }
          }
          )}
          />
          
  <select id="area" 
  value={(item.area).replace(item.area[0],item.area[0].toUpperCase())}
  {...register('area', {
            required: false
          })}
          >
            {allAreas.map((area) => (
          <option key={area} value={area} id={area}>{area}</option>
          )
          )}             
          </select>
<input type="text" id="movement" placeholder={item.movement} 
          {...register('movement', {
            required: false
          }
          )}
          />
          <label htmlFor="image" id="image-input-label">Upload Image</label>
<input type="file" id="image" accept=".jpg, .jpeg, .png, .gif, .webp"
          {...register('image', {
            required: false
          }
          )}
          />
        </>
        )}
        
        </Container>
        <Container>
        <Button type="submit" buttonText="Save" 
        disabled={!formState.isValid || formState.isSubmitting}
        />
    <Button type="button" buttonText="Cancel" onClick={closeModal}/>
    </Container>
    <Message shadow="transparent"></Message> 
   </FormStyled>
     )
}

export type Props = {
    item: Item
    itemType: string
    closeModal: () => void
}


export default EditForm



