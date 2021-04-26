//GET DATA
function httpGet(link) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", link, true);
    xhttp.send();
    return new Promise((resolve, reject) => {
        xhttp.onload = function() {
            if (this.status == 200) {
                resolve(this.responseText);
            }
            reject("Error data");
        }
    })
}

// POST DATA
function httpPost(link, body) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", link, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(body);
    return new Promise((resolve, reject) => {
        xhttp.onload = function() {
            if (this.status == 201) {
                resolve(this.responseText);
            }
            reject("Error Post Data");
        }
    })
}

// DELETE DATA
function httpDelete(link, id) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('DELETE', `${link}/${id}`, true);
    xhttp.send();
    return new Promise((resolve, reject) => {
        xhttp.onload = function() {
            if (this.status == 200) {
                resolve(this.responseText);
            }
            reject("Error delete data");
        }
    })
}

//PATCH DATA

httpGet("https://jsonplaceholder.typicode.com/posts")
    .then(res => console.log(res))

// httpPost("https://tony-json-server.herokuapp.com/api/users", JSON.stringify({
//         name: "Leonard Ebert",
//         email: "kenny_harvey@yahoo.com",
//     })
// )
//     .then(res => console.log(res))

// httpDelete("https://tony-json-server.herokuapp.com/api/users", "J6-xF7-").then(res => console.log(res))



