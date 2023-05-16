import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Products.scss";
import { Card } from "antd";

const Products = () => {
  const { Meta } = Card;
  const { getProducts, products, addCart, cart } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const product = products.map((product) => {
    return (
      <div className="productsContainer">

          <Card
            hoverable
            style={{ width: 150 }}
            cover={
              <img
                alt="Exiting book"
                src="../src/assets/TLB_Bookcard.jpg"
              />
            }
          >
            <span className="bname">{product.name} </span>
            <br></br>
            <span className="bprice">{product.price.toFixed(2) + " €"}</span>
          </Card>
        </div>

    );
  });

  return <div>{product}</div>;
};

export default Products;