import React, { useContext }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'

import { AuthContext, ErrorContext } from '../../../pages/_app';
import { editFetch } from '../../../services/editFetch';
import { Item } from '../../../types/item';
import { useModal } from '../../../customHooks/useModal';

import Button from '../Button/Button';
import Container from '../Container/Container';


const EditForm = ({item, currentPath, closeModal}: Props) => {

const { token } = useContext(AuthContext) 
const {error, setError} = useContext(ErrorContext);
// const {closeModal} = useModal()

const defaultValues = currentPath === '/artworks' ? {
  title: '',
  author: '',
  year: undefined,
  area: [],
  movement: '',
  image: ''
}
: {
  name: '',
  movement: '',
  area: []
}

const { handleSubmit, register, formState } = useForm<Item>({
defaultValues,
});


      const onSubmit = (values: Item) => { 
       formState.isValid && editFetch(currentPath, item, token, values, setError, closeModal)
      }

      

  return (

    <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <h1>Please, fill in the field/s you want to update.</h1>
      <Container direction='column'>

     {item.name && ( 
        <>
        <input type="text" id="name" placeholder="name"
          {...register('name', {
            required: false
          }
            )}
            />
        <input type="text" id="movement" placeholder="movement" 
          {...register('movement', {
            required: false
          }
            )}
            />

            <select id="area" {...register('area', {
            required: false
          })}>
            <option value="">Área</option>
                <option value="arquitecture">arquitecture</option>
                <option value="painting">painting</option>
                <option value="sculpture">sculpture</option>
            </select>

            <label htmlFor={(item.mainArtworks)?.map((artwork) => artwork._id)} id="artworks">
        Main artworks
      </label>
      
      {item.mainArtworks && (item.mainArtworks).map((artwork) => (
        <div key={artwork._id}>
          <input
            type="checkbox"
            id={artwork._id}
            name="main artworks"
            value={artwork.title}
            // onChange={handleCheckbox}
            // checked={selectedTypes.includes(option) 
            />
            <label htmlFor={artwork._id}>{artwork._id}</label>            
            </div>
      ))}
      

        {(formState.errors.name || formState.errors.movement || formState.errors.area) && <p>Please, check your data and try again.</p>}
        <p>{error}</p>
        
        </>)}

        {item.title && ( 
        <>
         <input type="text" id="title" placeholder="title" 
          {...register('title', {
            required: false
          }
          )}
          />
   <input type="text" id="author" placeholder="author" 
          {...register('author', {
            required: false
          }
          )}
          />
 <input type="number" id="year" placeholder="year" 
          {...register('year', {
            required: false,
            pattern: {
              value: /^\d{3,4}$/,
              message: 'Please, do not use dots.'
            }
          }
          )}
          />
  <select id="area" {...register('area', {
            required: false
          })}
          >
  <option value="">Area</option>
                <option value="arquitecture">arquitecture</option>
                <option value="painting">painting</option>
                <option value="sculpture">sculpture</option>
            </select>
<input type="text" id="movement" placeholder="movement" 
          {...register('movement', {
            required: false
          }
          )}
          />
<input type="file" id="image" accept=".jpeg, .png, .gif, .webp"
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
   </FormStyled>
     )
}

export type Props = {
    item: Item
    currentPath: string
    closeModal: () => void
}


export default EditForm



