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

var blindsButtonsModule = (function () {
    'use strict';

    let outputValue = true;

    /**
     * Initialize Method
     */
    function onInit() {
       serviceModule.addEmulatorScenarioBrowserOnly("./components/blinds-buttons/blinds-buttons-emulator.json");
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
    const blindsButtonsPage = document.querySelector('#blinds-buttons-page');
    if (blindsButtonsPage !== null) {
        blindsButtonsPage.addEventListener('afterLoad', onInit);
    }

    /**
     * All public method and properties are exported here
     */
    return {
        getOutput: getOutput
    };

}());