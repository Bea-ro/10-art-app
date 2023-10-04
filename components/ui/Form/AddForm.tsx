import React, { useContext }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'

import Button from '../Button/Button';
import Container from '../Container/Container';

import { AuthContext, ErrorContext } from '../../../pages/_app';
import { addFetch } from '../../../services/addFetch';
import { Item } from '../../../types/item';



const AddForm = ( {itemType} : Props) => {

const { token } = useContext(AuthContext) 
const {error, setError} = useContext(ErrorContext);

const defaultValues = itemType === 'artwork' ? {
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
        formState.isValid && addFetch(itemType, token, values, setError)
            }


  return (

    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Container direction='column'>

        {itemType === 'artwork' && ( 
        <>
         <input type="text" id="title" placeholder="title" 
          {...register('title', {
            required: true
          }
          )}
          />
   <input type="text" id="author" placeholder="author" 
          {...register('author', {
            required: true
          }
          )}
          />
 <input type="number" id="year" placeholder="year" 
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
            <input type="text" id="movement" placeholder="movement" 
          {...register('movement', {
            required: true
          }
          )}
          />
<input type="file" id="image" accept=".jpeg, .png, .gif, .webp"
          {...register('image', {
            required: false
          }
          )}
          />        </>
        )}
      {itemType === 'author' && (
        <>
        <input type="text" id="name" placeholder="name"
          {...register('name', {
            required: true
          }
            )}
            />
        <input type="text" id="movement" placeholder="movement" 
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


{/* obras */}

        {(formState.errors.name || formState.errors.movement || formState.errors.area) && <p>Please, check your data and try again.</p>}
        <p>{error}</p>
        </>)}
  
        </Container>
        <Button type="submit" buttonText="Submit" 
        disabled={!formState.isValid || formState.isSubmitting}
        />
   
   </FormStyled>
     )
}

export type Props = {
  itemType: string
}


export default AddForm



