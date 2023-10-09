import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const MyHome = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {

    fetch('https://dummyjson.com/product')
      .then((res) => res.json())
      .then((data) => data.products)
      .then((products) => {
        setProducts(products);
      })
  }, [])

  

  console.log(Array.isArray(products));
  console.log(products)



  return (
    <>
    

      {
        products.map((product) => (
          <Cards product={product} />
        )
        )

      }

    </>

  );


};


export default MyHome;
