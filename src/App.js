import './App.css';
import {Routes,Route} from "react-router-dom"
import Header from './Components/Header';
import Home from './Components/Home';
import PriceList from './Components/PriceList';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import Login from './Components/FormComponents/Login';
import Register from './Components/FormComponents/Register';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/pricing' element={<PriceList/>}/>
      <Route exact path='/testimonials' element={<Testimonials/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
     </Routes>
     {location.pathname === '/login' || location.pathname === '/register' ?
    "":
    <Footer/> 
    }
    </div>
  );
}

export default App;
