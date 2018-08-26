
export function getTabInfo() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({active: true},resolve);
    });
}

export function openTabs(urls) {
    urls.forEach(url => {
        chrome.tabs.create({ url });
    });
}