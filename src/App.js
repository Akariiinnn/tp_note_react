import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home.jsx"
import Cocktails from "./page/Cocktails.jsx"
import Ingredients from "./page/Ingredients.jsx"
import Categories from "./page/Categories.jsx"
import Glasses from "./page/Glasses.jsx"
import Search from "./page/Search";
import Category from "./page/Category";
import Ingredient from "./page/Ingredient";
import Glass from "./page/Glass";
import Drink from "./page/Drink";
import NotFound from "./page/NotFound";

function App() {
  return (
      <div className="container">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nos_cocktails" element={<Cocktails />} />
              <Route path="/ingredients" element={<Ingredients />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/glasses" element={<Glasses />} />
              <Route path={"/search/:query"} element={<Search />} />
              <Route path={"/categories/:category"} element={<Category />} />
              <Route path={"/ingredients/:ingredient"} element={<Ingredient />} />
              <Route path={"/glasses/:glass"} element={<Glass />} />
              <Route path={"/drinks/:id"} element={<Drink />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
