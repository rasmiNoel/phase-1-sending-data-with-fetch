// writing a POST request
const submitData = (name, email) => {
    const body = {
        name: 'Steve',
        email: 'steve@steve.com'
    };
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(json => {
            document.body.innerHTML = json["id"]
        })
        .catch(error => {
            document.body.innerHTML = error.message
        })
};
