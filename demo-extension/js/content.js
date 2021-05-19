
var session = null;
var authElements = null;

/**
 * Initial event to store the data in local storage
 */
chrome.runtime.sendMessage({ event: EVENT_NAMES.INIT }, (response) => {
    console.log("********* Session storage success callback! *********", response);

    /**
     * Response if success bind authentication event to login
     */
    if (!response.success) {
        let wrapper = document.createElement("div");
        wrapper.setAttribute("class", "container text-center");
        wrapper.setAttribute("id", "container");
        let btn = document.createElement("button");
        btn.innerHTML = "Login";
        btn.setAttribute("class", "btn btn-lg");
        btn.addEventListener("click", loginModal);
        wrapper.appendChild(btn)
        document.body.appendChild(wrapper);

    } else {
        let sessionData = JSON.parse(((((response || {}).session || {}).cookies || {}).value || {}));
        let serviceWrapper = `<service-wrapper 
            class="disabled" 
            merchandId=${sessionData.companyKey}
            limit="50"
            isDeleted=true 
            cursor="" 
        />`;
        document.body.innerHTML = serviceWrapper;
    }
});

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.event === EVENT_NAMES.COOKIES_RECEIVED) {
            if (request.data && request.data != "null") {
                let sessionData = JSON.parse((request || {}).data || {});
                let serviceWrapper = `<service-wrapper 
                    class="disabled" 
                    merchandId=${sessionData.companyKey}
                    limit="50"
                    isDeleted=true 
                    cursor="" 
                />`;
                let container = document.getElementById("container");
                document.getElementsByTagName("body")[0].removeChild(container);
                document.body.innerHTML = serviceWrapper;
            } else {
                sendResponse({ status: false, from: "content.js" });
            }
        }
        return true;
    }
)

/**
 * Login modal
 */
function loginModal() {
    chrome.windows.create({
        url: LOGIN_LINK,
        type: "popup",
        height: 600,
        width: 400,
        left: 400
    });
}


