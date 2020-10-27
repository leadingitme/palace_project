/*jslint es6 */
/*global document, window, CrComLib, serviceModule, setTimeout, event, appModule */
var lightingModule = (function () {
  "use strict";

  // Method for toggle area dropdown menu 

  let dropdown = document.getElementById("lighting-area-dropdown");

  function openAreaDropdown() {
    dropdown.classList.toggle("show");
    event.stopPropagation();
  }

  function closeAreaDropdown() {
    setTimeout(() => {
      dropdown.classList.remove("show");
    }, 200);
    
  }

  document.body.addEventListener("click", function () {
    if (!!dropdown && dropdown.classList) {
      closeAreaDropdown() ;
    }
  });



  /**
   * This method is for toggle sidebar in smaller divice
   */
  let lightingSidebar = document.getElementById("lightingSidebar");


  function lightingSidebarToggle() {
    lightingSidebar.classList.toggle("open");
    if (lightingSidebar.classList.contains("open")) {
      setTimeout(() => {
        closePresetsSidebar();
      }, 20000);
    }
    event.stopPropagation();
  }
  function closePresetsSidebar() {
    lightingSidebar.classList.remove("open");
  }

  /**
   * This method will invoke on body click
   */
  document.body.addEventListener("click", function () {
    if (!!lightingSidebar && lightingSidebar.classList) {
      lightingSidebar.classList.remove("open");
    }
  });

  /**
   * All method is concating in one method
   */
  function lightingInit() {
    appModule.checkElement(".lighting-button").then(function (isLoaded) {
      if (isLoaded) {
        appModule.addClassOnClick(
          ".lighting-button:not([disabled])",
          "pulse-once-lighting"
        );
      }
    });
  }

  /**
   * All public or private methods which need to call on init
   */
  let lightingPage = document.querySelector(".lighting-page");
  lightingPage.addEventListener("afterLoad", lightingInit);

  /**
   * All public method and properties exporting here
   */
  return {
    lightingSidebarToggle: lightingSidebarToggle,
    openAreaDropdown:openAreaDropdown,
    closeAreaDropdown:closeAreaDropdown
  };
})();
