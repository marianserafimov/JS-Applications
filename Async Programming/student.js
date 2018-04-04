function attachStudent() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e';
    const kinveyUsername = 'guest';
    const kinveyPassword = 'guest';
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

    $(document).ready(displayStudents())
    
    function displayStudents() {
        request("GET","/students")
            .then(listingStudents)
            .catch(errHandler)
    }


    //LIST THE STUDENTS FROM DB
    function listingStudents(data) {
        data.sort((a, b) => a['ID'] - b['ID']);
        for (var i = 1; i <= 5; i++) {
            $('#results')
                .append('<tr>')
                .append(`<th>${i}`)
                .append(`th`)
        }
    }


    function errHandler(err) {
        return alert(`ERROR: ${err.statusText}`)
    }
}