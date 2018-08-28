
export default (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload || false;
    case 'UPDATE_CURRENT_DOCK':
      return action.payload;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};