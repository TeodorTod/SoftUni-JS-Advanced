async function request(url, options) {
    try {
        const res = await fetch(url, options);
        if (res.ok != true) {
            if (res.status == 403) {
                sessionStorage.removeItem('userData');
            }
            const error = await res.json();
            throw new Error(error.message);


        }
        if (res.status == 204) {
            return res;
        } else {
            return res.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

async function get(url) {
    return request(url);
}

async function post(url, data) {
    return request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(sessionStorage.getItem('userData')).token
        },
        body: JSON.stringify(data)
    });
}