import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Products.css";
// import { Card } from "antd";

const Products = () => {
  // const { Meta } = Card;
  const { getProducts, products, addCart, cart } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const product = products.map((product) => {
    return (
      <div className="pCard">
        <div className="product">
          {/* <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <span>{product.name} </span>
            <br></br>
            <span>{product.price.toFixed(2) + " €"}</span>
          </Card> */}
          </div>
      </div>
    );
  });

  return <div>{product}</div>;
};

export default Products;
