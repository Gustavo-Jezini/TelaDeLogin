import { Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import EntryScreen from "./Entry";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <EntryScreen /> } />
      <Route exact path='/Register' element={ <Register /> } />
      <Route exact path='/Login' element={ <Login /> } />
    </Routes>
  );
}

export default App;
