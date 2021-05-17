let data = parseQueryString(window.location.search.replace("?", ""));
if (!data) {
    data = window.localStorage.getItem("e_xtr_s");
}

// If data session found
chrome.runtime.sendMessage(EXTENSION_ID, {
    event: EVENT_NAMES.SEND_COOKIES,
    origin: window.location.origin,
    data: JSON.stringify(data),
}, (response, sender) => {
    console.log(" ********** Close login tab ********** ", response);
});