(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var PlusLogoSolid = function PlusLogoSolid() {
  return React.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "plus-square",
    className: "svg-inline--fa fa-plus-square fa-w-14 smallSvgIcon plusLogo",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, React.createElement("path", {
    fill: "#454545",
    d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
  }));
};

module.exports = PlusLogoSolid;

},{}],2:[function(require,module,exports){
"use strict";

var Testimonial = function Testimonial(_ref) {
  var testinst = _ref.testinst;
  React.createElement("div", {
    className: "testimonial-slide"
  }, React.createElement("div", {
    className: "title-wrapper"
  }, React.createElement("h3", {
    className: "testimonial-title"
  }, testinst.title)), React.createElement("div", {
    className: "testimonial-content"
  }, testinst.content), React.createElement("div", {
    className: "attribution-wrapper"
  }, React.createElement("div", {
    className: "attribution"
  }, testinst.attribution)));
};

var Testimonials = function Testimonials(_ref2) {
  var testimonials = _ref2.testimonials;
  return React.createElement("div", {
    id: "cst-reactive-testimonials"
  }, React.createElement("h2", {
    className: "wrapper-title"
  }, "Saved Title"), testimonials.map(function (testimonial, i) {
    React.createElement(Testimonial, {
      content: testimonial,
      key: i
    });
  }));
};

module.exports = Testimonials;

},{}],3:[function(require,module,exports){
"use strict";

var _PlusLogoSolid = _interopRequireDefault(require("./PlusLogoSolid.jsx"));

var _Testimonials = _interopRequireDefault(require("./Testimonials.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    BlockControls = _wp$element.BlockControls,
    Component = _wp$element.Component;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var withSelect = wp.data.withSelect;

var getPosts = function getPosts(select) {};

var LeftCol = function LeftCol() {};

var smallSvgStyle = {
  maxHeight: '25px'
};

var RTField = function RTField(_ref) {
  var tagName = _ref.tagName,
      elemClass = _ref.elemClass,
      defVal = _ref.defVal;
  return React.createElement(RichText, {
    tagName: tagName,
    className: elemClass,
    value: defVal,
    formattingControls: ['bold', 'italic', 'link'],
    onChange: function onChange(e) {
      console.log(e);
    },
    placeholder: 'Test Richtext'
  });
};

var NoneMessage = function NoneMessage(_ref2) {
  var testimonials = _ref2.testimonials;
  var message = "";

  if (testimonials.length === 0) {
    return React.createElement("div", {
      className: "testimonials-none-message"
    }, "You don't have any testimonials. Please add one.");
  } else {
    return React.createElement("div", null);
  }
};

var TestimonialsList = function TestimonialsList(testimonials, onaddclick) {
  var contentTemplate = [['core/paragraph', {
    placeholder: 'Review/testimonial'
  }]];
  return testimonials.map(function (testimonial, i) {
    React.createElement("div", {
      className: "testimonials-inputrow",
      key: i
    }, React.createElement("div", {
      className: "testimonials-leftcol"
    }, React.createElement("label", null, React.createElement("span", null, "Title: "))), React.createElement("div", {
      className: "testimonials-rightcol"
    }, React.createElement(RTField, {
      tagName: 'h3',
      elemClass: 'testimonial-rt-title',
      defVal: testimonial.title
    })), React.createElement("div", {
      className: "testimonials-leftcol"
    }, React.createElement("label", null, React.createElement("span", null, "Content: "))), React.createElement("div", {
      className: "testimonials-rightcol"
    }, React.createElement(InnerBlocks, {
      template: contentTemplate
    })), React.createElement("div", {
      className: "testimonials-leftcol"
    }, React.createElement("label", null, React.createElement("span", null, "Attribution: "))), React.createElement("div", {
      className: "testimonials-rightcol"
    }, React.createElement(RTField, {
      tagName: 'h3',
      elemClass: 'testimonial-rt-attribution',
      defVal: ''
    })));
  });
};

var noneStyle = {
  display: 'none'
};
wp.blocks.unregisterBlockType('cst/reactive-testimonials');
registerBlockType('cst/reactive-testimonials', {
  title: __('Reactive Testimonials'),
  icon: 'list-view',
  category: 'cstech',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      "default": 'Testimonials',
      selector: '#cst-reactive-testimonials .wrapper-title'
    },
    moreLink: {
      type: 'string',
      "default": '/testimonials'
    },
    testimonials: {
      type: 'array',
      "default": [{
        title: '',
        content: '',
        attribution: ''
      }],
      source: 'query',
      selector: '#cst-reactive-testimonials #testimonials-list-wrapper .testimonial-slide',
      query: {
        title: {
          source: 'text',
          selector: '.title-wrapper'
        },
        content: {
          source: 'text',
          selector: '.testimonial-content'
        },
        attribution: {
          source: 'text',
          selector: '.attribution-wrapper .attribution'
        }
      }
    },
    editorListCode: {
      type: 'object'
    },
    outputCode: {
      type: 'object'
    }
  },
  edit:
  /*#__PURE__*/
  function (_Component) {
    _inherits(edit, _Component);

    function edit(props) {
      var _this;

      _classCallCheck(this, edit);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(edit).call(this, props));
      _this.props = props;
      _this.state = {
        testimonials: _this.props.attributes.testimonials
      };
      _this.onEditMainTitle = _this.onEditMainTitle.bind(_assertThisInitialized(_this));
      _this.onEditTitle = _this.onEditTitle.bind(_assertThisInitialized(_this));
      _this.onEditContent = _this.onEditContent.bind(_assertThisInitialized(_this));
      _this.onEditAttribution = _this.onEditAttribution.bind(_assertThisInitialized(_this));
      _this.onAddClick = _this.onAddClick.bind(_assertThisInitialized(_this));
      _this.getListOutput = _this.getListOutput.bind(_assertThisInitialized(_this));
      _this.getList = _this.getList.bind(_assertThisInitialized(_this));
      _this.setOutputCode = _this.setOutputCode.bind(_assertThisInitialized(_this));
      _this.setContentOutput = _this.setContentOutput.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(edit, [{
      key: "onEditMainTitle",
      value: function onEditMainTitle(e) {
        var target = e.target;
        var val = target.value;
        this.props.setAttributes({
          title: val
        });
        this.setOutputCode();
      }
    }, {
      key: "onEditTitle",
      value: function onEditTitle(e) {
        var target = e.target;
        var val = target.value;
        var ds = target.dataset;
        var ind = ds['index'];
        ind = parseInt(ind);
        var tests = this.props.attributes.testimonials;
        var targetTest = tests[ind];
        targetTest.title = val;
        tests[ind] = targetTest;
        this.props.setAttributes({
          testimonials: tests
        });
        this.setOutputCode();
      }
    }, {
      key: "onEditContent",
      value: function onEditContent(e) {
        var target = e.target;
        var val = target.value;
        var ds = target.dataset;
        var ind = ds['index'];
        ind = parseInt(ind);
        var tests = this.props.attributes.testimonials;
        var targetTest = tests[ind];
        targetTest.content = val;
        tests[ind] = targetTest;
        this.props.setAttributes({
          testimonials: tests
        });
        this.setOutputCode();
      }
    }, {
      key: "onEditAttribution",
      value: function onEditAttribution(e) {
        var target = e.target;
        var val = target.value;
        var ds = target.dataset;
        var ind = ds['index'];
        var tests = this.props.attributes.testimonials;
        var targetTest = tests[ind];
        targetTest.attribution = val;
        tests[ind] = targetTest;
        this.props.setAttributes({
          testimonials: tests
        });
        this.setOutputCode();
      }
    }, {
      key: "onEditMoreLink",
      value: function onEditMoreLink(e) {
        var target = e.target;
        var val = target.value;
        this.props.setAttributes({
          moreLink: val
        });
        this.setOutputCode();
      }
    }, {
      key: "onAddClick",
      value: function onAddClick(e) {
        e.preventDefault();
        var tests = this.state.testimonials;
        tests.push({
          title: '',
          content: '',
          attribution: ''
        });
        console.log(tests);
        this.setState({
          testimonials: tests
        });
      }
    }, {
      key: "getList",
      value: function getList(tests) {
        return tests.map(function (test, i) {
          return React.createElement("fragment", null, React.createElement("label", null, React.createElement("span", null, "Title:")), React.createElement("input", {
            type: "text",
            defaultValue: test.title
          }), React.createElement("label", null, React.createElement("span", null, "Content:")), React.createElement("textarea", {
            type: "text",
            defaultValue: test.content
          }), React.createElement("label", null, React.createElement("span", null, "Attribution:")), React.createElement("input", {
            type: "text",
            defaultValue: test.attribution
          }));
        });
      }
    }, {
      key: "getListOutput",
      value: function getListOutput() {
        var _this2 = this;

        var maintitle = this.props.attributes.title;
        var tests = this.state.testimonials;
        var addClick = this.onAddClick;
        var morelink = this.props.attributes.moreLink;
        return React.createElement("div", {
          id: "testimonials-editor"
        }, React.createElement("div", {
          id: "mainTitleWrapper"
        }, React.createElement("label", null, React.createElement("span", null, "Main Title:"), React.createElement("input", {
          id: "mainTitle",
          type: "text",
          defaultValue: maintitle,
          onBlur: this.onEditMainTitle
        }))), React.createElement("div", {
          id: "readLinkWrapper"
        }, React.createElement("label", null, React.createElement("span", null, "Read More Link:"), React.createElement("input", {
          id: "readLink",
          type: "text",
          defaultValue: morelink,
          onBlur: this.onEditMoreLink
        }))), tests.map(function (test, i) {
          return React.createElement("div", {
            className: "testimonials-list-item",
            key: i
          }, React.createElement("div", {
            className: "testimonials-item-title",
            "data-index": i
          }, React.createElement("div", {
            className: "leftcol"
          }, React.createElement("label", null, React.createElement("span", null, "Title:"))), React.createElement("div", {
            className: "rightcol"
          }, React.createElement("span", null), React.createElement("input", {
            type: "text",
            defaultValue: test.title,
            onBlur: _this2.onEditTitle,
            "data-index": i
          }))), React.createElement("div", {
            className: "testimonials-item-content",
            "data-index": i
          }, React.createElement("div", {
            className: "leftcol"
          }, React.createElement("label", null, React.createElement("span", null, "Content:"))), React.createElement("div", {
            className: "rightcol"
          }, React.createElement("span", null), React.createElement("textarea", {
            defaultValue: test.content,
            onBlur: _this2.onEditContent,
            placeholder: "Testimonial goes here...",
            "data-index": i
          }))), React.createElement("div", {
            className: "testimonials-item-attribution",
            "data-index": i
          }, React.createElement("div", {
            className: "leftcol"
          }, React.createElement("label", null, React.createElement("span", null, "Attribution:"))), React.createElement("div", {
            className: "rightcol"
          }, React.createElement("span", null), React.createElement("input", {
            type: "text",
            defaultValue: test.attribution,
            onBlur: _this2.onEditAttribution,
            "data-index": i
          }))));
        }), React.createElement("div", {
          id: "addMoreWrapper"
        }, React.createElement("a", {
          href: "#",
          onClick: addClick
        }, React.createElement(_PlusLogoSolid["default"], {
          style: smallSvgStyle
        }))));
      }
    }, {
      key: "setOutputCode",
      value: function setOutputCode() {
        var outputCode = this.setContentOutput();
        this.props.setAttributes({
          outputCode: outputCode
        });
      }
    }, {
      key: "setContentOutput",
      value: function setContentOutput() {
        var maintitle = this.props.attributes.title;
        var tests = this.props.attributes.testimonials;
        var morelink = this.props.attributes.moreLink;
        return React.createElement("div", {
          id: "cst-reactive-testimonials"
        }, React.createElement("div", {
          id: "testimonials-carousel",
          className: "carousel slide",
          "data-ride": "carousel"
        }, React.createElement("div", {
          id: "testimonials-title-wrapper"
        }, React.createElement("h2", {
          className: "wrapper-title"
        }, maintitle)), React.createElement("div", {
          id: "testimonials-list-wrapper",
          className: "carousel-inner"
        }, tests.map(function (test, i) {
          return React.createElement("div", {
            className: "testimonial-slide carousel-item animated fadeInRight duration-2s delay-1s"
          }, React.createElement("div", {
            className: "title-wrapper"
          }, test.title), React.createElement("div", {
            className: "testimonial-content"
          }, test.content), React.createElement("div", {
            className: "attribution-wrapper"
          }, React.createElement("div", {
            className: "attribution"
          }, test.attribution)), React.createElement("div", {
            className: "readmore-wrapper animated fadeIn duration-2s delay-1s"
          }, React.createElement("a", {
            className: "readmore-button",
            href: morelink
          }, "Read More")));
        }))));
      }
    }, {
      key: "render",
      value: function render() {
        var listout = this.getListOutput();
        return listout;
      }
    }]);

    return edit;
  }(Component),
  save: function save(props) {
    var outputcode = props.attributes.outputCode;
    return outputcode;
  }
});

},{"./PlusLogoSolid.jsx":1,"./Testimonials.jsx":2}]},{},[3]);
