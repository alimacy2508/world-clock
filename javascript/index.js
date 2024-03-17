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

  // Athens
  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");

    let athensDtElement = moment.tz("Europe/Athens");

    athensDateElement.innerHTML = athensDtElement.format("MMMM Do YYYY");
    athensTimeElement.innerHTML = athensDtElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");

    let tokyoDtElement = moment.tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoDtElement.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoDtElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let citiesTimezone = event.target.value;

  if (citiesTimezone === "current") {
    citiesTimezone = moment.tz.guess();
  }
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
            "h:mm:ss "
          )} <small>${cityTime.format("A")}</small> </div>
        </div>
        <button><a href = "index.html"><span class="material-symbols-outlined">
replay
</span></a></button>`;
}

let citiesSelectElement = document.querySelector("#world-clock-dropdown");
citiesSelectElement.addEventListener("change", updateCity);
