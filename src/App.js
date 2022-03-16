import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './index.css'

import Admin from './pages/Admin/Admin';
import Contacts from './pages/Contact/Contacts';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Pages from './pages/Pages/Pages';
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer';
import Tour from './pages/Tour/Tour';
import Flights from './pages/Flights/Flights';
import Services from './pages/Services/Services';
import Visa from './pages/Visa/Visa';
import Vip from './pages/Vip/Vip';
import Insurance from './pages/Insurance/Insurance';
import Map from './saveposts/MapG';
import RedPost from './pages/RedPost/RedPost';
import PageInfo from './pages/PageInfo/PageInfo';
import ProfileBook from './saveposts/ProfileBook';
import Faqy from './pages/FAQY/Faqy';
import Reviews from './pages/Reviews/Reviews';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vip" element={<Vip />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/services" element={<Services />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} /> 
        <Route path="/redpost/:id" element={<RedPost/>} /> 
        <Route path="/pageinfo/:id" element={<PageInfo />} /> 
        <Route path="/reviews" element={<Reviews/>} /> 
        <Route path="/faq" element={<Faqy />} /> 
        </Routes>
    <Footer />
    </div>
  );
}

export default App;
