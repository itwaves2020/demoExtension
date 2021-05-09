
try {
    var session = null;
    $(document).ready(function () {

        chrome.runtime.onMessage.addListener(function (response, sendResponse) {
            console.log("Content script receiving message: ", response, sendResponse);
        });

        /**
         * Initial event to store the data in local storage
         */
        chrome.runtime.sendMessage({ event: EVENT_NAMES.INIT }, (response) => {
            console.log("********* Session storage success callback! *********", response);

            /**
             * Response if success bind authentication event to login
             */
            if (!response.success) {
                $("#container").append(
                    $("<button id='btn-login' type='button' class='btn btn-outline-primary'> Login </button>")
                );
                $("#btn-login").bind("click", createWindow);
            } else {
                $("#container").append(
                    $(`
                        <div class= 'row'> Already logged in...! </div>
                    `)
                    // <service-wrapper class="disabled" myBooking="true" merchandId="4a506115-cac9-4d35-ad51-3719798635e1" limit="50"
                    //     isDeleted=false cursor="">
                    // </service-wrapper>
                );
            }
        });


        /**
         * Open new window to redirect to any page according to link
         * @param {*} e 
         */
        const createWindow = (e) => {
            chrome.windows.create({
                height: 550,
                width: 350,
                type: "popup",
                url: LOGIN_LINK
            }, function (tab) {
                console.log("Tab: ", tab);
            });
        }
    })
} catch (error) {
    console.error(error)
}

