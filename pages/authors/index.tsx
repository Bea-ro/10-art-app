import { GetStaticProps } from 'next'
import { useContext, useState } from 'react'
import { AuthContext, ModalContext, ModalTopContext } from '../_app'
import { getAuthors } from '../../libs/authors/authors'
import { Author } from '../../types/author'
import { Item } from '../../types/item'

import Link from 'next/link'
import Layout from '../../components/ui/Layout/Layout'
import PageTitle from '../../components/ui/PageTitle/PageTitle'
import Text from '../../components/ui/Text/Text'
import ItemsGrid from '../../components/ui/ItemsGrid/ItemsGrid'
import Modal from '../../components/ui/Modal/Modal'
import Filter from '../../components/ui/Filter/Filter'

const AuthorsPage = ({ authors }: Props) => {
  const { isAuth } = useContext(AuthContext)
  const { isModalOpen, modalContent } = useContext(ModalContext)
  const { modalTop } = useContext(ModalTopContext)
  const [excludedItems, setExcludedItems] = useState<Item[]>([])

  return (
    <Layout
      title='Authors'
      description='Find information about artists from all movements and artworks of pinture, sculpture and arquitecture.'
    >
      <PageTitle title='Artists' />
      {isAuth ? (
        <>
          <Filter items={authors} setExcludedItems={setExcludedItems}></Filter>
          <ItemsGrid
            items={authors}
            itemType='authors'
            excludedItems={excludedItems}
          ></ItemsGrid>
          {isModalOpen && (
            <Modal top={`${modalTop.toString()}px`}>{modalContent}</Modal>
          )}
          <Link className='button' id='scroll-button' href='#'>
            &#8743;
          </Link>
        </>
      ) : (
        <Text text='Please, log in to discover artists.' />
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const authors = await getAuthors()
  console.log(authors)
  return {
    props: {
      authors: authors
    },
    revalidate: 10
  }
}

export type Props = {
  authors: Author[]
}

export default AuthorsPage
