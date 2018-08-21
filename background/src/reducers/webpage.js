
export default (state = {}, action) => {
    switch (action.type) {
      case 'ADD_WEBPAGE':
        return action.payload;
      default:
        return state;
    }
  };