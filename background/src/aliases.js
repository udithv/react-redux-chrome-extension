const getTabInfo = (action) => {
    console.log(action);
    chrome.tabs.query({active: true}, (result) => {
        console.log(result);
        return {
        type: 'TEST_ACTION',
        payload: result
        }
        
    });
}


const openLoginPage = () => {
    chrome.tabs.create({ url: 'https://www.google.com' });
}

export default {
    'openLoginPage': openLoginPage,
    'GET_TAB_INFO': getTabInfo
    
}