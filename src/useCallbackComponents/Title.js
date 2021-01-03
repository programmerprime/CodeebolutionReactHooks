import React from "react";

const Title = () => {
  console.log("rendering title");
  return (
    <div>
      <h1>This is the title component</h1>
    </div>
  );
};

export default React.memo(Title);
