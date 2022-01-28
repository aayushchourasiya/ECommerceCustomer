export const productReducer = (state = "", action) => {
    switch (action.type) {
      case "PRODUCT":
        return action.payload;
  
      default:
        return state;
    }
  };