import React, { createContext } from "react";
import "./App.css";
import ParentPractice from "./ParentPractice";

import PracticeComponent from "./PracticeComponent";

export const UserContext = createContext();
export const ChannelContext = createContext();
export const LoveContext = createContext();

const App = () => {
  return (
    // <UserContext.Provider
    //   value={{ name: "Prime", age: 19, department: "Marketing" }}
    // >
    //   <ChannelContext.Provider value={[1, 2, 3, 4, 5]}>
    //     <LoveContext.Provider value={"Love is divine"}>
    //       <div className="App">
    //         <ComponentC />
    //       </div>x
    //     </LoveContext.Provider>
    //   </ChannelContext.Provider>
    // </UserContext.Provider>

    <div className="App">
      {/* <ParentPractice /> */}
      <PracticeComponent />
    </div>
  );
};

export default App;
