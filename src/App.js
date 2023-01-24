import './App.css';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './Pages/Users/Users';
import UserDetails from './Pages/UserDetails/UserDetails';
import { productInputs, userInputs } from './formSource';
import NewAdds from './Pages/NewAdds/NewAdds';
import './Style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './Context/darkModeContext';

function App() {

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter basename='admin-dashboard'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home></Home>}>
            </Route>
            <Route path='home' element={<Home></Home>}>
            </Route>
            <Route path='login' element={<LogIn></LogIn>}></Route>
            <Route path='users'>
              <Route index element={<List></List>}></Route>
              <Route path='new' element={<NewAdds inputs={userInputs} title="Add New User"></NewAdds>}></Route>
              <Route path=':userId' element={<UserDetails></UserDetails>}></Route>
            </Route>
            <Route path='products'>
              <Route index element={<List></List>}></Route>
              <Route path='new' element={<NewAdds inputs={productInputs} title="Add New Product"></NewAdds>}></Route>
              <Route path=':productId' element={<UserDetails></UserDetails>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
