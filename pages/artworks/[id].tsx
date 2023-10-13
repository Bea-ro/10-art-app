import { GetStaticProps } from "next"; 
import { GetStaticPaths } from "next"; 
import { useContext } from "react";
import { AuthContext, MessageContext } from "../_app";
import { Artwork } from "../../types/artwork";
import { useModal } from '../../customHooks/useModal';
import { deleteFetch } from '../../services/deleteFetch';
import { upperCaseArea } from '../../utils/upperCaseArea';

import Image from 'next/legacy/image'
import Link from 'next/link';

import Layout from '../../components/ui/Layout/Layout';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Text from '../../components/ui/Text/Text';
import Button from '../../components/ui/Button/Button';
import Container from '../../components/ui/Container/Container';
import Modal from '../../components/ui/Modal/Modal';
import Message from '../../components/ui/Message/Message';
import EditForm from '../../components/ui/Form/EditForm';


const ArtworkPage = ({ artwork }: Props) => {

  const { isAuth, token } = useContext(AuthContext)
  const { message, setMessage } = useContext(MessageContext)
  const {openModal, closeModal, isModalOpen, setModalContent, modalDisplay, modalContent} = useModal()

  const handleEditModal = (artwork: Artwork) => {
    openModal();
    setModalContent(
   <EditForm item={artwork} itemType='artworks' closeModal={closeModal}/>
  );
  }

  const handleDeleteModal = (artwork: Artwork) => {
    setModalContent(
      <>
          <p>Are you sure you want to delete {artwork.title}?</p>
          <Container>
          <Button buttonText="Yes" type="button" onClick={() => deleteFetch('artworks', artwork, token, setMessage, closeModal)} ></Button>
          <Button buttonText="No" type="button" onClick={closeModal}></Button> 
          </Container>
          <Message shadow="transparent"></Message> 
        </>
          )
    openModal(); 
  }

  return (
    
    <Layout title={`Artwork ${artwork.title}`}
      description={`Find information about artwork ${artwork.title}`}>
      
      <PageTitle title={artwork.title}/>
      {isAuth? 
      <>
      <Container direction="column">
      <p>{`${artwork.author},  ${artwork.year}`} </p>
      <p>{artwork.movement} {upperCaseArea(artwork.area)}</p>   
      <Image src={artwork.image || ''} alt={artwork.title} 
      height={400} width={400*(16/9)}
      id="image-in-detail"></Image> 
      </Container>
      
      {modalDisplay && <Container>
      <Button buttonText="Edit" type="button" onClick={()=>handleEditModal(artwork)}/>
      <Button buttonText="Delete" type="button" onClick={()=>handleDeleteModal(artwork)}/>
      </Container>}

      {isModalOpen && <Modal>{modalContent}</Modal>}
       </>
       : <Text text={`Please, log in to discover ${artwork.title}.`}/>}
      </Layout>
  );
};        

export const getStaticPaths: GetStaticPaths = async () => {
      const response: Artwork[] = await fetch(
        `https://my-json-server.typicode.com/bea-ro/shop-api/artworks/`
      ).then((res) => res.json());
      return {
        // paths: response.map((artwork) => ({
        //   params: { id: artwork._id }
        // })),
        // fallback:false
        paths:[],
        fallback: 'blocking'
      };
    }

    export const getStaticProps: GetStaticProps = async (context) => {
     
      const id = context.params?.id as string;
  
        const response: Artwork = await fetch(
          `https://complete-server-rtc.onrender.com/api/artworks/${id}`
        ).then((res) => res.json());
        
        return {
          props: {
            artwork: response,
          },
          revalidate: 10
        };
      };

      
export type Props = {
  artwork: Artwork;
};

export default ArtworkPage;