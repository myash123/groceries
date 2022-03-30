import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Home from './components/home';
import Recipes from './components/recipes';
import Saved from './components/saved'

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="recipes" element={<Recipes route="/recipes" />} />
        <Route path="saved" element={<Saved />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)