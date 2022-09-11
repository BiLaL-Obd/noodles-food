import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Error from './Pages/Error';
import Home from './Pages/Index';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
