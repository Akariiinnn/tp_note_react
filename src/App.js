import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home.jsx"
import Cocktails from "./page/Cocktails.jsx"
import Ingredients from "./page/Ingredients.jsx"
import Categories from "./page/Categories.jsx"
import Glasses from "./page/Glasses.jsx"

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nos_cocktails" element={<Cocktails />} />
              <Route path="/ingredients" element={<Ingredients />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/verres" element={<Glasses />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
