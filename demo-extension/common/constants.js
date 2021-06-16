// const HOST = "http://localhost:8000";
const HOST = "https://my.setmore.com";
const LOGIN_LINK = `https://my.setmore.com/integration/wordpress/oauth?siteUrl=${HOST}`;
const EXTENSION_ID = `fohbkncpggaennnegkcbbckpmddjboal`;
const CHECK_SESSION_API = `https://my.setmore.com/auth/getLoggedInUser`;
const COOKIE_NAME = "_uetvid";
const EVENT_NAMES = {
    INIT: "INIT",
    CHECK_COOKIES: "CHECK_COOKIES",
    GET_COOKIES: "GET_COOKIES",
    IS_LOGGEDIN: "IS_LOGGEDIN",
    SEND_COOKIES: "SEND_COOKIES",
    COOKIES_RECEIVED: "COOKIES_RECEIVED"
}

const SESSION = {};