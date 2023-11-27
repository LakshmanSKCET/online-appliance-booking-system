
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import SignUp from "./SignUp";
import About from "./About";
import ContactUs from "./Contact";
function App() {
  return (
    <>
    <header>
            <nav>
              <div className="logo"><b>GMANAppliances</b></div><br></br>
              <ul>
              <li><a style={{
                  textDecoration:"none",
                  color:"white"
                }} href='/home'>Home</a> </li>
                <li><a style={{
                  textDecoration:"none",
                  color:"white"
                }} href='/login'>Sign In</a> </li>
                <li><a style={{
                  textDecoration:"none",
                  color:"white"
                }} href='/signup'>SignUp</a> </li>
                <br/>
              </ul>
            </nav>
          </header>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home/>} />
       <Route path='/product' element={<Product/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact'element={<ContactUs/>} />
        
       
         
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
