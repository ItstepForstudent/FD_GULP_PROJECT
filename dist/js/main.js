"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vasia =
/*#__PURE__*/
function () {
  function Vasia(name) {
    _classCallCheck(this, Vasia);

    this.name = name;
  }

  _createClass(Vasia, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return Vasia;
}();

var v = new Vasia("gsdsfsda");
var x = "fdgsdf";