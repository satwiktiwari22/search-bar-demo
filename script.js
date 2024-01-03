// search bar using javascript
let searchArr = ["apple", "banana", "mango", "orange", "grapes"]; // array of strings to be searched

// event listener for the input field
document.querySelector("input").addEventListener("change", (event) => {
  document.querySelector("ul").innerHTML = ""; // clear the previous results
  let query = event.target.value; // the query string
  let searchresults = searchArr.filter((item) => {
    return item.includes(query);
  }); // array of strings that match the query
  searchresults.forEach((element) => {
    document.querySelector("ul").innerHTML += `<li>${element}</li>`;
  }); // display the results
});
