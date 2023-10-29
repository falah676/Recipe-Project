import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import FoodPage from './pages/FoodPage'
import FoodPageByArea from './pages/FoodPageByArea'
import Home from './pages/Home'
import RecipePage from './pages/RecipePage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:name" element={<FoodPage />} />
      <Route path='/recipe/:id' element={<RecipePage/>} />
      <Route path='/country/:country' element={<FoodPageByArea />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
