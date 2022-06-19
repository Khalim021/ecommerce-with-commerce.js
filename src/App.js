import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import { commerce } from './library/ecommerce'

function App() {
  const [products, setProducts] = useState([]);

  const catchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data)
  }

  useEffect(() => {
    catchProducts()
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
