import React from 'react'
//Importamos useContext y useEffect
import React, { useContext, useEffect } from 'react'

const Products = () => {

  const {getProducts,products} = useContext(ProductContext)
//Ahora cuando cargue el componente ejecutara getProducts
  useEffect(() => {
      getProducts();
  }, []);

  //En el return, recorremos el array
  return (
    <div>
        {products.map((product) => {
           //Porque si no le devolvemos (return) nada al .map nos devolverá error :"undefined"
            return (
                <div key={product.id}>
                    <p>{product.name}</p>
                </div>
            )
        })}
    </div>
  )
}
  {/* <div key={character.id} > Esto nos lo pide React para saber que lo que está iterando es único. */ }
export default Products