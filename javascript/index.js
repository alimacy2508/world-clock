function updateTime() {
  // London

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector("#time-1");

  let londonDtElement = moment.tz("Europe/London");

  londonDateElement.innerHTML = londonDtElement.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonDtElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //   San-Juan

  let sanJuanElement = document.querySelector("#san-juan");
  let sanJuanDateElement = sanJuanElement.querySelector(".date");
  let sanJuanTimeElement = sanJuanElement.querySelector("#time-2");

  let sanJuanDtElement = moment.tz("America/Puerto_Rico");

  sanJuanDateElement.innerHTML = sanJuanDtElement.format("MMMM Do YYYY");
  sanJuanTimeElement.innerHTML = sanJuanDtElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
