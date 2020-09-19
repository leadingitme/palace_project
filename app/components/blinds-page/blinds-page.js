var blindsPageModule = (function () {
  "use strict";

  let outputValue = true;

  /**
   * Initialize Method
   */
  function onInit() {
    serviceModule.addEmulatorScenarioBrowserOnly(
      "./components/blinds-page/blinds-page-emulator.json"
    );
  }

  /**
   * Declare your Public Methods here
   */
  function getOutput() {
    return outputValue;
  }

  // Method to hide blinds triggerview when list of windows has less then 2 windows
  var shadesListLengthHoriz = document.getElementById("cr-id-26").childNodes
    .length;
  var blackoutListLengthHoriz = document.getElementById("cr-id-30").childNodes
    .length;

  function hideTriggerview() {
    console.log("hide triggerview function went through");
    let shadesBlackoutButtons = document.getElementById("blackout-shades-btn");
    let shadesBlackoutTriggerview = document.getElementById(
      "shades-blackout-triggerview"
    );
    let windowsContainer = document.getElementById("windows-container");
    if (shadesListLengthHoriz < 2 && blackoutListLengthHoriz < 2) {
      windowsContainer.classList.remove("d-none");
      shadesBlackoutButtons.classList.add("d-none");
      shadesBlackoutTriggerview.classList.add("d-none");
    } else {
      shadesBlackoutButtons.classList.remove("d-none");
      shadesBlackoutTriggerview.classList.remove("d-none");
      windowsContainer.classList.add("d-none");
    }
  }
  hideTriggerview();

  // (HORIZONTAL SHADES AND BLACKOUT) Methods for opening, closing and stoping blinds

  var rightShadesHoriz = document.getElementsByClassName(
    "shade-horizontal-right"
  );
  var leftShadesHoriz = document.getElementsByClassName(
    "shade-horizontal-left"
  );
  var rightBlackoutHoriz = document.getElementsByClassName(
    "blackout-horizontal-right"
  );
  var leftBlackoutHoriz = document.getElementsByClassName(
    "blackout-horizontal-left"
  );
  // var buttonsContainerHoriz = document.getElementByClassName(
  //   "open-close-btn-horizontal".
  // );

  for (let idx = 0; idx < shadesListLengthHoriz; idx++) {
    var openHorizShadesButtons = document
      .getElementById("open-shades-horizontal-" + idx)
      .getElementsByClassName("cb-btn");
  }

  // var openHorizShadesButtons = document
  //   .getElementById("blinds-horiz-list")
  //   .getElementsByClassName("cb-btn");

  //  for (let idx = 0; idx < shadesListLengthHoriz; idx++) {
  //   openHorizShadesButtons.classlist.add("cbBtn-open-" + idx)
  //  }

  // var openHorizShadesButtons = document.getElementsByClassName(
  //   "open-horiz-shades-button"
  // );
  // var closeHorizShadesButtons = document.getElementsByClassName(
  //   "close-horiz-shades-button"
  // );
  // var openHorizBlackoutButtons = document.getElementsByClassName(
  //   "open-horiz-blackout-button"
  // );
  // var closeHorizBlackoutButtons = document.getElementsByClassName(
  //   "close-horiz-blackout-button"
  // );

  // for (var idx = 0; idx < shadesListLengthHoriz; idx++) {
  //   openHorizShadesButtons[idx].addEventListener("click", function (e) {
  //     if (openHorizShadesButtons[idx] == e.target) {
  //       console.log(e.target);
  //       console.log("button was clicked");
  //       openHorizonShades(idx);
  //     }
  //   });
  // }

  // function openShades() {
  //   console.log(openHorizShadesButtons.length);
  //   for (let idx = 0; idx < shadesListLengthHoriz; idx++) {
  //     console.log(event.target);
  //     openHorizShadesButtons[idx].addEventListener(
  //       "click",
  //       openHorizonShades(idx)
  //     );
  //   }
  //   // if(e.target && e.target.nodeName == "LI")
  // }
  // function closeShades() {
  //   for (let idx = 0; idx < shadesListLengthHoriz; idx++) {
  //     closeHorizShadesButtons[idx].addEventListener(
  //       "click",
  //       closeHorizonShades(idx)
  //     );
  //   }
  // }
  function openBlackout() {
    for (let idx = 0; idx < blackoutListLengthHoriz; idx++) {
      openHorizBlackoutButtons[idx].addEventListener(
        "click",
        openHorizonBlackout(idx)
      );
    }
  }
  function closeBlackout() {
    for (let idx = 0; idx < blackoutListLengthHoriz; idx++) {
      closeHorizBlackoutButtons[idx].addEventListener(
        "click",
        closeHorizonBlackout(idx)
      );
    }
  }
  // if (openHorizShadesButtons[idx] == event.target)
  function openHorizonShades(idx) {
    rightShadesHoriz[idx].style.transform = "translateX(100%)";
    leftShadesHoriz[idx].style.transform = "translateX(-100%)";
  }
  function closeHorizonShades(idx) {
    rightShadesHoriz[idx].style.transform = "translateX(0)";
    leftShadesHoriz[idx].style.transform = "translateX(0)";
  }
  function openHorizonBlackout(idx) {
    rightBlackoutHoriz[idx].style.transform = "translateX(100%)";
    leftBlackoutHoriz[idx].style.transform = "translateX(-100%)";
  }
  function closeHorizonBlackout(idx) {
    rightBlackoutHoriz[idx].style.transform = "translateX(0)";
    leftBlackoutHoriz[idx].style.transform = "translateX(0)";
  }

  /**
   * All public or private methods which need to call onInit
   */
  const blindsPagePage = document.querySelector("#blinds-page");
  if (blindsPagePage !== null) {
    blindsPagePage.addEventListener("afterLoad", onInit);
  }

  /**
   * All public method and properties are exported here
   */
  return {
    getOutput: getOutput,
    // openShades: openShades,
    // closeShades: closeShades,
    // openBlackout: openBlackout,
    // closeBlackout: closeBlackout,
  };
})();
