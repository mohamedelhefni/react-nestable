"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _Nestable = _interopRequireDefault(require("../Nestable"));

require("../styles/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  position: "relative",
  padding: "10px 15px",
  fontSize: "20px",
  border: "1px solid #f9fafa",
  background: "#f9fafa",
  cursor: "pointer"
};
var handlerStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "10px",
  height: "100%",
  background: "steelblue",
  cursor: "pointer"
};
var items = [{
  id: 0,
  text: 'Andy'
}, {
  id: 1,
  text: 'Harry',
  children: [{
    id: 2,
    text: 'David'
  }]
}, {
  id: 3,
  text: 'Lisa',
  children: [{
    id: 4,
    text: 'Richard'
  }]
}];
var grocery = [{
  id: 0,
  text: 'Apples',
  type: 'fruits'
}, {
  id: 1,
  text: 'Fruit box',
  accepts: ['fruits'],
  children: [{
    id: 2,
    text: 'Bananas',
    type: 'fruits'
  }]
}, {
  id: 3,
  text: 'Box',
  accepts: ['fruits', 'sweets'],
  children: [{
    id: 4,
    text: 'Candy',
    type: 'sweets'
  }]
}];

var Example = /*#__PURE__*/function (_Component) {
  _inherits(Example, _Component);

  var _super = _createSuper(Example);

  function Example() {
    var _this;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      example: 0,
      defaultCollapsed: false
    });

    _defineProperty(_assertThisInitialized(_this), "collapse", function (collapseCase) {
      if (_this.refNestable) {
        switch (collapseCase) {
          case 0:
            _this.refNestable.collapse('NONE');

            break;

          case 1:
            _this.refNestable.collapse('ALL');

            break;

          case 2:
            _this.refNestable.collapse([1]);

            break;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isCollapsed", function () {
      var form = document.forms[0] || null;
      return form && form.elements["collapsed"].checked;
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", function (_ref) {
      var item = _ref.item,
          collapseIcon = _ref.collapseIcon,
          handler = _ref.handler;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles
      }, handler, collapseIcon, item.text);
    });

    _defineProperty(_assertThisInitialized(_this), "renderExampleOne", function () {
      var defaultCollapsed = _this.state.defaultCollapsed;

      var onDefaultCollapsed = function onDefaultCollapsed() {
        return _this.setState({
          defaultCollapsed: !defaultCollapsed
        });
      };

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Basic example VVVV"), /*#__PURE__*/_react["default"].createElement(_Nestable["default"], {
        onDragStart: function onDragStart(item) {
          console.log("Start Dragging ", item);
        },
        onDragEnd: function onDragEnd(data) {
          console.log("Ended Dragging ", data.dragItem, "of", data.items);
        },
        items: items,
        collapsed: defaultCollapsed,
        renderItem: _this.renderItem,
        ref: function ref(el) {
          return _this.refNestable = el;
        }
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.collapse(0);
        }
      }, "Expand all"), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.collapse(1);
        }
      }, "Collapse all"), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.collapse(2);
        }
      }, "Collapse Harry only"), /*#__PURE__*/_react["default"].createElement("form", {
        style: {
          display: "inline-block"
        }
      }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        name: "collapsed",
        onChange: onDefaultCollapsed
      }), "Collapsed by default")));
    });

    _defineProperty(_assertThisInitialized(_this), "renderExampleTwo", function () {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Example with handlers"), /*#__PURE__*/_react["default"].createElement(_Nestable["default"], {
        items: items,
        renderItem: _this.renderItem,
        handler: /*#__PURE__*/_react["default"].createElement("span", {
          style: handlerStyles
        })
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "confirmChange", function (_ref2) {
      var dragItem = _ref2.dragItem,
          destinationParent = _ref2.destinationParent;
      // move to root level
      if (!destinationParent) return true;
      return (destinationParent.accepts || []).indexOf(dragItem.type) > -1;
    });

    _defineProperty(_assertThisInitialized(_this), "renderExampleThree", function () {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Example with confirmChange"), /*#__PURE__*/_react["default"].createElement(_Nestable["default"], {
        items: grocery,
        renderItem: _this.renderItem,
        confirmChange: _this.confirmChange
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "getExamples", function () {
      return [{
        name: 'Basic example',
        renderer: _this.renderExampleOne
      }, {
        name: 'Example with handlers',
        renderer: _this.renderExampleTwo
      }, {
        name: 'Example with confirmChange',
        renderer: _this.renderExampleThree
      }];
    });

    return _this;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var example = this.state.example;
      var examples = this.getExamples();

      var onExampleChange = function onExampleChange(e) {
        return _this2.setState({
          example: +e.target.value
        });
      };

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("select", {
        onChange: onExampleChange,
        value: example
      }, examples.map(function (_ref3, i) {
        var name = _ref3.name;
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: i,
          value: i
        }, name);
      })), /*#__PURE__*/_react["default"].createElement("hr", null), examples[example].renderer());
    }
  }]);

  return Example;
}(_react.Component);

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(Example, null), document.getElementById('app'));