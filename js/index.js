"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalculatorPanel = function (_React$Component) {
  _inherits(CalculatorPanel, _React$Component);

  function CalculatorPanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CalculatorPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CalculatorPanel.__proto__ || Object.getPrototypeOf(CalculatorPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      buttons: [{
        id: "zero",
        letter: "0",
        value: 0
      }, {
        id: "one",
        letter: "1",
        value: 1
      }, {
        id: "two",
        letter: "2",
        value: 2
      }, {
        id: "three",
        letter: "3",
        value: 3
      }, {
        id: "four",
        letter: "4",
        value: 4
      }, {
        id: "five",
        letter: "5",
        value: 5
      }, {
        id: "six",
        letter: "6",
        value: 6
      }, {
        id: "seven",
        letter: "7",
        value: 7
      }, {
        id: "eight",
        letter: "8",
        value: 8
      }, {
        id: "nine",
        letter: "9",
        value: 9
      }, {
        id: "add",
        letter: "+"
      }, {
        id: "subtract",
        letter: "-"
      }, {
        id: "multiply",
        letter: "X"
      }, {
        id: "divide",
        letter: "/"
      }, {
        id: "clear",
        letter: "AC"
      }, {
        id: "equals",
        letter: "="
      }, {
        id: "decimal",
        letter: "."
      }],
      totalSum: 0,
      rawSum: "",
      previousVal: ""
    }, _this.calculate = function (phrase) {
      var bugFix = phrase.replace("=", "");
      var fixedStr = bugFix.replace("X", "*");
      var matches = fixedStr.match(/[+-\/\*]{2,}/);
      var newStr = "";
      if (matches) {
        for (var i = 0; i < matches.length; i++) {
          if (fixedStr.includes(matches[i])) {
            newStr = fixedStr.replace(matches[i], matches[i][matches[i].length - 1]);
          }
        }
      } else {
        newStr = fixedStr;
      }
      var ans = eval(newStr);
      _this.setState({
        totalSum: ans,
        previousVal: "" + ans
      });
    }, _this.processClick = function (e) {
      var id = e.target.id;
      var val = e.target.innerText;
      if (val === "=") {
        var text = _this.state.previousVal;
        return _this.calculate(text);
      }
      var sum1 = _this.state.previousVal;
      var sum = sum1 + ("" + val);
      val = val.replace(/(\r\n|\n|\r)/gm, "");
      sum = sum.replace(/(\r\n|\n|\r)/gm, "");
      if (sum.indexOf("0") === 0 && val == 0) {
        return;
      }
      if (sum.match(/\.[0-9]+\.|\.{2,}/) && val == ".") {
        return;
      }
      _this.setState({
        totalSum: sum,
        rawSum: sum,
        previousVal: sum
      });
      e.preventDefault;
    }, _this.clear = function (e) {
      _this.setState({
        totalSum: "0",
        rawSum: "",
        previousVal: ""
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CalculatorPanel, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container text-center" },
        React.createElement(
          "h1",
          { className: "display-3 m-2" },
          "React Calculator"
        ),
        React.createElement(
          "div",
          { id: "calculator", className: "container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(Display, { rawSum: this.state.rawSum, totalSum: this.state.totalSum })
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-6 p-0 border" },
              React.createElement(Button, { processClick: this.clear, id: this.state.buttons[14].id, letter: this.state.buttons[14].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[13].id, letter: this.state.buttons[13].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[12].id, letter: this.state.buttons[12].letter })
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[7].id, letter: this.state.buttons[7].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[8].id, letter: this.state.buttons[8].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[9].id, letter: this.state.buttons[9].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[11].id, letter: this.state.buttons[11].letter })
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[4].id, letter: this.state.buttons[4].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[5].id, letter: this.state.buttons[5].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[6].id, letter: this.state.buttons[6].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[10].id, letter: this.state.buttons[10].letter })
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[1].id, letter: this.state.buttons[1].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[2].id, letter: this.state.buttons[2].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[3].id, letter: this.state.buttons[3].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border-bottom border-left border-right" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[15].id, letter: this.state.buttons[15].letter })
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-6 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[0].id, letter: this.state.buttons[0].letter })
            ),
            React.createElement(
              "div",
              { className: "col-md-3 p-0 border" },
              React.createElement(Button, { processClick: this.processClick, id: this.state.buttons[16].id, letter: this.state.buttons[16].letter })
            ),
            React.createElement("div", { className: "col-md-3 p-0 border-bottom border-left border-right bg-light" })
          )
        ),
        React.createElement(
          "p",
          { className: "lead mt-5" },
          "A project by: Kevin Lin"
        ),
        React.createElement(
          "small",
          null,
          "Coded in the Javascript Framework React JS"
        )
      );
    }
  }]);

  return CalculatorPanel;
}(React.Component);

var Display = function (_CalculatorPanel) {
  _inherits(Display, _CalculatorPanel);

  function Display() {
    _classCallCheck(this, Display);

    return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
  }

  _createClass(Display, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container-fluid bg-dark text-white text-right rounded-top border" },
        React.createElement(
          "div",
          { className: "border-bottom m-2" },
          React.createElement(
            "p",
            { className: "lead" },
            this.props.rawSum
          )
        ),
        React.createElement(
          "div",
          { id: "display", className: "lead" },
          this.props.totalSum
        )
      );
    }
  }]);

  return Display;
}(CalculatorPanel);

var Button = function (_CalculatorPanel2) {
  _inherits(Button, _CalculatorPanel2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.props.processClick, id: this.props.id, className: "w-100 rounded-0 btn-secondary lead my-auto py-auto" },
        this.props.letter
      );
    }
  }]);

  return Button;
}(CalculatorPanel);

ReactDOM.render(React.createElement(CalculatorPanel, null), document.getElementById("body"));
