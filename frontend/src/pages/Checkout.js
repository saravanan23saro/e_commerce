import { useState } from "react";
import API from "../services/api";

const Checkout = () => {
  const [address, setAddress] = useState("");

  const placeOrder = async () => {
    try {
      await API.post("/orders", {
        shippingAddress: {
          address,
          city: "Chennai",
          postalCode: "600001",
          country: "India",
        },
        paymentMethod: "COD",
        totalPrice: 1000,
      });

      alert("Order placed successfully");
      window.location.href = "/";
    } catch (error) {
      alert(error.response?.data?.message || "Order failed");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>

      <input
        placeholder="Enter shipping address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
