const HOST = "http://localhost:8000";
const LOGIN_LINK = `https://my.setmore.com/integration/wordpress/oauth?siteUrl=${HOST}`;

const EVENT_NAMES = {
    INIT: "INIT",
    CHECK_COOKIES: "CHECK_COOKIES",
    GET_COOKIES: "GET_COOKIES",
    IS_LOGGEDIN: "IS_LOGGEDIN",
}

const SESSION = {};