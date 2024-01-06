import "./App.css";

import Header from "./Home/Header";
import Product_List from "./Home/Product_List";
import Result from "./Trans-input-field/Result";
import Maping from "./API-loop/Maping";
import FakeAPI from "./API-loop/FakeAPI";
import ComponentOutput from "./Trans-data-field-API/ComponentOutput";

function App() {
  return (
    <>
      <Header />
      <Product_List />
      <Result />
      <Maping />
      <FakeAPI />
      <ComponentOutput />
    </>
  );
}

export default App;
