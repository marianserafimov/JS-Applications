function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_rk2XLatqG/books';
    const kinveyUsername = 'pesho';
    const kinveyPassword = 'p';
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {
        'Authorization': 'Basic ' + base64auth
    };

    function request(method, endpoint, data) {
        return $.ajax({
            method: method,
            url: baseUrl + endpoint,
            headers: authHeaders,
            data: JSON.stringify(data)
        })
    }

}