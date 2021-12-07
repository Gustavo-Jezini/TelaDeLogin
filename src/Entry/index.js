import './entry.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const EntryScreen = () => {
  const history = useNavigate();

const handleClick = (event) => {
  event.preventDefault();
  history(`/${event.target.name}`);
}

  return (
    <main className='main'>
      <div className='mainContainer'>
        <div>
          <img
          className='imagemDev'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV8CDzEY1uIwCl5aqajzx5eGY0xj6rz5XSw&usqp=CAU'
          alt='Imagem Dev' />
        </div>
        <div className='textoCentral'>
          <p className='textoCentral'>Projeto feito com intuito treinar JavaScript, CSS e HTML5 utilizando React</p>
        </div>
        <div>
          <div className='container'>
            <div className='btn'>
              <button onClick={ handleClick } name='cadastro' type='submit'>Registrar-se</button>
            </div>
          </div>
          <div className='container'>
            <div className='btn'>
              <button  onClick={ handleClick } type='submit' name='login '>Login</button>
            </div>
          </div>
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

export default EntryScreen;