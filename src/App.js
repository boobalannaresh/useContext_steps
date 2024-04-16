import logo from "./logo.svg";
import "./App.css";
import { useState, createContext, useContext } from "react";

// 1
// Props Drilling
//

// function App() {
//   const count = 10;

//   return (
//     <div className="App">
//       <Child count={count} />
//     </div>
//   );
// }

// function Child({ count }) {
//   return (
//     <div>
//       <h1>I am a Child </h1>

//       <GrandChild count={count} />
//     </div>
//   );
// }

// function GrandChild({ count }) {
//   return (
//     <div>
//       <h1>I am a Grand-Child </h1>

//       <button>➕</button>
//       <p> Count : {count}</p>
//       <button>➖</button>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 2
// Props Drilling, You have to increase the Count value.... so useState use here

// function App() {
//   const [count, setCount] = useState(10);

//   return (
//     <div className="App">
//       <Child count={count} setCount={setCount}/>
//     </div>
//   );
// }

//                                          //// You have to pass props to GrandChild component
// function Child({ count, setCount }) {    //// so, Un-neccessarcy pass the Props to Child component
//   return (                               //// That's reason passed the Props here
//     <div>
//       <h1>I am a Child </h1>

//       <GrandChild count={count} setCount={setCount} />
//     </div>
//   );
// }

// function GrandChild({ count, setCount }) {
//   return (
//     <div>
//       <h1>I am a Grand-Child </h1>

//       <button onClick={()=> setCount(count + 1)}>➕</button>
//       <p> Count : {count}</p>
//       <button onClick={()=> setCount(count - 1)}>➖</button>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------- //
// 3
// UseContext use Here, because avoid the props drilling
// step: 1  => Create-Context    = Publisher
// step: 2  => Context. Provider = Provider
// step: 3  => useContext        = Subscriber
// import th createContext()

// const contextCntx = createContext();

// function App() {
//   return (
//     <contextCntx.Provider value={"Naresh"}>
//       <div className="App">
//         <Child />
//       </div>
//     </contextCntx.Provider>
//   );
// }

// function Child() {
//   return (
//     <div>
//       <h1>I am a Child </h1>

//       <GrandChild />
//     </div>
//   );
// }

// function GrandChild() {
//   const data = useContext(contextCntx);

//   return (
//     <div>
//       <h1>I am a Grand-Child {data} </h1>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------- //
// 4
// you have to check the Inspect and Console
// count and setCount value's will show in Inspect and Console
//

// const contextCntx = createContext();

// function App() {
//   const [count, setCount] = useState(10);
//   return (
//     <contextCntx.Provider value={[count, setCount]}>
//       <div className="App">
//         <Child />
//       </div>
//     </contextCntx.Provider>
//   );
// }

// function Child() {
//   return (
//     <div>
//       <h1>I am a Child </h1>

//       <GrandChild />
//     </div>
//   );
// }

// function GrandChild() {
//   const data = useContext(contextCntx);
// console.log(data)
//   return (
//     <div>
//       <h1>I am a Grand-Child {data} </h1>
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// 5
// Array De-structuring are giving GrandChild Components

// const contextCntx = createContext();

// function App() {
//   const [count, setCount] = useState(10);
//   return (
//     <contextCntx.Provider value={[count, setCount]}>
//       <div className="App">
//         <Child />
//       </div>
//     </contextCntx.Provider>
//   );
// }

// function Child() {
//   return (
//     <div>
//       <h1>I am a Child </h1>

//       <GrandChild />
//     </div>
//   );
// }

// function GrandChild() {
//   const [count, setCount] = useContext(contextCntx);

//   return (
//     <div>
//       <h1>I am a Grand-Child  </h1>
//       <button onClick={() => setCount(count + 1)}>➕</button>
//       <p> Count : {count}</p>
//       <button onClick={() => setCount(count - 1)}>➖</button>
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------------- //
// 6
// Count value's, you can pass anywhere

// const contextCntx = createContext();

// function App() {
//   const [count, setCount] = useState(10);
//   return (
//     <contextCntx.Provider  value={[count, setCount]}>
//       <div className="App">

//       <h1>Count value increase : {count} </h1>
      
//       <Child />      
//       </div>
//     </contextCntx.Provider>
//   );
// }

// function Child() {
//   return (
//     <div>
//       <h1>I am a Child </h1>

//       <GrandChild />
//     </div>
//   );
// }

// function GrandChild() {

//   const [count, setCount] = useContext(contextCntx);

//   return (
//     <div>
//       <h1> I am a Grand-Child </h1>
//       <button onClick={() => setCount(count + 1)}>➕</button>
//       <p> Count : {count} </p>
//       <button onClick={() => setCount(count - 1)}>➖</button>
//     </div>
//   );
// }

// ================================================  End Use-Context ============================================================== //


//================================================ Start Use-Context Task ==================================================================== //

// function App() {
//   const [mode, setMode] = useState("light");
//   const styles = {
//     background: mode === "light" ? "white" : "black"
//   };
//   return (
//     <div style={styles} className="App">
//       <List mode={mode} setMode={setMode} />
//     </div>
//   );
// }

// const List = ({ mode, setMode }) => (
//   <ul>
//     <ListItem value="light" mode={mode} setMode={setMode} />
//     <ListItem value="dark" mode={mode} setMode={setMode} />
//   </ul>
// );

// const ListItem = ({ value, mode, setMode }) => (
//   <li>
//     <Button value={value} mode={mode} setMode={setMode} />
//   </li>
// );

// const Button = ({ value, mode, setMode }) => {
//   // const mode = "light";
//   const styles = {
//     background: mode === "light" ? "black" : "white",
//     color: mode === "light" ? "white" : "black"
//   };

//   return (
//     <button style={styles} onClick={() => setMode(value)}>
//       {value}
//     </button>
//   );
// };

//// Task (Don't delete or edit components)
//// 1. Complete with props drilling - 15mins
//// 2. Complete with useContext (avoiding props drilling)

//// Reference - https://codesandbox.io/s/loving-wiles-otgyqq
//// Expected output - https://csb-6qf0y.netlify.app/

//// 1. Creating - createContext
//// 2. Publisher - provider - context.Provider
//// 3. Subscriber - useContext - useContext(context)

// ------------------------------------------------------------------------------------------------------------------------------------------ //
//

// function App() {
//   const [mode, setMode] = useState("light");
//   const styles = {
//     background: mode === "light" ? "black" : "white"
//   };
//   return (
//     <div style={styles} className="App">
//       <List mode={mode} setMode={setMode} />
//     </div>
//   );
// }

// const List = ({ mode, setMode }) => (
//   <ul>
//     <ListItem value="Light 💡" mode={mode} setMode={setMode} />
//     <ListItem value="Dark 🌙" mode={mode} setMode={setMode} />
//   </ul>
// );

// const ListItem = ({ value, mode, setMode }) => (
//   <li>
//     <Button value={value} mode={mode} setMode={setMode} />
//   </li>
// );

// const Button = ({ value, mode, setMode }) => {
//   // const mode = "light";
//   const styles = {
//     background: !(mode === "light") ? "black" : "white",
//     color: mode === "light" ? "black" : "white"
//   };

//   return (
//     <button style={styles} onClick={() => setMode(value === "Light 💡" ? "dark" : "light")}>
//       {value}
//     </button>
//   );
// };

// ------------------------------------------------------------------------------------------------------------------------------------------------------- //
//

const themeCntx = createContext();

function App() {
  const [mode, setMode] = useState("light");
  const styles = {
    background: mode === "light" ? "black" : "white"
  };
  return (
    <themeCntx.Provider  value={[mode, setMode]}>
    <div style={styles} className="App">

      <List />

    </div>
  </themeCntx.Provider>
  );
}

const List = () => (
  <ul>
    <ListItem value="Light 💡"  />
    <ListItem value="Dark 🌙"  />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value}  />
  </li>
);

const Button = ({ value}) => {
   const [mode, setMode] = useContext(themeCntx);
  const styles = {
    background: !(mode === "light") ? "black" : "white",
    color: mode === "light" ? "black" : "white"
  };

  return (
    <button style={styles} onClick={() => setMode(value === "Light 💡" ? "dark" : "light")}>
      {value}
    </button>
  );
};



export default App;
