import React, { Component } from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class FavoriteBtn extends React.Component {
  
  state = {
    active: false,
  }
  
  render() {
    return (
        <div>
          <button
            className={ this.state.active ? "btn switch-on" : "btn switch-off" }
            onClick={() => this.setState({active: !this.state.active})}>
            { this.state.active ? 'Favorite' : 'Favorite' }
          </button>
        </div>
    );
  }
}
export default FavoriteBtn;