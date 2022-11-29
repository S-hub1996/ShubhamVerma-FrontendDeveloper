import { Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";
import Data from "./Components/Data";
import Footer from "./Components/Footer";
import Nav from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
<div>
<Routes>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/" element={<Login/>}/>
</Routes>
</div>
  );
}

export default App;
