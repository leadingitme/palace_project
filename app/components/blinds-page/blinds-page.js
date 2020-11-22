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

  // !!!! if this method crashes check in chtome developer if currrent "cr-id-.." for shades and blackout is correct

  // var shadesListLengthHoriz = document.getElementById("cr-id-22").childNodes
  //   .length;
  // var blackoutListLengthHoriz = document.getElementById("cr-id-25").childNodes
  //   .length;

  function hideTriggerview() {
    let shadesBlackoutButtons = document.getElementById("blackout-shades-btn");
    let shadesBlackoutTriggerview = document.querySelector(
      ".shades-blackout-triggerview"
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
  // setTimeout(function () {
  //   hideTriggerview();
  // }, 15000);
  

  
  
  

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
  };
})();
