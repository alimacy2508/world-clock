let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector("#time-1");

let londonDtElement = moment();

londonDateElement.innerHTML = londonDtElement.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonDtElement.format(
  "h:mm:ss [<small>]A[</small>]"
);
