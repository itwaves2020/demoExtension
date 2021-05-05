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
    async function getCookies(domain, name) {
        chrome.cookies.get({ "url": domain, "name": name }, function (cookie) {
            session = Session.getInstance(cookie);
        });
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
                    .then(result => sendResponse({ session }))
                    .catch(error => sendResponse(null, error));
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
        console.info("********** ////////// **********");
    })

    /**
     * Listen events from external web applications
     */
    chrome.runtime.onMessageExternal.addListener(
        function (request, sender, sendResponse) {
            console.log("External calls!");
            sendResponse("Received!");
        });


} catch (error) {
    console.log(error);
}