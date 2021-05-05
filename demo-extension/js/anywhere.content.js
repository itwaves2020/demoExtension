chrome.runtime.sendMessage("fohbkncpggaennnegkcbbckpmddjboal", { test: "example" },
    function (response) {
        console.log("Callback: ", response);
    }
);