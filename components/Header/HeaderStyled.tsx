import { styled } from "styled-components";

export const HeaderStyled = styled.header<{ isAuth?: boolean}>`
  display: flex;
  justify-content:  ${(props) => (props.isAuth? 'space-between' : 'flex-end')};
  padding: 20px 20px 0 20px;

  #user-icon {
    display: none 
    /* !important; */
  }

  @media screen and (max-width: 567px) {
    padding: 14px 14px 0 14px;
   
    #login-text {
    display: none 
  }
    #user-icon {
    display: block;
    border-radius: 50%;
    padding: 2px;
    height: 24px;
    width: 24px;
    border: 1px solid var(--color-grey)
  }
  img {
    object-fit: cover
    }
  }
`;
