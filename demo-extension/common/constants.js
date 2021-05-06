const HOST = "http://localhost:8000";
const LOGIN_LINK = `https://my.setmore.com/integration/wordpress/oauth?siteUrl=${HOST}`;
const EXTENSION_ID = `hiolbcbileegpkelihkfhdjnkgmaddih`;

const EVENT_NAMES = {
    INIT: "INIT",
    CHECK_COOKIES: "CHECK_COOKIES",
    GET_COOKIES: "GET_COOKIES",
    IS_LOGGEDIN: "IS_LOGGEDIN",
    SEND_COOKIES: "SEND_COOKIES"
}

const SESSION = {};