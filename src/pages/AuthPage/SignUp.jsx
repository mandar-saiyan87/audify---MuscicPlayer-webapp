import React, { useRef, useState, useEffect } from 'react'
import { LoginPageMain, LoginContainer, LoginDetails, LogoDiv, PasswordInput } from './login.styles'
import { AppImages } from '../../assets/constants'
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';


function SignUp() {
  const passRef = useRef()

  const [outline, setOutLine] = useState(false)
  const [showPassword, setshowPassword] = useState(false)

  function handleOutline() {
    setOutLine(true)
  }

  useEffect(() => {
    function handleClickOut(e) {
      if (passRef.current && !passRef.current.contains(e.target)) {
        setOutLine(false)
      }
    }
    document.addEventListener('mousedown', handleClickOut)
    return () => {
      document.removeEventListener('mousedown', handleClickOut)
    }
  }, [passRef])

  return (
    <LoginPageMain>
      <LoginContainer>
        <LogoDiv>
          <img src={AppImages.appico} alt="appicon" className='logo_img' />
          <p style={{ margin: '0.8rem 0', color: 'white', fontWeight: '600', fontSize: '1.5rem' }}>Sign Up to start listening</p>
        </LogoDiv>
        <LoginDetails>
          <label htmlFor="email" className='input_label'>Email</label>
          <input type="email" placeholder='Email' className='input_area' />
          <label htmlFor="password" className='input_label'>Password</label>
          <PasswordInput isoutline={outline}>
            <input type={showPassword ? 'text' : "password"} placeholder='Password' className='password_area' ref={passRef} onClick={handleOutline} />
            {showPassword ?
              <BiShow size={23} className='password-btn' onClick={() => setshowPassword(false)} /> :
              <BiHide size={23} className='password-btn' onClick={() => setshowPassword(true)} />}
          </PasswordInput>
        </LoginDetails>
        <button className='auth_btn'>Sign Up</button>
        <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #8392A7', backgroundColor: 'transparent', margin: '1rem 0' }} />
        <p className='have_account'>Already have an account?
          <Link to={`/login`}>
            <span>
              &nbsp;&nbsp;Log In
            </span>
          </Link>
        </p>
      </LoginContainer>
    </LoginPageMain>
  )
}

export default SignUp