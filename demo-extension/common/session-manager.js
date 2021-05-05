var Session = (function () {
    function SingletonClass() { };
    var instance;

    return {
        getInstance: function (cookies) {
            if (instance == null) {
                instance = new SingletonClass();
                instance.cookies = cookies;

                // Hide the constructor so the returned object can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
    };
})();