import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'


const ProductInfo = () => {
  const {id} =useParams();
  const url = `http://localhost:3000/products/${id}`
  const {data: product,loading,error} = useFetch(url)

  if (loading) {
    return <p>Aguarde o produto ser carregado</p>;
  }

  if (error || !product) {
    return <p>Não foi possível carregar o produto</p>;
  }

  return (
    <div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductInfo