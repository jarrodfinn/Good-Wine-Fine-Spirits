import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddToCartBtn(props) {
  return (
    <span className="addToCart-btn" {...props} role="button" tabIndex="0">
        Add to Cart
    </span>
  );
}

export default AddToCartBtn;