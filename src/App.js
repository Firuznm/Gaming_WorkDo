import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { GlobalProvider } from "./Context/Context";
import Details from "./Pages/Details/Details";
import About from "./Pages/About/About";
import AllProuctFilter from "./Pages/AllProuctFilter/AllProuctFilter";
import BasketView from "./Components/BasketView/BasketView";



function App() {   
  return (
    <>
    <GlobalProvider>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/detalist/:title'  element={<Details/>}/>
      <Route path="/allproducts" element={<AllProuctFilter/>}/>
      <Route path="/basketView" element={<BasketView/>}/>
    </Routes>
    
    <Footer/>  
    </GlobalProvider>
    </>
  )
}

export default App;
