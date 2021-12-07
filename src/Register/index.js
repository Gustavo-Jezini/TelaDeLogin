import React from 'react'
import './index.css'

const Register = () => {
  return (
    <div className='main'>
      <div className='mainContainer'>

      <div className='headerText'>
        Cadastre-se aqui
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
        <label className='input-label'>
          <input
            className="input"
            type="password"
            placeholder="Senha"
            name="password"
          />
        </label>
        <label className='input-label'>
        <input
          className="input"
          type="password"
          placeholder="Confirme sua Senha"
          name="password"
        />
        </label>
      </div>
      <div className='container'>
        <div className='btn'>
          <button type='submit'>Cadastrar</button>
        </div>
      </div>
      <div>
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
    </div>
  )
}

export default Register;
