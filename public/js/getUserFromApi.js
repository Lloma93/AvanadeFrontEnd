function  getUserFromApi( user , callback) {
    var xhttp = new XMLHttpRequest();
    let response;
    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Status ok!");
            response = JSON.parse(xhttp.responseText);
            callback(response);
        }
        // else {
        //     console.log('Deu pau!');
        //     console.log("status", this.status);
        //     console.log(xhttp.responseText);
        //     callback({type: "error", status: this.status, response: xhttp.responseText });
        // }
    }

    xhttp.open("GET", `https://api.github.com/users/${user}`, true);
    xhttp.send();
}

// getDataApi('TcheORfabio', function (user) {
//     console.log('meu user github:', user);
// });