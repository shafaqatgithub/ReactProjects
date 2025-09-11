import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";

function App() {
  const user = {
    name: "Shafa",
    age: 50,
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* <Child name={user} city="Belgaum" /> */}
      <Child
        heading="Full stack Develpers"
        content="Discover cutting-edge design patterns and UI components that elevate your digital experiences."
      />
      <Child heading="Java Develpoper" content="I am a JAVA Developer" />
      <Child heading="Python developer" content="I am a Python developer" />
      <Child />
    </div>
  );
}

export default App;
