import ProductList from "./components/ProductList";
import Wrapper from "./components/hoc/Wrapper";
import Filter from "./components/Filter/Filter";
import "./App.css";
import ProductsProvider from "./components/ProductsProvider.js";
const App = () => {
  return (
    <>
     <div className="container">
     <ProductsProvider>
        <Filter />
        <ProductList />
      </ProductsProvider>
     </div>
    
           
    

    </>
  );
};

export default App;

