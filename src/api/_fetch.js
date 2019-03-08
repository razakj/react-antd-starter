class ResponseError extends Error {
    constructor(props) {
        super(props.statusText);

        this.status         = props.status;
    }
}

const _makeRequest = async (type, url, params = {}) => {

    const _url      = new URL(`/api/v1${url}`, location.href);

    if(type === 'GET') {
        _url.search     = new URLSearchParams(params);
    }

    let request = {
        method      : type,
        headers     : new Headers({
            'Content-Type': 'application/json'
        }),
        credentials : 'same-origin',
        mode        : 'same-origin'
    };

    if(type === 'POST') {
        request.body = JSON.stringify(params);
    }

    const res = await fetch(_url, request);

    if(!res.ok) throw new ResponseError({message : res.statusText, status: res.status});

    return res.json();

};

export const get = (url, params = {}) => {
    return _makeRequest('GET', url, params);
};

export const post = (url, params = {}) => {
    return _makeRequest('POST', url, params);
};