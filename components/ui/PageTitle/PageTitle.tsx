import React from 'react'
import { PageTitleStyled } from './PageTitleStyled'

const PageTitle = ( {title, fontSize}: Props ) => {
  return (
    <PageTitleStyled fontSize={fontSize}>{title}</PageTitleStyled>
    )
}

type Props = {
    title: string
    fontSize?: string
} 


export default PageTitle