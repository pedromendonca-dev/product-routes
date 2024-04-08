import React from 'react'
import {Link, useSearchParams} from "react-router-dom"
import { useFetch } from '../../hooks/useFetch'

const Search = () => {
  const  [searchParams] = useSearchParams()
  const url ="http://localhost:3000/products?" + searchParams

  const {data: items} = useFetch(url)
  return (<div>
    <h1>Results:</h1>
    <ul className='products'>
        {items && items.map((product)=>
        <li
        key={product.key}>
          <img src={product.img} alt={product.name}/>
          <h2>{product.name}</h2>
          <p>R$: {product.price}</p>
          <Link to={`/products/${product.id}`}>Details</Link>
          </li>
        )}

      </ul>
  </div>

  )
}

export default Search