import { useEffect, useState } from "react";
import API from "../services/api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await API.get("/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = async (id) => {
    try {
      await API.post("/cart", { productId: id, quantity: 1 });
      alert("Added to cart");
    } catch {
      alert("Login required");
    }
  };

  return (
  <div className="container">
    <h2>Products</h2>

    <div className="products">
      {products.map((p) => (
        <div className="card" key={p._id}>
          <h3>{p.name}</h3>
          <p>₹ {p.price}</p>
          <p>{p.description}</p>
          <button onClick={() => addToCart(p._id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

};

export default Products;
