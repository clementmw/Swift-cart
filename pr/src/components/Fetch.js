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
        return <div key={product.id} className='w-1/3 p-4'>
          <GetProduct 
        name = {product.name}
        price = {product.price}
        description = {product.description}
        image = {product.images[0]}  
        />
          </div>

    })
  return (
    <div className='flex flex-wrap justify-center '>
    {productList}
    
    
    </div>
  )
}

export default Fetch