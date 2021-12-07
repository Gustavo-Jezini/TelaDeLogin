import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
        Algum texto
      </div>
      <div>
        <input
            className="email-input"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="password-input"
            type="password"
            placeholder="Senha"
            name="password"
          />
      </div>
      <div>
        <button type='submit'>Sing In</button>
      </div>
      <div>
        <p>Esqueceu a senha?</p>
      </div>
      <div>
        <p>entrar com email ou apple</p>
        <button>Logo google</button>
        <button>Logo apple</button>
      </div>
    </div>
  )
}

export default Login;
