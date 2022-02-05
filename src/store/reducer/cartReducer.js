export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDTOCART':
      return [
        ...state,
        {item: action.payload.item, quantity: action.payload.quantity},
      ];

    case 'REMOVEFROMCART': {
      state.splice(action.payload.index, 1);
      return [...state];
    }
    case 'CHANGEQUANTITY': {
      state[action.payload.index].quantity = action.payload.newQuantity;
      return [...state];
    }
    case 'EMPTY': {
      return state=[];
    }

    default:
      return state;
  }
};
