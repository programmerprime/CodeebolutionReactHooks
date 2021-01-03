import React from "react";

const JSXINDEPTH = () => {
  // return (
  //   <div className="myClass" id="myId">
  //     <h1 className="myHeading" id="headingId">
  //       Hello Prime
  //     </h1>
  //   </div>
  // );

  // jsx behind the scenes, we must import React from 'react' if we return any JSX from a component

  return React.createElement(
    "div",
    { className: "myClass", id: "myId" },
    React.createElement(
      "h1",
      { className: "myHeading", id: "headingId" },
      "Hello Mime"
    )
  );
};

export default JSXINDEPTH;
