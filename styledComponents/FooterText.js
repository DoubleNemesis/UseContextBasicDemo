import styled from 'styled-components'

const FooterText = styled.p`
color: ${props => props.color === 'dark' ? 'whitesmoke' : '#202020'};
margin: 1em auto;
transition: color .5s;
`



export default FooterText