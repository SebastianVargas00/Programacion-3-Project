import React from 'react'
import{Nav,NavLink,Bars,NavMenu,NavBtnLink} from'./Elements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
             {/*
             Logo
             img src={require('../../images/businness.svg')} alt='logo' />
             */} 
             <h1>Logo</h1>  
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    Sobre Nosotros
                </NavLink>
                <NavLink to="/servicies" activeStyle>
                    Servicios
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contactanos
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                   Sign Up
                </NavLink>
                <NavBtnLink to="/signin">Sign In </NavBtnLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar
