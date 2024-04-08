import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import './styles.css'

const Product = () => {
  const {id} = useParams();
  const url = "http://localhost:3000/products/" + id
  const {data: product, loading, error} = useFetch(url)

  if (loading) {
    return <p>Aguarde o produto ser carregado</p>;
  }

  if (error || !product) {
    return <p>Não foi possível carregar o produto</p>;
  }

  return (
    <div>
   
      <div className='product'>
        <ul>
        <h3>{product.name}</h3>
        <img src={product.img} alt={product.name}/>
        <p>R$: {product.price}</p>
        <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </ul>
      </div>
    </div>
  )
}

export default Product
