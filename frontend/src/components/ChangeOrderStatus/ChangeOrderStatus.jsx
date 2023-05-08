import { useState } from 'react';
import './ChangeOrderStatus.css';
import { updateOrder } from '../../api/orders';

const ChangeOrderStatus = ({ id, setActive, prevStatus }) => {
  const [status, setStatus] = useState('ЗАТВЕРЖДЕНО');

  const handleSelectChange = event => {
    setStatus(event.target.value);
  };

  const handleChangeOrderStatus = async () => {
    await updateOrder(id, { status });
    setActive(false);
  };

  return (
    <div className='change_order_status_container'>
      <select
        className='change_order_status_select'
        name='status'
        value={status}
        onChange={handleSelectChange}
      >
        <option
          disabled={prevStatus === 'ЗАТВЕРЖДЕНО' ? true : null}
          value='ЗАТВЕРЖДЕНО'
        >
          ЗАТВЕРЖДЕНО
        </option>
        <option
          disabled={prevStatus === 'ВІДХИЛЕНО' ? true : null}
          value='ВІДХИЛЕНО'
        >
          ВІДХИЛЕНО
        </option>
      </select>
      <button
        className='change_order_status_button'
        onClick={handleChangeOrderStatus}
      >
        Змінити статус замовлення
      </button>
    </div>
  );
};

export default ChangeOrderStatus;
