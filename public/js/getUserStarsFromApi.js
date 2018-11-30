function  getUserStars( user , callback) {
    var xhttp = new XMLHttpRequest();
    let response;
    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Status ok!");
            response = JSON.parse(xhttp.responseText);
            //Fazer a contagem das estrelas
            let stars = 0;
            response.forEach(function(value, index) {
                stars += value.stargazers_count;
            });
            console.log('Estrelas: ', stars);
            //End Fazer a contagem das estrelas
            callback(stars);
        }
        // else {
        //     console.log('Deu pau!');
        //     console.log("status", this.status);
        //     console.log(xhttp.responseText);
        //     callback({type: "error", status: this.status, response: xhttp.responseText });
        // }
    }

    xhttp.open("GET", `https://api.github.com/users/${user}/repos`, true);
    xhttp.send();
}