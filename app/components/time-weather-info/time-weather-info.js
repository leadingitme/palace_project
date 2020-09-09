/**
 * Copyright (C) 2020 to the present, Crestron Electronics, Inc.
 * All rights reserved.
 * No part of this software may be reproduced in any form, machine
 * or natural, without the express written consent of Crestron Electronics.
 * Use of this source code is subject to the terms of the Crestron Software License Agreement
 * under which you licensed this source code.
 *
 * This code was automatically generated by Crestron's code generation tool.
 */
/*jslint es6 */
/*global serviceModule */

var timeWeatherInfoModule = (function () {
  "use strict";

  let outputValue = true;

  /**
   * Initialize Method
   */
  function onInit() {
    serviceModule.addEmulatorScenarioBrowserOnly(
      "./components/time-weather-info/time-weather-info-emulator.json"
    );
  }

  /**
   * Declare your Public Methods here
   */
  function getOutput() {
    return outputValue;
  }

  // Display Clock in the navbar
  function newClock() {
    var clock = new Date();
    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hour = clock.getHours();
    if (hour < 10) {
      hour = "0" + hour;
    }
    let minutes = clock.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = clock.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let day = clock.getDay();
    let date = clock.getDate();
    let month = clock.getMonth();

    let print_clock =
      hour +
      " : " +
      minutes +
      " " +
      " " +
      days[day] +
      " " +
      date +
      " " +
      months[month];

    document.getElementById("time").innerHTML = print_clock;
    // setTimeout(newClock, 1000);
  }
  setTimeout(newClock, 1000);

  var toggleButton = document.getElementById("time-weather-toggle-btn");
  var toggleIcon = document.getElementById("time-weather-toggle-icon");

  var timeContainer = document.getElementById("time-container");
  var weatherContainer = document.getElementById("weather-container");

  toggleButton.addEventListener("click", timeWeatherToggle);

  function timeWeatherToggle() {
    let sunIconCls = "fa-cloud-sun";
    let clockIconCls = "fa-clock";

    timeContainer.classList.toggle("hide");
    weatherContainer.classList.toggle("hide");

    if (toggleIcon.classList.contains(sunIconCls)) {
      toggleIcon.classList.remove(sunIconCls);
      toggleIcon.classList.remove("fas");
      toggleIcon.classList.add(clockIconCls);
      toggleIcon.classList.add("far");
    } else {
      toggleIcon.classList.remove(clockIconCls);
      toggleIcon.classList.remove("far");
      toggleIcon.classList.add(sunIconCls);
      toggleIcon.classList.add("fas");
    }
  }

  /**
   * All public or private methods which need to call onInit
   */
  const timeWeatherInfoPage = document.querySelector("#time-weather-info-page");
  if (timeWeatherInfoPage !== null) {
    timeWeatherInfoPage.addEventListener("afterLoad", onInit);
  }

  /**
   * All public method and properties are exported here
   */
  return {
    getOutput: getOutput,
  };
})();