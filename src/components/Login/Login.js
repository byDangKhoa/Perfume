import { Fragment } from 'react'
import './Login.scss'

const Login = function () {
  return (
    <Fragment>
      <div className='container login-panel'>
        <div className='row login-email'>
          <label htmlFor='mail' className='col-6 login-email__label'>
            <h4>E-mail</h4>
          </label>
          <input
            id='mail'
            type='email'
            className='col-6 login-email__input'></input>
        </div>
        <div className='row login-password'>
          <label htmlFor='pwd' className='col-6 login-password__label'>
            <h4>Password</h4>
          </label>
          <input
            id='pwd'
            type='password'
            className='col-6 login-password__input'></input>
        </div>
        <div className='row'>
          <button className='col-1 login-btn'>Login</button>
        </div>
      </div>
    </Fragment>
  )
}
export default Login
