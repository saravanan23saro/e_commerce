import { useEffect, useState } from "react";
import API from "../services/api";

const Cart = () => {
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    const { data } = await API.get("/cart");
    setCart(data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (productId) => {
    await API.delete("/cart", { data: { productId } });
    fetchCart();
  };

  const updateQty = async (productId, quantity) => {
    await API.put("/cart", { productId, quantity });
    fetchCart();
  };

  if (!cart || cart.items.length === 0) {
    return <h2>Cart is empty</h2>;
  }

  return (
    <div>
      <h2>My Cart</h2>

      {cart.items.map((item) => (
        <div key={item._id} style={{ border: "1px solid gray", margin: 10 }}>
          <h4>{item.product.name}</h4>
          <p>Price: ₹{item.product.price}</p>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              updateQty(item.product._id, Number(e.target.value))
            }
          />

          <button onClick={() => removeItem(item.product._id)}>
            Remove
          </button>
        </div>
      ))}

      <button onClick={() => (window.location.href = "/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
