// import Masonry from 'masonry-layout';


var search = document.getElementById("search-form");
var resultCount = 1;

var API_KEY = `qeN7eMTRc-_hpcxj2jzmwwnJoW2kR65TdGvnN5bhelE`;
search.addEventListener("submit", function(e) {
    e.preventDefault();
    var columns = document.querySelectorAll(".div-column");
    columns.forEach(content => content.innerHTML = "")

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.responseText);
            
            console.log(response.total)
            response.results.forEach((element, i=0) => {
                // console.log();
                var picURL = element.urls.small;
                var picDiv = document.createElement('div');
                picDiv.classList.add("pic-thumb");
                picDiv.innerHTML = `<img src="${picURL}"></img>
                <div class="pic-detail">${element.user.name}</div>`
                var col = document.querySelector(`#column${(i % 3)+1}`)
                console.log()
                col.appendChild(picDiv);
                i++;
            });
        }
    };
    var searchString = document.querySelector("#search-bar").value;
    xhttp.open("GET", `https://api.unsplash.com/search/photos?query=${searchString}&results=${resultCount}&client_id=${API_KEY}`, true);
    xhttp.setRequestHeader("Accept-Version", "v1");
    xhttp.setRequestHeader("Authorization", API_KEY);
    xhttp.send();
})

