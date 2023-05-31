import Example from "./components/Example/Example";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Example/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route></Route>
        </Route>
      </Routes>
      <Example></Example>
    </div>
  );
}

export default App;
