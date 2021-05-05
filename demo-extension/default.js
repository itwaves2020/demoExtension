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
                resolve(cookie);
            });
        })
    }


    /**
     * Get cookies from localhost:8000
     */
    getCookies("http://localhost:8000/", "cookieName").then(result => {
        console.info("Info: ", result);
    }).catch(error => {
        console.error(error);
    })

    // chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
    //     console.log("Background script received ack: ", response, new Date());
    // });
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            console.log("sender, request: ", sender, request);
            sendResponse({ success: 200 })
        }
    );
} catch (error) {
    console.log(error);
}