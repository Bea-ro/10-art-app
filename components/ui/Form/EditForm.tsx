import React, { useContext }  from 'react'
import { FormStyled } from './FormStyled';
import { useForm} from 'react-hook-form'
// import { useRouter } from 'next/router';

import Button from '../Button/Button';
import Container from '../Container/Container';

import { AuthContext, ErrorContext } from '../../../pages/_app';
import { editFetch } from '../../../services/editFetch';
import { addFetch } from '../../../services/addFetch';
import { EditFormData } from '../../../types/formData';
import { Item } from '../../../types/item';



const EditForm = ({item}: Props) => {

const { setIsAuth, setToken } = useContext(AuthContext) 
const {error, setError} = useContext(ErrorContext);


        const { handleSubmit, register, formState } = useForm<EditFormData>({defaultValues: 
        {name: '',
        movement: '',
        area: []
      }
      })
     
      const onEditSubmit = (values: EditFormData) => { 
       formState.isValid && editFetch(currentPath, item, token, values, setError)
      }
      const onAddSubmit = (values: EditFormData) => { 
        formState.isValid && addFetch(currentPath, token, values, setError)
       }

  return (

    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Container direction='column'>

     {item.name && ( 
        <>
        <input type="text" id="name" placeholder="name"
          {...register('name', {
            required: false,
            pattern: //que sea string
          }
            )}
            />
        <input type="text" id="movement" placeholder="movement" 
          {...register('movement', {
            required: false,
            pattern: //string
          }
            )}
            />

            <select id="area">
                <option>arquitecture</option>
                <option>painting</option>
                <option>sculpture</option>
            </select>

{/* otro checkbox que muestre las obras para quitarle? */}

        {(formState.errors.name || formState.errors.movement || formState.errors.area) && <p>Please, check your data and try again.</p>}
        <p>{error}</p>
        </>)}

        {item.title && ( 
        <>
         <input type="text" id="title" placeholder="title" 
          {...register('title', {
            required: false,
            pattern: //string
          }
          )}
          />
   <input type="text" id="author" placeholder="author" 
          {...register('author', {
            required: false,
            pattern: //string
          }
          )}
          />
 <input type="number" id="year" placeholder="year" 
          {...register('year', {
            required: false,
            pattern: //3-4 dígitos sin puntos
          }
          )}
          />
  <select id="area">
                <option>arquitecture</option>
                <option>painting</option>
                <option>sculpture</option>
            </select>
<input type="text" id="movement" placeholder="movement" 
          {...register('movement', {
            required: false,
            pattern: //string
          }
          )}
          />
<input type="file" id="image" placeholder="image" 
          {...register('image', {
            required: false,
            pattern: //movida
          }
          )}
          />
        </>
        )}
        
        </Container>
        <Button type="submit" buttonText="Submit" 
        disabled={!formState.isValid || formState.isSubmitting}
        />
   
   </FormStyled>
     )
}

export type Props = {
    item: Item
}


export default EditForm



