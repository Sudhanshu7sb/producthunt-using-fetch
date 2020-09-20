import React from "react";
import "../style.css";


function SingleProductDetails(props){
  // console.log(props);
  return <>
  <article className="flex box mb-0">
          <div className="product-details flex">
            <Productimage imgSrc={props.prod.thumbnail.image_url} title={props.prod.tagline} />
            <Producttitleanddescription productdetails={props.prod} />
          </div>
          <Upvote votes={props.prod.votes_count}/>
        </article>
  </>
}

export default SingleProductDetails;

function Productimage(props){
  // console.log(props);
    return <>
    <figure className="image is-48x48 mr-3">
                <img
                  src={props.imgSrc}
                  alt={props.title}
                 
                />
              </figure>
    </>
}

function Producttitleanddescription(props){
    // console.log(props);
    return <>
        <div className="about-product content">
<h5 className="is-medium mb-0">{props.productdetails.slug}</h5>
<p>{props.productdetails.tagline}</p>
                <div>
                  <a href="##" className="comment-box px-1 py-1 mr-2">
                    {props.productdetails.comments_count}<i className="fas fa-comment mr-3"></i>
                  </a>
<a href="##">{props.productdetails.comments_count}</a>
                </div>
              </div>
    </>
}

function Upvote(props){
    return <>
    <div className="upvotes box">
              <i className="fas fa-sort-up has-text-black ml-1"></i>
              <p className="has-text-black is-medium">{props.votes}</p>
            </div>
    </>
}

