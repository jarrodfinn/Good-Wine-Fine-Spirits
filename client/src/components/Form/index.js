import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function Dropdown(props) {
  return (
    <div className="form-group">
      <select className="form-control" name="photo" {...props}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option default value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
    </div>
  )
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor: "lightsalmon", color: 'black' }} className="btn btn-success">
      {props.children}
    </button>
  );
}
