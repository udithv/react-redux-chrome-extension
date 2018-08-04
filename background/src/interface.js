
export function getTabInfo() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({active: true},resolve);
    });
}