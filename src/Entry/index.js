import './entry.css';
import React from 'react'

const EntryScreen = () => {
  return (
    <div className='mainContainer'>
      <div>
        <img
        className='imagemDev'
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD///9jY2OKior19fU+Pj7w8PApKSnBwcF3d3evr69HR0f4+PjHx8e9vb3a2tpubm4TExPo6OjNzc3T09Pe3t6Pj49/f38vLy+2trZZWVk6OjogICCUlJRMTExUVFQYGBicnJx7e3unp6czMzNxcXF5DMBeAAAESElEQVR4nO3Y23qqOhSGYYa4FyviBje11dre/y2ukRAgAWy1da2D9XzvwZyCEPMTGAmNIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4xzZ2JjNv77HarbbR6ynuhaflcRxsj7Zx6m2m8/n1xg/2NuNn9Pt+Ukv2n1U3xBdFfZGjf1YsEvZzJrKqt15F+q+3f3D/vO7fwSSzbJaL29urdptvougkMvXPykTegmY04bzemovsbvzeWZoX598mMnSf3sdSdbPXuNBLDextvolswmaChKnILLolTrLRXzr8sDqhdjMph0oTvgSHafqPeutFJA+bCRJex4fnd/RxrjD4CaOdjuK7+dBKqKO2qLfssxkI79Kn9e4P4r7rcJDQVJC1+b+V0Dx5R++oafhtlXC5XLo97lPx72faG4X7rUGaDqqN4sBJkS0bTh7O5PsYVpc8TBjpfWqKYDuhn0rTDsJvq4RZ9bxuinGe6wPdy0wVW53t/n1Vha59W8Fds7k5cyWuPwuR7PfjmOoPJqeoM6F7wtoJo7rWhHdsmHBRNbeWvvlvLOut9nZTdj2aitjhPJvYm4Ve0r7dnugV2dgrYQ+7mG8bk/CdehtvVmgldEPVrKWRvfYf1afWLfRNQp0dzG2xcr9aJszcdux6oAmnMk8P23Lornrm4v3hfIcwXythr+ip/pdkhfLrWTVy4czxc0K3+kkk8xLGVTd0iE9FwqBjLuM6nHd/tNYbJmzmZkJvRVPQa2PXPNq39orsu4Rux6q4MC7hpm64b6NPWnOsFp/rsP24fE/b3YQzWSNhWqw4NOEid8vS8qvc1Zqsa8FyR0J9xJdVwrM3u4xtg5rwq9VsnAWrwXuYKjP0F82NhKdigDoqjbnNzCC8uQkl9GjCmXcjaFE52ITN4nlKflVtzEzRrzM2Es6LKtKZcGprzb7dk+jxhO/eQ6cPYq8j4Tb59YwR6zw0LO/VRkL33HUmPNpa0zjBeXPr6XsTvv00hraTv5/1zeUZl5H8Dk9dss6Epk6N8lbFs77cQ3pvwlfvOXyxJSxMqD/Vbyx9H3SRrlWb1plisupOqJ24rIpFT9PercVdruinhN7iJxraLoQJs2T7m1gBd4X8hDoPuHeG7oRaazb9ztq2K2eVfbmg2yXfJ9SHz2Vwd0WY8G/jF9CEo6MaHC5agsQt5sy0uBuUqoPNFCyN4jbbReeJ/9pl5/UPPfDbhDpyxdX8cgd21NJnJfQMy943/4rh7KRdZ3SFY44pZ+u1WYeshrKY/pBQB1mGq7m5rIP/KGGyqt9xbyQ0/T91NlCvcuZuOy/fLcrTNes58t8t9sWp4+JtKu+a8Z+huhWDPy2cB756/+ug+doUHb/i8A9xn/k2XdqW7VZ1xq74tPOaOOT5oXxb1KbPf04DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9//wBYpCuD6l9xJAAAAABJRU5ErkJggg=='
        alt='Imagem Dev' />
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