import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: ${props => props.color === 'light' ? 'red' : '#333'};
border-bottom: 1px solid ${props => props.color === 'light' ? '#333' : 'yellow'};
margin: 0;
padding: 0 1em;
width: 100%;
box-sizing: border-box;
transition: background-color, border-bottom .5s;
`

export default Container