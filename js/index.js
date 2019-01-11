'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Panel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      keys: [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
      }, {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Chord-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
      }, {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Chord-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
      }, {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Shaker',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
      }, {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
      }, {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
      }, {
        keyCode: 90,
        keyTrigger: 'Z',
        id: 'Punchy-Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
      }, {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Side-Stick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
      }, {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
      }],
      currentName: ""
    }, _this.processClick = function (e) {
      var current = e.target.firstElementChild.id;
      document.getElementById(current).play();
      _this.setState({
        currentName: current
      });
      e.preventDefault();
    }, _this.handleKeyPress = function (e) {
      var key = e.keyCode;
      _this.state.keys.map(function (keyP, index) {
        if (keyP.keyCode === key) {
          document.getElementById(index).click();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Panel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('keyup', this.handleKeyPress);
      document.body.addEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { id: 'drum-machine', style: { "border": "solid 2px grey" }, className: 'container bg-light m-5 p-2 mx-auto' },
        React.createElement(
          'h1',
          { className: 'display-4 text-center d-block mb-3' },
          'Sound Board'
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'div',
              { className: 'row m-2' },
              this.state.keys.map(function (button, index) {
                return React.createElement(
                  'div',
                  { className: 'col-md-4 d-inline p-1' },
                  React.createElement(Button, { processClick: _this2.processClick, namel: _this2.state.keys[index].keyTrigger, audio: _this2.state.keys[index].url, audioId: _this2.state.keys[index].keyTrigger, id: index })
                );
              })
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(TextDisplay, { currentName: this.state.currentName })
          )
        )
      );
    }
  }]);

  return Panel;
}(React.Component);

var Button = function (_Panel) {
  _inherits(Button, _Panel);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { id: this.props.id, onClick: this.props.processClick, className: 'btn-block rounded btn btn-primary drum-pad' },
          React.createElement('audio', { className: 'clip', id: this.props.audioId, src: this.props.audio, type: 'audio/mpeg' }),
          this.props.namel
        )
      );
    }
  }]);

  return Button;
}(Panel);

var TextDisplay = function (_Panel2) {
  _inherits(TextDisplay, _Panel2);

  function TextDisplay() {
    _classCallCheck(this, TextDisplay);

    return _possibleConstructorReturn(this, (TextDisplay.__proto__ || Object.getPrototypeOf(TextDisplay)).apply(this, arguments));
  }

  _createClass(TextDisplay, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'text-center' },
        React.createElement(
          'p',
          { 'class': 'lead' },
          'Key Name'
        ),
        React.createElement(
          'p',
          { id: 'display', className: 'text-center' },
          ' ',
          this.props.currentName,
          ' '
        )
      );
    }
  }]);

  return TextDisplay;
}(Panel);

ReactDOM.render(React.createElement(Panel, null), document.querySelector("#body"));
