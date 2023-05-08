import { useState } from 'react';
import './CreateOrderForm.css';
import { createOrder } from '../../api/orders';
import { services } from '../../data/services';

const CreateOrderForm = ({ setActive }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [serviceIndex, setServiceIndex] = useState(0);

  const handleSelectChange = event => {
    setServiceIndex(event.target.value);
  };

  const handleSelectName = event => {
    setName(event.target.value);
  };

  const handleSelectSurname = event => {
    setSurname(event.target.value);
  };

  const handleSelectPhoneNumber = event => {
    setPhoneNumber(event.target.value);
  };

  const handleSelectDate = event => {
    setDate(event.target.value);
  };

  const handleCreateOrder = async () => {
    const status = 'В ОЧІКУВАННІ';
    const service = services[serviceIndex].name;
    const price = services[serviceIndex].price;
    createOrder({ name, surname, phoneNumber, service, price, status, date });
    setActive(false);
    return;
  };

  return (
    <div
      id='createOrder'
      className='create_order_form_wrapper'
    >
      <div className='create_order_form_title'>Створити запис</div>
      <div className='create_order_form_container'>
        <div className='create_order_form_item'>
          <div className='create_order_form_subtitle'>{`Ім'я`}</div>
          <input
            className='create_order_form_input'
            type='text'
            placeholder={`Введіть своє ім'я`}
            value={name}
            onChange={handleSelectName}
          />
        </div>
        <div className='create_order_form_item'>
          <div className='create_order_form_subtitle'>Прізвище</div>
          <input
            className='create_order_form_input'
            type='text'
            placeholder='Введіть своє прізвище'
            value={surname}
            onChange={handleSelectSurname}
          />
        </div>
        <div className='create_order_form_item'>
          <div className='create_order_form_subtitle'>Номер телефону</div>
          <input
            className='create_order_form_input'
            type='text'
            placeholder='Введіть свій номер телефону'
            value={phoneNumber}
            onChange={handleSelectPhoneNumber}
          />
        </div>
        <div className='create_order_form_item'>
          <div className='create_order_form_subtitle'>Дата</div>
          <input
            className='create_order_form_input'
            type='datetime-local'
            placeholder='Введіть бажану дату відвідування'
            value={date}
            onChange={handleSelectDate}
          />
        </div>
        <div className='create_order_form_item'>
          <div className='create_order_form_subtitle'>Послуга</div>
          <select
            name='services'
            value={serviceIndex}
            onChange={handleSelectChange}
            className='create_order_form_select'
          >
            {services.map((service, index) => (
              <option
                key={service.name}
                value={index}
              >
                {`${service.name}, ${service.price}`}
              </option>
            ))}
          </select>
        </div>
        <div className='create_order_form_item'>
          <div className='create_order_form_subtitle create_order_total_price'>
            {`Загальна ціна: ${services[serviceIndex].price}`}
          </div>
        </div>
      </div>
      <button
        className='create_order_form_button'
        onClick={handleCreateOrder}
      >
        Створити замовлення
      </button>
    </div>
  );
};

export default CreateOrderForm;
