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

var climatePageModule = (function () {
  "use strict";

  let outputValue = true;

  /**
   * Initialize Method
   */
  function onInit() {
    serviceModule.addEmulatorScenarioBrowserOnly(
      "./components/climate-page/climate-page-emulator.json"
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
  const climatePagePage = document.querySelector("#climate-page-page");
  if (climatePagePage !== null) {
    climatePagePage.addEventListener("afterLoad", onInit);
  }

  // Increment/Decrement temperature

  var tempMax = 31;
  var tempMin = 18;
  // subscribing state to <h> element (AC tempreture as 'temp',,room tempreture as 'roomTempIndex',, room humidity as 'humidityIndex')
  // (function (CrComLib) {
  //   var temp = document.getElementById("temp-index");
  //   var roomTempIndex = document.getElementById("room-temp-index");
  //   var humidityIndex = document.getElementById("humidity-index");

  //   var tempIsSet = CrComLib.subscribeState(
  //     "n",
  //     "Rooms.Climate.TempIsSet",
  //     tempSub
  //   );
  //   var roomTemp = CrComLib.subscribeState(
  //     "n",
  //     "Rooms.Climate.RoomTemp",
  //     roomTempSub
  //   );
  //   var roomHumidity = CrComLib.subscribeState(
  //     "n",
  //     "Rooms.Climate.RoomHumidity",
  //     roomHumiditySub
  //   );

  //   function tempSub(v) {
  //     if (v < tempMax && v > tempMin) {
  //       temp.textContent = v;
  //     } else if (v === tempMax) {
  //       temp.textContent = tempMax;
  //     } else if (v === tempMin) {
  //       temp.textContent = tempMin;
  //     }
  //   }
  //   function roomTempSub(v) {
  //     roomTempIndex.textContent = v;
  //   }
  //   function roomHumiditySub(v) {
  //     humidityIndex.textContent = v;
  //   }
  // })(CrComLib);

  //   enabling/disabling plus and minus buttons when they reach Max or Min value
  var temp = document.getElementById("temp-index");

  let plusbtn = document.getElementById("plus-btn");
  let minusbtn = document.getElementById("minus-btn");

  // plusbtn.addEventListener("click", plusDisabled);
  // minusbtn.addEventListener("click", minusDisabled);

  function plusDisabled() {
    minusbtn.removeAttribute("disabled");
    if (temp.innerHTML == tempMax - 1) {
      plusbtn.setAttribute("disabled", "true");
    }
  }
  function minusDisabled() {
    plusbtn.removeAttribute("disabled");
    if (temp.innerHTML == tempMin + 1) {
      minusbtn.setAttribute("disabled", "true");
    }
  }

  // an experiment to turn number to string (not working)

  var listSize = document
    .getElementById("climate-horizontal-list")
    .getAttribute("receivestatesize");

  function TextContentAttrUpdate(idx) {
    // let tempIndexTextContentAttr = document
    //   .getElementById("temp-index-" + idx)
    //   .getAttribute("data-ch5-textcontent");
    // tempIndexTextContentAttr.toString();
    console.log("TextContentAttrUpdate is being  called");
    let tempIndexElement = document.getElementsByClassName("temp-index");
    let elementAttr = tempIndexElement[idx].getAttribute(
      "data-ch5-textcontent"
    );
    tempIndexElement[idx].setAttribute(
      "data-ch5-textcontent",
      elementAttr.toString()
    );
    return;
  }

  function TextContentConvert() {
    let elementAttr = ele.getAttribute("data-ch5-textcontent");
    ele.setAttribute("data-ch5-textcontent", elementAttr.toString());
  }

  // var plusButton = document.getElementById("plus-btn-" + idx);
  // var minusButton = document.getElementById("minus-btn-" + idx);

  // plusButton.addEventListener("click", BtnClickAttrUpdate);
  // minusButton.addEventListener("click", BtnClickAttrUpdate);

  function BtnClickAttrUpdate() {
    console.log("list size is:" + listSize);
    for (let idx = 0; idx < listSize; idx++) {
      TextContentAttrUpdate(idx);
    }
  }

  //

  /**
   * All public method and properties are exported here
   */
  return {
    getOutput: getOutput,
    BtnClickAttrUpdate: BtnClickAttrUpdate,
    TextContentAttrUpdate: TextContentAttrUpdate,
    TextContentConvert: TextContentConvert,
  };
})();
