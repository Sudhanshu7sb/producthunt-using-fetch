import React from "react";
import "../style.css";
import Addproduct from "./SingleProductDetails";
import Upcomingproducts from "./Upcomingproducts";
import Hiringnow from "./Hiringnow";
import Topdiscussion from "./Topdiscussion";
// import products from "../data"

class Newproducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const url = "https://api.producthunt.com/v1/posts";
    const bearer = "Bearer 3vCfErVwpi_SdtNPoU2FHHNXwrQbRemfkZCX2dpo_zo";

    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: bearer,
        Host: "api.producthunt.com",
        Origin: "http://localhost:3000/",
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.posts }));
    
  }
  render() {
    return this.state.products && this.state.products !== "null" ? (
      <>
        <div className="container flex pt-6">
          <section className="added-products">
            <ul>
              {this.state.products.map((product, index) => (
                <Addproduct key={index} prod={product} />
              ))}
            </ul>
          </section>
          <section className="upcoming-products">
            <div className="content my-4">
              <h4 className="is-medium">Upcoming Products</h4>
            </div>

            <Upcomingproducts />

            <div className="content my-4">
              <h4 className="is-medium">Hiring Now</h4>
            </div>

            <Hiringnow />
            <Hiringnow />
            <Hiringnow />

            <div className="content my-4">
              <h4 className="is-medium">Top Discussion</h4>
            </div>
            <Topdiscussion />
            <Topdiscussion />
            <Topdiscussion />
          </section>
        </div>
      </>
    ) : 
      "Loading..."
    
  }
}

export default Newproducts;
