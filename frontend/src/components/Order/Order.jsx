import { useState } from 'react';
import './Order.css';
import deleteImg from '../../img/delete.svg';
import changeStatusImg from '../../img/changeStatus.svg';
import Popup from '../Popup/Popup';
import { deleteOrder } from '../../api/orders';
import ChangeOrderStatus from '../ChangeOrderStatus/ChangeOrderStatus';
import { transformData } from '../../helpers/transformData';

const Order = ({ order }) => {
  const [orderPopup, setOrderPopup] = useState(false);

  const date = transformData(order.date);

  const handleOpenPopup = () => {
    setOrderPopup(true);
  };

  const handleDeleteOrder = id => {
    deleteOrder(id);
  };

  return (
    <div className='order_container'>
      <div className='order_items'>
        <div className='order_item'>{`Ім'я: ${order.name}`}</div>
        <div className='order_item'>{`Прізвище: ${order.surname}`}</div>
        <div className='order_item'>{`Телефон: ${order.phoneNumber}`}</div>
        <div className='order_item'>{`Послуга: ${order.service}`}</div>
        <div
          className='order_item'
          style={{ width: '7rem' }}
        >{`Ціна: ${order.price}`}</div>
        <div className='order_item'>{`Статус: ${order.status}`}</div>
        <div className='order_item'>{`Дата: ${date}`}</div>
        <div>
          <img
            src={deleteImg}
            alt='delete'
            onClick={() => handleDeleteOrder(order.id)}
            className='order_button_image'
          />
          <img
            src={changeStatusImg}
            alt='change status'
            className='order_button_image'
            style={{}}
            onClick={handleOpenPopup}
          />
        </div>
        {orderPopup && (
          <Popup
            setActive={setOrderPopup}
            title='Change order status'
          >
            <ChangeOrderStatus
              id={order.id}
              setActive={setOrderPopup}
              prevStatus={order.status}
            />
          </Popup>
        )}
      </div>
    </div>
  );
};

export default Order;
