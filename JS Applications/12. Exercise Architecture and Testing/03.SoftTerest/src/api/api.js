async function request(url, method = 'get', data) {
    const options = {
        method,
        headers: {},
    };
    try {
        const res = await fetch(url, options);

        if (res.ok != true) {
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
    }

}

window.api = {
    request
};