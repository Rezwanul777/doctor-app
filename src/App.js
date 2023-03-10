import { Route, Routes } from "react-router";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Home/sharepage/Navbar";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="login" element={ <Login/> } />
     
      </Routes>
    </div>
  );
}

export default App;
