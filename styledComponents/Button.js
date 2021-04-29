import styled from 'styled-components'
const Button = styled.button`
color: ${props => props.color === 'dark' ? 'white' : '#333'};
background-color: transparent;
border: none;
transition: color 5s;
`



export default Button