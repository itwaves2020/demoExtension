var session = null;
try {
    chrome.runtime.onInstalled.addListener(function () {
        console.info('Successfully installed!');
    })


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
                    resolve({ success: session ? true : false })
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

                if (request.data && request.data !== "null") {
                    chrome.cookies.set({ "url": HOST, "name": "cookieName", value: request.data }, function (cookie) {
                        console.log("******** Cookies set perfectley *********", { cookie });

                        sendResponse({ success: true, tabId: sender.tab.id });
                        chrome.tabs.remove(sender.tab.id, { selected: true, active: true });
                        return true;
                    })
                }
            }

            // Inform Chrome that we will make a delayed sendResponse
            return true;
        }
    );

    /**
     * Action icon event listener, 
     * but it works if we don't have popup to open on icon click
     */
    chrome.action.onClicked.addListener(function (e) {
        console.info("********** ////////// **********", { e });
    })

} catch (error) {
    console.log(error);
}