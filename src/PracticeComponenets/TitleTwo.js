import React from "react";

const TitleTwo = () => {
  console.log("rendring title two");
  return (
    <div>
      <h2>This is the Title Component</h2>
    </div>
  );
};

export default React.memo(TitleTwo);
