
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

        let btn = document.createElement("button");
        btn.innerHTML = "Login";
        btn.setAttribute("class", "btn btn-lg");
        document.body.appendChild(btn);
        btn.addEventListener("click", loginModal);

    } else {
        let sessionData = JSON.parse(((((response || {}).session || {}).cookies || {}).value || {}));
        console.log("Ress==> ", sessionData);
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


