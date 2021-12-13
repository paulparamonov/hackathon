import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button } from "antd";

import { productsContext } from "../../contexts/productsContext";

import { cartContext } from "../../contexts/cartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";
// import ProductCard from "./ProductList/ProductCard";

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
//  ProductCard({item})
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      { product? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "35vw", border: "1px solid black" }}>
              <Carousel autoplay>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
                <div>
                  <img width="100%" src={product.image2} alt="" />
                </div>
              </Carousel>
            </div>
            <div style={{ width: "40vw" }}>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              <h2>{"$" + product.price}</h2>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
            //     onClick={() => {
            // addProductToCart(item);
            // setCheckInCart(checkItemInCart(item.id));
            // }}
              >
                ADD TO CART
              </Button>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
                
              >
                ADD TO FAVORITES
              </Button>
              <div>{product.description}</div>
            </div>
          </div>
          <video src={product.video} width="100%" autoPlay loop muted></video>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
