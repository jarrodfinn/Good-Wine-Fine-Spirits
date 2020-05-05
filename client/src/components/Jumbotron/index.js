import React from "react";
import bgimage from "../../images/jumbo-bg.jpg";
function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 250,
        clear: "both",
        paddingTop: 100,
        alignContent: "center",
        textAlign: "center",
        backgroundImage: `url(${bgimage})`,
      }}
      className="jumbotron jumbotron-fluid"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
