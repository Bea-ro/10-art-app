import React from 'react'
import { styled } from 'styled-components'

const PageTitle = ( {title}: Props ) => {
  return (
    <PageTitleStyled>{title}</PageTitleStyled>
    )
}

type Props = {
    title: string
} 

const PageTitleStyled = styled.h1`
color: var(--color-dark-blue);
text-align: center;
font-size: 60px;
padding: 20px;
`  

export default PageTitle