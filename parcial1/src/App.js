import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Home from './home';
import Perfil from './perfil';


function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/perfil" element={<Perfil />}></Route>
      </Routes>
  );
}

export default App;
