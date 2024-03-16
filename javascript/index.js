function updateTime() {
  // London

  let londonElement = document.querySelector("#london");

  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    let londonDtElement = moment.tz("Europe/London");

    londonDateElement.innerHTML = londonDtElement.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonDtElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //   San-Juan

  let sanJuanElement = document.querySelector("#san-juan");

  if (sanJuanElement) {
    let sanJuanDateElement = sanJuanElement.querySelector(".date");
    let sanJuanTimeElement = sanJuanElement.querySelector(".time");

    let sanJuanDtElement = moment.tz("America/Puerto_Rico");

    sanJuanDateElement.innerHTML = sanJuanDtElement.format("MMMM Do YYYY");
    sanJuanTimeElement.innerHTML = sanJuanDtElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let citiesTimezone = event.target.value;
  let cityTime = moment().tz(citiesTimezone);
  let cityName = citiesTimezone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
   <div class="city">
  <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small> </div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#world-clock-dropdown");
citiesSelectElement.addEventListener("change", updateCity);
