import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Inicio from'./components/inicio';
import Responder from'./components/responder';
import Registro from './components/registro';
import Perfil from './components/perfil';
import Perfiladmin from './components/perfiladmin';
import Login from './components/login';
import Norespondidas from './components/norespondidas';

import NavBarExample from './layouts/navbar';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Login /> } />
    <Route path='registro' element={ <Registro /> } />
    <Route path='inicio' element={ <Inicio /> } />
    <Route path='responder' element={ <Responder /> } />
    <Route path='perfil' element={ <Perfil /> } />
    <Route path='perfiladmin' element={ <Perfiladmin /> } />
    <Route path='norespondidas' element={ <Norespondidas /> } />
   
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
