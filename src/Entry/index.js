import './entry.css';
import React from 'react'

const EntryScreen = () => {
  return (
    <div className='mainContainer'>
      <div>
        Div com a imagem
      </div>
      <div className='textoCentral'>
        Div com o texto Central
      </div>
      <div>
        <button className='entryButto'>Registrar</button>
        <button className='entryButto'>Login</button>
      </div>
    </div>
  )
}

export default EntryScreen;