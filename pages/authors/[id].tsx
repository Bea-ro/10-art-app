import { GetStaticProps } from "next"; 
import { GetStaticPaths } from "next"; 
import { useContext } from 'react';
import { AuthContext, MessageContext } from '../_app';
import { Author } from "../../types/author";

import { useModal } from '../../customHooks/useModal';
import { deleteFetch } from '../../services/deleteFetch';

import Layout from '../../components/ui/Layout/Layout';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import Button from '../../components/ui/Button/Button';
import Container from '../../components/ui/Container/Container';
import ItemsGrid from '../../components/ui/ItemsGrid/ItemsGrid';
import Message from '../../components/ui/Message/Message';
import AddForm from '../../components/ui/Form/AddForm';
import Modal from '../../components/ui/Modal/Modal';
import { upperCaseArea } from "@/utils/upperCaseArea";



const AuthorPage = ({ author }: Props) => {

  const { isAuth, token } = useContext(AuthContext);
  const { message, setMessage } = useContext(MessageContext);
  const {openModal, closeModal, isModalOpen, setModalContent, display, modalContent} = useModal()

  const handleAddModal = () => {
    setModalContent(<AddForm itemType={'authors'} closeModal={closeModal}/>);
    openModal()
  }

  const handleDeleteModal = (author: Author) => {
    setModalContent(
      <>
          <p>Are you sure you want to delete {author.name}?</p>
          <Container>
          <Button buttonText="Yes" type="button" onClick={() => deleteFetch('/authors', author, token, setMessage, closeModal)} ></Button>
          <Button buttonText="No" type="button" onClick={closeModal}></Button> 
          </Container>
          <Message shadow="transparent"></Message> 
        </>
          )
    openModal(); 
  }

  return (
    <Layout title={`Artist ${author.name}`}
      description={`Find information about artist ${author.name}`}>
      
      <PageTitle title={author.name}/>
      {isAuth? 
      <>
             <p>{author.movement}  {
              (author.area).length > 0 &&
               (author.area).map((area, index) => (
      <span key={area}>{upperCaseArea(area)}{index < author.area.length - 1 && ', '}</span>
    ))}</p>
      <ItemsGrid items={author.mainArtworks}></ItemsGrid>
        {display && <Container>
          <Button buttonText="Add a new artist" type="button" onClick={handleAddModal}/>
      <Button buttonText="Delete" type="button" onClick={()=>handleDeleteModal(author)}/>
      </Container>}
      {isModalOpen && <Modal>{modalContent}</Modal>}
        </>
       : <Text text={`Please, log in to discover ${author.name}.`}/>}
      </Layout>
     
  );
};              

export const getStaticPaths: GetStaticPaths = async () => {
  const response: Author[] = await fetch(
    `https://my-json-server.typicode.com/bea-ro/shop-api/authors/`
  ).then((res) => res.json());
  return {
    // paths: response.map((author) => ({
    //   params: { id: author._id }
    // })),
    // fallback: false
    paths:[],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id as string;

      const response: Author = await fetch(
        `https://complete-server-rtc.onrender.com/api/authors/${id}`
      ).then((res) => res.json());
     
      return {
        props: {
          author: response,
        },
        revalidate: 10
      };
    };



export type Props = {
  author: Author;
};

export default AuthorPage;


