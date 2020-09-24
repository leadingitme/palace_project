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

  // number of sources
  const SOURCE_COUNT = 2;
  let musicPlayerSnippet = document.querySelector(".music-player-templ");
  let radioPlayerSnippet = document.querySelector(".radio-player-templ");

  // function showPlayerSnippet(idx) {
  //   let sourceBtnBtn = document.querySelector(".music-source-btn-" + idx);
  //   let sourceBtnBtn = document.querySelectorAll(".music-source-btn-" + idx);

  //   // console.log("sourceBtn:" + sourceBtnBtn);
  //   // console.log("idx=" + idx);

  //   if (sourceBtnBtn) {
  //     sourceBtnBtn.addEventListener("click", function () {
  //       console.log("source btn was clicked");

  //       if (idx == 0) {
  //         musicPlayerSnippet.classList.remove("d-none");
  //         radioPlayerSnippet.classList.add("d-none");
  //         closeMusicSourceDropdown();
  //       } else {
  //         radioPlayerSnippet.classList.remove("d-none");
  //         musicPlayerSnippet.classList.add("d-none");
  //         closeMusicSourceDropdown();
  //       }
  //     });
  //   }
  // }

  // for (let idx = 0; idx < SOURCE_COUNT; idx++) {
  //   showPlayerSnippet(idx);
  // }

  function showPlayerSnippet(idx) {
    let sourceBtnBtn = document.querySelector(".music-source-btn-" + idx);
    console.log("sourceBtnArray:" + sourceBtnBtn);

    {
      sourceBtnBtn.addEventListener("click", function () {
        console.log("source btn was clicked");
        if (idx == 0) {
          musicPlayerSnippet.classList.remove("d-none");
          radioPlayerSnippet.classList.add("d-none");
          setTimeout(() => {
            closeMusicSourceDropdown();
          }, 150);
        } else {
          radioPlayerSnippet.classList.remove("d-none");
          musicPlayerSnippet.classList.add("d-none");
          setTimeout(() => {
            closeMusicSourceDropdown();
          }, 150);
        }
      });
    }
  }

  setTimeout(function () {
    for (let idx = 0; idx < SOURCE_COUNT; idx++) {
      showPlayerSnippet(idx);
    }
  }, 5000);

  //   if (sourceBtnBtn) {
  //     sourceBtnBtn[idx].addEventListener("click", function () {
  //       console.log("source btn was clicked");

  //       if (idx == 0) {
  //         musicPlayerSnippet.classList.remove("d-none");
  //         radioPlayerSnippet.classList.add("d-none");
  //         closeMusicSourceDropdown();
  //       } else {
  //         radioPlayerSnippet.classList.remove("d-none");
  //         musicPlayerSnippet.classList.add("d-none");
  //         closeMusicSourceDropdown();
  //       }
  //     });
  //   }
  // }

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
    dropdown.classList.toggle("show");
    event.stopPropagation();
  }

  function closeMusicSourceDropdown() {
    dropdown.classList.remove("show");
  }

  document.body.addEventListener("click", function () {
    if (!!dropdown && dropdown.classList) {
      closeMusicSourceDropdown();
    }
  });

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
