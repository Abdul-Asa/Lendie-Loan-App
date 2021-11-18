export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (user) return user;
  else return null;
};

// remove the token and user from the session storage
export const removeUser = () => {
  return localStorage.removeItem('currentUser');
};

// set the token and user from the session storage
export const setUser = (data) => {
  return localStorage.setItem('currentUser', JSON.stringify(data));
};

export const storeCart = (data) => {
  return localStorage.setItem('cart', JSON.stringify(data));
};

export const getCart = (data) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (cart) return cart;
  else return null;
};

export const deleteCart = () => {
  return localStorage.removeItem('cart');
};

export const setId = (data) => {
  return localStorage.setItem('resetId', JSON.stringify(data));
};

export const getId = () => {
  const resetId = JSON.parse(localStorage.getItem('resetId'));
  if (resetId) return resetId;
  else return null;
};
export const removeId = () => {
  return localStorage.removeItem('resetId');
};
