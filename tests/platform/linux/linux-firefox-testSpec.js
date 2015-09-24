/*
GPII Integration and Acceptance Testing

Copyright 2014 Emergya

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

"use strict";
var fluid = require("universal"),
    gpii = fluid.registerNamespace("gpii");

gpii.loadTestingSupport();

fluid.registerNamespace("gpii.tests.linux.firefox");



gpii.tests.linux.firefox = [
    {
        name: "Acceptance test for background and foreground color, line height and text size change in firefox",
        userToken: "firefox_yellow_over_black",
        settingsHandlers: {
            "gpii.settingsHandlers.webSockets": {
                "data": [
                    {
                        "settings": {
							"screenReaderTTSEnabled": false,
                            "highContrastEnabled": true,
                            "invertColours": false,
                            "magnifierEnabled": false,
                            "magnification": 1,
                            "fontSize": "L",
                            "simplifier": false,
						    "lineheight": 2.5,
						    "backgroundColour": "#000000",
                            "foregroundColour": "#FFFF00"
                        },
                        "options": {
                            "path": "com.ilunion.cloud4firefox"
                        }
                    }
                ]
            }
        },
        processes: []
    },
	{
        name: "Acceptance test for magnification, cursor size and font face changes in firefox",
        userToken: "firefox_magnification_fontface",
        settingsHandlers: {
            "gpii.settingsHandlers.webSockets": {
                "data": [
                    {
                        "settings": {
							"screenReaderTTSEnabled": false,
                            "highContrastEnabled": false,
                            "invertColours": false,
                            "magnifierEnabled": true,
                            "magnification": 2.5,
                            "fontSize": "M",
                            "simplifier": false,
						    "lineheight": 1.4,
						    "cursorSize": "large",
						    "fontFace": "Courier"
                        },
                        "options": {
                            "path": "com.ilunion.cloud4firefox"
                        }
                    }
                ]
            }
        },
        processes: []
    }
];

module.exports = gpii.test.bootstrap({
    testDefs:  "gpii.tests.linux.firefox",
    configName: "linux-firefox-config",
    configPath: "configs"
}, ["gpii.test.integration.testCaseHolder.linux"],
    module, require, __dirname);
