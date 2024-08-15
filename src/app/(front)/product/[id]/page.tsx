import React from 'react'

const ProductDetails = ({ searchParams }: { searchParams: { product: string } }) => {
    const product = searchParams.product;
    console.log('product',product);
    
  return (
    <div>ProductDetails {product}</div>
  )
}

export default ProductDetails
