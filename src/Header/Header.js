import React from 'react'; 
import { useLocation } from 'react-router-dom'

function Header(){
    const {pathname} = useLocation(); 

    const renderRegisterSignIn = () => {
        return(
            <>
            <a className='header__user-link header__user-link_register' href='/register'>Register</a>
            <a className='header__user-link header__user-link_sign-in' href='/sign-in'>Sign In</a>
            </>
        )
    }

    const renderOther = () => {
        return(
            <h1>Other</h1>
        )
    }
    
    return(
        <header className='header'>
        <nav className='header__nav'>
          <p className='header__title'>The Quarter</p>
          <div className='header__user-link-container'>
              {pathname === '/' ? renderRegisterSignIn() : renderOther()}
          </div>
        </nav>
      </header>
    )
}

export default Header; 