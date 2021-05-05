// console.log("Content script running in page.", HOST);
chrome.runtime.onMessage.addListener(function (response, sendResponse) {
    console.log("Content script receiving message: ", response);
    sendResponse({ ack: "success" })
});

chrome.runtime.sendMessage({ message: "test ==" }, function (response) {
    console.log(response.farewell);
});