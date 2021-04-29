import React, {useState} from 'react'
import Header from './Elements/Header'
import Page from './Elements/Page'
import Footer from './Elements/Footer'
import ThemeContext from './context/ThemeContext'

function Main(){
    
    const [theme, setTheme] = useState('dark')
    
    return(
        <>
        <ThemeContext.Provider value={{theme, setTheme}}>
        <Header />
        <Page />
        <Footer />
        </ThemeContext.Provider>
        </>
    )
}

export default Main