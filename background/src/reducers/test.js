
export default (state = null, action) => {
    switch (action.type) {
      case 'TEST_ACTION':
        return action.payload || false;
      case 'SAID_HI':
        return action.payload || false;
      default:
        return state;
    }
  };