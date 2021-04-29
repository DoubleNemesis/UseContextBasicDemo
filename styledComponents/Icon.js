import styled from 'styled-components'

const Icon = styled.div`

i{
color: ${props => props.color === 'light' ? 'black' : 'yellow'};
margin: 1em 1em;
font-size: 2em;
transition: color .5s;
}
`



export default Icon