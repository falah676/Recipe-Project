import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Swal from 'sweetalert2'
import './App.css'
import Footer from './components/Footer'
import { InternetProvider } from './context/CulinerContext'
import AdminPages from './pages/AdminPages'
import FoodPage from './pages/FoodPage'
import FoodPageByArea from './pages/FoodPageByArea'
import FormAddPages from './pages/FormAddPages'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProfilePages from './pages/ProfilePages'
import RecipePage from './pages/RecipePage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const checkOnlineStatus = async () => {
      try {
        await fetch('https://www.google.com', { mode: 'no-cors' });
        setOnlineStatus(true);
      } catch (error) {
        setOnlineStatus(false);
      }
    };

    checkOnlineStatus();

    const intervalId = setInterval(checkOnlineStatus, 5000); // Check online status every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <InternetProvider value={onlineStatus}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPages />} />
        <Route path="/category/:name" element={<FoodPage />} />
        <Route path='/recipe/:id' element={<RecipePage />} />
        <Route path='/country/:country' element={<FoodPageByArea />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profileUser' element={<ProfilePages />} />
        <Route path='/addRecipe' element={<FormAddPages />} />
      </Routes>
      <Footer />
    </InternetProvider>
  )
}

export default App
