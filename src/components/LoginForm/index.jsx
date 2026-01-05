import {useState} from 'react'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router'

import './index.css'

const LoginForm = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  })

  const navigate = useNavigate()

  const onChangeUsername = event => {
    setState(prevState => ({
      ...prevState,
      username: event.target.value,
    }))
  }

  const onChangePassword = event => {
    setState(prevState => ({
      ...prevState,
      password: event.target.value,
    }))
  }

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    navigate('/')
  }

  const onSubmitFailure = errorMsg => {
    setState(prevState => ({
      ...prevState,
      showSubmitError: true,
      errorMsg,
    }))
  }

  const submitForm = async event => {
    event.preventDefault()
    const {username, password} = state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const renderPasswordField = () => {
    const {password} = state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  const renderUsernameField = () => {
    const {username} = state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  return (
    <div className="login-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="login-website-logo-mobile-image"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-image"
        alt="website login"
      />
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-desktop-image"
          alt="website logo"
        />
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button">
          Login
        </button>
        {state.showSubmitError && (
          <p className="error-message">*{state.errorMsg}</p>
        )}
      </form>
    </div>
  )
}

export default LoginForm
