
const common = () => "http://localhost:8000";

/**
 * Parse query string and return query data
 * @param {*} queryString 
 */
function parseQueryString(queryString) {
    if (!queryString) {
        return false;
    }

    let queries = queryString.split("&"), params = {}, temp;

    for (let i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split('=');
        if (temp[1] !== '') {
            params[temp[0]] = temp[1];
        }
    }
    return params;
}

/**
 * Parse jwt token
 * @param {*} token 
 * @returns 
 */
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};