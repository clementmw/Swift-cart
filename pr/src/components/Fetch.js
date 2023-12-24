import React, {useEffect, useState} from 'react'
import GetProduct from './GetProduct'

function Fetch() {
 const [products, setProduct] = useState([]);

    useEffect (()=> {
        fetch ("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    //console.log(products)

    const productList  = products.map ((product)=>{
        return <GetProduct 
        key={product.id}
        name = {product.name}
        price = {product.price}
        description = {product.description}
        image = {product.images[0]}  
        />

    })
  return (
    <>
    {productList}
    
    
    </>
  )
}

export default Fetch