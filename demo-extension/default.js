var session = null;
try {
    chrome.runtime.onInstalled.addListener(function () {
        console.info('Successfully installed!');
    })

    // Check sandbox click event
    chrome.action.onClicked.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "click" }, function (response) {
                console.log("********** Popup click fired **********", response);
            });
        });
    });


    /**
     * Get cookes for particular url
     * @param {*} domain 
     * @param {*} name 
     * @param {*} callback 
     */
    function getCookies(domain, name) {
        return new Promise((resolve, reject) => {
            chrome.cookies.get({ "url": domain, "name": name }, function (cookie) {
                if (cookie) {
                    // If session available and received from host
                    session = Session.getInstance(cookie);

                } else {
                    // If no session available and received from host
                    session = null;
                }
                chrome.storage.local.set({ session: session }, function (result) {
                    resolve({ success: session ? true : false, session: session })
                });
            });
        })
    }

    /**
     * Event listens from content script to background script
     */
    chrome.runtime.onMessage.addListener(
        (request, sender, sendResponse) => {
            /**
             * Initial event
             */
            if (request.event === EVENT_NAMES.INIT) {
                getCookies(HOST, "cookieName")
                    .then(result => sendResponse(result))
                    .catch(error => sendResponse({ success: false }));
            }
            else if (request.event === EVENT_NAMES.SEND_COOKIES) {
                console.log("********* Session reached! *********", request.data);

                if (request.data && request.data !== "null" && (request.origin === "http://localhost:8000")) {
                    chrome.cookies.set({ url: HOST, name: "cookieName", value: request.data }, async function (cookie) {

                        console.log("******** Cookies set perfectley *********", { cookie });
                        let queryOptions = { active: true, currentWindow: true };
                        let [tab] = await chrome.tabs.query(queryOptions);

                        chrome.windows.remove(tab.windowId);
                        return true;

                    })
                } else {
                    sendResponse({ success: false });
                }
            }

            // Inform Chrome that we will make a delayed sendResponse
            return true;
        }
    );

} catch (error) {
    console.log(error);
}