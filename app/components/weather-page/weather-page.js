var weatherPageModule = (function () {
  "use strict";

  let outputValue = true;

  /**
   * Initialize Method
   */
  function onInit() {
    serviceModule.addEmulatorScenarioBrowserOnly(
      "./components/weather-page/weather-page-emulator.json"
    );
  }

  /**
   * Declare your Public Methods here
   */
  function getOutput() {
    return outputValue;
  }

  // Methods for switching between weather-station-component and historical-average-component
  // inside the weather-page

  let weatherStationComponent = document.querySelector(
    ".weather-station-component"
  );
  let historicalAverageComponent = document.querySelector(
    ".historical-average-component"
  );
  let weatherStationButton = document.getElementById("weatherStationBtn");
  let historicalAverageButton = document.getElementById("historicalAverageBtn");

  weatherStationButton.addEventListener("click", function () {
    if (
      historicalAverageComponent.classList &&
      weatherStationButton.classList
    ) {
      pageSwitch();
      //   historicalAverageComponent.classList.remove(".transform-down");
      //   historicalAverageComponent.classList.add(".transform-up");
    }
  });

  historicalAverageButton.addEventListener("click", function () {
    if (
      historicalAverageComponent.classList &&
      weatherStationButton.classList
    ) {
      pageSwitch();
      //   historicalAverageComponent.classList.remove(".transform-up");
      //   historicalAverageComponent.classList.add(".transform-down");
    }
  });

  function hide() {}
  function show() {}
  function pageSwitch() {
    historicalAverageComponent.classList.toggle("d-none");
    weatherStationComponent.classList.toggle("d-none");
  }
  function triggerHistoricAverage() {}
  function triggerWeatherStation() {}

  /**
   * All public or private methods which need to call onInit
   */
  const weatherPagePage = document.querySelector("#weather-page-page");
  if (weatherPagePage !== null) {
    weatherPagePage.addEventListener("afterLoad", onInit);
  }

  /**
   * All public method and properties are exported here
   */
  return {
    getOutput: getOutput,
  };
})();
