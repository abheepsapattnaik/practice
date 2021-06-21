"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _String = require("./String");

var _String2 = _interopRequireDefault(_String);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayClass = function () {
    function ArrayClass() {
        _classCallCheck(this, ArrayClass);
    }

    _createClass(ArrayClass, null, [{
        key: "checkArray",
        value: function checkArray(Arr) {
            Arr.map(function (each) {
                if (typeof each === "string" && _String2.default.checkString(each)) {
                    return true;
                }
            });
        }
    }]);

    return ArrayClass;
}();

exports.default = ArrayClass;