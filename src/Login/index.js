import React from 'react'
import "./login.css";

const Login = () => {
  return (
    <main className='main'>
      <div className='form'>
        <div className='headerText'>
          Faça seu Login
        </div>
        <div className='inputs'>
          <label className='input-label'>
            <input
                className="input"
                type="email"
                placeholder="Email"
                name="email"
              />
          </label>
          <label className='input-label' for=''>
            <input
              className="input"
              type="password"
              placeholder="Senha"
            />
          </label>
        </div>
        <div className='container'>
          <div className='btn'>
            <button type='submit'>Sing In</button>
          </div>
        </div>
        <div>
          <p>Esqueceu a senha?</p>
        </div>
      </div>
      <div className='animation-area'>
        <ul className='box-area'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  )
}

export default Login;
