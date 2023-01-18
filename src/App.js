import './App.css';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './Pages/Users/Users';
import New from './Pages/New/New';
import Single from './Pages/Single/Single';

function App() {
  return (
    <div className="App">
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
              <Route path='new' element={<New></New>}></Route>
              <Route path=':userId' element={<Single></Single>}></Route>
            </Route>

            <Route path='products'>
              <Route index element={<List></List>}></Route>
              <Route path='new' element={<New></New>}></Route>
              <Route path=':productId' element={<Single></Single>}></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
