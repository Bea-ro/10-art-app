import { styled }  from 'styled-components';

export const ContainerStyled = styled.div<{ direction?: string, justify?: string, color?: string }>`
display: flex;
flex-direction: ${(props) => props.direction || "row"};
justify-content: ${(props) => props.justify || "center"};
color: ${(props) => props.color};
align-items: center;
gap: 12px;
padding: 20px;
border-radius: var(--border-radius);
a {
    color: var(--color-grey);
  background-color: var(--color-light-blue);
  text-shadow: 2px 2px 4px var(--color-blue);
  border-radius: var(--border-radius);
  padding: 8px 10px;
  margin: 0 10px;
  font-size: 22px;
  width: fit-content;
  align-self: center
}
`  
