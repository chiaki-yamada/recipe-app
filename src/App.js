import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link className="nav" to={"/"}>
          <img src={logo} className="logo" />
          <h4>Foodie</h4>
        </Link>
        <Search />

        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
