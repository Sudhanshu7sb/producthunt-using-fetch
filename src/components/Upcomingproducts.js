import React from "react";
import "../style.css";
import upcomingProducts from "../upcomingProductsData";

function Upcomingproducts() {
  return (
    <>
      {upcomingProducts.map((product) => {
        return (
          <article className="flex box mb-0">
            <div className="product-details">
              <div className="about-product content">
                <h6 className="is-small mb-0">
                  {product.title}
                </h6>
                <p>{product.description}</p>
                <a href="##">
                  <i className="fas fa-plus"></i>follow
                </a>
              </div>
            </div>
            <figure className="image is-48x48">
              <img
                src={product.image}
                alt={product.title}
              />
            </figure>
          </article>
         
        );
      })}
    </>
  );
}

export default Upcomingproducts;
