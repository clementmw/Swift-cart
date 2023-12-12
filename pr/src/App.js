import {  Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';


function App() {
  return (
      <>
     
    <Nav/>

    <Routes>
     <Route path="/home" element={<Home/>}></Route>
    </Routes>
    </>
  
  );
}

export default App;
