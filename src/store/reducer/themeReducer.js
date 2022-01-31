export const themeReducer = (state = 'DARK', action) => {
    switch (action.type) {
      case "THEME":
        return action.payload;
  
      default:
        return state;
    }
  };