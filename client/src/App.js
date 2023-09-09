
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Privacy from "./pages/Privacy/Privacy";
import About from "./pages/About/About";
import Stock from "./pages/Stock/Stock";
import Works from "./pages/Works/Works";
import Prices from "./pages/Prices/Prices";
import Guarantees from "./pages/Guarantees/Guarantees";
import Reviews from "./pages/Reviews/Reviews";
import Contacts from "./pages/Contacts/Contacts";
import Payment from "./pages/Payment/Payment";
import Tips from "./pages/Tips/Tips";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="privacy" element={<Privacy/>} />
            <Route path="about" element={<About/>} />
            <Route path="stock" element={<Stock/>} />
            <Route path="works" element={<Works/>} />
            <Route path="prices" element={<Prices/>} />
            <Route path="guarantees" element={<Guarantees/>} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="contacts" element={<Contacts/>} />
            <Route path="payment" element={<Payment/>} />
            <Route path="tips" element={<Tips/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
