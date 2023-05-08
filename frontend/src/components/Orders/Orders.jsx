import { useEffect, useState } from 'react';
import Order from '../Order/Order';
import './Orders.css';
import { fetchOrders } from '../../api/orders';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const ordersObj = await fetchOrders();
    setOrders(ordersObj.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className='orders_container'>
      <div className='orders_title'>Замовлення</div>

      {orders.map(order => (
        <Order
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
};

export default Orders;
