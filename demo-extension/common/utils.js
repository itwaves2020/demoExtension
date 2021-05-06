
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