// import ClassComponent from "./Hooks/useEffect/ClassComponent";
// import FetchApiUseEffect from "./Hooks/useEffect/FetchApiUseEffect";
// import SimpleUseEffect from "./Hooks/useEffect/SimpleUseEffect";
// import SimpleUseState from "./Hooks/useState/SimpleUseState";
// import UseStateWithArray from "./Hooks/useState/UseStateWithArray";
// import UseStateWithObject from "./Hooks/useState/UseStateWithObject";
// import UseStateWithPreviousState from "./Hooks/useState/UseStateWithPreviousState";
// import Index from "./Hooks/useContext";
// import Counter from "./Hooks/useReducer/Counter";
// import Index from "./Hooks/useReducer/FetchData/Index";
// import Index from "./Hooks/useCallback/Index";
import CounterOne from "./Hooks/useCustomhook/Counter/CounterOne";
import CounterTwo from "./Hooks/useCustomhook/Counter/CounterTwo";
import CustomCounter from "./Hooks/useCustomhook/counterHook/CustomCounter";
import UseMemo from "./Hooks/useMemo/UseMemo";
import UseRef from "./Hooks/useRef/UseRef";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {/*===========useState================== */}
      {/* <SimpleUseState /> */}
      {/* <UseStateWithPreviousState /> */}
      {/* <UseStateWithObject /> */}
      {/* <UseStateWithArray /> */}
      {/*===========useEffect====================*/}
      {/* <ClassComponent /> */}
      {/* <SimpleUseEffect /> */}
      {/* <FetchApiUseEffect /> */}
      {/*===========useContext================== */}
      {/* <Index /> */}
      {/*===========useReducer================== */}
      {/* <Counter /> */}
      {/*===========useReducer With Fetch Api================== */}
      {/* <Index /> */}
      {/*===========useCallback================== */}
      {/* <Index /> */}
      {/*===========useMemo================== */}
      {/* <UseMemo /> */}
      {/*===========useRef================== */}
      <UseRef />
      {/*===========useCustomHook================== */}
      {/* <CustomCounter /> */}
      {/*===Two Components===*/}
      {/* <CounterOne />
      <CounterTwo /> */}
    </div>
  );
}
export default App;
