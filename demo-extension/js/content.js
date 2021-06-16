
var session = null;
var authElements = null;

/**
 * Initial event to store the data in local storage
 */
chrome.runtime.sendMessage({ event: EVENT_NAMES.INIT }, async (response) => {
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
        const result = await fetch(CHECK_SESSION_API);
        const data = await result.json();

        await window.__config({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.authToken}`
            },
            isDev: false,
            baseUrl: "https://my.setmore.com"
        }, async (ack) => {
            console.log(ack);
            console.log(await window.__config({ headers: {} }));
        })
        let decoded = parseJwt(data.authToken);
        let serviceWrapper = `<service-wrapper 
            class="disabled" 
            merchandId=${decoded.sub}
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
                    merchandId=8d3432dd-a887476e-05ec-8dfd-8781-9aae19734e68
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


