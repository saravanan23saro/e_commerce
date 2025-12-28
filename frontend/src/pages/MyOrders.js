import { useEffect, useState } from "react";
import API from "../services/api";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await API.get("/orders/myorders");
      setOrders(data);
    };
    fetchOrders();
  }, []);

 return (
  <div className="container">
    <h2>My Orders</h2>

    {orders.length === 0 && <p>No orders found</p>}

    {orders.map((order) => (
      <div key={order._id} className="card" style={{ marginBottom: "15px" }}>
        <p><b>Order ID:</b> {order._id}</p>
        <p><b>Total:</b> ₹{order.totalPrice}</p>
        <p><b>Paid:</b> {order.isPaid ? "Yes" : "No"}</p>
        <p><b>Delivered:</b> {order.isDelivered ? "Yes" : "No"}</p>
      </div>
    ))}
  </div>
);

};

export default MyOrders;
