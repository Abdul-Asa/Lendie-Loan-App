// import { removeUser, getUser } from './LocalStorage';
import axios from 'axios';

// const { BASEURL } = 'https://lendie-loan-app.herokuapp.com';

export const loginAction = async (data) => {
  return await axios
    .post(`https://lendie-loan-app.herokuapp.com/api/auth/login`, data)
    .then((response) => {
      return response.data;
    });
};

export const signupAction = async (data) => {
  return axios
    .post(`https://lendie-loan-app.herokuapp.com/api/auth/signup`, data)
    .then((response) => {
      return response.data;
    });
};

export const verifyUser = (url) => {
  return axios
    .get(`https://lendie-loan-app.herokuapp.com/api${url}`)
    .then((response) => {
      return response.data;
    });
};
