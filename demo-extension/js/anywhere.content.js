console.log("Windows: ", window)
chrome.runtime.sendMessage("fohbkncpggaennnegkcbbckpmddjboal", { test: "example" },
    function (response) {
        console.log("Callback==> ", response);
    }
);