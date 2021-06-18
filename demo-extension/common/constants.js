// const ENV = "LOCAL";
const ENV = "SETMORE";

let CONSTANTS = {
    LOCAL: {
        HOST: "http://localhost:8000",
        LOGIN_LINK: `https://my.setmore.com/integration/wordpress/oauth?siteUrl=http://localhost:8000`,
        EXTENSION_ID: `fohbkncpggaennnegkcbbckpmddjboal`,
        CHECK_SESSION_API: `https://my.setmore.com/auth/getLoggedInUser`,
        COOKIE_NAME: "_uetvid",
        API_BASE_URL: "https://my.setmore.com"
    },
    SETMORE: {
        HOST: "https://my.setmore.com",
        LOGIN_LINK: `https://my.setmore.com/integration/wordpress/oauth?siteUrl=https://my.setmore.com`,
        EXTENSION_ID: `fohbkncpggaennnegkcbbckpmddjboal`,
        CHECK_SESSION_API: `https://my.setmore.com/auth/getLoggedInUser`,
        COOKIE_NAME: "_uetvid",
        API_BASE_URL: "https://my.setmore.com"
    }
}

const EVENT_NAMES = {
    INIT: "INIT",
    CHECK_COOKIES: "CHECK_COOKIES",
    GET_COOKIES: "GET_COOKIES",
    IS_LOGGEDIN: "IS_LOGGEDIN",
    SEND_COOKIES: "SEND_COOKIES",
    COOKIES_RECEIVED: "COOKIES_RECEIVED"
}