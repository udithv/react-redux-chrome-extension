
const selectedWebPage = (state = {}, action) => {
    switch (action.type) {
      case 'SHOW_WEBPAGE_DETAILS':
        return action.payload;
      default:
        return state;
    }
};

const submittedWebPage = (state = null, action) => {
    switch (action.type) {
      case 'SET_SUBMITTED_WEBPAGE':
        console.log('seting submit');
        return false;
      case 'SUBMITTED_WEBPAGE':
        return true;
      default: 
        return state;
    }
};

const currentWebpagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_WEBPAGES':
      return action.payload;
    case 'RESET_WEBPAGES':
      return null;
    default: 
      return state;
  }
};


export {
    selectedWebPage,
    submittedWebPage,
    currentWebpagesReducer
}