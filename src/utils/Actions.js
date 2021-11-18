import { getUser, getId } from './LocalStorage';
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
      `https://lendie-loan-app.herokuapp.com/api/user/profile-pic/${user.id}`,
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
        `https://lendie-loan-app.herokuapp.com/api/user/update/${user.id}`,
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
        `https://lendie-loan-app.herokuapp.com/api/user/update-payment/${user.id}`,
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
        `https://lendie-loan-app.herokuapp.com/api/user/reset-password/${user.id}`,
        data,
        config
      )
      .then((response) => {
        return response.data;
      });
  }
};

export const requestLoanAction = async (data) => {
  const user = getUser();

  if (user) {
    const config = {
      headers: {
        token: user.token,
      },
    };
    return axios
      .post(
        `https://lendie-loan-app.herokuapp.com/api/loan/request-loan/${user.id}`,
        data,
        config
      )
      .then((response) => {
        return response.data;
      });
  }
};

export const getLoanAction = async () => {
  const user = getUser();

  if (user) {
    const config = {
      headers: {
        token: user.token,
      },
    };
    return axios
      .get(
        `https://lendie-loan-app.herokuapp.com/api/loan/loan-history/${user.id}`,
        config
      )
      .then((response) => {
        return response.data;
      });
  }
};

export const deleteLoanAction = async (data) => {
  const user = getUser();

  if (user) {
    const config = {
      headers: {
        token: user.token,
      },
      data: data,
    };
    return axios
      .delete(
        `https://lendie-loan-app.herokuapp.com/api/loan/delete-loan/${user.id}`,
        config
      )
      .then((response) => {
        return response.data;
      });
  }
};

export const repayLoanAction = async (data) => {
  const user = getUser();

  if (user) {
    const config = {
      headers: {
        token: user.token,
      },
    };
    return axios
      .patch(
        `https://lendie-loan-app.herokuapp.com/api/loan/repay-loan/${user.id}`,
        data,
        config
      )
      .then((response) => {
        return response.data;
      });
  }
};

export const checkForgotAction = async (data) => {
  return axios
    .post(
      `https://lendie-loan-app.herokuapp.com/api/auth/check-forgot-password`,
      data
    )
    .then((response) => {
      return response.data;
    });
};

export const resetPasswordAction = async (data) => {
  const resetId = getId();

  if (resetId) {
    return axios
      .post(
        `https://lendie-loan-app.herokuapp.com/api/auth/reset-password/${resetId.id}`,
        data
      )
      .then((response) => {
        return response.data;
      });
  }
};
