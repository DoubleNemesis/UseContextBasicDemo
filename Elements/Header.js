import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import styled, {css} from 'styled-components'
import Title from '../styledComponents/Title'
import Container from './Container'
import Button from '../styledComponents/Button'
import Icon from '../styledComponents/Icon'

function Header() {
const {theme, setTheme} = useContext(ThemeContext)

function handleThemeChange(){
    setTheme(theme === 'light' ? 'dark' : 'light')
}

    return (
        <>
            <Container color={theme}>
            <Title color={theme}>My Site</Title>
            <Button color={theme} onClick={handleThemeChange}>
            <Icon color={theme}> <i className="fa fa-lightbulb-o" aria-hidden="true"/></Icon>
            </Button>
            </Container>
        </>
    )
}

export default Header