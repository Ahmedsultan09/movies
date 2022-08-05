import React from "react";
import "./Right.css";
function Right(props) {
  return (
    <div className="right  vs:w-full sm:w-full md:w-full lg:w-11/12">
      {props.children}
    </div>
  );
}

export default Right;
