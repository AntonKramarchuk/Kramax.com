
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Privacy from "./pages/Privacy/Privacy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="privacy" element={<Privacy/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
