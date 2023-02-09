import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./Component/Welcome";
import Product from "./Component/Product";
import MainHeader from "./Component/MainHeader";
import ProductDetails from "./Component/ProductDetails";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product/:productid">
            <ProductDetails />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
