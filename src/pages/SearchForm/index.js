import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import './styles.css'
import lupa from './lupa.png'

const SearchForm = () => {
  const navigate = useNavigate()
  const [query,setQuery] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()

    navigate("/search?q=" + query);
  }
  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input type='text' onChange={(e)=>setQuery(e.target.value)} className='input-text'/>
      <button type='submit' className='input-button'>
        <img src={lupa} alt="Buscar"/>
      </button>
    </form>
  )
}

export default SearchForm