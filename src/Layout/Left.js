import React from "react";

function left(props) {
  return (
    <div className="left lg:w-32 md:max-w-full sm:max-w-full relative overflow-hidden flex justify-center lg:mt-8">
      {props.children}
    </div>
  );
}

export default left;
