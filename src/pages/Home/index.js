import React from 'react'
import {Link} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import "./styles.css"

const Home = () => {
  const url = 'http://localhost:3000/products'

  const {data: items,error} = useFetch(url)

  return (
    <div>
      <h1>Produtos:</h1>
      {error && <p>Error while querying the database information</p>}
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

export default Home