"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectClass = function () {
    function ObjectClass() {
        _classCallCheck(this, ObjectClass);
    }

    _createClass(ObjectClass, null, [{
        key: "checkObject",
        value: function checkObject(Obj) {
            Object.values(Obj).forEach(function (each) {
                return console.log(each);
            });
        }
    }]);

    return ObjectClass;
}();

exports.default = ObjectClass;