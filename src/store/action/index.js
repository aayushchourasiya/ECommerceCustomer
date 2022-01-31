const updateData = update => {
  return {
    type: 'UPDATE',
    payload: update,
  };
};

const currentUser = user => {
  return {
    type: 'USER',
    payload: user,
  };
};

const addToCart = cart => {
  return {
    type: 'ADDTOCART',
    payload: cart,
  };
};

const removeFromCart = cart => {
  return {
    type: 'REMOVEFROMCART',
    payload: cart,
  };
};

export {updateData, currentUser,addToCart,removeFromCart};
