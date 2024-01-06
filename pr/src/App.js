import {  Routes,Route, Navigate } from 'react-router-dom';
//import Home from './pages/Home';
// import Nav from './components/Nav';
import Fetch from './components/Fetch';
import Login from './components/Login';
import { useAuth } from './components/AuthContext';
import Cookie from './pages/Cookie';



function App() {
  const { isLoggedIn} = useAuth();
  return (
      <>
   
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/product" element={ isLoggedIn ? <Fetch/> : <Navigate to = "/"/>}></Route>
    <Route path = "/cookie" element = {<Cookie/>}></Route> 
    
    </Routes>
    </>
  
  );
}

export default App;
