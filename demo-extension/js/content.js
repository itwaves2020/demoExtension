// console.log("Content script running in page.", HOST);

try {
    chrome.runtime.onMessage.addListener(function (response, sendResponse) {
        console.log("Content script receiving message: ", response, sendResponse);
    });

    chrome.runtime.sendMessage({ event: EVENT_NAMES.INIT }, function (response) {
        console.log("response:  : :  ", response);
        if (!response.session) {
            chrome.windows.create({
                height: 550,
                width: 350,
                type: "popup",
                // Just use the full URL if you need to open an external page
                url: LOGIN_LINK
            }, function (tab) {
                console.log(tab);
            });
        }
    });
} catch (error) {
    console.error(error)
}

