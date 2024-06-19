import React, { useRef, useState, useEffect } from 'react'
import { LoginPageMain, LoginContainer, LoginDetails, LogoDiv, PasswordInput } from './login.styles'
import { AppImages } from '../../assets/constants'
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie'
import { resetdbUsermsg } from '../../store/authSlice';
import validator from 'validator';
import Alerts from '../../components/Alerts/Alerts';


function Login() {

  const isLoggedIn = useSelector((state) => state.user.loggedinUser)
  const newUsermsg = useSelector((state) => state.user.dbUsermsg)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [alerts, setAlerts] = useState({})

  const passRef = useRef()

  const navigate = useNavigate()
  const dispatch = useDispatch()

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

  function handleLogin() {
    if (email.trim().length === 0 && password.trim().length === 0) {
      setAlerts({ code: 'blank' })
      setTimeout(() => {
        setAlerts({})
      }, 3000)
    } else if (!validator.isEmail(email)) {
      setAlerts({ code: 'emailinvalid' })
      setTimeout(() => {
        setAlerts({})
      }, 3000)
    }
    else {
      dispatch(loginUser({ email, password }))
    }
  }

  useEffect(() => {
    if (isLoggedIn && !newUsermsg) {
      setEmail('')
      setPassword('')
      navigate('/home')
    }
    if (newUsermsg?.code) {
      setAlerts(newUsermsg)
      const reset = setTimeout(() => {
        setAlerts({})
        dispatch(resetdbUsermsg())
      }, 3000);
      return () => clearTimeout(reset)
    }
  }, [isLoggedIn, newUsermsg, dispatch])



  return (
    <LoginPageMain>
      <LoginContainer>
        <LogoDiv>
          <img src={AppImages.appico} alt="appicon" className='logo_img' />
          <p style={{ margin: '0.8rem 0', color: 'white', fontWeight: '600', fontSize: '1.5rem' }}>Login to Audify</p>
        </LogoDiv>
        <LoginDetails>
          <label htmlFor="email" className='input_label'>Email</label>
          <input type="email" placeholder='Email' className='input_area' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password" className='input_label'>Password</label>
          <PasswordInput isoutline={outline}>
            <input
              type={showPassword ? 'text' : "password"}
              placeholder='Password'
              className='password_area'
              ref={passRef}
              onClick={handleOutline}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {showPassword ?
              <BiShow size={23} className='password-btn' onClick={() => setshowPassword(false)} /> :
              <BiHide size={23} className='password-btn' onClick={() => setshowPassword(true)} />}
          </PasswordInput>
        </LoginDetails>
        <button className='auth_btn' onClick={handleLogin}>Log In</button>
        <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #8392A7', backgroundColor: 'transparent', margin: '1rem 0' }} />
        <p className='have_account'>Don't have an account?
          <Link to={`/signup`}>
            <span>
              &nbsp;&nbsp;Sign Up
            </span>
          </Link>
        </p>
      </LoginContainer>
      {Object.keys(alerts).length != 0 && <Alerts code={alerts.code} />}
    </LoginPageMain>
  )
}

export default Login
