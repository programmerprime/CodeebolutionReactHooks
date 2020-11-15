import "./App.css";
import Calculator from "./CalculatorLiftingStateUp/Calculator";
import ClassComponentWithPrevState from "./componentsUseState/ClassComponentWithPrevState";
import ClassCounter from "./componentsUseState/ClassCounter";
import HookCounter from "./componentsUseState/HookCounter";
import UseStateWithArray from "./componentsUseState/UseStateWithArray";
import UseStateWithObjects from "./componentsUseState/UseStateWithObjects";
import UseStateWithPreviousState from "./componentsUseState/UseStateWithPreviousState";
import PracticeComponent from "./PracticeComponent";
import ClassTitleUpdate from "./UseEffectComponents/ClassTitleUpdate";
import HookMouse from "./UseEffectComponents/HookMouse";
import HookMouseContainer from "./UseEffectComponents/HookMouseContainer";
import UseEffectCounter from "./UseEffectComponents/UseEffectCounter";

function App() {
  return (
    <div className="App">
      {/* <ClassTitleUpdate /> */}
      {/* <UseEffectCounter /> */}
      <HookMouseContainer />
    </div>
  );
}

export default App;
