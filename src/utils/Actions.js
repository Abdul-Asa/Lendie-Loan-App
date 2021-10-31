import { getUser } from './LocalStorage';
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

export const profilePicAction = async (data) => {
  const user = getUser();

  return axios
    .patch(
<<<<<<< HEAD
      `https://lendie-loan-app.herokuapp.com/api/user/profile-pic/${user.id}`,
=======
      `http://lendie-loan-app.herokuapp.com/api/user/profile-pic/${user.id}`,
>>>>>>> 81123fc8fe8b5f2937625523c62998790a97b758
      data
    )
    .then((response) => {
      return response.data;
    });
};

export const personalInfoAction = async (data) => {
  const user = getUser();

  if (user) {
    const config = {
      headers: {
        token: user.token,
      },
    };
    return axios
      .patch(
<<<<<<< HEAD
        `https://lendie-loan-app.herokuapp.com/api/user/update/${user.id}`,
=======
        `http://lendie-loan-app.herokuapp.com/api/user/update/${user.id}`,
>>>>>>> 81123fc8fe8b5f2937625523c62998790a97b758
        data,
        config
      )
      .then((response) => {
        return response.data;
      });
  }
};

export const paymentInfoAction = async (data) => {
  const user = getUser();

  if (user) {
    const config = {
      headers: {
        token: user.token,
      },
    };
    return axios
      .patch(
<<<<<<< HEAD
        `https://lendie-loan-app.herokuapp.com/api/user/update-payment/${user.id}`,
=======
        `http://lendie-loan-app.herokuapp.com/api/user/update-payment/${user.id}`,
>>>>>>> 81123fc8fe8b5f2937625523c62998790a97b758
        data,
        config
      )
      .then((response) => {
        return response.data;
      });
  }
};

export const getUserAction = async () => {
  const user = getUser();

  if (user) {
    const config = {
      headers: {
        token: user.token,
      },
    };

    return await axios
      .get(
        `https://lendie-loan-app.herokuapp.com/api/user/get-info/${user.id}`,
        config
      )
      .then((response) => {
        return response.data;
      });
  }
};

export const changePasswordAction = async (data) => {
  const user = getUser();

  if (user) {
    const config = {
      headers: {
        token: user.token,
      },
    };
    return axios
      .patch(
<<<<<<< HEAD
        `https://lendie-loan-app.herokuapp.com/api/user/reset-password/${user.id}`,
=======
        `http://lendie-loan-app.herokuapp.com/api/user/reset-password/${user.id}`,
>>>>>>> 81123fc8fe8b5f2937625523c62998790a97b758
        data,
        config
      )
      .then((response) => {
        return response.data;
      });
  }
};
