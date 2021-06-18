let data = parseQueryString(window.location.search.replace("?", ""));
if (!data) {
    data = window.localStorage.getItem("e_xtr_s");
}

// If data session found
chrome.runtime.sendMessage(CONSTANTS[ENV].EXTENSION_ID, {
    event: EVENT_NAMES.SEND_COOKIES,
    origin: window.location.origin,
    data: JSON.stringify(data),
    from: "anywhere.js"
}, (response, sender) => {
    console.log(" ********** Close login tab ********** ", response);

    if ((response || {}).data) {
        chrome.runtime.sendMessage(CONSTANTS[ENV].EXTENSION_ID, {
            event: EVENT_NAMES.COOKIES_RECEIVED,
            data: JSON.stringify(data),
            from: "anywhere.js"
        }, (ack) => {

            console.log(" ********** Session cookies received ack ********** ", ack);
            window.close();
            chrome.tabs.remove(response.tabId)
        })
    }
});