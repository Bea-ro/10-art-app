import React from 'react'
import { PageTitleStyled } from './PageTitleStyled'

const PageTitle = ( {title}: Props ) => {
  return (
    <PageTitleStyled>{title}</PageTitleStyled>
    )
}

type Props = {
    title: string
} 


export default PageTitle