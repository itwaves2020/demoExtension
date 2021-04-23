console.log("Background script running");

//common function to access cookie using chrome.cookie
function getCookies(domain, name, callback) {
    chrome.cookies.get({ "url": domain, "name": name }, function (cookie) {
        if (callback) {
            callback(cookie.value);
        }
    });
}

//get the cookie from localhost
getCookies("http://localhost:8000/", "cookieName", function (value) {
    console.log("cookie value:", value)
    console.log(crhome)
});


//get the cookie from setmore
getSessions("https://beta.setmore.com/", "MUID", function (value) {
    console.log("cookie value:", value)
});


// console.log(chrome.sessions);

// chrome.sessions.getDevices((val) => {
//     console.log(val);
// });