


var search = document.getElementById("search-form");


var API_KEY = `qeN7eMTRc-_hpcxj2jzmwwnJoW2kR65TdGvnN5bhelE`;
search.addEventListener("submit", function(e) {
    e.preventDefault();
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);

            // console.log(searchString);
            document.getElementById("left").innerHTML = xhttp.responseText;
        }
    };
    var searchString = document.querySelector("#search-bar").value;
    xhttp.open("GET", `https://api.unsplash.com/search/photos?query=${searchString}&client_id=${API_KEY}`, true);
    xhttp.setRequestHeader("Accept-Version", "v1");
    xhttp.setRequestHeader("Authorization", API_KEY);
    console.log(xhttp)
    xhttp.send();
})

