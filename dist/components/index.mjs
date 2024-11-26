// src/components/utils/Checkboxes.tsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import { jsx, jsxs } from "react/jsx-runtime";
var Checkbox = function(param) {
    var id = param.id, checked = param.checked, setChecked = param.setChecked, _param_rotate = param.rotate, rotate = _param_rotate === void 0 ? true : _param_rotate, style = param.style;
    return /* @__PURE__ */ jsxs("div", {
        className: "checkbox-wrapper-51",
        children: [
            /* @__PURE__ */ jsx("input", {
                type: "checkbox",
                id: id,
                className: "hidden",
                checked: checked,
                onChange: function() {
                    return setChecked(!checked);
                }
            }),
            /* @__PURE__ */ jsxs("label", {
                htmlFor: id,
                className: "relative block w-[42px] h-[24px] cursor-pointer transform-gpu",
                children: [
                    /* @__PURE__ */ jsx("div", {
                        className: "relative top-[1px] left-[1px] w-[40px] h-[22px] rounded-[12px] transition-colors duration-200 ease-in-out ".concat(checked ? "bg-[#52d66b]" : "bg-[#c8ccd4]")
                    }),
                    /* @__PURE__ */ jsx("span", {
                        className: "absolute ".concat(rotate ? "left-0" : "right-0", " top-0  w-[24px] h-[24px] bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ").concat(checked ? rotate ? "translate-x-[18px]" : "-translate-x-[18px]" : ""),
                        children: /* @__PURE__ */ jsx("svg", {
                            width: "10px",
                            height: "10px",
                            viewBox: "0 0 10 10",
                            className: "m-[7px] fill-none",
                            children: /* @__PURE__ */ jsx("path", {
                                d: "M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "transition-all duration-500 linear",
                                stroke: checked ? "#52d66b" : "#c8ccd4",
                                style: {
                                    strokeDasharray: checked ? "25" : "24",
                                    strokeDashoffset: checked ? "25" : "0"
                                }
                            })
                        })
                    })
                ]
            })
        ]
    });
};
// src/components/utils/ErrorBoundary.tsx
import React from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var ErrorBoundary = /*#__PURE__*/ function(_React_Component) {
    "use strict";
    _inherits(ErrorBoundary, _React_Component);
    function ErrorBoundary(props) {
        _class_call_check(this, ErrorBoundary);
        var _this;
        _this = _call_super(this, ErrorBoundary, [
            props
        ]);
        _this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
        return _this;
    }
    _create_class(ErrorBoundary, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error, errorInfo) {
                console.error("Error:", error);
                console.log("Error Info:", errorInfo);
                this.setState({
                    errorInfo: errorInfo
                });
            }
        },
        {
            key: "render",
            value: function render() {
                if (this.state.hasError) {
                    return this.props.fallback || /* @__PURE__ */ jsx2("div", {
                        className: "full center",
                        children: /* @__PURE__ */ jsx2("h1", {
                            children: "\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9...."
                        })
                    });
                }
                return this.props.children;
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                return {
                    hasError: true,
                    error: error
                };
            }
        }
    ]);
    return ErrorBoundary;
}(React.Component);
// src/components/utils/loaders.tsx
import { ClipLoader } from "react-spinners";
import { jsx as jsx3 } from "react/jsx-runtime";
var Loader = function(param) {
    var color = param.color, size = param.size, _param_style = param.style, style = _param_style === void 0 ? {} : _param_style, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /* @__PURE__ */ jsx3("div", {
        className: "flex items-center justify-center ".concat(className),
        style: style,
        children: /* @__PURE__ */ jsx3(ClipLoader, {
            loading: true,
            color: color || "#699A2C",
            size: size || 18
        })
    });
};
// src/components/table/utils.tsx
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { memo, useMemo as useMemo2 } from "react";
// src/assets/svg.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var RedXSvg = function(param) {
    var height = param.height, width = param.width, viewBox = param.viewBox;
    return /* @__PURE__ */ jsxs2("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width || "32",
        height: height || "32",
        viewBox: viewBox || "0 0 32 32",
        fill: "none",
        children: [
            /* @__PURE__ */ jsx4("path", {
                d: "M21.0801 10.3C20.6101 9.80996 19.8301 9.79996 19.3401 10.27L15.6101 13.89L11.8801 10.27C11.3901 9.79996 10.6101 9.80996 10.1401 10.3C9.67008 10.79 9.68008 11.57 10.1701 12.04L13.8501 15.61L10.1701 19.18C9.68008 19.65 9.67008 20.43 10.1401 20.92C10.6101 21.41 11.3901 21.42 11.8801 20.95L15.6101 17.33L19.3401 20.95C19.5701 21.17 19.8801 21.3 20.2001 21.3C20.8801 21.29 21.4301 20.73 21.4201 20.04C21.4201 19.72 21.2901 19.41 21.0601 19.19L17.3801 15.62L21.0601 12.05C21.5501 11.58 21.5601 10.8 21.0901 10.31L21.0801 10.3Z",
                fill: "#FF4C2B"
            }),
            /* @__PURE__ */ jsx4("path", {
                d: "M15.61 0C6.99 0 0 6.99 0 15.61C0.86 36.32 30.36 36.31 31.22 15.61C31.21 6.99 24.23 0 15.61 0ZM15.61 28.76C8.35 28.76 2.47 22.87 2.46 15.61C3.18 -1.84 28.04 -1.83 28.76 15.61C28.76 22.87 22.87 28.75 15.61 28.76Z",
                fill: "#FF4C2B"
            })
        ]
    });
};
var RedXSvg2 = function(param) {
    var height = param.height, width = param.width, viewBox = param.viewBox;
    return /* @__PURE__ */ jsx4("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width || "18px",
        height: height || "18px",
        viewBox: viewBox || "0,0,256,256",
        fillRule: "nonzero",
        children: /* @__PURE__ */ jsx4("g", {
            fill: "#e90404",
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: "1",
            children: /* @__PURE__ */ jsx4("g", {
                transform: "scale(10.66667,10.66667)",
                children: /* @__PURE__ */ jsx4("path", {
                    d: "M4.99023,3.99023c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l6.29297,6.29297l-6.29297,6.29297c-0.26124,0.25082 -0.36647,0.62327 -0.27511,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27511l6.29297,-6.29297l6.29297,6.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-6.29297,-6.29297l6.29297,-6.29297c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-6.29297,6.29297l-6.29297,-6.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273z"
                })
            })
        })
    });
};
var GreenVSvg = function(param) {
    var height = param.height, width = param.width, viewBox = param.viewBox;
    return /* @__PURE__ */ jsxs2("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width || "32",
        height: height || "32",
        viewBox: viewBox || "0 0 32 32",
        fill: "none",
        children: [
            /* @__PURE__ */ jsx4("path", {
                d: "M15.61 0C6.99 0 0.01 6.99 0 15.61C0.86 36.32 30.36 36.31 31.22 15.61C31.21 6.99 24.23 0 15.61 0ZM15.61 28.76C8.35 28.76 2.47 22.87 2.46 15.61C3.18 -1.84 28.04 -1.83 28.76 15.61C28.76 22.87 22.87 28.75 15.61 28.76Z",
                fill: "#3B8F08"
            }),
            /* @__PURE__ */ jsx4("path", {
                d: "M21.66 10.15L13.37 18.44L9.58003 14.54C9.10003 14.06 8.32003 14.07 7.84003 14.54C7.38003 15.01 7.36003 15.76 7.82003 16.24L12.48 21.03C12.96 21.52 13.74 21.52 14.23 21.05L23.41 11.87C23.88 11.38 23.87 10.6 23.38 10.13C22.9 9.67003 22.15 9.67003 21.68 10.13L21.66 10.15Z",
                fill: "#3B8F08"
            })
        ]
    });
};
// src/assets/table.tsx
import { Fragment, jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var sortSvg = function(upside_down) {
    return /* @__PURE__ */ jsxs3("svg", {
        style: upside_down ? {
            transform: "rotate(180deg)"
        } : {},
        className: "absolute top-[3px] left-1",
        version: "1.0",
        xmlns: "http://www.w3.org/2000/svg",
        width: "13",
        height: "13",
        viewBox: "0 0 1536.000000 1536.000000",
        preserveAspectRatio: "xMidYMid meet",
        children: [
            " ",
            /* @__PURE__ */ jsxs3("g", {
                transform: "translate(0.000000,1536.000000) scale(0.100000,-0.100000)",
                fill: "#fff",
                stroke: "none",
                children: [
                    " ",
                    /* @__PURE__ */ jsx5("path", {
                        d: "M6465 15350 c3 -5 -27 -25 -68 -44 -40 -19 -103 -57 -140 -86 -37 -28 -584 -569 -1215 -1203 -631 -633 -1699 -1705 -2374 -2382 -674 -676 -1237 -1243 -1249 -1260 -13 -16 -37 -46 -53 -65 -36 -41 -108 -185 -126 -250 -32 -119 -30 -352 3 -465 35 -120 102 -231 197 -325 132 -133 288 -208 479 -231 214 -26 418 31 596 166 39 29 703 685 1477 1458 774 772 1432 1421 1461 1441 105 73 239 71 347 -3 52 -36 70 -57 107 -131 17 -33 18 -252 24 -4710 6 -4979 3 -4715 49 -4855 118 -363 507 -605 876 -545 77 13 201 53 245 79 19 12 45 26 59 31 41 18 157 119 206 179 43 53 113 173 127 217 3 11 16 51 29 89 l22 70 6 4690 c5 4887 4 4736 43 4784 6 7 16 23 22 34 20 42 116 103 188 120 42 10 75 13 85 8 10 -5 34 -11 55 -15 20 -4 59 -21 85 -38 26 -17 686 -671 1467 -1453 781 -782 1443 -1439 1470 -1459 68 -49 178 -106 245 -128 30 -10 100 -24 155 -32 87 -12 114 -12 200 1 128 18 187 39 360 131 37 19 178 162 211 212 36 56 94 176 94 194 0 7 7 31 16 52 23 55 23 352 0 406 -9 21 -16 46 -16 56 0 30 -83 185 -130 242 -80 98 -4793 4810 -4865 4865 -66 50 -182 111 -250 132 -16 5 -29 15 -27 21 1 9 -62 12 -249 12 -157 0 -248 -4 -244 -10z"
                    }),
                    " "
                ]
            }),
            " "
        ]
    });
};
var emptyFilterSvg = function(solid) {
    return /* @__PURE__ */ jsx5(Fragment, {
        children: solid ? /* @__PURE__ */ jsxs3("svg", {
            version: "1.0",
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "13",
            viewBox: "0 0 900.000000 900.000000",
            preserveAspectRatio: "xMidYMid meet",
            children: [
                " ",
                /* @__PURE__ */ jsxs3("g", {
                    transform: "translate(0.000000,900.000000) scale(0.100000,-0.100000)",
                    fill: "#fff",
                    stroke: "none",
                    children: [
                        " ",
                        /* @__PURE__ */ jsx5("path", {
                            d: "M382 8980 c-7 -11 -19 -20 -27 -20 -46 0 -166 -99 -196 -162 -46 -95 -51 -115 -47 -199 3 -70 9 -95 37 -149 42 -85 45 -90 118 -190 34 -47 72 -98 83 -115 12 -16 50 -70 85 -120 143 -200 188 -263 235 -330 27 -38 56 -79 64 -90 8 -11 46 -65 85 -120 38 -55 96 -136 128 -179 32 -44 60 -84 62 -90 2 -6 32 -48 65 -93 34 -45 99 -137 146 -203 47 -66 113 -159 148 -205 34 -46 62 -87 62 -90 0 -4 20 -33 45 -65 25 -32 45 -61 45 -64 0 -3 33 -50 73 -105 39 -54 106 -146 147 -205 41 -58 103 -144 138 -191 34 -46 62 -87 62 -90 0 -3 22 -36 50 -73 27 -37 61 -83 75 -102 14 -19 59 -82 100 -140 41 -58 95 -133 120 -167 25 -34 45 -66 45 -70 0 -4 13 -22 28 -40 15 -17 47 -61 72 -97 25 -37 74 -107 110 -156 36 -50 99 -138 140 -196 41 -58 108 -150 148 -205 39 -54 72 -102 72 -105 0 -3 20 -32 45 -64 25 -32 45 -62 45 -67 0 -5 14 -22 30 -38 17 -16 30 -33 30 -38 0 -5 19 -34 43 -65 90 -122 154 -259 178 -387 11 -56 14 -423 19 -1850 l5 -1780 29 -58 c36 -71 112 -148 168 -171 24 -10 51 -22 60 -27 24 -12 205 -11 213 1 3 6 15 10 25 10 11 0 34 6 52 14 18 8 52 21 76 30 64 24 118 44 165 62 23 8 55 22 70 30 16 8 36 14 46 14 9 0 26 7 37 15 10 8 27 15 37 15 11 0 31 6 45 14 15 8 47 22 72 31 25 9 60 23 78 31 18 8 39 14 47 14 7 0 26 6 42 14 15 8 48 22 73 31 25 10 57 23 72 31 14 8 35 14 45 14 11 0 28 7 39 15 10 8 26 15 35 15 14 0 62 19 197 76 18 8 40 14 48 14 9 0 28 6 42 14 28 15 36 18 235 92 23 9 56 22 72 29 17 7 50 21 75 31 84 34 127 77 181 182 9 18 20 56 24 85 4 28 10 714 14 1522 6 1402 7 1472 25 1520 41 109 110 235 188 344 46 62 88 121 93 130 6 9 30 45 55 80 72 101 159 222 250 351 47 67 113 159 148 205 34 46 62 87 62 90 0 4 27 42 60 85 33 43 60 81 60 84 0 3 22 36 50 73 27 37 60 83 72 101 13 18 30 41 38 52 8 10 35 49 60 85 25 37 73 104 108 150 34 46 62 87 62 90 0 3 33 50 73 103 40 53 81 111 91 127 11 17 45 65 78 107 32 43 58 80 58 83 0 4 20 33 45 65 25 32 45 63 45 70 0 6 7 13 15 16 8 4 15 10 15 16 0 5 26 44 58 86 32 42 70 95 85 117 64 95 144 206 208 292 38 51 69 95 69 99 0 3 13 23 29 43 26 33 92 126 193 271 21 30 48 68 60 85 85 112 108 144 108 150 0 3 27 42 60 85 33 43 60 81 60 85 0 3 28 44 63 90 34 47 82 114 107 151 25 36 50 71 56 77 5 7 32 44 58 82 27 39 62 86 77 106 16 20 29 42 29 48 0 6 4 11 8 11 5 0 25 32 45 71 36 68 37 75 37 175 0 118 -13 163 -69 234 -37 48 -127 112 -173 124 -16 3 -28 13 -28 21 0 13 -486 15 -4103 15 -4091 0 -4102 0 -4115 -20z"
                        }),
                        " "
                    ]
                }),
                " "
            ]
        }) : /* @__PURE__ */ jsxs3("svg", {
            version: "1.0",
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "13",
            viewBox: "0 0 300.000000 300.000000",
            preserveAspectRatio: "xMidYMid meet",
            children: [
                " ",
                /* @__PURE__ */ jsxs3("g", {
                    transform: "translate(0.000000,300.000000) scale(0.050000,-0.050000)",
                    fill: "#fff",
                    stroke: "none",
                    children: [
                        " ",
                        /* @__PURE__ */ jsx5("path", {
                            d: "M58 5702 c-100 -101 -84 -148 136 -416 107 -130 242 -294 301 -366 58 -71 173 -211 254 -310 81 -99 441 -535 799 -969 l652 -789 0 -1201 c0 -1396 2 -1411 182 -1411 60 0 1302 604 1360 662 36 36 38 79 38 935 0 494 5 925 12 959 8 41 370 495 1110 1393 1202 1459 1158 1394 1040 1513 l-59 58 -2883 0 -2883 0 -59 -58z m5349 -327 c-16 -26 -150 -190 -683 -835 -169 -203 -381 -460 -472 -570 -90 -110 -290 -352 -443 -537 -154 -186 -301 -369 -329 -408 l-50 -70 -6 -913 -5 -913 -410 -205 c-225 -112 -413 -204 -418 -204 -6 0 -12 503 -15 1117 l-6 1118 -50 70 c-27 39 -175 222 -329 408 -153 185 -353 427 -443 537 -91 110 -303 367 -472 570 -533 645 -667 809 -683 835 -12 20 474 25 2407 25 1933 0 2419 -5 2407 -25z"
                        }),
                        " "
                    ]
                }),
                " "
            ]
        })
    });
};
var slashFilterSvg = function(solid) {
    return /* @__PURE__ */ jsx5(Fragment, {
        children: solid ? /* @__PURE__ */ jsx5("div", {
            className: "mt-[-4px] mr-[-2px] ",
            children: /* @__PURE__ */ jsxs3("svg", {
                version: "1.0",
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "20",
                viewBox: "0 0 900.000000 900.000000",
                preserveAspectRatio: "xMidYMid meet",
                children: [
                    " ",
                    /* @__PURE__ */ jsxs3("g", {
                        transform: "translate(0.000000,900.000000) scale(0.100000,-0.100000)",
                        fill: "#fff",
                        stroke: "none",
                        children: [
                            " ",
                            /* @__PURE__ */ jsx5("path", {
                                d: "M1000 8221 c-71 -27 -103 -47 -149 -92 -122 -123 -144 -294 -58 -456 22 -42 6838 -6858 6880 -6880 162 -86 333 -64 456 58 123 123 144 294 57 458 -10 19 -508 525 -1107 1124 l-1089 1089 1 256 1 257 676 1350 677 1350 115 6 c125 6 173 20 244 68 54 37 89 78 124 145 24 46 27 61 27 161 0 100 -3 115 -28 162 -52 100 -119 157 -225 194 -54 18 -131 19 -2817 19 l-2762 0 -341 340 c-188 186 -356 347 -374 357 -103 55 -220 68 -308 34z"
                            }),
                            " ",
                            /* @__PURE__ */ jsx5("path", {
                                d: "M2340 5338 c0 -7 146 -305 325 -662 l325 -649 0 -1112 c0 -1043 1 -1114 18 -1160 27 -76 47 -107 94 -154 48 -47 80 -67 153 -93 46 -17 120 -18 1231 -18 1085 0 1186 1 1235 17 30 9 66 24 81 33 68 40 158 146 158 186 0 14 -3600 3624 -3614 3624 -3 0 -6 -6 -6 -12z"
                            }),
                            " "
                        ]
                    }),
                    " "
                ]
            })
        }) : /* @__PURE__ */ jsx5("div", {
            className: "mt-[-4px] mr-[-2px] ",
            children: /* @__PURE__ */ jsxs3("svg", {
                version: "1.0",
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "20",
                viewBox: "0 0 900.000000 900.000000",
                preserveAspectRatio: "xMidYMid meet",
                children: [
                    " ",
                    /* @__PURE__ */ jsxs3("g", {
                        transform: "translate(0.000000,900.000000) scale(0.100000,-0.100000)",
                        fill: "#fff",
                        stroke: "none",
                        children: [
                            " ",
                            /* @__PURE__ */ jsx5("path", {
                                d: "M1000 8221 c-71 -27 -103 -47 -149 -92 -122 -123 -144 -294 -58 -456 22 -42 6838 -6858 6880 -6880 162 -86 333 -64 456 58 123 123 144 294 57 458 -10 19 -508 525 -1107 1124 l-1089 1089 1 256 1 257 676 1350 677 1350 115 6 c125 6 173 20 244 68 54 37 89 78 124 145 24 46 27 61 27 161 0 100 -3 115 -28 162 -52 100 -119 157 -225 194 -54 18 -131 19 -2817 19 l-2762 0 -341 340 c-188 186 -356 347 -374 357 -103 55 -220 68 -308 34z m5494 -1490 c6 -10 -1204 -2436 -1226 -2458 -13 -13 -168 139 -1247 1217 -677 677 -1231 1236 -1231 1241 0 12 3697 12 3704 0z"
                            }),
                            " ",
                            /* @__PURE__ */ jsx5("path", {
                                d: "M2340 5338 c0 -7 146 -305 325 -662 l325 -649 0 -1112 c0 -1043 1 -1114 18 -1160 27 -76 47 -107 94 -154 48 -47 80 -67 153 -93 46 -17 120 -18 1231 -18 1085 0 1186 1 1235 17 30 9 66 24 81 33 68 40 158 146 158 185 0 18 -692 715 -709 715 -6 0 -11 -38 -13 -97 l-3 -98 -745 0 -745 0 -3 858 -2 859 -694 694 c-382 382 -697 694 -700 694 -3 0 -6 -6 -6 -12z"
                            }),
                            " "
                        ]
                    }),
                    " "
                ]
            })
        })
    });
};
var exportToExcelSvg = function() {
    return /* @__PURE__ */ jsxs3("svg", {
        version: "1.0",
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 150.000000 150.000000",
        preserveAspectRatio: "xMidYMid meet",
        children: [
            " ",
            /* @__PURE__ */ jsxs3("g", {
                transform: "translate(0.000000,150.000000) scale(0.100000,-0.100000)",
                fill: "#ffffff",
                stroke: "none",
                children: [
                    " ",
                    /* @__PURE__ */ jsx5("path", {
                        d: "M205 1418 c-3 -7 -4 -317 -3 -688 l3 -675 435 -3 c239 -1 441 0 449 3 11 4 9 11 -9 30 l-23 25 -396 2 -396 3 0 625 0 625 280 0 280 0 5 -190 5 -190 190 -5 190 -5 5 -175 5 -175 25 0 25 0 3 200 2 199 -202 203 -203 203 -333 0 c-257 0 -334 -3 -337 -12z m828 -235 c70 -70 127 -131 127 -135 0 -5 -60 -7 -132 -6 l-133 3 -3 133 c-1 72 1 132 6 132 4 0 65 -57 135 -127z"
                    }),
                    " ",
                    /* @__PURE__ */ jsx5("path", {
                        d: "M518 915 c-6 -6 9 -37 42 -90 11 -16 23 -37 27 -45 4 -8 19 -36 35 -61 15 -25 28 -56 28 -68 0 -20 -29 -69 -121 -209 -16 -24 -29 -47 -29 -53 0 -5 31 -9 68 -9 l69 0 42 82 c60 116 66 118 107 35 56 -114 53 -112 127 -115 51 -2 67 0 67 11 0 7 -5 18 -11 24 -11 11 -26 36 -49 78 -6 11 -19 34 -30 50 -11 17 -24 40 -29 52 -5 11 -15 24 -20 28 -26 16 -18 33 97 212 25 39 39 70 34 75 -5 5 -36 8 -68 6 l-59 -3 -42 -84 c-24 -46 -45 -86 -48 -89 -6 -6 -44 40 -45 54 0 6 -13 35 -29 65 l-28 54 -65 3 c-35 2 -67 0 -70 -3z"
                    }),
                    " ",
                    /* @__PURE__ */ jsx5("path", {
                        d: "M1135 548 c-3 -7 -6 -67 -7 -133 l-3 -120 -55 -3 c-30 -1 -61 -5 -68 -7 -8 -3 28 -53 95 -132 122 -146 129 -153 140 -153 4 0 22 17 38 37 26 32 53 63 175 206 13 15 30 27 38 27 9 0 12 3 8 7 -3 4 -39 9 -79 12 l-72 6 -5 130 -5 130 -98 3 c-72 2 -99 -1 -102 -10z m145 -183 l5 -130 28 -3 c15 -2 27 -8 27 -14 0 -18 -92 -128 -107 -128 -11 1 -97 107 -101 125 -2 8 7 15 25 17 l28 3 3 120 c1 66 4 126 7 133 3 9 18 12 42 10 l38 -3 5 -130z"
                    }),
                    " "
                ]
            }),
            " "
        ]
    });
};
// src/hooks/global.ts
import { useEffect, useRef } from "react";
// src/helpers/firebase.ts
import moment from "moment";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, Timestamp, where, getFirestore, onSnapshot } from "firebase/firestore";
var initApp = function() {
    var isNodeEnv = typeof process !== "undefined" && process.env;
    var firebaseConfig = {
        apiKey: isNodeEnv ? process.env.NEXT_PUBLIC_API_KEY : import.meta.env.VITE_API_KEY,
        authDomain: isNodeEnv ? process.env.NEXT_PUBLIC_AUTH_DOMAIN : import.meta.env.VITE_AUTH_DOMAIN,
        projectId: isNodeEnv ? process.env.NEXT_PUBLIC_PROJECT_ID : import.meta.env.VITE_PROJECT_ID,
        storageBucket: isNodeEnv ? process.env.NEXT_PUBLIC_STORAGE_BUCKET : import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: isNodeEnv ? process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID : import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: isNodeEnv ? process.env.NEXT_PUBLIC_APP_ID : import.meta.env.VITE_APP_ID
    };
    try {
        var app = initializeApp(firebaseConfig);
        var auth2 = getAuth(app);
        var db2 = getFirestore(app);
        return {
            db: db2,
            auth: auth2
        };
    } catch (error) {
        console.error("Failed to initialize Firebase app:", error);
        return {
            db: null,
            auth: null
        };
    }
};
var _initApp = initApp(), db = _initApp.db, auth = _initApp.auth;
var collections = {
    clients: collection(db, "nx-clients"),
    sites: collection(db, "nx-sites"),
    cars: collection(db, "units"),
    users: collection(db, "nx-users"),
    lastLocations: collection(db, "last_locations"),
    ermEvents: collection(db, "erm_events_general"),
    erm2Events: collection(db, "erm2_events_general"),
    ruptelaEvents: collection(db, "ruptela_events_general"),
    polygons: collection(db, "nx-polygons"),
    polygonEvents: collection(db, "polygon_events"),
    polygonCars: collection(db, "polygon_cars"),
    canbus: collection(db, "erm_canbus_parameters"),
    states: collection(db, "erm_states"),
    app_pro_commands_queue: collection(db, "app_pro_commands_queue"),
    trips: collection(db, "erm2_trip"),
    tripsDetails: collection(db, "erm2_trip_details"),
    audit: collection(db, "nx-audit"),
    nx_settings: collection(db, "nx-settings"),
    settings: collection(db, "settings"),
    translations: collection(db, "nx-translations"),
    nx_cars: collection(db, "nx-cars"),
    boards: collection(db, "boards"),
    protection_types: collection(db, "protectionTypes"),
    board_types: collection(db, "boardTypes"),
    charge_capacities: collection(db, "nx-charge-capacities")
};
var fire_base_TIME_TEMP = Timestamp.now;
// src/helpers/forms.ts
var handleInvalid = function(e, requireError) {
    e.target.setCustomValidity(requireError || "This filed is required !");
};
var handleChange = function(e) {
    e.target.setCustomValidity("");
    var validation = e.target.getAttribute("data-validation");
    if (validation === "text") {
        var cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת\- ]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "numbers") {
        var cleanedValue1 = e.target.value.replace(/[^0-9\- +]/g, "");
        e.target.value = cleanedValue1;
    } else if (validation === "numbersOnly") {
        var cleanedValue2 = e.target.value.replace(/[^0-9]/g, "");
        e.target.value = cleanedValue2;
    } else if (validation === "price") {
        var cleanedValue3 = e.target.value.replace(/[^0-9\.]/g, "");
        e.target.value = cleanedValue3;
    } else if (validation === "textNumbers") {
        var cleanedValue4 = e.target.value.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
        e.target.value = cleanedValue4;
    } else if (validation === "email") {
        var cleanedValue5 = e.target.value.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
        e.target.value = cleanedValue5;
    } else if (validation === "color") {
        var cleanedValue6 = e.target.value.replace(/[^#0-9A-Fa-f]/g, "");
        e.target.value = cleanedValue6;
    } else if (validation === "address") {
        var cleanedValue7 = e.target.value.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
        e.target.value = cleanedValue7;
    } else if (validation === "cars") {
        var cleanedValue8 = e.target.value.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
        e.target.value = cleanedValue8;
    } else if (validation === "charts") {
        var cleanedValue9 = e.target.value.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
        e.target.value = cleanedValue9;
    } else {
        e.target.value = e.target.value;
    }
};
var handlePaste = function(e) {
    var validation = e.currentTarget.getAttribute("data-validation");
    var pasteData = e.clipboardData.getData("text");
    if (validation === "text") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת\- ]/g, "");
    } else if (validation === "numbers") {
        pasteData = pasteData.replace(/[^0-9\- +]/g, "");
    } else if (validation === "numbersOnly") {
        pasteData = pasteData.replace(/[^0-9]/g, "");
    } else if (validation === "price") {
        pasteData = pasteData.replace(/[^0-9\.]/g, "");
    } else if (validation === "textNumbers") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
    } else if (validation === "email") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
    } else if (validation === "color") {
        pasteData = pasteData.replace(/[^#0-9A-Fa-f]/g, "");
    } else if (validation === "address") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
    } else if (validation === "cars") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
    } else if (validation === "charts") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
    }
    e.preventDefault();
    document.execCommand("insertText", false, pasteData);
};
var useValidation = function(validationType, requireError) {
    return {
        onChange: handleChange,
        onPaste: handlePaste,
        onInvalid: function(e) {
            return handleInvalid(e, requireError);
        },
        "data-validation": validationType
    };
};
// src/helpers/phoneNumber.ts
import { parsePhoneNumberFromString } from "libphonenumber-js";
// src/hooks/table.ts
import { useContext, useState, useTransition } from "react";
import { create } from "zustand";
import { isEqual } from "lodash";
var useTableContext = function() {
    var context = useContext(TableContext);
    if (!context) {
        throw new Error("useTableContext must be used within a Table component");
    }
    return context;
};
var useFilter = function(param) {
    var data = param.data, filterableColumns = param.filterableColumns;
    var initFilter = filterableColumns.reduce(function(acc, col) {
        return _object_spread_props(_object_spread({}, acc), _define_property({}, col.dataKey, []));
    }, {});
    var _useState = _sliced_to_array(useState(initFilter), 2), filters = _useState[0], setFilters = _useState[1];
    var _useState1 = _sliced_to_array(useState(""), 2), filterPopupsDisplay = _useState1[0], setFilterPopupsDisplay = _useState1[1];
    var filterOptions = filterableColumns.reduce(function(acc, col) {
        acc[col.dataKey] = Array.from(new Set(data.map(function(item) {
            return item[col.dataKey];
        })));
        return acc;
    }, {});
    var handleFilterChange = function(dataKey, value) {
        var newFilters = _object_spread({}, filters);
        if (newFilters[dataKey].includes(value)) {
            newFilters[dataKey] = newFilters[dataKey].filter(function(item) {
                return item !== value;
            });
        } else {
            newFilters[dataKey].push(value);
        }
        setFilters(newFilters);
    };
    var clearFilter = function() {
        if (!isEqual(filters, initFilter)) {
            setFilters(initFilter);
        }
    };
    var handleFilterClick = function(dataKey) {
        setFilterPopupsDisplay(function(prev) {
            if (prev === dataKey) {
                setFilters(initFilter);
                return "";
            }
            return dataKey;
        });
    };
    var closeFilterWindow = function() {
        setFilterPopupsDisplay("");
    };
    return {
        filters: filters,
        filterPopupsDisplay: filterPopupsDisplay,
        filterOptions: filterOptions,
        handleFilterChange: handleFilterChange,
        handleFilterClick: handleFilterClick,
        closeFilterWindow: closeFilterWindow,
        clearFilter: clearFilter
    };
};
var useSort = function() {
    var _useState = _sliced_to_array(useState(null), 2), sortColumn = _useState[0], setSortColumn = _useState[1];
    var _useState1 = _sliced_to_array(useState(null), 2), sortOrder = _useState1[0], setSortOrder = _useState1[1];
    var handleSort = function(columnIndex) {
        var newSortOrder = "asc";
        if (sortColumn === columnIndex && sortOrder === "asc") {
            newSortOrder = "desc";
        }
        setSortColumn(columnIndex);
        setSortOrder(newSortOrder);
    };
    var clearSort = function() {
        if (sortColumn) {
            setSortColumn(null);
        }
        if (sortOrder) {
            setSortOrder(null);
        }
    };
    return {
        sortColumn: sortColumn,
        sortOrder: sortOrder,
        handleSort: handleSort,
        clearSort: clearSort
    };
};
var useSearch = function() {
    var _useState = _sliced_to_array(useState(""), 2), searchQuery = _useState[0], setSearchQuery = _useState[1];
    var _useTransition = _sliced_to_array(useTransition(), 2), isPending = _useTransition[0], startTransition = _useTransition[1];
    var handleSearch = function(e) {
        var value = e.target.value;
        startTransition(function() {
            setSearchQuery(value);
        });
    };
    var clearSearch = function() {
        if (searchQuery) {
            startTransition(function() {
                setSearchQuery("");
            });
        }
    };
    return {
        searchQuery: searchQuery,
        handleSearch: handleSearch,
        clearSearch: clearSearch,
        isPending: isPending
    };
};
// src/hooks/WebWorker.ts
import { useCallback, useEffect as useEffect3, useRef as useRef2 } from "react";
// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return twMerge(clsx(inputs));
}
// src/components/table/utils.tsx
import { Fragment as Fragment2, jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var getFixedNumber = function() {
    var number = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, fix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
    var sum_value = number % 1 === 0 ? number : number.toFixed(fix).replace(/\.?0+$/, "");
    return String(sum_value);
};
var TableRow = function(param) {
    var item = param.item;
    var _useTableContext = useTableContext(), rowStyles = _useTableContext.rowStyles, rowClassName = _useTableContext.rowClassName, keysToRender = _useTableContext.keysToRender, onRowClick = _useTableContext.onRowClick;
    return /* @__PURE__ */ jsx6("tr", {
        className: cn("hover:bg-[#808080] hover:text-[#fff]", rowClassName || ""),
        onClick: function() {
            return onRowClick && onRowClick(item);
        },
        style: rowStyles,
        children: keysToRender.map(function(key, index) {
            return /* @__PURE__ */ jsx6(TableCell, {
                value: item[key]
            }, index);
        })
    });
};
var TableCell = function(param) {
    var value = param.value;
    var _useTableContext = useTableContext(), cellStyle = _useTableContext.cellStyle, cellClassName = _useTableContext.cellClassName;
    return /* @__PURE__ */ jsx6("td", {
        title: [
            "string",
            "number",
            "boolean"
        ].includes(typeof value === "undefined" ? "undefined" : _type_of(value)) ? value : "",
        style: cellStyle,
        className: cn("chivo ellipsis border-black border-[1px] max-w-[90px] px-[4px] text-center", cellClassName || ""),
        children: value
    });
};
var TableHead = memo(function(props) {
    var _useTableContext = useTableContext(), headers = _useTableContext.headers, headerStyle = _useTableContext.headerStyle, headerCellStyle = _useTableContext.headerCellStyle, sortColumn = _useTableContext.sortColumn, handleSort = _useTableContext.handleSort, sortKeys = _useTableContext.sortKeys, sortOrder = _useTableContext.sortOrder, _useTableContext_filterableColumns = _useTableContext.filterableColumns, filterableColumns = _useTableContext_filterableColumns === void 0 ? [] : _useTableContext_filterableColumns, sortLabel = _useTableContext.sortLabel;
    var sortDisplay = useMemo2(function() {
        return Boolean(sortKeys.length);
    }, [
        sortKeys
    ]);
    return /* @__PURE__ */ jsx6("thead", {
        className: "bg-[#282828] text-white sticky top-0",
        children: /* @__PURE__ */ jsx6("tr", {
            style: headerStyle,
            children: headers.map(function(header, index) {
                var filterableColumn = filterableColumns.find(function(col) {
                    return col.header === header;
                });
                return /* @__PURE__ */ jsxs4("th", {
                    title: sortDisplay ? "".concat(sortLabel, " ").concat(header) : header,
                    style: headerCellStyle,
                    className: " border-black border-[1px] max-w-[130px] px-2 text-center relative",
                    children: [
                        /* @__PURE__ */ jsx6("div", {
                            className: "px-2 ".concat(sortDisplay ? "cursor-pointer" : ""),
                            onClick: function() {
                                return sortDisplay && handleSort(index);
                            },
                            children: header
                        }),
                        sortDisplay && sortColumn === index && (sortOrder === "asc" ? /* @__PURE__ */ jsx6(Fragment2, {
                            children: sortSvg()
                        }) : /* @__PURE__ */ jsx6(Fragment2, {
                            children: sortSvg(true)
                        })),
                        filterableColumn && /* @__PURE__ */ jsx6(Filter, {
                            filterableColumn: filterableColumn,
                            index: index
                        })
                    ]
                }, index);
            })
        })
    });
});
var TableBody = memo(function(props) {
    var dataToRender = useTableContext().dataToRender;
    return /* @__PURE__ */ jsx6("tbody", {
        children: dataToRender.renderedData.map(function(item, index) {
            return /* @__PURE__ */ jsx6(TableRow, {
                item: item
            }, index);
        })
    });
});
var Filter = memo(function(param) {
    var filterableColumn = param.filterableColumn, index = param.index;
    var _filters_filterableColumn_dataKey, _filters_filterableColumn_dataKey1, _filterOptions_filterableColumn_dataKey;
    var _useTableContext = useTableContext(), direction = _useTableContext.direction, headers = _useTableContext.headers, filters = _useTableContext.filters, filterOptions = _useTableContext.filterOptions, filterPopupsDisplay = _useTableContext.filterPopupsDisplay, handleFilterChange = _useTableContext.handleFilterChange, handleFilterClick = _useTableContext.handleFilterClick, closeFilterWindow = _useTableContext.closeFilterWindow, filterLabel = _useTableContext.filterLabel;
    var displayRight = direction === "rtl" && index === headers.length - 1 || direction === "ltr" && index !== headers.length - 1;
    return /* @__PURE__ */ jsxs4("div", {
        className: "absolute top-1 right-1 ",
        children: [
            /* @__PURE__ */ jsx6("button", {
                title: filterLabel + " " + filterableColumn.header,
                className: "text-[12px]",
                onClick: function() {
                    return handleFilterClick(filterableColumn.dataKey);
                },
                children: filterPopupsDisplay === filterableColumn.dataKey ? /* @__PURE__ */ jsx6(Fragment2, {
                    children: ((_filters_filterableColumn_dataKey = filters[filterableColumn.dataKey]) === null || _filters_filterableColumn_dataKey === void 0 ? void 0 : _filters_filterableColumn_dataKey.length) > 0 ? /* @__PURE__ */ jsx6(Fragment2, {
                        children: slashFilterSvg(true)
                    }) : /* @__PURE__ */ jsx6(Fragment2, {
                        children: emptyFilterSvg(true)
                    })
                }) : /* @__PURE__ */ jsx6(Fragment2, {
                    children: ((_filters_filterableColumn_dataKey1 = filters[filterableColumn.dataKey]) === null || _filters_filterableColumn_dataKey1 === void 0 ? void 0 : _filters_filterableColumn_dataKey1.length) > 0 ? /* @__PURE__ */ jsx6(Fragment2, {
                        children: slashFilterSvg()
                    }) : /* @__PURE__ */ jsx6(Fragment2, {
                        children: emptyFilterSvg()
                    })
                })
            }),
            /* @__PURE__ */ jsx6("div", {
                className: "relative",
                children: filterPopupsDisplay === filterableColumn.dataKey && /* @__PURE__ */ jsxs4("div", {
                    className: "absolute top-[-20px] z-20 ".concat(displayRight ? " left-[100%]" : "right-[100%]", " w-44 h-52 text-black bg-white p-1 flex flex-col items-center gap-2 shadow"),
                    children: [
                        /* @__PURE__ */ jsxs4("div", {
                            className: "flex justify-between items-center border-black border-b-[1px] w-[90%]",
                            children: [
                                /* @__PURE__ */ jsx6("div", {
                                    className: "text-start",
                                    children: filterLabel + " " + filterableColumn.header
                                }),
                                /* @__PURE__ */ jsx6("button", {
                                    onClick: closeFilterWindow,
                                    children: /* @__PURE__ */ jsx6(RedXSvg2, {})
                                })
                            ]
                        }),
                        /* @__PURE__ */ jsx6("div", {
                            className: "overflow-auto h-[80%] flex flex-col gap-1 w-full cursor-pointer ",
                            children: (_filterOptions_filterableColumn_dataKey = filterOptions[filterableColumn.dataKey]) === null || _filterOptions_filterableColumn_dataKey === void 0 ? void 0 : _filterOptions_filterableColumn_dataKey.map(function(option, i) {
                                var _filters_filterableColumn_dataKey;
                                return /* @__PURE__ */ jsxs4("div", {
                                    className: "flex items-center px-2 justify-start hover:bg-[#547f22] hover:text-white",
                                    children: [
                                        /* @__PURE__ */ jsx6("input", {
                                            type: "checkbox",
                                            className: "cursor-pointer",
                                            checked: (_filters_filterableColumn_dataKey = filters[filterableColumn.dataKey]) === null || _filters_filterableColumn_dataKey === void 0 ? void 0 : _filters_filterableColumn_dataKey.includes(option),
                                            onChange: function() {
                                                return handleFilterChange(filterableColumn.dataKey, option);
                                            }
                                        }),
                                        /* @__PURE__ */ jsx6("button", {
                                            className: "flex-1 text-start px-2",
                                            onClick: function() {
                                                return handleFilterChange(filterableColumn.dataKey, option);
                                            },
                                            children: filterableColumn.ui ? filterableColumn.ui(option) : option
                                        })
                                    ]
                                }, i);
                            })
                        })
                    ]
                })
            })
        ]
    });
});
var MaxRowsLabel = memo(function(props) {
    var _useTableContext = useTableContext(), data = _useTableContext.data, dataToRender = _useTableContext.dataToRender, maxRowsLabel1 = _useTableContext.maxRowsLabel1, maxRowsLabel2 = _useTableContext.maxRowsLabel2, maxRows = _useTableContext.maxRows, maxRowsContainerClassName = _useTableContext.maxRowsContainerClassName;
    return /* @__PURE__ */ jsxs4("div", {
        className: cn("flex justify-start items-center gap-3", maxRowsContainerClassName || ""),
        children: [
            /* @__PURE__ */ jsx6("div", {
                children: maxRowsLabel1
            }),
            /* @__PURE__ */ jsx6("div", {
                children: maxRows > dataToRender.renderedData.length ? dataToRender.renderedData.length : maxRows
            }),
            /* @__PURE__ */ jsx6("div", {
                children: maxRowsLabel2
            }),
            /* @__PURE__ */ jsx6("div", {
                children: dataToRender.filtered.length
            })
        ]
    });
});
var ExportToExcel = memo(function(props) {
    var _useTableContext = useTableContext(), exportToExcelKeys = _useTableContext.exportToExcelKeys, dataToAddToExcelTable = _useTableContext.dataToAddToExcelTable, excelFileName = _useTableContext.excelFileName, dataToRender = _useTableContext.dataToRender, headers = _useTableContext.headers, sumColumns = _useTableContext.sumColumns, exportExcelLabel = _useTableContext.exportExcelLabel;
    var addPropertiesToExcel = function(properties) {
        var newData = _to_consumable_array(dataToRender.renderedData);
        var newHeaders = _to_consumable_array(headers);
        properties.forEach(function(val) {
            newHeaders.unshift(val.header);
            newData = newData.map(function(v) {
                return _object_spread_props(_object_spread({}, v), _define_property({}, val.key, val.value));
            });
        });
        return {
            data: newData,
            headers: newHeaders
        };
    };
    var onExportExcelClick = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var workbook, worksheet, dataToExport, buffer, blob;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!exportToExcelKeys) return [
                            3,
                            2
                        ];
                        workbook = new ExcelJS.Workbook();
                        worksheet = workbook.addWorksheet("Sheet1");
                        dataToExport = dataToAddToExcelTable ? addPropertiesToExcel(dataToAddToExcelTable) : {
                            data: dataToRender.renderedData,
                            headers: headers
                        };
                        worksheet.addRow(dataToExport.headers);
                        dataToExport.data.forEach(function(item) {
                            var row = exportToExcelKeys.map(function(key) {
                                return item[key];
                            });
                            worksheet.addRow(row);
                        });
                        if (sumColumns) {
                            sumColumns.forEach(function(val) {
                                var sumRow = worksheet.addRow([]);
                                sumRow.getCell(1).value = val.label;
                                var value = dataToRender.renderedData.reduce(function(acc, v) {
                                    return acc + Number(v[val.dataKey]) || 0;
                                }, 0).toFixed(2);
                                sumRow.getCell(2).value = value;
                            });
                        }
                        return [
                            4,
                            workbook.xlsx.writeBuffer()
                        ];
                    case 1:
                        buffer = _state.sent();
                        blob = new Blob([
                            buffer
                        ], {
                            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        });
                        saveAs(blob, "".concat(excelFileName || "table_data", ".xlsx"));
                        _state.label = 2;
                    case 2:
                        return [
                            2
                        ];
                }
            });
        });
        return function onExportExcelClick() {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ jsx6("button", {
        onClick: onExportExcelClick,
        title: exportExcelLabel,
        className: "px-2 py-[2px]  bg-[#547f22] text-white rounded-lg text-[16px]",
        children: exportToExcelSvg()
    });
});
var Search = memo(function(props) {
    var _useTableContext = useTableContext(), searchQuery = _useTableContext.searchQuery, handleSearch = _useTableContext.handleSearch, searchPlaceHolder = _useTableContext.searchPlaceHolder, searchInputClassName = _useTableContext.searchInputClassName, searchInputStyle = _useTableContext.searchInputStyle;
    return /* @__PURE__ */ jsx6("input", {
        className: "w-40 border-black border-[1px] px-2 rounded-md ".concat(searchInputClassName),
        type: "text",
        placeholder: searchPlaceHolder,
        value: searchQuery,
        onChange: handleSearch,
        style: searchInputStyle
    });
});
var Summary = memo(function(props) {
    var _useTableContext = useTableContext(), summaryContainerStyle = _useTableContext.summaryContainerStyle, summaryLabelStyle = _useTableContext.summaryLabelStyle, summaryLabel = _useTableContext.summaryLabel, summaryRowStyle = _useTableContext.summaryRowStyle, sumColumns = _useTableContext.sumColumns, dataToRender = _useTableContext.dataToRender, direction = _useTableContext.direction;
    return /* @__PURE__ */ jsxs4("div", {
        style: _object_spread_props(_object_spread({}, summaryContainerStyle), {
            direction: direction
        }),
        className: "w-full h-8 flex justify-between items-center px-3 text-[18px] font-bold",
        children: [
            /* @__PURE__ */ jsx6("div", {
                style: summaryLabelStyle,
                children: summaryLabel
            }),
            /* @__PURE__ */ jsx6("div", {
                style: summaryRowStyle,
                className: "flex gap-3",
                children: sumColumns.map(function(val) {
                    var sum_res = dataToRender.renderedData.reduce(function(acc, v) {
                        return acc + Number(v[val.dataKey]) || 0;
                    }, 0);
                    var sum_value = getFixedNumber(sum_res);
                    return /* @__PURE__ */ jsxs4("div", {
                        className: "flex gap-1 justify-start",
                        children: [
                            /* @__PURE__ */ jsx6("div", {
                                children: val.label
                            }),
                            /* @__PURE__ */ jsx6("span", {
                                children: ":"
                            }),
                            /* @__PURE__ */ jsx6("div", {
                                children: val.ui ? val.ui(sum_value) : sum_value
                            })
                        ]
                    }, val.dataKey + val.label);
                })
            })
        ]
    });
});
// src/components/table/Table.tsx
import { createContext, useMemo as useMemo3 } from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var TableContext = createContext(null);
var TableProvider = function(props) {
    var // basic props
    data = props.data, headers = props.headers, optionalElement = props.optionalElement, _props_keysToRender = props.keysToRender, keysToRender = _props_keysToRender === void 0 ? [] : _props_keysToRender, _props_direction = props.direction, direction = _props_direction === void 0 ? "ltr" : _props_direction, _props_onRowClick = props.onRowClick, onRowClick = _props_onRowClick === void 0 ? function(data2) {} : _props_onRowClick, // container styles props
    containerStyle = props.containerStyle, _props_containerClassName = props.containerClassName, containerClassName = _props_containerClassName === void 0 ? "" : _props_containerClassName, _props_tableContainerClass = props.tableContainerClass, tableContainerClass = _props_tableContainerClass === void 0 ? "" : _props_tableContainerClass, _props_tableContainerStyle = props.tableContainerStyle, tableContainerStyle = _props_tableContainerStyle === void 0 ? {} : _props_tableContainerStyle, _props_tableStyle = props.tableStyle, tableStyle = _props_tableStyle === void 0 ? {} : _props_tableStyle, _props_rowStyles = props.// row style
    rowStyles, rowStyles = _props_rowStyles === void 0 ? {} : _props_rowStyles, rowClassName = props.rowClassName, // cell style
    cellClassName = props.cellClassName, _props_cellStyle = props.cellStyle, cellStyle = _props_cellStyle === void 0 ? {} : _props_cellStyle, _props_headerStyle = props.// header styles
    headerStyle, headerStyle = _props_headerStyle === void 0 ? {} : _props_headerStyle, headerCellStyle = props.headerCellStyle, _props_searchInputStyle = props.searchInputStyle, searchInputStyle = _props_searchInputStyle === void 0 ? {} : _props_searchInputStyle, _props_searchInputClassName = props.// search
    searchInputClassName, searchInputClassName = _props_searchInputClassName === void 0 ? "" : _props_searchInputClassName, includeSearch = props.includeSearch, searchPlaceHolder = props.searchPlaceHolder, // sort
    sortKeys = props.sortKeys, _props_sortLabel = props.sortLabel, sortLabel = _props_sortLabel === void 0 ? "Sort by" : _props_sortLabel, _props_filterableColumns = props.// filter
    filterableColumns, filterableColumns = _props_filterableColumns === void 0 ? [] : _props_filterableColumns, _props_filterLabel = props.filterLabel, filterLabel = _props_filterLabel === void 0 ? "Filter by" : _props_filterLabel, // export to excel
    exportToExcelKeys = props.exportToExcelKeys, dataToAddToExcelTable = props.dataToAddToExcelTable, _props_exportExcelLabel = props.exportExcelLabel, exportExcelLabel = _props_exportExcelLabel === void 0 ? "Export to excel" : _props_exportExcelLabel, excelFileName = props.excelFileName, // summary
    sumColumns = props.sumColumns, _props_summaryLabel = props.summaryLabel, summaryLabel = _props_summaryLabel === void 0 ? "" : _props_summaryLabel, _props_summaryContainerStyle = props.summaryContainerStyle, summaryContainerStyle = _props_summaryContainerStyle === void 0 ? {} : _props_summaryContainerStyle, _props_summaryLabelStyle = props.summaryLabelStyle, summaryLabelStyle = _props_summaryLabelStyle === void 0 ? {} : _props_summaryLabelStyle, _props_summaryRowStyle = props.summaryRowStyle, summaryRowStyle = _props_summaryRowStyle === void 0 ? {} : _props_summaryRowStyle, _props_maxRows = props.//  max rows
    maxRows, maxRows = _props_maxRows === void 0 ? data.length : _props_maxRows;
    var _useSort = useSort(), sortColumn = _useSort.sortColumn, sortOrder = _useSort.sortOrder, handleSort = _useSort.handleSort, clearSort = _useSort.clearSort;
    var _useSearch = useSearch(), searchQuery = _useSearch.searchQuery, handleSearch = _useSearch.handleSearch, clearSearch = _useSearch.clearSearch;
    var _useFilter = useFilter({
        data: data,
        filterableColumns: filterableColumns
    }), filters = _useFilter.filters, filterPopupsDisplay = _useFilter.filterPopupsDisplay, filterOptions = _useFilter.filterOptions, handleFilterChange = _useFilter.handleFilterChange, handleFilterClick = _useFilter.handleFilterClick, closeFilterWindow = _useFilter.closeFilterWindow, clearFilter = _useFilter.clearFilter;
    var allKeys = useMemo3(function() {
        return Array.from(data.reduce(function(keys, obj) {
            Object.keys(obj).forEach(function(key) {
                return keys.add(key);
            });
            return keys;
        }, /* @__PURE__ */ new Set()));
    }, [
        data
    ]);
    var dataToRender = useMemo3(function() {
        var filtered = data;
        if (includeSearch && searchQuery.length > 0) {
            filtered = data.filter(function(item) {
                return allKeys.some(function(key) {
                    var _item_key;
                    return (_item_key = item[key]) === null || _item_key === void 0 ? void 0 : _item_key.toString().toLowerCase().includes(searchQuery.toLowerCase());
                });
            });
        }
        if (filterableColumns.length > 0 && filterPopupsDisplay !== "") {
            console.log("filtering ...");
            Object.keys(filters).forEach(function(key) {
                if (filters[key].length > 0) {
                    filtered = filtered.filter(function(item) {
                        return filters[key].includes(item[key]);
                    });
                }
            });
        }
        if (sortColumn !== null && sortOrder !== null && (sortKeys === null || sortKeys === void 0 ? void 0 : sortKeys.length) > 0) {
            console.log("sorting ...");
            filtered = filtered.sort(function(a, b) {
                var aValue = a[sortKeys[sortColumn]];
                var bValue = b[sortKeys[sortColumn]];
                if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
                if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });
        }
        var renderedData = filtered.length > maxRows ? filtered.slice(0, maxRows) : filtered;
        return {
            renderedData: renderedData,
            filtered: filtered
        };
    }, [
        searchQuery,
        sortColumn,
        sortOrder,
        filters,
        data
    ]);
    var providerValues = _object_spread_props(_object_spread({}, props), {
        // props with default values
        direction: direction,
        keysToRender: keysToRender,
        filterableColumns: filterableColumns,
        maxRows: maxRows,
        // states and functions
        sortColumn: sortColumn,
        sortOrder: sortOrder,
        handleSort: handleSort,
        searchQuery: searchQuery,
        handleSearch: handleSearch,
        dataToRender: dataToRender,
        filters: filters,
        filterPopupsDisplay: filterPopupsDisplay,
        filterOptions: filterOptions,
        handleFilterChange: handleFilterChange,
        handleFilterClick: handleFilterClick,
        closeFilterWindow: closeFilterWindow
    });
    return /* @__PURE__ */ jsx7(TableContext.Provider, {
        value: providerValues,
        children: /* @__PURE__ */ jsx7("div", {
            className: "flex flex-col gap-2 ".concat(containerClassName),
            style: _object_spread_props(_object_spread({}, containerStyle), {
                direction: direction
            }),
            children: props.children
        })
    });
};
var Table = function(props) {
    var containerHeaderClassName = props.containerHeaderClassName, optionalElement = props.optionalElement, tableContainerClass = props.tableContainerClass, tableContainerStyle = props.tableContainerStyle, tableStyle = props.tableStyle, includeSearch = props.includeSearch, exportToExcelKeys = props.exportToExcelKeys, sumColumns = props.sumColumns, direction = props.direction, maxRowsLabel1 = props.maxRowsLabel1, maxRowsLabel2 = props.maxRowsLabel2;
    return /* @__PURE__ */ jsxs5(TableProvider, _object_spread_props(_object_spread({}, props), {
        children: [
            /* @__PURE__ */ jsxs5("div", {
                style: {
                    direction: direction
                },
                className: cn("flex justify-start items-center gap-2", containerHeaderClassName || ""),
                children: [
                    includeSearch && /* @__PURE__ */ jsx7(Search, {
                        render: false
                    }),
                    exportToExcelKeys && /* @__PURE__ */ jsx7(ExportToExcel, {
                        render: false
                    }),
                    maxRowsLabel1 && maxRowsLabel2 && /* @__PURE__ */ jsx7(MaxRowsLabel, {}),
                    optionalElement && optionalElement
                ]
            }),
            /* @__PURE__ */ jsx7("div", {
                style: _object_spread_props(_object_spread({}, tableContainerStyle || {}), {
                    direction: direction
                }),
                className: "animate-slide-in-up overflow-y-auto  ".concat(tableContainerClass || ""),
                children: /* @__PURE__ */ jsxs5("table", {
                    style: tableStyle,
                    className: "min-w-full text-sm font-light relative",
                    children: [
                        /* @__PURE__ */ jsx7(TableHead, {}),
                        /* @__PURE__ */ jsx7(TableBody, {
                            render: false
                        })
                    ]
                })
            }),
            sumColumns && /* @__PURE__ */ jsx7(Summary, {
                render: false
            })
        ]
    }));
};
// src/components/forms/index.tsx
import { useState as useState3 } from "react";
import moment2 from "moment";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var InputContainer = function(param) {
    var validationError = param.validationError, _param_name = param.name, name = _param_name === void 0 ? "" : _param_name, _param_inputType = param.inputType, inputType = _param_inputType === void 0 ? "text" : _param_inputType, _param_labelContent = param.labelContent, labelContent = _param_labelContent === void 0 ? "" : _param_labelContent, _param_defaultValue = param.defaultValue, defaultValue = _param_defaultValue === void 0 ? "" : _param_defaultValue, _param_validationName = param.validationName, validationName = _param_validationName === void 0 ? "textNumbers" : _param_validationName, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_labelClassName = param.labelClassName, labelClassName = _param_labelClassName === void 0 ? "" : _param_labelClassName, _param_elementClassName = param.elementClassName, elementClassName = _param_elementClassName === void 0 ? "" : _param_elementClassName, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, onKeyDown = param.onKeyDown;
    return /* @__PURE__ */ jsxs6("div", {
        className: "center ".concat(containerClassName),
        children: [
            /* @__PURE__ */ jsxs6("label", {
                className: "text-start w-[30%] ".concat(labelClassName),
                htmlFor: name,
                children: [
                    labelContent,
                    " :"
                ]
            }),
            /* @__PURE__ */ jsx8("input", _object_spread_props(_object_spread({
                className: "w-[70%] bg-none border-b-[1px] border-black ".concat(elementClassName),
                defaultValue: defaultValue
            }, useValidation(validationName)), {
                required: required,
                name: name,
                onKeyDown: onKeyDown,
                type: inputType
            }))
        ]
    });
};
var SelectContainer = function(param) {
    var _param_name = param.name, name = _param_name === void 0 ? "" : _param_name, _param_labelContent = param.labelContent, labelContent = _param_labelContent === void 0 ? "" : _param_labelContent, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_labelClassName = param.labelClassName, labelClassName = _param_labelClassName === void 0 ? "" : _param_labelClassName, _param_defaultValue = param.defaultValue, defaultValue = _param_defaultValue === void 0 ? "" : _param_defaultValue, _param_elementClassName = param.elementClassName, elementClassName = _param_elementClassName === void 0 ? "" : _param_elementClassName, _param_optionClassName = param.optionClassName, optionClassName = _param_optionClassName === void 0 ? "" : _param_optionClassName, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, _param_options = param.options, options = _param_options === void 0 ? [] : _param_options;
    var _options_, _options_find;
    var _useState3 = _sliced_to_array(useState3(false), 2), isOpen = _useState3[0], setIsOpen = _useState3[1];
    var _useState31 = _sliced_to_array(useState3(defaultValue || ((_options_ = options[0]) === null || _options_ === void 0 ? void 0 : _options_.value) || ""), 2), selectedValue = _useState31[0], setSelectedValue = _useState31[1];
    var handleOptionClick = function(value) {
        setSelectedValue(value);
        setIsOpen(false);
    };
    return /* @__PURE__ */ jsxs6("div", {
        className: "center ".concat(containerClassName),
        children: [
            /* @__PURE__ */ jsxs6("label", {
                className: "text-start w-[30%] ".concat(labelClassName),
                htmlFor: name,
                children: [
                    labelContent,
                    " :"
                ]
            }),
            /* @__PURE__ */ jsxs6("div", {
                className: "w-[70%] relative ".concat(elementClassName),
                onClick: function() {
                    return setIsOpen(!isOpen);
                },
                children: [
                    /* @__PURE__ */ jsx8("div", {
                        className: "border-b-[1px] border-black max-h-6 cursor-pointer ".concat(elementClassName),
                        children: (options === null || options === void 0 ? void 0 : (_options_find = options.find(function(opt) {
                            return opt.value === selectedValue;
                        })) === null || _options_find === void 0 ? void 0 : _options_find.label) || selectedValue
                    }),
                    isOpen ? /* @__PURE__ */ jsx8("i", {
                        className: "fa-light fa-chevron-up absolute top-[1px] left-1 cursor-pointer"
                    }) : /* @__PURE__ */ jsx8("i", {
                        className: "fa-light fa-chevron-down absolute top-[1px] left-1 cursor-pointer"
                    }),
                    isOpen && /* @__PURE__ */ jsx8("div", {
                        className: "absolute w-full bg-white border border-gray-300 max-h-32 overflow-y-auto z-10",
                        children: options.map(function(option) {
                            return /* @__PURE__ */ jsx8("div", {
                                className: "p-2 cursor-pointer hover:bg-gray-200 ".concat(optionClassName),
                                onClick: function() {
                                    return handleOptionClick(option.value);
                                },
                                children: option.label
                            }, option.value);
                        })
                    }),
                    /* @__PURE__ */ jsx8("input", {
                        value: selectedValue,
                        type: "hidden",
                        name: name,
                        required: required
                    })
                ]
            })
        ]
    });
};
var ModularForm = function(param) {
    var _param_submitFunction = param.submitFunction, submitFunction = _param_submitFunction === void 0 ? /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(form) {
            return _ts_generator(this, function(_state) {
                return [
                    2
                ];
            });
        });
        return function(form) {
            return _ref.apply(this, arguments);
        };
    }() : _param_submitFunction, _param_elements = param.elements, elements = _param_elements === void 0 ? [] : _param_elements, headerContent = param.headerContent, _param_buttonContent = param.buttonContent, buttonContent = _param_buttonContent === void 0 ? "" : _param_buttonContent, _param_formClassName = param.formClassName, formClassName = _param_formClassName === void 0 ? "" : _param_formClassName, _param_headerClassName = param.headerClassName, headerClassName = _param_headerClassName === void 0 ? "" : _param_headerClassName, _param_direction = param.direction, direction = _param_direction === void 0 ? "rtl" : _param_direction;
    var _useState3 = _sliced_to_array(useState3(""), 2), errorMsg = _useState3[0], setErrorMsg = _useState3[1];
    var _useState31 = _sliced_to_array(useState3(false), 2), isLoading = _useState31[0], setIsLoading = _useState31[1];
    var onSubmit = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(e) {
            var err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        setIsLoading(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            submitFunction(e)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        err = _state.sent();
                        if (typeof err === "string") {
                            setErrorMsg(err);
                        }
                        console.error("Error from submit ModularForm:", err);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        setIsLoading(false);
                        return [
                            2
                        ];
                }
            });
        });
        return function onSubmit(e) {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ jsxs6("form", {
        onSubmit: onSubmit,
        style: {
            direction: direction
        },
        className: "w-[350px] px-5 py-5 flex flex-col gap-5 ".concat(formClassName),
        children: [
            /* @__PURE__ */ jsx8("div", {
                className: "border-b-2 border-[#547f22] pb-2 text-start font-bold text-[20px] ".concat(headerClassName),
                children: headerContent
            }),
            elements.map(function(element, index) {
                switch(element.type){
                    case "input":
                        return /* @__PURE__ */ jsx8(InputContainer, _object_spread({}, element), index);
                    case "select":
                        return /* @__PURE__ */ jsx8(SelectContainer, _object_spread({}, element), index);
                    default:
                        return null;
                }
            }),
            /* @__PURE__ */ jsxs6("div", {
                className: "flex justify-between w-full",
                children: [
                    /* @__PURE__ */ jsx8("div", {
                        title: errorMsg,
                        className: "text-[#f22] text-[18px] max-w-[80%] ellipsis",
                        children: errorMsg
                    }),
                    /* @__PURE__ */ jsx8("button", {
                        disabled: isLoading,
                        className: "bg-[#547f22] px-3 py-1 rounded-lg text-white min-w-20",
                        type: "submit",
                        children: isLoading ? /* @__PURE__ */ jsx8(Loader, {
                            size: 25,
                            color: "#fff"
                        }) : buttonContent
                    })
                ]
            })
        ]
    });
};
var ConfirmForm = function(param) {
    var onV = param.onV, onX = param.onX, _param_headline = param.headline, headline = _param_headline === void 0 ? "" : _param_headline, _param_direction = param.direction, direction = _param_direction === void 0 ? "rtl" : _param_direction;
    var onConfirm = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            onV()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        console.error("'onV' failed:", error);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function onConfirm() {
            return _ref.apply(this, arguments);
        };
    }();
    var onDenied = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            onX()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        console.error("'onX' failed:", error);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function onDenied() {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ jsxs6("div", {
        style: {
            direction: direction,
            padding: "30px"
        },
        className: "full col gap-2",
        children: [
            /* @__PURE__ */ jsx8("div", {
                className: "text-lg font-bold",
                children: headline
            }),
            /* @__PURE__ */ jsxs6("div", {
                className: "center gap-2 ",
                children: [
                    /* @__PURE__ */ jsxs6("button", {
                        onClick: onDenied,
                        children: [
                            " ",
                            /* @__PURE__ */ jsx8(RedXSvg, {}),
                            " "
                        ]
                    }),
                    /* @__PURE__ */ jsxs6("button", {
                        onClick: onConfirm,
                        children: [
                            " ",
                            /* @__PURE__ */ jsx8(GreenVSvg, {}),
                            " "
                        ]
                    })
                ]
            })
        ]
    });
};
var DatePicker = function(param) {
    var _param_submit = param.submit, submit = _param_submit === void 0 ? /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(form) {
            return _ts_generator(this, function(_state) {
                return [
                    2
                ];
            });
        });
        return function(form) {
            return _ref.apply(this, arguments);
        };
    }() : _param_submit, _param_formClassName = param.formClassName, formClassName = _param_formClassName === void 0 ? "" : _param_formClassName, _param_labelsClassName = param.labelsClassName, labelsClassName = _param_labelsClassName === void 0 ? "" : _param_labelsClassName, _param_inputsClassName = param.inputsClassName, inputsClassName = _param_inputsClassName === void 0 ? "" : _param_inputsClassName, _param_buttonClassName = param.buttonClassName, buttonClassName = _param_buttonClassName === void 0 ? "" : _param_buttonClassName, _param_buttonStyle = param.buttonStyle, buttonStyle = _param_buttonStyle === void 0 ? {} : _param_buttonStyle, defaultFrom = param.defaultFrom, defaultTo = param.defaultTo, _param_direction = param.direction, direction = _param_direction === void 0 ? "rtl" : _param_direction, _param_fromText = param.fromText, fromText = _param_fromText === void 0 ? "From date" : _param_fromText, _param_toText = param.toText, toText = _param_toText === void 0 ? "To date" : _param_toText, _param_buttonText = param.buttonText, buttonText = _param_buttonText === void 0 ? "Search" : _param_buttonText;
    var _useState3 = _sliced_to_array(useState3(false), 2), isLoading = _useState3[0], setIsLoading = _useState3[1];
    var onSubmit = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(e) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        setIsLoading(true);
                        return [
                            4,
                            submit(e)
                        ];
                    case 1:
                        _state.sent();
                        setIsLoading(false);
                        return [
                            2
                        ];
                }
            });
        });
        return function onSubmit(e) {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ jsxs6("form", {
        style: {
            direction: direction
        },
        onSubmit: onSubmit,
        className: "w-full h-10 flex justify-start gap-3 items-center ".concat(formClassName),
        children: [
            /* @__PURE__ */ jsxs6("label", {
                className: "center text-[14px] relative gap-2 ".concat(labelsClassName),
                htmlFor: "from",
                children: [
                    fromText,
                    /* @__PURE__ */ jsx8("input", {
                        className: "w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ".concat(inputsClassName),
                        type: "date",
                        name: "from",
                        defaultValue: defaultFrom || moment2(/* @__PURE__ */ new Date()).format("YYYY-MM-DD")
                    })
                ]
            }),
            /* @__PURE__ */ jsxs6("label", {
                className: "center text-[14px] relative gap-2 ".concat(labelsClassName),
                htmlFor: "to",
                children: [
                    toText,
                    /* @__PURE__ */ jsx8("input", {
                        className: "w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ".concat(inputsClassName),
                        type: "date",
                        name: "to",
                        defaultValue: defaultTo || moment2(/* @__PURE__ */ new Date()).format("YYYY-MM-DD")
                    })
                ]
            }),
            /* @__PURE__ */ jsx8("button", {
                disabled: isLoading,
                style: buttonStyle,
                className: "bg-[#699a2c] text-[#fff] font-[500] w-[75px] h-[27px] ".concat(buttonClassName),
                type: "submit",
                children: isLoading ? /* @__PURE__ */ jsx8(Loader, {
                    className: "pt-[2px]",
                    size: 20,
                    color: "#fff"
                }) : buttonText
            })
        ]
    });
};
export { Checkbox, ConfirmForm, DatePicker, ErrorBoundary, ExportToExcel, Filter, InputContainer, Loader, MaxRowsLabel, ModularForm, Search, SelectContainer, Summary, Table, TableBody, TableCell, TableContext, TableHead, TableProvider, TableRow, getFixedNumber };
//# sourceMappingURL=index.mjs.map