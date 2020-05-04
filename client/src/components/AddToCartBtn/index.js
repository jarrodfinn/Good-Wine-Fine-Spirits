import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddToCartBtn(props) {
  return (
    <div
      style={{
        margin: "0px 15px 0px 15px",
      }}
      className="addToCart-btn"
      {...props}
      role="button"
      tabIndex="0"
    >
      Add to Cart
    </div>
  );
}

export default AddToCartBtn;