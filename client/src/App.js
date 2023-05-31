import Example from "./components/Example/Example";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Test from './components/Test/Test'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route></Route>
        </Route>
      </Routes>
      <Example></Example>
        <Test></Test>
    </div>
  );
}

export default App;
