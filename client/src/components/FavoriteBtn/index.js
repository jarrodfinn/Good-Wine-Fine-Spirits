import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function FavoriteBtn(props) {
  return (
    <div
      style={{
        margin: "0px 15px 0px 15px",
      }}
      className="favorite-btn"
      {...props}
      role="button"
      tabIndex="0"
    >
      Favorite
    </div>
  );
}

export default FavoriteBtn;