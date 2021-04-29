import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import FooterText from '../styledComponents/FooterText'
import Container from './Container'

function Footer() {
   const {theme} = useContext(ThemeContext)
    return (
        <>
            <Container color={theme}>
             <FooterText color={theme}>My Footer Text</FooterText>
             </Container> 
        </>
    )
}

export default Footer