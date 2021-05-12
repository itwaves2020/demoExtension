
try {
    var session = null;
    var authElements = null;
    console.log(chrome)
    chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {


        /**
         * Render page according to requirement
         * @param {*} html 
         */
        function auth(html) {
            const root = document.createElement("div");
            root.setAttribute('id', "easyshare-extension");
            root.setAttribute("style", "position: fixed; display: block; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; z-index: 2000000000;");

            const sideBarGrid = document.createElement("div");
            sideBarGrid.setAttribute("style", "box-sizing: border-box;  height: 100vh; width: 100vw; display: grid; grid-template-columns: 1fr 360px; grid-template-rows: 100%; grid-template-areas: 'container sidebar'; overflow-y: hidden;")

            const easyshareWrapper = document.createElement("div");
            easyshareWrapper.setAttribute("style", "box-sizing: border-box; position: relative; grid-area: sidebar; height: 100%; width: 100%; background-color: white; border-left: 1px solid #d0d0d0; box-shadow: 0 1px 5px 0 rgb(0 0 0 / 0.2); outline: none; line-height: 1.4;");
            const frame = document.createElement("iframe");
            frame.setAttribute("id", "easyshare-iframe");
            frame.setAttribute("style", "height: 100%; width: 100%;");
            frame.setAttribute("frameborder", "0");
            frame.sandbox = "allow-same-origin allow-scripts allow-popups allow-forms";
            frame.src = chrome.runtime.getURL(html);

            easyshareWrapper.appendChild(frame);

            sideBarGrid.appendChild(easyshareWrapper); ``
            root.appendChild(sideBarGrid);

            root.onclick = () => {
                const alreadyExists = document.getElementById("easyshare-extension");
                if (alreadyExists) {
                    document.body.removeChild(alreadyExists);
                }
            };
            authElements = root;
        }



        /**
         * Initial event to store the data in local storage
         */
        chrome.runtime.sendMessage({ event: EVENT_NAMES.INIT }, (response) => {
            console.log("********* Session storage success callback! *********", response);

            /**
             * Response if success bind authentication event to login
             */
            if (!response.success) {
                auth("login.html");
                const alreadyExists = document.getElementById("easyshare-extension");
                if (alreadyExists) {
                    document.body.removeChild(alreadyExists);
                }
                else {
                    document.body.appendChild(authElements);
                }
            } else {
                auth("index.html");
                const alreadyExists = document.getElementById("easyshare-extension");
                if (alreadyExists) {
                    document.body.removeChild(alreadyExists);
                }
                else {
                    document.body.appendChild(authElements);
                }
            }
        });

        sendResponse("OK");
    });
} catch (error) {
    console.error(error)
}

