import { Route, Routes,Link } from "react-router";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Home/sharepage/Navbar";



function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
     
      </Routes>
    </div>
  );
}

export default App;
