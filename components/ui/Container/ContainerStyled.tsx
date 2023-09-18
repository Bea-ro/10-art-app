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
`  
