document.querySelector("button").addEventListener("click", () => {
  document.querySelector("section").innerHTML = null;
  let input = document.querySelector("#input").value;
  input = input.split(" ").join("+");
  const url = "https://api.nytimes.com/svc/books/v3/reviews.json?author=" +input +"&api-key=vEWZyGo0b7WQwhOsifpTAS0B61k6VbiS";
  fetch(url)
    .then( (res) => res.json())        
    .then( (data) => {
        console.log(data.results)
        data.results.forEach(review => {
        const p = document.createElement("p");
        const html ='<div class="col-lg-3 col-md-6 mb-4"><div class="card h-100"><div class="card-body"><h2>Book Author: ' + review.book_author + '<h4 class="card-title"> Book Title: '+ review.book_title + '</h4><p class="card-text">Byline: ' + review.byline + '</p><p class="card-text">Publication Date:'  + review.publication_dt +'</p></div><div class="card-footer"><a href="' + review.url + '" class="btn btn-primary">Reviews</a></div></div></div>'
        document.querySelector("section").insertAdjacentHTML("beforeend", html);
      })
    }).catch("Unable to fetch data")
})