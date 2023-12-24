import {  Routes,Route } from 'react-router-dom';
//import Home from './pages/Home';
// import Nav from './components/Nav';
// import Fetch from './components/Fetch';
import Login from './components/Login';


function App() {
  return (
      <>
    <Routes>
    <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
  
  );
}

export default App;
