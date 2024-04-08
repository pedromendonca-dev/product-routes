import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home/'
import About from './pages/About'

import Product from './pages/Product';
import ProductInfo from './pages/ProductInfo';
import NotFound from './pages/NotFound';
import SearchForm from './pages/SearchForm';
import Search from './pages/Search';
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <SearchForm/>
        <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/products/:id' element = {<Product/>}/>
        <Route path='/products/:id/info' element = {<ProductInfo/>}/>
        <Route path='/search' element = {<Search/>}/>
        <Route path='/company' element = {<Navigate to="/about"/>}/>
        <Route path='*' element = {<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
