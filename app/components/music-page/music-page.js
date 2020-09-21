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

var musicPageModule = (function () {
  "use strict";

  let outputValue = true;

  /**
   * Initialize Method
   */
  function onInit() {
    serviceModule.addEmulatorScenarioBrowserOnly(
      "./components/music-page/music-page-emulator.json"
    );
  }

  /**
   * Declare your Public Methods here
   */
  function getOutput() {
    return outputValue;
  }

  /**
   * All public or private methods which need to call onInit
   */
  const musicPagePage = document.querySelector("#music-page-page");
  if (musicPagePage !== null) {
    musicPagePage.addEventListener("afterLoad", onInit);
  }

  function dropDownStopPropagation() {
    event.stopPropagation();
  }

  let songListSidebar = document.getElementById("songListSidebar");

  function songListSidebarToggle() {
    songListSidebar.classList.toggle("openSongList");
    console.log("song list clicked");

    event.stopPropagation();
  }
  let dropdown = document.getElementById("music-source-dropdown");

  function openMusicSourceDropdown() {
    // dropdown.classList.add("animate__fadeIn");
    dropdown.classList.toggle("show");

    // setTimeout(function () {
    //   dropdown.classList.remove("animate__fadeIn");
    // }, 500);
  }

  // function addClosingAnimation() {
  //   let dropdown = document.getElementById("music-source-dropdown");
  //   dropdown.classList.add("animate__fadeOut");
  // }
  // function removeClosingAnimation() {
  //   let dropdown = document.getElementById("music-source-dropdown");
  //   dropdown.classList.remove("animate__fadeOut");
  // }

  function closeMusicSourceDropdown() {
    setTimeout(function () {
      dropdown.classList.remove("show");
    }, 500);

    // let dropdown = document.getElementById("music-source-dropdown");
    // setTimeout(addClosingAnimation, 100);
    // setTimeout(removeClosingAnimation, 1000);
    // setTimeout(function () {
    //   dropdown.classList.remove("show");
    // }, 1000);
  }
  // document.body.addEventListener("click", function () {
  //   if (!!dropdown) {
  //     dropdown.classList.remove("show");
  //   }
  // });

  /**
   * All public method and properties are exported here
   */
  return {
    getOutput: getOutput,
    closeMusicSourceDropdown: closeMusicSourceDropdown,
    openMusicSourceDropdown: openMusicSourceDropdown,
    dropDownStopPropagation: dropDownStopPropagation,
    songListSidebarToggle: songListSidebarToggle,
  };
})();
