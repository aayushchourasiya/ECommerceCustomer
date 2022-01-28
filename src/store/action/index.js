const updateData = (update) => {
    return {
      type: "UPDATE",
      payload: update,
    };
  };
  
  const currentUser = (user) => {
    return {
      type: "USER",
      payload: user,
    };
  };

  const productCategory = (product) => {
    return {
      type: "PRODUCT",
      payload: product
    }
  }
  
  export { updateData, currentUser ,productCategory};