console.log("Check local host event trigger script file", window.location);


$(document).ready(function () {
    var urlParams = parseQueryString(window.location.search.replace("?", ""));
    let data = window.localStorage.getItem("e_xtr_s");
    if (data) {
        window.localStorage.removeItem("e_xtr_s");
        // If data session found

        console.log("chrome.runtime: ", chrome.runtime);
        chrome.runtime.sendMessage(EXTENSION_ID, { params: JSON.stringify(data) },
            function (response) {
                console.log("Response", response)
            }
        );
    }
    console.log(chrome.runtime)
    chrome.runtime.sendMessage("fohbkncpggaennnegkcbbckpmddjboal", { params: "JSON.stringify(data)" },
        function (response) {
            console.log("Response", response)
        }
    );
    // else {
    //     // If no session data set in localstorage
    //     $("#test-again").append(`<p>Performing redirection  successfully!</p>`)
    //     window.localStorage.setItem("e_xtr_s", JSON.stringify(urlParams));
    //     window.location.href = HOST;
    // }
})
