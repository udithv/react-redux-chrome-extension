
export default (state = null, action) => {
    switch (action.type) {
      case 'TEST_ACTION':
        console.log('in reducer');
        return action.payload || false;
      case 'SAID_HI':
        console.log('saying hi');
        console.log(action.payload);
        return action.payload || false;
      default:
        return state;
    }
  };