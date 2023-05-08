import axios from 'axios';

export const fetchOrders = () => {
  return axios.get(`${process.env.REACT_APP_SERVER_URL}/order`);
};

export const createOrder = payload => {
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/order`, payload);
};

export const updateOrder = (id, payload) => {
  return axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/order/${id}`,
    payload
  );
};

export const deleteOrder = id => {
  return axios.delete(`${process.env.REACT_APP_SERVER_URL}/order/${id}`);
};
