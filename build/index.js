"use strict";

var _Object = require("./Object");

var _Object2 = _interopRequireDefault(_Object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
    key1: {
        a: "",
        b: ["", "", ""],
        c: {
            d: {
                e: ""
            }
        }
    },
    key2: [""]
};

_Object2.default.checkObject(obj);