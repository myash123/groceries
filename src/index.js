import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Home from './routes/home';
import Recipes from './routes/recipes';
import Saved from './routes/saved'
import { getRecipes } from './recipe_data'

const rootElement = document.getElementById("root");

const recipes = getRecipes()

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="recipes" element={<Recipes recipes= { recipes }/>} />
        <Route path="saved" element={<Saved />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);