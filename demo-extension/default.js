var session = null;
try {
    chrome.runtime.onInstalled.addListener(function () {
        // fetch("https://my.setmore.com/auth/getLoggedInUser").then(async result => {
        //     console.log(await result.json());
        // }).catch(error => {
        //     console.log("Error: : => ", error)
        // })
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
                    console.log("cookeieeieiee", cookie)
                    // If session available and received from host
                    session = Session.getInstance(cookie);

                } else {
                    // If no session available and received from host
                    session = null;
                }
                chrome.storage.local.set({ session: session }, function (result) {
                    resolve({ success: session ? true : false, session: session, from: "default.js" })
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
                getCookies(HOST, COOKIE_NAME)
                    .then(result => sendResponse(result))
                    .catch(error => sendResponse({ success: false, from: "default.js" }));
            }
            else if (request.event === EVENT_NAMES.SEND_COOKIES) {
                console.log("********* Session reached! *********", request.data);

                if (request.data && request.data !== "null" && (request.origin === HOST)) {
                    chrome.cookies.set({ url: HOST, name: COOKIE_NAME, value: request.data }, async function (cookie) {

                        console.log("******** Cookies set perfectley *********", { cookie });
                        sendResponse({ success: true, data: request.data, from: "default.js" });
                        // console.log(tab)
                        // chrome.tabs.remove(tab.id);
                        return true;

                    })
                } else {
                    sendResponse({ success: false, from: "default.js" });
                }
            }
            else if (request.event === EVENT_NAMES.COOKIES_RECEIVED) {
                if (request.data && request.data !== "null") {
                    console.log("*********** Check I am here or not ==>", request.data)
                    chrome.runtime.sendMessage({
                        data: request.data,
                        event: EVENT_NAMES.COOKIES_RECEIVED,
                        from: "default.js"
                    }, (response) => {
                        console.log("*********** Session cookies data sent to content script ********* ");
                        sendResponse({ success: true, from: "default.js" })

                        return true;
                    })
                } else {
                    sendResponse({ success: false, from: "default.js" });
                }
            }

            // Inform Chrome that we will make a delayed sendResponse
            return true;
        }
    );

} catch (error) {
    console.log(error);
}