import './App.css';
import { Router,BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin />}/>
      <Route path='/sign-up' element={<Signup />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
