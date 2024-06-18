import React, { useRef, useState, useEffect } from 'react'
import { LoginPageMain, LoginContainer, LoginDetails, LogoDiv, PasswordInput } from './login.styles'
import { AppImages } from '../../assets/constants'
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, resetdbUsermsg } from '../../store/authSlice';
import Alerts from '../../components/Alerts/Alerts';



function SignUp() {

  const newUsermsg = useSelector((state) => state.user.dbUsermsg)
  const [alerts, setAlerts] = useState(false)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

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

  function handleSignup() {
    if (username.length > 0 && email.length > 0 && password.length > 0) {
      dispatch(createUser({ username, email, password }))
    }
  }

  useEffect(() => {
    if (newUsermsg?.code) {
      if (newUsermsg?.code === 200) {
        setUsername('')
        setEmail('')
        setPassword('')
      }
      setAlerts(true)
      const reset = setTimeout(() => {
        setAlerts(false)
      }, 3000);
      return () => clearTimeout(reset)
    }
    dispatch(resetdbUsermsg())
  }, [newUsermsg, dispatch])

  return (
    <LoginPageMain>
      <LoginContainer>
        <LogoDiv>
          <img src={AppImages.appico} alt="appicon" className='logo_img' />
          <p style={{ margin: '0.8rem 0', color: 'white', fontWeight: '600', fontSize: '1.5rem' }}>Sign Up to start listening</p>
        </LogoDiv>
        <LoginDetails>
          <label htmlFor="username" className='input_label'>Username</label>
          <input type="text" placeholder='Username' className='input_area' onChange={(e) => setUsername(e.target.value)} value={username} />
          <label htmlFor="email" className='input_label'>Email</label>
          <input type="email" placeholder='Email' className='input_area' onChange={(e) => setEmail(e.target.value)} value={email} />
          <label htmlFor="password" className='input_label'>Password</label>
          <PasswordInput isoutline={outline}>
            <input
              type={showPassword ? 'text' : "password"}
              placeholder='Password'
              className='password_area'
              ref={passRef}
              onClick={handleOutline}
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
            {showPassword ?
              <BiShow size={23} className='password-btn' onClick={() => setshowPassword(false)} /> :
              <BiHide size={23} className='password-btn' onClick={() => setshowPassword(true)} />}
          </PasswordInput>
        </LoginDetails>
        <button className='auth_btn' onClick={handleSignup}>Sign Up</button>
        <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #8392A7', backgroundColor: 'transparent', margin: '1rem 0' }} />
        <p className='have_account'>Already have an account?
          <Link to={`/login`}>
            <span>
              &nbsp;&nbsp;Log In
            </span>
          </Link>
        </p>
      </LoginContainer>
      {alerts && <Alerts code={newUsermsg?.code} />}

    </LoginPageMain>
  )
}

export default SignUp