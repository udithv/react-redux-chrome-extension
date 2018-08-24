
export default (state = {}, action) => {
    switch (action.type) {
      case 'SHOW_WEBPAGE_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };