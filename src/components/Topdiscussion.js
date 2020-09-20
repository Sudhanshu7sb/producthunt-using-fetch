import React from "react";
import "../style.css";


function Topdiscussion() {
    return (
      <>
        <article className="flex box mb-0">
          <div className="product-details">
            <div className="about-product content">
              <h6 className="is-small mb-1">
                Asking family members to invest in your start up?
              </h6>
  
              <p className="py-3">
                <a href="##" className="mr-4 mx-3">
                  <i className="fas fa-sort-up has-text-black ml-1 my-1"></i>24
                </a>
                <a href="##" className="comment-box px-1 py-1 mr-4 mx-3">
                  5<i className="fas fa-comment mr-3"></i>
                </a>
                <a href="##">Join Discussion</a>
              </p>
            </div>
          </div>
          <figure className="image is-48x48">
            <img
              src="https://ph-avatars.imgix.net/2828818/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
              alt="Asking family members to invest in your start up?"
              className="is-rounded"
            />
          </figure>
        </article>
      </>
    );
  }

  export default Topdiscussion;