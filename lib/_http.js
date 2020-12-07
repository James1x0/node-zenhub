var extend = require('xtend');
var request = require('request-promise');
var querystring = require('querystring');

var API_URL = 'https://api.zenhub.io/p1';
var BETA_API_URL = 'https://api.zenhub.com/v4';

class Http {
    constructor (credentials) {
        this.credentials = credentials;
    }

    getBetaRequestOptions () {
        return {
            headers: {
                'x-authentication-token': this.credentials.access_token
            }
        }
    }

    /**
     * Helper to handle requests to the API with authorization
     *
     * @private
     * @param string    url             address part after API root
     * @param object    parameters      additional parameters
     * @param boolean   isBeta          toggle on beta api
     * @callback        complete
     * @memberof        Http
     * @method          _get
     */
    _get (url, parameters, isBeta) {
        if (!isBeta) {
            parameters = extend(parameters, this.credentials); // Add credentials to parameters
        }
        var getURL = (isBeta ? BETA_API_URL : API_URL) + '/' + url + '?' + querystring.stringify(parameters); // Construct URL with parameters

        return request.get({
            url: getURL,
            strictSSL: true,
            json: true,
            ...isBeta ? this.getBetaRequestOptions() : {}
        });
    };

    /**
     * Helper to handle POST requests to the API with authorization
     *
     * @private
     * @param string    url             address part after API root
     * @param object    parameters      additional parameters
     * @param object    body            request body
     * @param boolean   isBeta          toggle on beta api
     * @callback        complete
     * @memberof        Http
     * @method          _post
     */
    _post (url, parameters, body, isBeta) {
        if (!isBeta) {
            parameters = extend(parameters, this.credentials); // Add credentials to parameters
        }
        var postURL = (isBeta ? BETA_API_URL : API_URL) + '/' + url + '?' + querystring.stringify(parameters); // Construct URL with parameters

        return request.post({
            url: postURL,
            strictSSL: true,
            json: true,
            body: body,
            ...isBeta ? this.getBetaRequestOptions() : {}
        });
    };

    /**
     * Helper to handle PUT requests to the API with authorization
     *
     * @private
     * @param string    url             address part after API root
     * @param object    parameters      additional parameters
     * @param object    body            request body
     * @param boolean   isBeta          toggle on beta api
     * @callback        complete
     * @memberof        Http
     * @method          _put
     */
    _put (url, parameters, body, isBeta) {
        if (!isBeta) {
            parameters = extend(parameters, this.credentials); // Add credentials to parameters
        }
        var putURL = (isBeta ? BETA_API_URL : API_URL) + '/' + url + '?' + querystring.stringify(parameters); // Construct URL with parameters

        return request.put({
            url: putURL,
            strictSSL: true,
            json: true,
            body: body,
            ...isBeta ? this.getBetaRequestOptions() : {}
        });
    };

}

module.exports = Http;
