import axios from 'axios';

export const fetchComments = () => {
  return axios.get(`${process.env.REACT_APP_SERVER_URL}/comment`);
};

export const createComment = payload => {
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/comment`, payload);
};

export const deleteComment = id => {
  return axios.delete(`${process.env.REACT_APP_SERVER_URL}/comment/${id}`);
};
