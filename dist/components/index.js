"use strict";
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/components/index.tsx
var components_exports = {};
__export(components_exports, {
    Badge: function() {
        return Badge;
    },
    Button: function() {
        return Button;
    },
    Checkbox: function() {
        return Checkbox;
    },
    CodeInput: function() {
        return CodeInput;
    },
    ConfirmForm: function() {
        return ConfirmForm;
    },
    DatePicker: function() {
        return DatePicker;
    },
    DurationUI: function() {
        return DurationUI;
    },
    ErrorBoundary: function() {
        return ErrorBoundary;
    },
    ExportToExcel: function() {
        return ExportToExcel;
    },
    Filter: function() {
        return Filter;
    },
    Input: function() {
        return Input;
    },
    InputContainer: function() {
        return InputContainer;
    },
    InternationalPhonePicker: function() {
        return InternationalPhonePicker;
    },
    Loader: function() {
        return Loader;
    },
    MaxRowsLabel: function() {
        return MaxRowsLabel;
    },
    ModularForm: function() {
        return ModularForm;
    },
    ProgressComponent: function() {
        return ProgressComponent;
    },
    Search: function() {
        return Search;
    },
    SelectContainer: function() {
        return SelectContainer;
    },
    Summary: function() {
        return Summary;
    },
    Table: function() {
        return Table;
    },
    TableBody: function() {
        return TableBody;
    },
    TableButton: function() {
        return TableButton;
    },
    TableCell: function() {
        return TableCell;
    },
    TableContext: function() {
        return TableContext;
    },
    TableHead: function() {
        return TableHead;
    },
    TableProvider: function() {
        return TableProvider;
    },
    TableRow: function() {
        return TableRow2;
    },
    TeatMultipleSelector: function() {
        return TeatMultipleSelector;
    },
    TimesUI: function() {
        return TimesUI;
    },
    Version: function() {
        return Version;
    },
    badgeVariants: function() {
        return badgeVariants;
    },
    buttonVariants: function() {
        return buttonVariants;
    },
    getFixedNumber: function() {
        return getFixedNumber;
    },
    useDebounce: function() {
        return useDebounce;
    }
});
module.exports = __toCommonJS(components_exports);
// src/components/utils/Checkboxes.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Checkbox = function(param) {
    var id = param.id, checked = param.checked, setChecked = param.setChecked, _param_rotate = param.rotate, rotate = _param_rotate === void 0 ? true : _param_rotate, style = param.style;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "checkbox-wrapper-51",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                type: "checkbox",
                id: id,
                className: "hidden",
                checked: checked,
                onChange: function() {
                    return setChecked(!checked);
                }
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
                htmlFor: id,
                className: "relative block w-[42px] h-[24px] cursor-pointer transform-gpu",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "relative top-[1px] left-[1px] w-[40px] h-[22px] rounded-[12px] transition-colors duration-200 ease-in-out ".concat(checked ? "bg-[#52d66b]" : "bg-[#c8ccd4]")
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "absolute ".concat(rotate ? "left-0" : "right-0", " top-0  w-[24px] h-[24px] bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ").concat(checked ? rotate ? "translate-x-[18px]" : "-translate-x-[18px]" : ""),
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
                            width: "10px",
                            height: "10px",
                            viewBox: "0 0 10 10",
                            className: "m-[7px] fill-none",
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
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
var import_react = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var ErrorBoundary = /*#__PURE__*/ function(_import_react_default_Component) {
    "use strict";
    _inherits(ErrorBoundary, _import_react_default_Component);
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
                    return this.props.fallback || /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
                        className: "full center",
                        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", {
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
}(import_react.default.Component);
// src/components/utils/loaders.tsx
var import_react_spinners = require("react-spinners");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Loader = function(param) {
    var color = param.color, size = param.size, _param_style = param.style, style = _param_style === void 0 ? {} : _param_style, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        className: "flex items-center justify-center ".concat(className),
        style: style,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_spinners.ClipLoader, {
            loading: true,
            color: color || "#699A2C",
            size: size || 18
        })
    });
};
// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// src/components/utils/global.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Version = function(param) {
    var version = param.version, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
        className: cn("absolute text-black z-30 bottom-[0px] text-xs right-0 px-1 ", className),
        children: [
            "v",
            version
        ]
    });
};
// src/components/table/components.tsx
var import_exceljs = __toESM(require("exceljs"));
var import_file_saver = require("file-saver");
var import_react5 = require("react");
// src/assets/svg.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var RedXSvg = function(param) {
    var height = param.height, width = param.width, viewBox = param.viewBox;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width || "32",
        height: height || "32",
        viewBox: viewBox || "0 0 32 32",
        fill: "none",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                d: "M21.0801 10.3C20.6101 9.80996 19.8301 9.79996 19.3401 10.27L15.6101 13.89L11.8801 10.27C11.3901 9.79996 10.6101 9.80996 10.1401 10.3C9.67008 10.79 9.68008 11.57 10.1701 12.04L13.8501 15.61L10.1701 19.18C9.68008 19.65 9.67008 20.43 10.1401 20.92C10.6101 21.41 11.3901 21.42 11.8801 20.95L15.6101 17.33L19.3401 20.95C19.5701 21.17 19.8801 21.3 20.2001 21.3C20.8801 21.29 21.4301 20.73 21.4201 20.04C21.4201 19.72 21.2901 19.41 21.0601 19.19L17.3801 15.62L21.0601 12.05C21.5501 11.58 21.5601 10.8 21.0901 10.31L21.0801 10.3Z",
                fill: "#FF4C2B"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                d: "M15.61 0C6.99 0 0 6.99 0 15.61C0.86 36.32 30.36 36.31 31.22 15.61C31.21 6.99 24.23 0 15.61 0ZM15.61 28.76C8.35 28.76 2.47 22.87 2.46 15.61C3.18 -1.84 28.04 -1.83 28.76 15.61C28.76 22.87 22.87 28.75 15.61 28.76Z",
                fill: "#FF4C2B"
            })
        ]
    });
};
var RedXSvg2 = function(param) {
    var height = param.height, width = param.width, viewBox = param.viewBox;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width || "18px",
        height: height || "18px",
        viewBox: viewBox || "0,0,256,256",
        fillRule: "nonzero",
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("g", {
            fill: "#e90404",
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: "1",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("g", {
                transform: "scale(10.66667,10.66667)",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                    d: "M4.99023,3.99023c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l6.29297,6.29297l-6.29297,6.29297c-0.26124,0.25082 -0.36647,0.62327 -0.27511,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27511l6.29297,-6.29297l6.29297,6.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-6.29297,-6.29297l6.29297,-6.29297c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-6.29297,6.29297l-6.29297,-6.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273z"
                })
            })
        })
    });
};
var GreenVSvg = function(param) {
    var height = param.height, width = param.width, viewBox = param.viewBox;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width || "32",
        height: height || "32",
        viewBox: viewBox || "0 0 32 32",
        fill: "none",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                d: "M15.61 0C6.99 0 0.01 6.99 0 15.61C0.86 36.32 30.36 36.31 31.22 15.61C31.21 6.99 24.23 0 15.61 0ZM15.61 28.76C8.35 28.76 2.47 22.87 2.46 15.61C3.18 -1.84 28.04 -1.83 28.76 15.61C28.76 22.87 22.87 28.75 15.61 28.76Z",
                fill: "#3B8F08"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
                d: "M21.66 10.15L13.37 18.44L9.58003 14.54C9.10003 14.06 8.32003 14.07 7.84003 14.54C7.38003 15.01 7.36003 15.76 7.82003 16.24L12.48 21.03C12.96 21.52 13.74 21.52 14.23 21.05L23.41 11.87C23.88 11.38 23.87 10.6 23.38 10.13C22.9 9.67003 22.15 9.67003 21.68 10.13L21.66 10.15Z",
                fill: "#3B8F08"
            })
        ]
    });
};
// src/assets/table.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var sortSvg = function(upside_down) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", {
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
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", {
                transform: "translate(0.000000,1536.000000) scale(0.100000,-0.100000)",
                fill: "#fff",
                stroke: "none",
                children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, {
        children: solid ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", {
            version: "1.0",
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "13",
            viewBox: "0 0 900.000000 900.000000",
            preserveAspectRatio: "xMidYMid meet",
            children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", {
                    transform: "translate(0.000000,900.000000) scale(0.100000,-0.100000)",
                    fill: "#fff",
                    stroke: "none",
                    children: [
                        " ",
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                            d: "M382 8980 c-7 -11 -19 -20 -27 -20 -46 0 -166 -99 -196 -162 -46 -95 -51 -115 -47 -199 3 -70 9 -95 37 -149 42 -85 45 -90 118 -190 34 -47 72 -98 83 -115 12 -16 50 -70 85 -120 143 -200 188 -263 235 -330 27 -38 56 -79 64 -90 8 -11 46 -65 85 -120 38 -55 96 -136 128 -179 32 -44 60 -84 62 -90 2 -6 32 -48 65 -93 34 -45 99 -137 146 -203 47 -66 113 -159 148 -205 34 -46 62 -87 62 -90 0 -4 20 -33 45 -65 25 -32 45 -61 45 -64 0 -3 33 -50 73 -105 39 -54 106 -146 147 -205 41 -58 103 -144 138 -191 34 -46 62 -87 62 -90 0 -3 22 -36 50 -73 27 -37 61 -83 75 -102 14 -19 59 -82 100 -140 41 -58 95 -133 120 -167 25 -34 45 -66 45 -70 0 -4 13 -22 28 -40 15 -17 47 -61 72 -97 25 -37 74 -107 110 -156 36 -50 99 -138 140 -196 41 -58 108 -150 148 -205 39 -54 72 -102 72 -105 0 -3 20 -32 45 -64 25 -32 45 -62 45 -67 0 -5 14 -22 30 -38 17 -16 30 -33 30 -38 0 -5 19 -34 43 -65 90 -122 154 -259 178 -387 11 -56 14 -423 19 -1850 l5 -1780 29 -58 c36 -71 112 -148 168 -171 24 -10 51 -22 60 -27 24 -12 205 -11 213 1 3 6 15 10 25 10 11 0 34 6 52 14 18 8 52 21 76 30 64 24 118 44 165 62 23 8 55 22 70 30 16 8 36 14 46 14 9 0 26 7 37 15 10 8 27 15 37 15 11 0 31 6 45 14 15 8 47 22 72 31 25 9 60 23 78 31 18 8 39 14 47 14 7 0 26 6 42 14 15 8 48 22 73 31 25 10 57 23 72 31 14 8 35 14 45 14 11 0 28 7 39 15 10 8 26 15 35 15 14 0 62 19 197 76 18 8 40 14 48 14 9 0 28 6 42 14 28 15 36 18 235 92 23 9 56 22 72 29 17 7 50 21 75 31 84 34 127 77 181 182 9 18 20 56 24 85 4 28 10 714 14 1522 6 1402 7 1472 25 1520 41 109 110 235 188 344 46 62 88 121 93 130 6 9 30 45 55 80 72 101 159 222 250 351 47 67 113 159 148 205 34 46 62 87 62 90 0 4 27 42 60 85 33 43 60 81 60 84 0 3 22 36 50 73 27 37 60 83 72 101 13 18 30 41 38 52 8 10 35 49 60 85 25 37 73 104 108 150 34 46 62 87 62 90 0 3 33 50 73 103 40 53 81 111 91 127 11 17 45 65 78 107 32 43 58 80 58 83 0 4 20 33 45 65 25 32 45 63 45 70 0 6 7 13 15 16 8 4 15 10 15 16 0 5 26 44 58 86 32 42 70 95 85 117 64 95 144 206 208 292 38 51 69 95 69 99 0 3 13 23 29 43 26 33 92 126 193 271 21 30 48 68 60 85 85 112 108 144 108 150 0 3 27 42 60 85 33 43 60 81 60 85 0 3 28 44 63 90 34 47 82 114 107 151 25 36 50 71 56 77 5 7 32 44 58 82 27 39 62 86 77 106 16 20 29 42 29 48 0 6 4 11 8 11 5 0 25 32 45 71 36 68 37 75 37 175 0 118 -13 163 -69 234 -37 48 -127 112 -173 124 -16 3 -28 13 -28 21 0 13 -486 15 -4103 15 -4091 0 -4102 0 -4115 -20z"
                        }),
                        " "
                    ]
                }),
                " "
            ]
        }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", {
            version: "1.0",
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "13",
            viewBox: "0 0 300.000000 300.000000",
            preserveAspectRatio: "xMidYMid meet",
            children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", {
                    transform: "translate(0.000000,300.000000) scale(0.050000,-0.050000)",
                    fill: "#fff",
                    stroke: "none",
                    children: [
                        " ",
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, {
        children: solid ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
            className: "mt-[-4px] mr-[-2px] ",
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", {
                version: "1.0",
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "20",
                viewBox: "0 0 900.000000 900.000000",
                preserveAspectRatio: "xMidYMid meet",
                children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", {
                        transform: "translate(0.000000,900.000000) scale(0.100000,-0.100000)",
                        fill: "#fff",
                        stroke: "none",
                        children: [
                            " ",
                            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                                d: "M1000 8221 c-71 -27 -103 -47 -149 -92 -122 -123 -144 -294 -58 -456 22 -42 6838 -6858 6880 -6880 162 -86 333 -64 456 58 123 123 144 294 57 458 -10 19 -508 525 -1107 1124 l-1089 1089 1 256 1 257 676 1350 677 1350 115 6 c125 6 173 20 244 68 54 37 89 78 124 145 24 46 27 61 27 161 0 100 -3 115 -28 162 -52 100 -119 157 -225 194 -54 18 -131 19 -2817 19 l-2762 0 -341 340 c-188 186 -356 347 -374 357 -103 55 -220 68 -308 34z"
                            }),
                            " ",
                            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                                d: "M2340 5338 c0 -7 146 -305 325 -662 l325 -649 0 -1112 c0 -1043 1 -1114 18 -1160 27 -76 47 -107 94 -154 48 -47 80 -67 153 -93 46 -17 120 -18 1231 -18 1085 0 1186 1 1235 17 30 9 66 24 81 33 68 40 158 146 158 186 0 14 -3600 3624 -3614 3624 -3 0 -6 -6 -6 -12z"
                            }),
                            " "
                        ]
                    }),
                    " "
                ]
            })
        }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
            className: "mt-[-4px] mr-[-2px] ",
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", {
                version: "1.0",
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "20",
                viewBox: "0 0 900.000000 900.000000",
                preserveAspectRatio: "xMidYMid meet",
                children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", {
                        transform: "translate(0.000000,900.000000) scale(0.100000,-0.100000)",
                        fill: "#fff",
                        stroke: "none",
                        children: [
                            " ",
                            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                                d: "M1000 8221 c-71 -27 -103 -47 -149 -92 -122 -123 -144 -294 -58 -456 22 -42 6838 -6858 6880 -6880 162 -86 333 -64 456 58 123 123 144 294 57 458 -10 19 -508 525 -1107 1124 l-1089 1089 1 256 1 257 676 1350 677 1350 115 6 c125 6 173 20 244 68 54 37 89 78 124 145 24 46 27 61 27 161 0 100 -3 115 -28 162 -52 100 -119 157 -225 194 -54 18 -131 19 -2817 19 l-2762 0 -341 340 c-188 186 -356 347 -374 357 -103 55 -220 68 -308 34z m5494 -1490 c6 -10 -1204 -2436 -1226 -2458 -13 -13 -168 139 -1247 1217 -677 677 -1231 1236 -1231 1241 0 12 3697 12 3704 0z"
                            }),
                            " ",
                            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", {
        version: "1.0",
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 150.000000 150.000000",
        preserveAspectRatio: "xMidYMid meet",
        children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", {
                transform: "translate(0.000000,150.000000) scale(0.100000,-0.100000)",
                fill: "#ffffff",
                stroke: "none",
                children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                        d: "M205 1418 c-3 -7 -4 -317 -3 -688 l3 -675 435 -3 c239 -1 441 0 449 3 11 4 9 11 -9 30 l-23 25 -396 2 -396 3 0 625 0 625 280 0 280 0 5 -190 5 -190 190 -5 190 -5 5 -175 5 -175 25 0 25 0 3 200 2 199 -202 203 -203 203 -333 0 c-257 0 -334 -3 -337 -12z m828 -235 c70 -70 127 -131 127 -135 0 -5 -60 -7 -132 -6 l-133 3 -3 133 c-1 72 1 132 6 132 4 0 65 -57 135 -127z"
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                        d: "M518 915 c-6 -6 9 -37 42 -90 11 -16 23 -37 27 -45 4 -8 19 -36 35 -61 15 -25 28 -56 28 -68 0 -20 -29 -69 -121 -209 -16 -24 -29 -47 -29 -53 0 -5 31 -9 68 -9 l69 0 42 82 c60 116 66 118 107 35 56 -114 53 -112 127 -115 51 -2 67 0 67 11 0 7 -5 18 -11 24 -11 11 -26 36 -49 78 -6 11 -19 34 -30 50 -11 17 -24 40 -29 52 -5 11 -15 24 -20 28 -26 16 -18 33 97 212 25 39 39 70 34 75 -5 5 -36 8 -68 6 l-59 -3 -42 -84 c-24 -46 -45 -86 -48 -89 -6 -6 -44 40 -45 54 0 6 -13 35 -29 65 l-28 54 -65 3 c-35 2 -67 0 -70 -3z"
                    }),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", {
                        d: "M1135 548 c-3 -7 -6 -67 -7 -133 l-3 -120 -55 -3 c-30 -1 -61 -5 -68 -7 -8 -3 28 -53 95 -132 122 -146 129 -153 140 -153 4 0 22 17 38 37 26 32 53 63 175 206 13 15 30 27 38 27 9 0 12 3 8 7 -3 4 -39 9 -79 12 l-72 6 -5 130 -5 130 -98 3 c-72 2 -99 -1 -102 -10z m145 -183 l5 -130 28 -3 c15 -2 27 -8 27 -14 0 -18 -92 -128 -107 -128 -11 1 -97 107 -101 125 -2 8 7 15 25 17 l28 3 3 120 c1 66 4 126 7 133 3 9 18 12 42 10 l38 -3 5 -130z"
                    }),
                    " "
                ]
            }),
            " "
        ]
    });
};
// src/components/table/hooks.tsx
var import_react3 = require("react");
var import_zustand = require("zustand");
var import_lodash2 = require("lodash");
// src/components/table/Table.tsx
var import_react2 = __toESM(require("react"));
var import_lodash = require("lodash");
var import_jsx_runtime7 = require("react/jsx-runtime");
var TableContext = (0, import_react2.createContext)(null);
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
    var _useSearch = useSearch(), searchQuery = _useSearch.searchQuery, handleSearch = _useSearch.handleSearch, clearSearch = _useSearch.clearSearch, deferredSearchQuery = _useSearch.deferredSearchQuery;
    var _useFilter = useFilter({
        data: data,
        filterableColumns: filterableColumns
    }), filters = _useFilter.filters, filterPopupsDisplay = _useFilter.filterPopupsDisplay, filterOptions = _useFilter.filterOptions, handleFilterChange = _useFilter.handleFilterChange, handleFilterClick = _useFilter.handleFilterClick, closeFilterWindow = _useFilter.closeFilterWindow, clearFilter = _useFilter.clearFilter;
    var allKeys = (0, import_react2.useMemo)(function() {
        return Array.from(data.reduce(function(keys, obj) {
            Object.keys(obj).forEach(function(key) {
                return keys.add(key);
            });
            return keys;
        }, /* @__PURE__ */ new Set()));
    }, [
        data
    ]);
    var dataToRender = (0, import_react2.useMemo)(function() {
        var filtered = data;
        if (includeSearch && deferredSearchQuery.length > 0) {
            filtered = data.filter(function(item) {
                return allKeys.some(function(key) {
                    var _item_key;
                    return (_item_key = item[key]) === null || _item_key === void 0 ? void 0 : _item_key.toString().toLowerCase().includes(deferredSearchQuery.toLowerCase());
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
        deferredSearchQuery,
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
        deferredSearchQuery: deferredSearchQuery,
        handleSearch: handleSearch,
        dataToRender: dataToRender,
        filters: filters,
        filterPopupsDisplay: filterPopupsDisplay,
        filterOptions: filterOptions,
        handleFilterChange: handleFilterChange,
        handleFilterClick: handleFilterClick,
        closeFilterWindow: closeFilterWindow
    });
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TableContext.Provider, {
        value: providerValues,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
            className: "flex flex-col gap-2 ".concat(containerClassName),
            style: _object_spread_props(_object_spread({}, containerStyle), {
                direction: direction
            }),
            children: props.children
        })
    });
};
var TableBase = function(props) {
    var containerHeaderClassName = props.containerHeaderClassName, optionalElement = props.optionalElement, tableContainerClass = props.tableContainerClass, tableContainerStyle = props.tableContainerStyle, tableStyle = props.tableStyle, includeSearch = props.includeSearch, exportToExcelKeys = props.exportToExcelKeys, sumColumns = props.sumColumns, direction = props.direction, maxRowsLabel1 = props.maxRowsLabel1, maxRowsLabel2 = props.maxRowsLabel2;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(TableProvider, _object_spread_props(_object_spread({}, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                style: {
                    direction: direction
                },
                className: cn("flex justify-start items-center gap-2", containerHeaderClassName || ""),
                children: [
                    includeSearch && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Search, {}),
                    exportToExcelKeys && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ExportToExcel, {}),
                    maxRowsLabel1 && maxRowsLabel2 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MaxRowsLabel, {}),
                    optionalElement && optionalElement
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                style: _object_spread_props(_object_spread({}, tableContainerStyle || {}), {
                    direction: direction
                }),
                className: "animate-slide-in-up overflow-y-auto  ".concat(tableContainerClass || ""),
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("table", {
                    style: tableStyle,
                    className: "min-w-full text-sm font-light relative",
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TableHead, {}),
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TableBody, {})
                    ]
                })
            }),
            sumColumns && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Summary, {})
        ]
    }));
};
var areEqual = function(prevProps, nextProps) {
    return (0, import_lodash.isEqual)(prevProps, nextProps);
};
var Table = import_react2.default.memo(TableBase, areEqual);
Table.displayName = "Table";
// src/components/table/hooks.tsx
var useTableContext = function() {
    var context = (0, import_react3.useContext)(TableContext);
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
    var _ref = _sliced_to_array((0, import_react3.useState)(initFilter), 2), filters = _ref[0], setFilters = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react3.useState)(""), 2), filterPopupsDisplay = _ref1[0], setFilterPopupsDisplay = _ref1[1];
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
        if (!(0, import_lodash2.isEqual)(filters, initFilter)) {
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
    var _ref = _sliced_to_array((0, import_react3.useState)(null), 2), sortColumn = _ref[0], setSortColumn = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react3.useState)(null), 2), sortOrder = _ref1[0], setSortOrder = _ref1[1];
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
    var _ref = _sliced_to_array((0, import_react3.useState)(""), 2), searchQuery = _ref[0], setSearchQuery = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react3.useTransition)(), 2), isPending = _ref1[0], startTransition = _ref1[1];
    var deferredSearchQuery = (0, import_react3.useDeferredValue)(searchQuery);
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
        isPending: isPending,
        deferredSearchQuery: deferredSearchQuery
    };
};
// src/helpers/firebase.ts
var import_moment = __toESM(require("moment"));
var import_app = require("firebase/app");
var import_storage = require("firebase/storage");
var import_auth = require("firebase/auth");
var import_firestore = require("firebase/firestore");
var import_meta = {};
var initApp = function() {
    var isNodeEnv = typeof process !== "undefined" && process.env;
    var firebaseConfig = {
        apiKey: isNodeEnv ? process.env.NEXT_PUBLIC_API_KEY : import_meta.env.VITE_API_KEY,
        authDomain: isNodeEnv ? process.env.NEXT_PUBLIC_AUTH_DOMAIN : import_meta.env.VITE_AUTH_DOMAIN,
        projectId: isNodeEnv ? process.env.NEXT_PUBLIC_PROJECT_ID : import_meta.env.VITE_PROJECT_ID,
        storageBucket: isNodeEnv ? process.env.NEXT_PUBLIC_STORAGE_BUCKET : import_meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: isNodeEnv ? process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID : import_meta.env.VITE_MESSAGING_SENDER_ID,
        appId: isNodeEnv ? process.env.NEXT_PUBLIC_APP_ID : import_meta.env.VITE_APP_ID
    };
    try {
        var app = (0, import_app.initializeApp)(firebaseConfig);
        var auth2 = (0, import_auth.getAuth)(app);
        var db2 = (0, import_firestore.getFirestore)(app);
        var storage2 = (0, import_storage.getStorage)(app);
        return {
            db: db2,
            auth: auth2,
            storage: storage2
        };
    } catch (error) {
        console.error("Failed to initialize Firebase app:", error);
        return {
            db: null,
            auth: null
        };
    }
};
var _initApp = initApp(), db = _initApp.db, auth = _initApp.auth, storage = _initApp.storage;
var collections = {
    clients: (0, import_firestore.collection)(db, "nx-clients"),
    sites: (0, import_firestore.collection)(db, "nx-sites"),
    cars: (0, import_firestore.collection)(db, "units"),
    users: (0, import_firestore.collection)(db, "nx-users"),
    lastLocations: (0, import_firestore.collection)(db, "last_locations"),
    ermEvents: (0, import_firestore.collection)(db, "erm_events_general"),
    erm2Events: (0, import_firestore.collection)(db, "erm2_events_general"),
    ruptelaEvents: (0, import_firestore.collection)(db, "ruptela_events_general"),
    polygons: (0, import_firestore.collection)(db, "nx-polygons"),
    polygonEvents: (0, import_firestore.collection)(db, "polygon_events"),
    polygonCars: (0, import_firestore.collection)(db, "polygon_cars"),
    canbus: (0, import_firestore.collection)(db, "erm_canbus_parameters"),
    states: (0, import_firestore.collection)(db, "erm_states"),
    app_pro_commands_queue: (0, import_firestore.collection)(db, "app_pro_commands_queue"),
    trips: (0, import_firestore.collection)(db, "erm2_trip"),
    tripsDetails: (0, import_firestore.collection)(db, "erm2_trip_details"),
    audit: (0, import_firestore.collection)(db, "nx-audit"),
    nx_settings: (0, import_firestore.collection)(db, "nx-settings"),
    settings: (0, import_firestore.collection)(db, "settings"),
    translations: (0, import_firestore.collection)(db, "nx-translations"),
    nx_cars: (0, import_firestore.collection)(db, "nx-cars"),
    boards: (0, import_firestore.collection)(db, "boards"),
    protection_types: (0, import_firestore.collection)(db, "protectionTypes"),
    board_types: (0, import_firestore.collection)(db, "boardTypes"),
    charge_capacities: (0, import_firestore.collection)(db, "nx-charge-capacities")
};
var fire_base_TIME_TEMP = import_firestore.Timestamp.now;
// src/helpers/global.ts
var import_akeyless_types_commons = require("akeyless-types-commons");
var import_axios = __toESM(require("axios"));
// src/helpers/phoneNumber.ts
var import_libphonenumber_js = require("libphonenumber-js");
// src/helpers/global.ts
var renderOnce = function() {
    return true;
};
// src/helpers/forms.ts
var import_xregexp = __toESM(require("xregexp"));
var textRegex = (0, import_xregexp.default)("[^\\p{L}\\s-]", "gu");
var numbersRegex = (0, import_xregexp.default)("[^0-9\\s-+]", "g");
var numbersOnlyRegex = (0, import_xregexp.default)("[^0-9]", "g");
var priceRegex = (0, import_xregexp.default)("[^0-9.]", "g");
var emailRegex = (0, import_xregexp.default)("[^\\p{L}0-9.@\\s-]", "gu");
var colorRegex = (0, import_xregexp.default)("[^#0-9A-Fa-f]", "g");
var carsRegex = (0, import_xregexp.default)("[^\\p{L}0-9,_]", "gu");
var textNumbersRegex = (0, import_xregexp.default)("[^\\p{L}0-9\\s+\\-]", "gu");
var addressRegex = (0, import_xregexp.default)("[^\\p{L}0-9\\s.,\\-]", "gu");
var chartsRegex = (0, import_xregexp.default)("[^\\p{L}0-9\\s.,_@!\\-]", "gu");
var handleChange = function(e) {
    e.target.setCustomValidity("");
    var validation = e.target.getAttribute("data-validation");
    if (validation === "text") {
        e.target.value = import_xregexp.default.replace(e.target.value, textRegex, "");
    } else if (validation === "numbers") {
        e.target.value = import_xregexp.default.replace(e.target.value, numbersRegex, "");
    } else if (validation === "numbersOnly") {
        e.target.value = import_xregexp.default.replace(e.target.value, numbersOnlyRegex, "");
    } else if (validation === "price") {
        e.target.value = import_xregexp.default.replace(e.target.value, priceRegex, "");
    } else if (validation === "textNumbers") {
        e.target.value = import_xregexp.default.replace(e.target.value, textNumbersRegex, "");
    } else if (validation === "email") {
        e.target.value = import_xregexp.default.replace(e.target.value, emailRegex, "");
    } else if (validation === "color") {
        e.target.value = import_xregexp.default.replace(e.target.value, colorRegex, "");
    } else if (validation === "address") {
        e.target.value = import_xregexp.default.replace(e.target.value, addressRegex, "");
    } else if (validation === "cars") {
        e.target.value = import_xregexp.default.replace(e.target.value, carsRegex, "");
    } else if (validation === "charts") {
        e.target.value = import_xregexp.default.replace(e.target.value, chartsRegex, "");
    }
};
var handlePaste = function(e) {
    var validation = e.currentTarget.getAttribute("data-validation");
    var pasteData = e.clipboardData.getData("text");
    if (validation === "text") {
        pasteData = import_xregexp.default.replace(pasteData, textRegex, "");
    } else if (validation === "numbers") {
        pasteData = import_xregexp.default.replace(pasteData, numbersRegex, "");
    } else if (validation === "numbersOnly") {
        pasteData = import_xregexp.default.replace(pasteData, numbersOnlyRegex, "");
    } else if (validation === "price") {
        pasteData = import_xregexp.default.replace(pasteData, priceRegex, "");
    } else if (validation === "textNumbers") {
        pasteData = import_xregexp.default.replace(pasteData, textNumbersRegex, "");
    } else if (validation === "email") {
        pasteData = import_xregexp.default.replace(pasteData, emailRegex, "");
    } else if (validation === "color") {
        pasteData = import_xregexp.default.replace(pasteData, colorRegex, "");
    } else if (validation === "address") {
        pasteData = import_xregexp.default.replace(pasteData, addressRegex, "");
    } else if (validation === "cars") {
        pasteData = import_xregexp.default.replace(pasteData, carsRegex, "");
    } else if (validation === "charts") {
        pasteData = import_xregexp.default.replace(pasteData, chartsRegex, "");
    }
    e.preventDefault();
    document.execCommand("insertText", false, pasteData);
};
var handleInvalid = function(e, requireError) {
    e.target.setCustomValidity(requireError || "This filed is required !");
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
// src/helpers/time_helpers.ts
var import_firestore2 = require("firebase/firestore");
var import_moment_timezone = __toESM(require("moment-timezone"));
function timestamp_to_string(firebaseTimestamp, options) {
    var date;
    if (_instanceof(firebaseTimestamp, import_firestore2.Timestamp)) {
        date = firebaseTimestamp.toDate();
    } else if (_instanceof(firebaseTimestamp, Date)) {
        date = firebaseTimestamp;
    } else if (typeof firebaseTimestamp === "string") {
        date = import_moment_timezone.default.utc(firebaseTimestamp, options.fromFormat || "DD/MM/YYYY HH:mm:ss").toDate();
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date string format");
        }
    } else {
        throw new Error("Invalid input: firebaseTimestamp must be a Timestamp, Date, or valid date string.");
    }
    if (options === null || options === void 0 ? void 0 : options.tz) {
        var result = (0, import_moment_timezone.default)(date).tz(options.tz).format(options.format || "DD-MM-YYYY HH:mm:ss");
        return result;
    }
    return import_moment_timezone.default.utc(date).format(options.format || "DD-MM-YYYY HH:mm:ss");
}
// src/components/ui/badge.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime8 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority.cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(_param) {
    var className = _param.className, variant = _param.variant, props = _object_without_properties(_param, [
        "className",
        "variant"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", _object_spread({
        className: cn(badgeVariants({
            variant: variant
        }), className)
    }, props));
}
// src/components/ui/button.tsx
var React3 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime9 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Button = React3.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
// src/components/ui/input.tsx
var React4 = __toESM(require("react"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var Input = React4.forwardRef(function(_param, ref) {
    var className = _param.className, type = _param.type, props = _object_without_properties(_param, [
        "className",
        "type"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", _object_spread({
        type: type,
        className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";
// src/components/ui/progress.tsx
var React5 = __toESM(require("react"));
var ProgressPrimitive = __toESM(require("@radix-ui/react-progress"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var ProgressComponent = React5.forwardRef(function(_param, ref) {
    var className = _param.className, value = _param.value, containerClassName = _param.containerClassName, indicatorClassName = _param.indicatorClassName, showValueClassName = _param.showValueClassName, _param_showValue = _param.showValue, showValue = _param_showValue === void 0 ? false : _param_showValue, props = _object_without_properties(_param, [
        "className",
        "value",
        "containerClassName",
        "indicatorClassName",
        "showValueClassName",
        "showValue"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
        className: cn("relative w-full", containerClassName),
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ProgressPrimitive.Root, _object_spread_props(_object_spread({
            ref: ref,
            className: cn("w-full h-5 bg-[#e5e7eb] relative overflow-hidden rounded-full", className)
        }, props), {
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ProgressPrimitive.Indicator, {
                className: cn("h-full w-full flex-1 bg-[green] transition-all rounded-full", indicatorClassName),
                style: {
                    transform: "translateX(-".concat(100 - (value || 0), "%)")
                },
                children: showValue && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
                    className: cn("absolute right-1 top-[-2px] font-medium text-white", showValueClassName),
                    children: "".concat(value || 0, "%")
                })
            })
        }))
    });
});
ProgressComponent.displayName = ProgressPrimitive.Root.displayName;
// src/components/ui/multiselect.tsx
var import_cmdk2 = require("cmdk");
var import_lucide_react3 = require("lucide-react");
var React8 = __toESM(require("react"));
var import_react4 = require("react");
// src/components/ui/command.tsx
var import_cmdk = require("cmdk");
var import_lucide_react2 = require("lucide-react");
var React7 = __toESM(require("react"));
// src/components/ui/dialog.tsx
var React6 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React6.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPrimitive.Overlay, _object_spread({
        ref: ref,
        className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
    }, props));
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React6.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogPortal, {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogOverlay, {}),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogPrimitive.Content, _object_spread_props(_object_spread({
                ref: ref,
                className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className)
            }, props), {
                children: [
                    children,
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogPrimitive.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react.X, {
                                className: "h-4 w-4"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            }))
        ]
    });
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", _object_spread({
        className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className)
    }, props));
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", _object_spread({
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
    }, props));
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React6.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPrimitive.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold leading-none tracking-tight", className)
    }, props));
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React6.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPrimitive.Description, _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;
// src/components/ui/command.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var Command = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_cmdk.Command, _object_spread({
        ref: ref,
        className: cn("flex h-full w-full flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground", className)
    }, props));
});
Command.displayName = import_cmdk.Command.displayName;
var CommandInput = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
        className: "flex items-center border-b border-input px-5",
        "cmdk-input-wrapper": "",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react2.Search, {
                size: 20,
                strokeWidth: 2,
                className: "me-3 text-muted-foreground/80"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_cmdk.Command.Input, _object_spread({
                ref: ref,
                className: cn("flex h-10 w-full rounded-lg bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/70 disabled:cursor-not-allowed disabled:opacity-50", className)
            }, props))
        ]
    });
});
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_cmdk.Command.List, _object_spread({
        ref: ref,
        className: cn("max-h-80 overflow-y-auto overflow-x-hidden", className)
    }, props));
});
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React7.forwardRef(function(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_cmdk.Command.Empty, _object_spread({
        ref: ref,
        className: "py-6 text-center text-sm"
    }, props));
});
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_cmdk.Command.Group, _object_spread({
        ref: ref,
        className: cn("overflow-hidden p-2 text-foreground [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className)
    }, props));
});
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_cmdk.Command.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 h-px bg-border", className)
    }, props));
});
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React7.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_cmdk.Command.Item, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center gap-3 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", className)
    }, props));
});
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("kbd", _object_spread({
        className: cn("-me-1 ms-auto inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70", className)
    }, props));
};
CommandShortcut.displayName = "CommandShortcut";
// src/components/ui/multiselect.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function useDebounce(value, delay) {
    var _React8_useState = _sliced_to_array(React8.useState(value), 2), debouncedValue = _React8_useState[0], setDebouncedValue = _React8_useState[1];
    (0, import_react4.useEffect)(function() {
        var timer = setTimeout(function() {
            return setDebouncedValue(value);
        }, delay || 500);
        return function() {
            clearTimeout(timer);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
function transToGroupOption(options, groupBy) {
    if (options.length === 0) {
        return {};
    }
    if (!groupBy) {
        return {
            "": options
        };
    }
    var groupOption = {};
    options.forEach(function(option) {
        var key = option[groupBy] || "";
        if (!groupOption[key]) {
            groupOption[key] = [];
        }
        groupOption[key].push(option);
    });
    return groupOption;
}
function removePickedOption(groupOption, picked) {
    var cloneOption = JSON.parse(JSON.stringify(groupOption));
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(cloneOption)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
            cloneOption[key] = value.filter(function(val) {
                return !picked.find(function(p) {
                    return p.value === val.value;
                });
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return cloneOption;
}
function isOptionsExist(groupOption, targetOption) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(groupOption)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), value = _step_value[1];
            if (value.some(function(option) {
                return targetOption.find(function(p) {
                    return p.value === option.value;
                });
            })) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return false;
}
var CommandEmpty2 = (0, import_react4.forwardRef)(function(_param, forwardedRef) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var render = (0, import_cmdk2.useCommandState)(function(state) {
        return state.filtered.count === 0;
    });
    if (!render) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", _object_spread({
        ref: forwardedRef,
        className: cn("px-2 py-4 text-center text-sm", className),
        "cmdk-empty": "",
        role: "presentation"
    }, props));
});
CommandEmpty2.displayName = "CommandEmpty";
var MultipleSelector = React8.forwardRef(function(param, ref) {
    var value = param.value, onChange = param.onChange, placeholder = param.placeholder, tmp = param.defaultOptions, arrayDefaultOptions = tmp === void 0 ? [] : tmp, arrayOptions = param.options, delay = param.delay, onSearch = param.onSearch, onSearchSync = param.onSearchSync, loadingIndicator = param.loadingIndicator, emptyIndicator = param.emptyIndicator, _param_maxSelected = param.maxSelected, maxSelected = _param_maxSelected === void 0 ? Number.MAX_SAFE_INTEGER : _param_maxSelected, onMaxSelected = param.onMaxSelected, hidePlaceholderWhenSelected = param.hidePlaceholderWhenSelected, disabled = param.disabled, groupBy = param.groupBy, className = param.className, badgeClassName = param.badgeClassName, _param_selectFirstItem = param.selectFirstItem, selectFirstItem = _param_selectFirstItem === void 0 ? true : _param_selectFirstItem, _param_creatable = param.creatable, creatable = _param_creatable === void 0 ? false : _param_creatable, _param_triggerSearchOnFocus = param.triggerSearchOnFocus, triggerSearchOnFocus = _param_triggerSearchOnFocus === void 0 ? false : _param_triggerSearchOnFocus, commandProps = param.commandProps, inputProps = param.inputProps, _param_hideClearAllButton = param.hideClearAllButton, hideClearAllButton = _param_hideClearAllButton === void 0 ? false : _param_hideClearAllButton;
    var inputRef = React8.useRef(null);
    var _React8_useState = _sliced_to_array(React8.useState(false), 2), open = _React8_useState[0], setOpen = _React8_useState[1];
    var _React8_useState1 = _sliced_to_array(React8.useState(false), 2), onScrollbar = _React8_useState1[0], setOnScrollbar = _React8_useState1[1];
    var _React8_useState2 = _sliced_to_array(React8.useState(false), 2), isLoading = _React8_useState2[0], setIsLoading = _React8_useState2[1];
    var dropdownRef = React8.useRef(null);
    var _React8_useState3 = _sliced_to_array(React8.useState(value || []), 2), selected = _React8_useState3[0], setSelected = _React8_useState3[1];
    var _React8_useState4 = _sliced_to_array(React8.useState(transToGroupOption(arrayDefaultOptions, groupBy)), 2), options = _React8_useState4[0], setOptions = _React8_useState4[1];
    var _React8_useState5 = _sliced_to_array(React8.useState(""), 2), inputValue = _React8_useState5[0], setInputValue = _React8_useState5[1];
    var debouncedSearchTerm = useDebounce(inputValue, delay || 500);
    React8.useImperativeHandle(ref, function() {
        return {
            selectedValue: _to_consumable_array(selected),
            input: inputRef.current,
            focus: function() {
                var _inputRef_current;
                return inputRef === null || inputRef === void 0 ? void 0 : (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            },
            reset: function() {
                return setSelected([]);
            }
        };
    }, [
        selected
    ]);
    var handleClickOutside = function(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
            setOpen(false);
            inputRef.current.blur();
        }
    };
    var handleUnselect = React8.useCallback(function(option) {
        var newOptions = selected.filter(function(s) {
            return s.value !== option.value;
        });
        setSelected(newOptions);
        onChange === null || onChange === void 0 ? void 0 : onChange(newOptions);
    }, [
        onChange,
        selected
    ]);
    var handleKeyDown = React8.useCallback(function(e) {
        var input = inputRef.current;
        if (input) {
            if (e.key === "Delete" || e.key === "Backspace") {
                if (input.value === "" && selected.length > 0) {
                    var lastSelectOption = selected[selected.length - 1];
                    if (!lastSelectOption.fixed) {
                        handleUnselect(selected[selected.length - 1]);
                    }
                }
            }
            if (e.key === "Escape") {
                input.blur();
            }
        }
    }, [
        handleUnselect,
        selected
    ]);
    (0, import_react4.useEffect)(function() {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchend", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchend", handleClickOutside);
        }
        return function() {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchend", handleClickOutside);
        };
    }, [
        open
    ]);
    (0, import_react4.useEffect)(function() {
        if (value) {
            setSelected(value);
        }
    }, [
        value
    ]);
    (0, import_react4.useEffect)(function() {
        if (!arrayOptions || onSearch) {
            return;
        }
        var newOption = transToGroupOption(arrayOptions || [], groupBy);
        if (JSON.stringify(newOption) !== JSON.stringify(options)) {
            setOptions(newOption);
        }
    }, [
        arrayDefaultOptions,
        arrayOptions,
        groupBy,
        onSearch,
        options
    ]);
    (0, import_react4.useEffect)(function() {
        var doSearchSync = function() {
            var res = onSearchSync === null || onSearchSync === void 0 ? void 0 : onSearchSync(debouncedSearchTerm);
            setOptions(transToGroupOption(res || [], groupBy));
        };
        var exec = /*#__PURE__*/ function() {
            var _ref = _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    if (!onSearchSync || !open) return [
                        2
                    ];
                    if (triggerSearchOnFocus) {
                        doSearchSync();
                    }
                    if (debouncedSearchTerm) {
                        doSearchSync();
                    }
                    return [
                        2
                    ];
                });
            });
            return function exec() {
                return _ref.apply(this, arguments);
            };
        }();
        void exec();
    }, [
        debouncedSearchTerm,
        groupBy,
        open,
        triggerSearchOnFocus
    ]);
    (0, import_react4.useEffect)(function() {
        var doSearch = /*#__PURE__*/ function() {
            var _ref = _async_to_generator(function() {
                var res;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            setIsLoading(true);
                            return [
                                4,
                                onSearch === null || onSearch === void 0 ? void 0 : onSearch(debouncedSearchTerm)
                            ];
                        case 1:
                            res = _state.sent();
                            setOptions(transToGroupOption(res || [], groupBy));
                            setIsLoading(false);
                            return [
                                2
                            ];
                    }
                });
            });
            return function doSearch() {
                return _ref.apply(this, arguments);
            };
        }();
        var exec = /*#__PURE__*/ function() {
            var _ref = _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!onSearch || !open) return [
                                2
                            ];
                            if (!triggerSearchOnFocus) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                doSearch()
                            ];
                        case 1:
                            _state.sent();
                            _state.label = 2;
                        case 2:
                            if (!debouncedSearchTerm) return [
                                3,
                                4
                            ];
                            return [
                                4,
                                doSearch()
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            });
            return function exec() {
                return _ref.apply(this, arguments);
            };
        }();
        void exec();
    }, [
        debouncedSearchTerm,
        groupBy,
        open,
        triggerSearchOnFocus
    ]);
    var CreatableItem = function() {
        if (!creatable) return void 0;
        if (isOptionsExist(options, [
            {
                value: inputValue,
                label: inputValue
            }
        ]) || selected.find(function(s) {
            return s.value === inputValue;
        })) {
            return void 0;
        }
        var Item = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandItem, {
            value: inputValue,
            className: "cursor-pointer",
            onMouseDown: function(e) {
                e.preventDefault();
                e.stopPropagation();
            },
            onSelect: function(value2) {
                if (selected.length >= maxSelected) {
                    onMaxSelected === null || onMaxSelected === void 0 ? void 0 : onMaxSelected(selected.length);
                    return;
                }
                setInputValue("");
                var newOptions = _to_consumable_array(selected).concat([
                    {
                        value: value2,
                        label: value2
                    }
                ]);
                setSelected(newOptions);
                onChange === null || onChange === void 0 ? void 0 : onChange(newOptions);
            },
            children: 'Create "'.concat(inputValue, '"')
        });
        if (!onSearch && inputValue.length > 0) {
            return Item;
        }
        if (onSearch && debouncedSearchTerm.length > 0 && !isLoading) {
            return Item;
        }
        return void 0;
    };
    var EmptyItem = React8.useCallback(function() {
        if (!emptyIndicator) return void 0;
        if (onSearch && !creatable && Object.keys(options).length === 0) {
            return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandItem, {
                value: "-",
                disabled: true,
                children: emptyIndicator
            });
        }
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandEmpty2, {
            children: emptyIndicator
        });
    }, [
        creatable,
        emptyIndicator,
        onSearch,
        options
    ]);
    var selectables = React8.useMemo(function() {
        return removePickedOption(options, selected);
    }, [
        options,
        selected
    ]);
    var commandFilter = React8.useCallback(function() {
        if (commandProps === null || commandProps === void 0 ? void 0 : commandProps.filter) {
            return commandProps.filter;
        }
        if (creatable) {
            return function(value2, search) {
                return value2.toLowerCase().includes(search.toLowerCase()) ? 1 : -1;
            };
        }
        return void 0;
    }, [
        creatable,
        commandProps === null || commandProps === void 0 ? void 0 : commandProps.filter
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Command, _object_spread_props(_object_spread({
        ref: dropdownRef
    }, commandProps), {
        onKeyDown: function(e) {
            var _commandProps_onKeyDown;
            handleKeyDown(e);
            commandProps === null || commandProps === void 0 ? void 0 : (_commandProps_onKeyDown = commandProps.onKeyDown) === null || _commandProps_onKeyDown === void 0 ? void 0 : _commandProps_onKeyDown.call(commandProps, e);
        },
        className: cn("h-auto overflow-visible bg-transparent", commandProps === null || commandProps === void 0 ? void 0 : commandProps.className),
        shouldFilter: (commandProps === null || commandProps === void 0 ? void 0 : commandProps.shouldFilter) !== void 0 ? commandProps.shouldFilter : !onSearch,
        filter: commandFilter(),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", {
                className: cn("relative min-h-[38px] rounded-lg border border-input text-sm transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50", {
                    "p-1": selected.length !== 0,
                    "cursor-text": !disabled && selected.length !== 0
                }, !hideClearAllButton && "pe-9", className),
                onClick: function() {
                    var _inputRef_current;
                    if (disabled) return;
                    inputRef === null || inputRef === void 0 ? void 0 : (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", {
                    className: "flex flex-wrap gap-1",
                    children: [
                        selected.map(function(option) {
                            return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", {
                                className: cn("animate-fadeIn relative inline-flex h-7 cursor-default items-center rounded-md border border-solid bg-background pe-7 pl-2 ps-2 text-xs font-medium text-secondary-foreground transition-all hover:bg-background disabled:cursor-not-allowed disabled:opacity-50 data-[fixed]:pe-2", badgeClassName),
                                "data-fixed": option.fixed,
                                "data-disabled": disabled || void 0,
                                children: [
                                    option.label,
                                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", {
                                        className: "absolute -inset-y-px -end-px flex size-7 items-center justify-center rounded-e-lg border border-transparent p-0 text-muted-foreground/80 outline-0 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70",
                                        onKeyDown: function(e) {
                                            if (e.key === "Enter") {
                                                handleUnselect(option);
                                            }
                                        },
                                        onMouseDown: function(e) {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        },
                                        onClick: function() {
                                            return handleUnselect(option);
                                        },
                                        "aria-label": "Remove",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react3.X, {
                                            size: 14,
                                            strokeWidth: 2,
                                            "aria-hidden": "true"
                                        })
                                    })
                                ]
                            }, option.value);
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_cmdk2.Command.Input, _object_spread_props(_object_spread({}, inputProps), {
                            ref: inputRef,
                            value: inputValue,
                            disabled: disabled,
                            onValueChange: function(value2) {
                                var _inputProps_onValueChange;
                                setInputValue(value2);
                                inputProps === null || inputProps === void 0 ? void 0 : (_inputProps_onValueChange = inputProps.onValueChange) === null || _inputProps_onValueChange === void 0 ? void 0 : _inputProps_onValueChange.call(inputProps, value2);
                            },
                            onBlur: function(event) {
                                var _inputProps_onBlur;
                                if (!onScrollbar) {
                                    setOpen(false);
                                }
                                inputProps === null || inputProps === void 0 ? void 0 : (_inputProps_onBlur = inputProps.onBlur) === null || _inputProps_onBlur === void 0 ? void 0 : _inputProps_onBlur.call(inputProps, event);
                            },
                            onFocus: function(event) {
                                var _inputProps_onFocus;
                                setOpen(true);
                                if (triggerSearchOnFocus) {
                                    onSearch === null || onSearch === void 0 ? void 0 : onSearch(debouncedSearchTerm);
                                }
                                inputProps === null || inputProps === void 0 ? void 0 : (_inputProps_onFocus = inputProps.onFocus) === null || _inputProps_onFocus === void 0 ? void 0 : _inputProps_onFocus.call(inputProps, event);
                            },
                            placeholder: hidePlaceholderWhenSelected && selected.length !== 0 ? "" : placeholder,
                            className: cn("flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed", {
                                "w-full": hidePlaceholderWhenSelected,
                                "px-3 py-2": selected.length === 0,
                                "ml-1": selected.length !== 0
                            }, inputProps === null || inputProps === void 0 ? void 0 : inputProps.className)
                        })),
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", {
                            type: "button",
                            onClick: function() {
                                setSelected(selected.filter(function(s) {
                                    return s.fixed;
                                }));
                                onChange === null || onChange === void 0 ? void 0 : onChange(selected.filter(function(s) {
                                    return s.fixed;
                                }));
                            },
                            className: cn("absolute end-0 top-0 flex size-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground/80 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70", (hideClearAllButton || disabled || selected.length < 1 || selected.filter(function(s) {
                                return s.fixed;
                            }).length === selected.length) && "hidden"),
                            "aria-label": "Clear all",
                            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react3.X, {
                                size: 16,
                                strokeWidth: 2,
                                "aria-hidden": "true"
                            })
                        })
                    ]
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", {
                className: "relative",
                children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", {
                    className: cn("absolute top-2 z-10 w-full overflow-hidden rounded-lg border border-input", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", !open && "hidden"),
                    "data-state": open ? "open" : "closed",
                    children: open && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandList, {
                        className: "bg-popover text-popover-foreground shadow-lg shadow-black/5 outline-none",
                        onMouseLeave: function() {
                            setOnScrollbar(false);
                        },
                        onMouseEnter: function() {
                            setOnScrollbar(true);
                        },
                        onMouseUp: function() {
                            var _inputRef_current;
                            inputRef === null || inputRef === void 0 ? void 0 : (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
                        },
                        children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, {
                            children: loadingIndicator
                        }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, {
                            children: [
                                EmptyItem(),
                                CreatableItem(),
                                !selectFirstItem && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandItem, {
                                    value: "-",
                                    className: "hidden"
                                }),
                                Object.entries(selectables).map(function(param) {
                                    var _param = _sliced_to_array(param, 2), key = _param[0], dropdowns = _param[1];
                                    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandGroup, {
                                        heading: key,
                                        className: "h-full overflow-auto",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, {
                                            children: dropdowns.map(function(option) {
                                                return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandItem, {
                                                    value: option.value,
                                                    disabled: option.disable,
                                                    onMouseDown: function(e) {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                    },
                                                    onSelect: function() {
                                                        if (selected.length >= maxSelected) {
                                                            onMaxSelected === null || onMaxSelected === void 0 ? void 0 : onMaxSelected(selected.length);
                                                            return;
                                                        }
                                                        setInputValue("");
                                                        var newOptions = _to_consumable_array(selected).concat([
                                                            option
                                                        ]);
                                                        setSelected(newOptions);
                                                        onChange === null || onChange === void 0 ? void 0 : onChange(newOptions);
                                                    },
                                                    className: cn("cursor-pointer", option.disable && "cursor-not-allowed opacity-50"),
                                                    children: option.label
                                                }, option.value);
                                            })
                                        })
                                    }, key);
                                })
                            ]
                        })
                    })
                })
            })
        ]
    }));
});
MultipleSelector.displayName = "MultipleSelector";
var multiselect_default = MultipleSelector;
// src/components/table/components.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var getFixedNumber = function() {
    var number = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, fix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
    var sum_value = number % 1 === 0 ? number : number.toFixed(fix).replace(/\.?0+$/, "");
    return String(sum_value);
};
var TableRow2 = function(param) {
    var item = param.item;
    var _useTableContext = useTableContext(), rowStyles = _useTableContext.rowStyles, rowClassName = _useTableContext.rowClassName, keysToRender = _useTableContext.keysToRender, onRowClick = _useTableContext.onRowClick;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", {
        className: cn("hover:bg-[#808080] hover:text-[#fff]", rowClassName || ""),
        onClick: function() {
            return onRowClick && onRowClick(item);
        },
        style: rowStyles,
        children: keysToRender.map(function(key, index) {
            return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableCell, {
                value: item[key]
            }, index);
        })
    });
};
var TableCell = function(param) {
    var value = param.value;
    var _useTableContext = useTableContext(), cellStyle = _useTableContext.cellStyle, cellClassName = _useTableContext.cellClassName;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", {
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
var Filter = (0, import_react5.memo)(function(param) {
    var filterableColumn = param.filterableColumn, index = param.index;
    var _filters_filterableColumn_dataKey, _filters_filterableColumn_dataKey1, _filterOptions_filterableColumn_dataKey;
    var _useTableContext = useTableContext(), direction = _useTableContext.direction, headers = _useTableContext.headers, filters = _useTableContext.filters, filterOptions = _useTableContext.filterOptions, filterPopupsDisplay = _useTableContext.filterPopupsDisplay, handleFilterChange = _useTableContext.handleFilterChange, handleFilterClick = _useTableContext.handleFilterClick, closeFilterWindow = _useTableContext.closeFilterWindow, filterLabel = _useTableContext.filterLabel;
    var displayRight = direction === "rtl" && index === headers.length - 1 || direction === "ltr" && index !== headers.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", {
        className: "absolute top-1 right-1 ",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", {
                title: filterLabel + " " + filterableColumn.header,
                className: "text-[12px]",
                onClick: function() {
                    return handleFilterClick(filterableColumn.dataKey);
                },
                children: filterPopupsDisplay === filterableColumn.dataKey ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
                    children: ((_filters_filterableColumn_dataKey = filters[filterableColumn.dataKey]) === null || _filters_filterableColumn_dataKey === void 0 ? void 0 : _filters_filterableColumn_dataKey.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
                        children: slashFilterSvg(true)
                    }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
                        children: emptyFilterSvg(true)
                    })
                }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
                    children: ((_filters_filterableColumn_dataKey1 = filters[filterableColumn.dataKey]) === null || _filters_filterableColumn_dataKey1 === void 0 ? void 0 : _filters_filterableColumn_dataKey1.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
                        children: slashFilterSvg()
                    }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
                        children: emptyFilterSvg()
                    })
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                className: "relative",
                children: filterPopupsDisplay === filterableColumn.dataKey && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", {
                    className: "absolute top-[-20px] z-20 ".concat(displayRight ? " left-[100%]" : "right-[100%]", " w-44 h-52 text-black bg-white p-1 flex flex-col items-center gap-2 shadow"),
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", {
                            className: "flex justify-between items-center border-black border-b-[1px] w-[90%]",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                                    className: "text-start",
                                    children: filterLabel + " " + filterableColumn.header
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", {
                                    onClick: closeFilterWindow,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(RedXSvg2, {})
                                })
                            ]
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                            className: "overflow-auto h-[80%] flex flex-col gap-1 w-full cursor-pointer ",
                            children: (_filterOptions_filterableColumn_dataKey = filterOptions[filterableColumn.dataKey]) === null || _filterOptions_filterableColumn_dataKey === void 0 ? void 0 : _filterOptions_filterableColumn_dataKey.map(function(option, i) {
                                var _filters_filterableColumn_dataKey;
                                return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", {
                                    className: "flex items-center px-2 justify-start hover:bg-[#547f22] hover:text-white",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", {
                                            type: "checkbox",
                                            className: "cursor-pointer",
                                            checked: (_filters_filterableColumn_dataKey = filters[filterableColumn.dataKey]) === null || _filters_filterableColumn_dataKey === void 0 ? void 0 : _filters_filterableColumn_dataKey.includes(option),
                                            onChange: function() {
                                                return handleFilterChange(filterableColumn.dataKey, option);
                                            }
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", {
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
var TableHead = (0, import_react5.memo)(function() {
    var _useTableContext = useTableContext(), headers = _useTableContext.headers, headerStyle = _useTableContext.headerStyle, headerCellStyle = _useTableContext.headerCellStyle, sortColumn = _useTableContext.sortColumn, handleSort = _useTableContext.handleSort, sortKeys = _useTableContext.sortKeys, sortOrder = _useTableContext.sortOrder, _useTableContext_filterableColumns = _useTableContext.filterableColumns, filterableColumns = _useTableContext_filterableColumns === void 0 ? [] : _useTableContext_filterableColumns, sortLabel = _useTableContext.sortLabel;
    var sortDisplay = (0, import_react5.useMemo)(function() {
        return Boolean(sortKeys === null || sortKeys === void 0 ? void 0 : sortKeys.length);
    }, [
        sortKeys
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("thead", {
        className: "bg-[#282828] text-white sticky top-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", {
            style: headerStyle,
            children: headers.map(function(header, index) {
                var filterableColumn = filterableColumns.find(function(col) {
                    return col.header === header;
                });
                return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("th", {
                    title: sortDisplay ? "".concat(sortLabel, " ").concat(header) : header,
                    style: headerCellStyle,
                    className: " border-black border-[1px] max-w-[130px] px-2 text-center relative",
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                            className: "px-2 ".concat(sortDisplay ? "cursor-pointer" : ""),
                            onClick: function() {
                                return sortDisplay && handleSort(index);
                            },
                            children: header
                        }),
                        sortDisplay && sortColumn === index && (sortOrder === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
                            children: sortSvg()
                        }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
                            children: sortSvg(true)
                        })),
                        filterableColumn && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Filter, {
                            filterableColumn: filterableColumn,
                            index: index
                        })
                    ]
                }, index);
            })
        })
    });
}, renderOnce);
var TableBody = (0, import_react5.memo)(function() {
    var dataToRender = useTableContext().dataToRender;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tbody", {
        children: dataToRender.renderedData.map(function(item, index) {
            return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableRow2, {
                item: item
            }, index);
        })
    });
}, renderOnce);
var MaxRowsLabel = (0, import_react5.memo)(function() {
    var _useTableContext = useTableContext(), data = _useTableContext.data, dataToRender = _useTableContext.dataToRender, maxRowsLabel1 = _useTableContext.maxRowsLabel1, maxRowsLabel2 = _useTableContext.maxRowsLabel2, maxRows = _useTableContext.maxRows, maxRowsContainerClassName = _useTableContext.maxRowsContainerClassName;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", {
        className: cn("flex justify-start items-center text-lg gap-1", maxRowsContainerClassName || ""),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                children: maxRowsLabel1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                children: maxRows > dataToRender.renderedData.length ? dataToRender.renderedData.length : maxRows
            }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                children: maxRowsLabel2
            }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                children: dataToRender.filtered.length
            })
        ]
    });
}, renderOnce);
var ExportToExcel = (0, import_react5.memo)(function() {
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
                        workbook = new import_exceljs.default.Workbook();
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
                        (0, import_file_saver.saveAs)(blob, "".concat(excelFileName || "table_data", ".xlsx"));
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
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", {
        onClick: onExportExcelClick,
        title: exportExcelLabel,
        className: "px-2 py-[2px]  bg-[#547f22] text-white rounded-lg text-[16px]",
        children: exportToExcelSvg()
    });
}, renderOnce);
var Search = (0, import_react5.memo)(function() {
    var _useTableContext = useTableContext(), searchQuery = _useTableContext.searchQuery, handleSearch = _useTableContext.handleSearch, searchPlaceHolder = _useTableContext.searchPlaceHolder, searchInputClassName = _useTableContext.searchInputClassName, searchInputStyle = _useTableContext.searchInputStyle;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", {
        className: cn("w-40 border-black border-[1px] text-lg px-2 ", searchInputClassName),
        type: "text",
        placeholder: searchPlaceHolder,
        value: searchQuery,
        onChange: handleSearch,
        style: searchInputStyle
    });
}, renderOnce);
var Summary = (0, import_react5.memo)(function() {
    var _useTableContext = useTableContext(), summaryContainerStyle = _useTableContext.summaryContainerStyle, summaryLabelStyle = _useTableContext.summaryLabelStyle, summaryLabel = _useTableContext.summaryLabel, summaryRowStyle = _useTableContext.summaryRowStyle, sumColumns = _useTableContext.sumColumns, dataToRender = _useTableContext.dataToRender, direction = _useTableContext.direction;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", {
        style: _object_spread_props(_object_spread({}, summaryContainerStyle), {
            direction: direction
        }),
        className: "w-full h-8 flex justify-between items-center px-3 text-[18px] font-bold",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                style: summaryLabelStyle,
                children: summaryLabel
            }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                style: summaryRowStyle,
                className: "flex gap-3",
                children: sumColumns.map(function(val) {
                    var sum_res = dataToRender.renderedData.reduce(function(acc, v) {
                        return acc + Number(v[val.dataKey]) || 0;
                    }, 0);
                    var sum_value = getFixedNumber(sum_res);
                    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", {
                        className: "flex gap-1 justify-start",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                                children: val.label
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {
                                children: ":"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
                                children: val.ui ? val.ui(sum_value) : sum_value
                            })
                        ]
                    }, val.dataKey + val.label);
                })
            })
        ]
    });
}, renderOnce);
var TimesUI = function(param) {
    var timestamp = param.timestamp, format = param.format, tz = param.tz, direction = param.direction, fromFormat = param.fromFormat;
    var time = timestamp_to_string(timestamp, {
        format: format,
        fromFormat: fromFormat,
        tz: tz
    });
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", {
        style: {
            direction: "ltr"
        },
        className: cn("_ellipsis  ".concat(direction === "rtl" ? "text-right" : "text-left")),
        title: time,
        children: time
    });
};
var TableButton = function(param) {
    var onClick = param.onClick, title = param.title, className = param.className, type = param.type, children = param.children;
    var icon = {
        add: "fa-regular fa-plus text-2xl",
        edit: "fa-light fa-pen-to-square text-xl",
        delete: "fa-light fa-trash text-xl"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
        children: type === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", {
            className: className,
            title: title,
            onClick: onClick,
            children: children
        }) : type === "add" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, {
            title: title,
            onClick: onClick,
            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("i", {
                className: cn("fa-regular fa-plus text-2xl", className)
            })
        }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", {
            title: title,
            onClick: onClick,
            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("i", {
                className: cn(icon[type], className)
            })
        })
    });
};
var DurationUI = function(param) {
    var duration = param.duration, _param_hoursLabel = param.hoursLabel, hoursLabel = _param_hoursLabel === void 0 ? "h" : _param_hoursLabel, _param_minutesLabel = param.minutesLabel, minutesLabel = _param_minutesLabel === void 0 ? "m" : _param_minutesLabel, _param_secondsLabel = param.secondsLabel, secondsLabel = _param_secondsLabel === void 0 ? "s" : _param_secondsLabel, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className, direction = param.direction;
    var durationTime = duration.split(":");
    var hours = parseInt(durationTime[0], 10);
    var minutes = parseInt(durationTime[1], 10);
    var isWithSeconds = durationTime.length === 3;
    var seconds = isWithSeconds ? parseInt(durationTime[2], 10) : 0;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", {
        title: duration,
        style: {
            direction: "ltr"
        },
        className: cn("flex gap-1 ".concat(direction === "rtl" ? "justify-end" : "justify-start"), className),
        children: [
            hours > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, {
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
                        style: {
                            display: "inline-block"
                        },
                        children: [
                            hours,
                            " ",
                            hoursLabel
                        ]
                    }),
                    minutes === 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
                        style: {
                            display: "inline-block"
                        },
                        children: [
                            " ",
                            "0",
                            " ",
                            minutesLabel
                        ]
                    })
                ]
            }),
            minutes > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
                style: {
                    display: "inline-block"
                },
                children: [
                    " ",
                    minutes,
                    " ",
                    minutesLabel
                ]
            }),
            seconds > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", {
                style: {
                    display: "inline-block"
                },
                children: [
                    " ",
                    seconds,
                    " ",
                    secondsLabel
                ]
            })
        ]
    });
};
// src/components/forms/index.tsx
var import_react6 = require("react");
var import_moment2 = __toESM(require("moment"));
var import_jsx_runtime16 = require("react/jsx-runtime");
var InputContainer = function(param) {
    var validationError = param.validationError, _param_name = param.name, name = _param_name === void 0 ? "" : _param_name, _param_inputType = param.inputType, inputType = _param_inputType === void 0 ? "text" : _param_inputType, _param_labelContent = param.labelContent, labelContent = _param_labelContent === void 0 ? "" : _param_labelContent, _param_defaultValue = param.defaultValue, defaultValue = _param_defaultValue === void 0 ? "" : _param_defaultValue, _param_validationName = param.validationName, validationName = _param_validationName === void 0 ? "textNumbers" : _param_validationName, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_labelClassName = param.labelClassName, labelClassName = _param_labelClassName === void 0 ? "" : _param_labelClassName, _param_elementClassName = param.elementClassName, elementClassName = _param_elementClassName === void 0 ? "" : _param_elementClassName, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, placeholder = param.placeholder, props = param.props, onKeyDown = param.onKeyDown;
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
        className: "center ".concat(containerClassName),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", {
                className: "text-start w-[30%] flex gap-0.5  ".concat(labelClassName),
                htmlFor: name,
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                        children: labelContent
                    }),
                    required && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                        className: "text-red-500",
                        children: "*"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                        children: ":"
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", _object_spread_props(_object_spread(_object_spread_props(_object_spread({}, props), {
                placeholder: placeholder,
                className: "w-[70%] bg-none border-b-[1px] border-black ".concat(elementClassName),
                defaultValue: defaultValue
            }), useValidation(validationName, validationError)), {
                required: required,
                name: name,
                onKeyDown: onKeyDown,
                type: inputType
            }))
        ]
    });
};
var SelectContainer = function(param) {
    var _param_name = param.name, name = _param_name === void 0 ? "" : _param_name, _param_labelContent = param.labelContent, labelContent = _param_labelContent === void 0 ? "" : _param_labelContent, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_labelClassName = param.labelClassName, labelClassName = _param_labelClassName === void 0 ? "" : _param_labelClassName, _param_defaultValue = param.defaultValue, defaultValue = _param_defaultValue === void 0 ? "" : _param_defaultValue, _param_elementClassName = param.elementClassName, elementClassName = _param_elementClassName === void 0 ? "" : _param_elementClassName, _param_optionClassName = param.optionClassName, optionClassName = _param_optionClassName === void 0 ? "" : _param_optionClassName, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, _param_options = param.options, options = _param_options === void 0 ? [] : _param_options, _param_optionsContainerClassName = param.optionsContainerClassName, optionsContainerClassName = _param_optionsContainerClassName === void 0 ? "" : _param_optionsContainerClassName;
    var _options_, _options_find;
    var _ref = _sliced_to_array((0, import_react6.useState)(false), 2), isOpen = _ref[0], setIsOpen = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react6.useState)(defaultValue || ((_options_ = options[0]) === null || _options_ === void 0 ? void 0 : _options_.value) || ""), 2), selectedValue = _ref1[0], setSelectedValue = _ref1[1];
    var handleOptionClick = function(value) {
        setSelectedValue(value);
        setIsOpen(false);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
        className: "center ".concat(containerClassName),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", {
                className: "text-start w-[30%] flex gap-0.5 ".concat(labelClassName),
                htmlFor: name,
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                        children: labelContent
                    }),
                    required && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                        className: "text-red-500",
                        children: "*"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                        children: ":"
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
                className: "w-[70%] relative ".concat(elementClassName),
                onClick: function() {
                    return setIsOpen(!isOpen);
                },
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                        className: "border-b-[1px] border-black max-h-6 cursor-pointer ".concat(elementClassName),
                        children: (options === null || options === void 0 ? void 0 : (_options_find = options.find(function(opt) {
                            return opt.value === selectedValue;
                        })) === null || _options_find === void 0 ? void 0 : _options_find.label) || selectedValue
                    }),
                    isOpen ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("i", {
                        className: "fa-light fa-chevron-up absolute top-[1px] left-1 cursor-pointer"
                    }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("i", {
                        className: "fa-light fa-chevron-down absolute top-[1px] left-1 cursor-pointer"
                    }),
                    isOpen && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                        className: cn("absolute w-full bg-white border  border-gray-300 max-h-32 overflow-y-auto z-10", optionsContainerClassName),
                        children: options.map(function(option) {
                            return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                                className: "p-2 cursor-pointer hover:bg-gray-200 ".concat(optionClassName),
                                onClick: function() {
                                    return handleOptionClick(option.value);
                                },
                                children: option.label
                            }, option.value);
                        })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", {
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
    }() : _param_submitFunction, _param_elements = param.elements, elements = _param_elements === void 0 ? [] : _param_elements, headerContent = param.headerContent, buttonContent = param.buttonContent, _param_formClassName = param.formClassName, formClassName = _param_formClassName === void 0 ? "" : _param_formClassName, _param_headerClassName = param.headerClassName, headerClassName = _param_headerClassName === void 0 ? "" : _param_headerClassName, _param_direction = param.direction, direction = _param_direction === void 0 ? "rtl" : _param_direction, _param_buttonClassName = param.buttonClassName, buttonClassName = _param_buttonClassName === void 0 ? "" : _param_buttonClassName, submitRef = param.submitRef;
    var _ref = _sliced_to_array((0, import_react6.useState)(""), 2), errorMsg = _ref[0], setErrorMsg = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react6.useState)(false), 2), isLoading = _ref1[0], setIsLoading = _ref1[1];
    var onSubmit = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(e) {
            var form, err;
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
                        form = e.currentTarget;
                        elements.forEach(function(element) {
                            if (element.type === "input" && element.minLength) {
                                var _form_elements_namedItem;
                                var inputValue = ((_form_elements_namedItem = form.elements.namedItem(element.name)) === null || _form_elements_namedItem === void 0 ? void 0 : _form_elements_namedItem.value) || "";
                                if (inputValue.length < element.minLength) {
                                    throw element.validationError || "".concat(element.labelContent, " must be at least ").concat(element.minLength, " characters");
                                }
                            }
                        });
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
                        if (err.message) {
                            setErrorMsg(err.message);
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("form", {
        onSubmit: onSubmit,
        style: {
            direction: direction
        },
        className: cn("w-[350px] px-5 py-5 flex flex-col gap-5", formClassName),
        children: [
            headerContent && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                className: cn("border-b-2 border-[#547f22] pb-2 text-start font-bold text-[20px]", headerClassName),
                children: headerContent
            }),
            elements.map(function(element, index) {
                switch(element.type){
                    case "input":
                        return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(InputContainer, _object_spread({}, element), index);
                    case "select":
                        return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SelectContainer, _object_spread({}, element), index);
                    default:
                        return null;
                }
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
                className: "flex justify-between w-full",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                        title: errorMsg,
                        className: "text-[#f22] text-[18px] max-w-[80%] ellipsis",
                        children: errorMsg
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", {
                        ref: submitRef,
                        disabled: isLoading,
                        className: cn("bg-[#547f22] px-3 py-1 rounded-lg text-white min-w-20", buttonClassName),
                        type: "submit",
                        children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Loader, {
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
    var onV = param.onV, onX = param.onX, _param_headline = param.headline, headline = _param_headline === void 0 ? "" : _param_headline, _param_direction = param.direction, direction = _param_direction === void 0 ? "rtl" : _param_direction, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_buttonsContainerClassName = param.buttonsContainerClassName, buttonsContainerClassName = _param_buttonsContainerClassName === void 0 ? "" : _param_buttonsContainerClassName, _param_headlineClassName = param.headlineClassName, headlineClassName = _param_headlineClassName === void 0 ? "" : _param_headlineClassName;
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
        style: {
            direction: direction,
            padding: "30px"
        },
        className: cn("full col gap-2", containerClassName),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", {
                className: cn("text-lg font-bold", headlineClassName),
                children: headline
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
                className: cn("center gap-2 ", buttonsContainerClassName),
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", {
                        onClick: onDenied,
                        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(RedXSvg, {})
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", {
                        onClick: onConfirm,
                        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(GreenVSvg, {})
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
    var _ref = _sliced_to_array((0, import_react6.useState)(false), 2), isLoading = _ref[0], setIsLoading = _ref[1];
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("form", {
        style: {
            direction: direction
        },
        onSubmit: onSubmit,
        className: cn("w-full h-10 flex justify-start gap-3 items-center ", formClassName),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", {
                className: cn("center text-[14px] relative gap-2", labelsClassName),
                htmlFor: "from",
                children: [
                    fromText,
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", {
                        className: "w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ".concat(inputsClassName),
                        type: "date",
                        name: "from",
                        defaultValue: defaultFrom || (0, import_moment2.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD")
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", {
                className: cn("center text-[14px] relative gap-2 ", labelsClassName),
                htmlFor: "to",
                children: [
                    toText,
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", {
                        className: "w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ".concat(inputsClassName),
                        type: "date",
                        name: "to",
                        defaultValue: defaultTo || (0, import_moment2.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD")
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", {
                disabled: isLoading,
                style: buttonStyle,
                className: cn("bg-[#699a2c] text-[#fff] font-[500] w-[75px] h-[27px]", buttonClassName),
                type: "submit",
                children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Loader, {
                    className: "pt-[2px]",
                    size: 20,
                    color: "#fff"
                }) : buttonText
            })
        ]
    });
};
// src/components/InternationalPhonePicker.tsx
var import_lucide_react4 = require("lucide-react");
var import_react7 = require("react");
var RPNInput = __toESM(require("react-phone-number-input"));
var import_flags = __toESM(require("react-phone-number-input/flags"));
var import_jsx_runtime17 = require("react/jsx-runtime");
function InternationalPhonePicker(param) {
    var setPhoneValue = param.setPhoneValue, _param_phoneValue = param.phoneValue, phoneValue = _param_phoneValue === void 0 ? "" : _param_phoneValue, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "" : _param_placeholder, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_defaultCountry = param.defaultCountry, defaultCountry = _param_defaultCountry === void 0 ? "IL" : _param_defaultCountry, _param_flagContainerClassName = param.flagContainerClassName, flagContainerClassName = _param_flagContainerClassName === void 0 ? "" : _param_flagContainerClassName, _param_inputClassName = param.inputClassName, inputClassName = _param_inputClassName === void 0 ? "" : _param_inputClassName, defaultValue = param.defaultValue, name = param.name, style = param.style, onEnter = param.onEnter;
    var handleKeyDown = function(e) {
        if (e.key === "Enter") {
            if (onEnter) {
                onEnter();
            }
        }
    };
    var _ref = _sliced_to_array((0, import_react7.useState)(""), 2), tempPhoneValue = _ref[0], setTempPhoneValue = _ref[1];
    (0, import_react7.useEffect)(function() {
        if (defaultValue) {
            if (setPhoneValue) {
                setPhoneValue(defaultValue);
            } else {
                setTempPhoneValue(defaultValue);
            }
        }
    }, [
        defaultValue,
        setPhoneValue
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
        className: cn("space-y-2", containerClassName),
        dir: "ltr",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(RPNInput.default, {
                className: cn("flex rounded-lg shadow-sm shadow-black/5", className),
                international: true,
                countries: [
                    "US",
                    "IL",
                    "NG"
                ],
                defaultCountry: defaultCountry,
                flagComponent: FlagComponent,
                countrySelectComponent: CountrySelect,
                countrySelectProps: {
                    className: flagContainerClassName
                },
                inputComponent: PhoneInput,
                numberInputProps: {
                    className: inputClassName,
                    onKeyDown: handleKeyDown,
                    defaultValue: defaultValue,
                    style: style
                },
                placeholder: placeholder,
                value: tempPhoneValue || phoneValue,
                onChange: function(newValue) {
                    if (setPhoneValue) {
                        return setPhoneValue(newValue !== null && newValue !== void 0 ? newValue : "");
                    }
                    setTempPhoneValue(newValue !== null && newValue !== void 0 ? newValue : "");
                }
            }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", {
                type: "hidden",
                name: name,
                value: tempPhoneValue
            })
        ]
    });
}
var PhoneInput = (0, import_react7.forwardRef)(function(_param, ref) {
    var className = _param.className, onKeyDown = _param.onKeyDown, defaultValue = _param.defaultValue, style = _param.style, props = _object_without_properties(_param, [
        "className",
        "onKeyDown",
        "defaultValue",
        "style"
    ]);
    var inputRef = (0, import_react7.useRef)(null);
    (0, import_react7.useEffect)(function() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Input, _object_spread({
        className: cn("-ms-px rounded-s-none shadow-none focus-visible:z-10 h-full", className),
        onKeyDown: onKeyDown,
        defaultValue: defaultValue,
        style: style,
        ref: function(el) {
            inputRef.current = el;
            if (typeof ref === "function") {
                ref(el);
            } else if (ref) {
                ref.current = el;
            }
        }
    }, props));
});
PhoneInput.displayName = "PhoneInput";
var CountrySelect = function(param) {
    var disabled = param.disabled, value = param.value, onChange = param.onChange, options = param.options, className = param.className;
    var handleSelect = function(event) {
        onChange(event.target.value);
    };
    var originalClassName = (0, import_react7.useMemo)(function() {
        return "relative inline-flex items-center self-stretch rounded-s-lg border border-input bg-background py-2 pe-2 ps-3 text-muted-foreground transition-shadow focus-within:z-10 focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50";
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
        className: cn(originalClassName, className),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
                className: "inline-flex items-center gap-1",
                "aria-hidden": "true",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(FlagComponent, {
                        country: value,
                        countryName: value,
                        "aria-hidden": "true"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", {
                        className: "text-muted-foreground/80",
                        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react4.ChevronDown, {
                            size: 16,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                        })
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("select", {
                disabled: disabled,
                value: value,
                onChange: handleSelect,
                className: "absolute inset-0 text-sm opacity-0",
                "aria-label": "Select country",
                children: options.filter(function(x) {
                    return x.value;
                }).map(function(option, i) {
                    var _option_value;
                    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("option", {
                        className: "text-black",
                        value: option.value,
                        children: [
                            option.label,
                            " ",
                            option.value && "+".concat(RPNInput.getCountryCallingCode(option.value))
                        ]
                    }, (_option_value = option.value) !== null && _option_value !== void 0 ? _option_value : "empty-".concat(i));
                })
            })
        ]
    });
};
var FlagComponent = function(param) {
    var country = param.country, countryName = param.countryName;
    var Flag = import_flags.default[country];
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", {
        className: "w-5 overflow-hidden rounded-sm",
        children: Flag ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Flag, {
            title: countryName
        }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react4.Phone, {
            size: 16,
            "aria-hidden": "true"
        })
    });
};
// src/components/CodeInput.tsx
var import_input_otp = require("input-otp");
var import_react8 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
function CodeInput(param) {
    var codeValue = param.codeValue, setCodeValue = param.setCodeValue, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className, _param_slotContainerClassName = param.slotContainerClassName, slotContainerClassName = _param_slotContainerClassName === void 0 ? "" : _param_slotContainerClassName;
    var firstInputRef = (0, import_react8.useRef)(null);
    (0, import_react8.useEffect)(function() {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", {
        className: cn("space-y-2 flex justify-center items-center", className),
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_input_otp.OTPInput, {
            ref: firstInputRef,
            value: codeValue,
            onChange: function(newVal) {
                return setCodeValue(newVal);
            },
            containerClassName: "flex items-center gap-3 has-[:disabled]:opacity-50",
            maxLength: 6,
            render: function(param) {
                var slots = param.slots;
                return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", {
                    className: cn("flex gap-5", slotContainerClassName),
                    children: slots.map(function(slot, idx) {
                        return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Slot2, _object_spread({}, slot), idx);
                    })
                });
            }
        })
    });
}
function Slot2(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", {
        className: cn("flex size-9 items-center justify-center rounded-lg border border-input bg-background font-medium text-foreground shadow-sm shadow-black/5 transition-shadow", {
            "z-10 border border-ring ring-[3px] ring-ring/20": props.isActive
        }),
        children: props.char !== null && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", {
            children: props.char
        })
    });
}
// src/components/TestMultipleSelector.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function TeatMultipleSelector(param) {
    var options = param.options, onChange = param.onChange, selectedOptions = param.selectedOptions, _param_emptyOptionsLabel = param.emptyOptionsLabel, emptyOptionsLabel = _param_emptyOptionsLabel === void 0 ? "all options selected." : _param_emptyOptionsLabel;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
        className: "space-y-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(multiselect_default, {
            commandProps: {
                label: "Select frameworks"
            },
            value: selectedOptions,
            onChange: onChange,
            defaultOptions: options,
            placeholder: "Select frameworks",
            hideClearAllButton: true,
            hidePlaceholderWhenSelected: true,
            emptyIndicator: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", {
                className: "text-center text-sm",
                children: emptyOptionsLabel
            })
        })
    });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Badge: Badge,
    Button: Button,
    Checkbox: Checkbox,
    CodeInput: CodeInput,
    ConfirmForm: ConfirmForm,
    DatePicker: DatePicker,
    DurationUI: DurationUI,
    ErrorBoundary: ErrorBoundary,
    ExportToExcel: ExportToExcel,
    Filter: Filter,
    Input: Input,
    InputContainer: InputContainer,
    InternationalPhonePicker: InternationalPhonePicker,
    Loader: Loader,
    MaxRowsLabel: MaxRowsLabel,
    ModularForm: ModularForm,
    ProgressComponent: ProgressComponent,
    Search: Search,
    SelectContainer: SelectContainer,
    Summary: Summary,
    Table: Table,
    TableBody: TableBody,
    TableButton: TableButton,
    TableCell: TableCell,
    TableContext: TableContext,
    TableHead: TableHead,
    TableProvider: TableProvider,
    TableRow: TableRow,
    TeatMultipleSelector: TeatMultipleSelector,
    TimesUI: TimesUI,
    Version: Version,
    badgeVariants: badgeVariants,
    buttonVariants: buttonVariants,
    getFixedNumber: getFixedNumber,
    useDebounce: useDebounce
});
//# sourceMappingURL=index.js.map