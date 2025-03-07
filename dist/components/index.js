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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
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
    BooleanUi: function() {
        return BooleanUi;
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
    ElementLabel: function() {
        return ElementLabel;
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
    GeoUi: function() {
        return GeoUi;
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
        return ModularForm_default;
    },
    MultiSelect: function() {
        return MultiSelect;
    },
    NumberUI: function() {
        return NumberUI;
    },
    PhoneUI: function() {
        return PhoneUI;
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
    SelectWithSearch: function() {
        return SelectWithSearch;
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
    TextAreaContainer: function() {
        return TextAreaContainer;
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
    },
    useSortValues: function() {
        return useSortValues;
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
    var color = param.color, size3 = param.size, _param_style = param.style, style = _param_style === void 0 ? {} : _param_style, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        className: "flex items-center justify-center ".concat(className),
        style: style,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_spinners.ClipLoader, {
            loading: true,
            color: color || "#699A2C",
            size: size3 || 18
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
var import_react7 = require("react");
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
var exportToExcelSvg = function(width, height, viewBox) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", {
        version: "1.0",
        xmlns: "http://www.w3.org/2000/svg",
        width: width || "18",
        height: height || "18",
        viewBox: viewBox || "0 0 150.000000 150.000000",
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
var addressRegex = (0, import_xregexp.default)("[^\\p{L}0-9\\s.,+-\\-]", "gu");
var chartsRegex = (0, import_xregexp.default)("[^\\p{L}0-9\\s.,_@!+-\\-]", "gu");
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
var getFormElementValue = function(form, name) {
    var _form_elements_namedItem;
    return ((_form_elements_namedItem = form.elements.namedItem(name)) === null || _form_elements_namedItem === void 0 ? void 0 : _form_elements_namedItem.value) || "";
};
// src/components/table/Table.tsx
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
    exportToExcelKeys = props.exportToExcelKeys, dataToAddToExcelTable = props.dataToAddToExcelTable, _props_exportExcelTitle = props.exportExcelTitle, exportExcelTitle = _props_exportExcelTitle === void 0 ? "Export to excel" : _props_exportExcelTitle, excelFileName = props.excelFileName, // summary
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
            var cleanString = function(str) {
                return str.replace(textNumbersRegex, "").toLowerCase().trim();
            };
            var normalizedSearchQuery = cleanString(deferredSearchQuery);
            filtered = data.filter(function(item) {
                return allKeys.some(function(key) {
                    return cleanString(String(item[key])).includes(normalizedSearchQuery);
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
    var containerHeaderClassName = props.containerHeaderClassName, optionalElement = props.optionalElement, tableContainerClass = props.tableContainerClass, tableContainerStyle = props.tableContainerStyle, tableStyle = props.tableStyle, includeSearch = props.includeSearch, exportToExcelKeys = props.exportToExcelKeys, sumColumns = props.sumColumns, direction = props.direction, maxRowsLabel1 = props.maxRowsLabel1, maxRowsLabel2 = props.maxRowsLabel2, searchContainerClassName = props.searchContainerClassName;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(TableProvider, _object_spread_props(_object_spread({}, props), {
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                style: {
                    direction: direction
                },
                className: cn("flex justify-start items-center gap-2", containerHeaderClassName || ""),
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", {
                        className: cn("flex justify-start items-center gap-2", searchContainerClassName),
                        children: [
                            includeSearch && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Search, {}),
                            exportToExcelKeys && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ExportToExcel, {})
                        ]
                    }),
                    maxRowsLabel1 && maxRowsLabel2 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MaxRowsLabel, {}),
                    optionalElement && optionalElement
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {
                style: _object_spread_props(_object_spread({}, tableContainerStyle || {}), {
                    direction: direction
                }),
                className: cn("animate-slide-in-up overflow-y-auto", tableContainerClass || ""),
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
    var isNodeEnv2 = typeof process !== "undefined" && process.env;
    var firebaseConfig = {
        apiKey: isNodeEnv2 ? process.env.NEXT_PUBLIC_API_KEY : import_meta.env.VITE_API_KEY,
        authDomain: isNodeEnv2 ? process.env.NEXT_PUBLIC_AUTH_DOMAIN : import_meta.env.VITE_AUTH_DOMAIN,
        projectId: isNodeEnv2 ? process.env.NEXT_PUBLIC_PROJECT_ID : import_meta.env.VITE_PROJECT_ID,
        storageBucket: isNodeEnv2 ? process.env.NEXT_PUBLIC_STORAGE_BUCKET : import_meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: isNodeEnv2 ? process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID : import_meta.env.VITE_MESSAGING_SENDER_ID,
        appId: isNodeEnv2 ? process.env.NEXT_PUBLIC_APP_ID : import_meta.env.VITE_APP_ID
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
        return {};
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
var import_lodash3 = require("lodash");
var import_meta2 = {};
var renderOnce = function() {
    return true;
};
var getLocationUrl = function(lang, lat) {
    return "https://www.google.com/maps?q=".concat(lang, ",").concat(lat);
};
var isNodeEnv = typeof process !== "undefined" && process.env;
var _ref = {
    mode: isNodeEnv ? process.env.NEXT_PUBLIC_MODE : import_meta2.env.VITE_MODE,
    isLocal: (isNodeEnv ? process.env.NEXT_PUBLIC_IS_LOCAL : import_meta2.env.VITE_is_local) === "true"
}, mode = _ref.mode, isLocal = _ref.isLocal;
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
        date = import_moment_timezone.default.utc(firebaseTimestamp, (options === null || options === void 0 ? void 0 : options.fromFormat) || "DD/MM/YYYY HH:mm:ss").toDate();
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date string format");
        }
    } else {
        throw new Error("Invalid input: firebaseTimestamp must be a Timestamp, Date, or valid date string.");
    }
    if (options === null || options === void 0 ? void 0 : options.tz) {
        var result = (0, import_moment_timezone.default)(date).tz(options === null || options === void 0 ? void 0 : options.tz).format((options === null || options === void 0 ? void 0 : options.format) || "DD/MM/YYYY HH:mm:ss");
        return result;
    }
    return import_moment_timezone.default.utc(date).format((options === null || options === void 0 ? void 0 : options.format) || "DD/MM/YYYY HH:mm:ss");
}
// src/helpers/api.ts
var import_axios2 = __toESM(require("axios"));
var baseDomain = mode === "qa" ? "https://nx-api.xyz/api" : "https://nx-api.info/api";
var devicesDomain = isLocal ? "http://localhost:9001/api/devices" : baseDomain + "/devices";
var biDomain = isLocal ? "http://localhost:9002/api/bi" : baseDomain + "/bi";
var callCenterDomain = isLocal ? "http://localhost:9003/api/call-center" : baseDomain + "/call-center";
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
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var React3 = __toESM(require("react"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
            outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Button = React3.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size3 = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Comp, _object_spread({
        ref: ref,
        "data-slot": "button",
        className: cn(buttonVariants({
            variant: variant,
            size: size3,
            className: className
        }))
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
var import_react_dom = __toESM(require("react-dom"));
var import_cmdk2 = require("cmdk");
var import_lucide_react3 = require("lucide-react");
var React9 = __toESM(require("react"));
var import_react5 = require("react");
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
    var className = _param.className, withSearchIcon = _param.withSearchIcon, props = _object_without_properties(_param, [
        "className",
        "withSearchIcon"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
        className: "flex items-center border-b border-input px-3",
        "cmdk-input-wrapper": "",
        children: [
            withSearchIcon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react2.Search, {
                size: 20,
                strokeWidth: 2,
                className: "me-3 text-muted-foreground/80"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_cmdk.Command.Input, _object_spread({
                ref: ref,
                className: cn("flex h-10 w-full rounded-lg bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground/70 disabled:cursor-not-allowed disabled:opacity-50", className)
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
var import_lodash4 = require("lodash");
// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = function(v) {
    return {
        x: v,
        y: v
    };
};
var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
var oppositeAlignmentMap = {
    start: "end",
    end: "start"
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
    return placement.split("-")[0];
}
function getAlignment(placement) {
    return placement.split("-")[1];
}
function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
    return [
        "top",
        "bottom"
    ].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
        rtl = false;
    }
    var alignment = getAlignment(placement);
    var alignmentAxis = getAlignmentAxis(placement);
    var length = getAxisLength(alignmentAxis);
    var mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    var oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, function(alignment) {
        return oppositeAlignmentMap[alignment];
    });
}
function getSideList(side, isStart, rtl) {
    var lr = [
        "left",
        "right"
    ];
    var rl = [
        "right",
        "left"
    ];
    var tb = [
        "top",
        "bottom"
    ];
    var bt = [
        "bottom",
        "top"
    ];
    switch(side){
        case "top":
        case "bottom":
            if (rtl) return isStart ? rl : lr;
            return isStart ? lr : rl;
        case "left":
        case "right":
            return isStart ? tb : bt;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    var alignment = getAlignment(placement);
    var list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
        list = list.map(function(side) {
            return side + "-" + alignment;
        });
        if (flipAlignment) {
            list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(side) {
        return oppositeSideMap[side];
    });
}
function expandPaddingObject(padding) {
    return _object_spread({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, padding);
}
function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
    return {
        width: width,
        height: height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x: x,
        y: y
    };
}
// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
    var reference = _ref.reference, floating = _ref.floating;
    var sideAxis = getSideAxis(placement);
    var alignmentAxis = getAlignmentAxis(placement);
    var alignLength = getAxisLength(alignmentAxis);
    var side = getSide(placement);
    var isVertical = sideAxis === "y";
    var commonX = reference.x + reference.width / 2 - floating.width / 2;
    var commonY = reference.y + reference.height / 2 - floating.height / 2;
    var commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    var coords;
    switch(side){
        case "top":
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case "bottom":
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case "right":
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case "left":
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch(getAlignment(placement)){
        case "start":
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case "end":
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
var computePosition = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(reference, floating, config) {
        var _config_placement, placement, _config_strategy, strategy, _config_middleware, middleware, platform2, validMiddleware, rtl, rects, _computeCoordsFromPlacement, x, y, statefulPlacement, middlewareData, resetCount, i, _validMiddleware_i, name, fn, _ref, nextX, nextY, data, reset, _tmp, ref;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _config_placement = config.placement, placement = _config_placement === void 0 ? "bottom" : _config_placement, _config_strategy = config.strategy, strategy = _config_strategy === void 0 ? "absolute" : _config_strategy, _config_middleware = config.middleware, middleware = _config_middleware === void 0 ? [] : _config_middleware, platform2 = config.platform;
                    validMiddleware = middleware.filter(Boolean);
                    return [
                        4,
                        platform2.isRTL == null ? void 0 : platform2.isRTL(floating)
                    ];
                case 1:
                    rtl = _state.sent();
                    return [
                        4,
                        platform2.getElementRects({
                            reference: reference,
                            floating: floating,
                            strategy: strategy
                        })
                    ];
                case 2:
                    rects = _state.sent();
                    _computeCoordsFromPlacement = computeCoordsFromPlacement(rects, placement, rtl), x = _computeCoordsFromPlacement.x, y = _computeCoordsFromPlacement.y;
                    statefulPlacement = placement;
                    middlewareData = {};
                    resetCount = 0;
                    i = 0;
                    _state.label = 3;
                case 3:
                    if (!(i < validMiddleware.length)) return [
                        3,
                        11
                    ];
                    _validMiddleware_i = validMiddleware[i], name = _validMiddleware_i.name, fn = _validMiddleware_i.fn;
                    return [
                        4,
                        fn({
                            x: x,
                            y: y,
                            initialPlacement: placement,
                            placement: statefulPlacement,
                            strategy: strategy,
                            middlewareData: middlewareData,
                            rects: rects,
                            platform: platform2,
                            elements: {
                                reference: reference,
                                floating: floating
                            }
                        })
                    ];
                case 4:
                    _ref = _state.sent(), nextX = _ref.x, nextY = _ref.y, data = _ref.data, reset = _ref.reset;
                    x = nextX != null ? nextX : x;
                    y = nextY != null ? nextY : y;
                    middlewareData = _object_spread_props(_object_spread({}, middlewareData), _define_property({}, name, _object_spread({}, middlewareData[name], data)));
                    if (!(reset && resetCount <= 50)) return [
                        3,
                        10
                    ];
                    resetCount++;
                    if (!((typeof reset === "undefined" ? "undefined" : _type_of(reset)) === "object")) return [
                        3,
                        9
                    ];
                    if (reset.placement) {
                        statefulPlacement = reset.placement;
                    }
                    if (!reset.rects) return [
                        3,
                        8
                    ];
                    if (!(reset.rects === true)) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        platform2.getElementRects({
                            reference: reference,
                            floating: floating,
                            strategy: strategy
                        })
                    ];
                case 5:
                    _tmp = _state.sent();
                    return [
                        3,
                        7
                    ];
                case 6:
                    _tmp = reset.rects;
                    _state.label = 7;
                case 7:
                    rects = _tmp;
                    _state.label = 8;
                case 8:
                    ref = computeCoordsFromPlacement(rects, statefulPlacement, rtl), x = ref.x, y = ref.y, ref;
                    _state.label = 9;
                case 9:
                    i = -1;
                    _state.label = 10;
                case 10:
                    i++;
                    return [
                        3,
                        3
                    ];
                case 11:
                    return [
                        2,
                        {
                            x: x,
                            y: y,
                            placement: statefulPlacement,
                            strategy: strategy,
                            middlewareData: middlewareData
                        }
                    ];
            }
        });
    });
    return function computePosition(reference, floating, config) {
        return _ref.apply(this, arguments);
    };
}();
function detectOverflow(state, options) {
    return _detectOverflow.apply(this, arguments);
}
function _detectOverflow() {
    _detectOverflow = _async_to_generator(function(state, options) {
        var _await$platform$isEle, x, y, platform2, rects, elements, strategy, _evaluate, _evaluate_boundary, boundary, _evaluate_rootBoundary, rootBoundary, _evaluate_elementContext, elementContext, _evaluate_altBoundary, altBoundary, _evaluate_padding, padding, paddingObject, altContext, element, clippingClientRect, _, _tmp, _tmp1, _tmp2, rect, offsetParent, offsetScale, _tmp3, elementClientRect, _tmp4;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (options === void 0) {
                        options = {};
                    }
                    x = state.x, y = state.y, platform2 = state.platform, rects = state.rects, elements = state.elements, strategy = state.strategy;
                    _evaluate = evaluate(options, state), _evaluate_boundary = _evaluate.boundary, boundary = _evaluate_boundary === void 0 ? "clippingAncestors" : _evaluate_boundary, _evaluate_rootBoundary = _evaluate.rootBoundary, rootBoundary = _evaluate_rootBoundary === void 0 ? "viewport" : _evaluate_rootBoundary, _evaluate_elementContext = _evaluate.elementContext, elementContext = _evaluate_elementContext === void 0 ? "floating" : _evaluate_elementContext, _evaluate_altBoundary = _evaluate.altBoundary, altBoundary = _evaluate_altBoundary === void 0 ? false : _evaluate_altBoundary, _evaluate_padding = _evaluate.padding, padding = _evaluate_padding === void 0 ? 0 : _evaluate_padding;
                    paddingObject = getPaddingObject(padding);
                    altContext = elementContext === "floating" ? "reference" : "floating";
                    element = elements[altBoundary ? altContext : elementContext];
                    _ = platform2.getClippingRect;
                    _tmp = {};
                    return [
                        4,
                        platform2.isElement == null ? void 0 : platform2.isElement(element)
                    ];
                case 1:
                    if (!((_await$platform$isEle = _state.sent()) != null ? _await$platform$isEle : true)) return [
                        3,
                        2
                    ];
                    _tmp1 = element;
                    return [
                        3,
                        5
                    ];
                case 2:
                    _tmp2 = element.contextElement;
                    if (_tmp2) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)
                    ];
                case 3:
                    _tmp2 = _state.sent();
                    _state.label = 4;
                case 4:
                    _tmp1 = _tmp2;
                    _state.label = 5;
                case 5:
                    return [
                        4,
                        _.apply(platform2, [
                            (_tmp.element = _tmp1, _tmp.boundary = boundary, _tmp.rootBoundary = rootBoundary, _tmp.strategy = strategy, _tmp)
                        ])
                    ];
                case 6:
                    clippingClientRect = rectToClientRect.apply(void 0, [
                        _state.sent()
                    ]);
                    rect = elementContext === "floating" ? {
                        x: x,
                        y: y,
                        width: rects.floating.width,
                        height: rects.floating.height
                    } : rects.reference;
                    return [
                        4,
                        platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)
                    ];
                case 7:
                    offsetParent = _state.sent();
                    return [
                        4,
                        platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)
                    ];
                case 8:
                    if (!_state.sent()) return [
                        3,
                        10
                    ];
                    return [
                        4,
                        platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)
                    ];
                case 9:
                    _tmp3 = _state.sent() || {
                        x: 1,
                        y: 1
                    };
                    return [
                        3,
                        11
                    ];
                case 10:
                    _tmp3 = {
                        x: 1,
                        y: 1
                    };
                    _state.label = 11;
                case 11:
                    offsetScale = _tmp3;
                    if (!platform2.convertOffsetParentRelativeRectToViewportRelativeRect) return [
                        3,
                        13
                    ];
                    return [
                        4,
                        platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
                            elements: elements,
                            rect: rect,
                            offsetParent: offsetParent,
                            strategy: strategy
                        })
                    ];
                case 12:
                    _tmp4 = _state.sent();
                    return [
                        3,
                        14
                    ];
                case 13:
                    _tmp4 = rect;
                    _state.label = 14;
                case 14:
                    elementClientRect = rectToClientRect.apply(void 0, [
                        _tmp4
                    ]);
                    return [
                        2,
                        {
                            top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
                            bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
                            left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
                            right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
                        }
                    ];
            }
        });
    });
    return _detectOverflow.apply(this, arguments);
}
var flip = function flip(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: "flip",
        options: options,
        fn: function fn(state) {
            return _async_to_generator(function() {
                var _middlewareData$arrow, _middlewareData$flip, placement, middlewareData, rects, initialPlacement, platform2, elements, _evaluate, tmp, checkMainAxis, tmp1, checkCrossAxis, specifiedFallbackPlacements, _evaluate_fallbackStrategy, fallbackStrategy, _evaluate_fallbackAxisSideDirection, fallbackAxisSideDirection, _evaluate_flipAlignment, flipAlignment, detectOverflowOptions, side, initialSideAxis, isBasePlacement, rtl, fallbackPlacements, hasFallbackAxisSideDirection, _fallbackPlacements, placements2, overflow, overflows, overflowsData, sides2, _middlewareData$flip2, _overflowsData$filter, nextIndex, nextPlacement, resetPlacement, _overflowsData$filter2, placement2;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            placement = state.placement, middlewareData = state.middlewareData, rects = state.rects, initialPlacement = state.initialPlacement, platform2 = state.platform, elements = state.elements;
                            _evaluate = evaluate(options, state), tmp = _evaluate.mainAxis, checkMainAxis = tmp === void 0 ? true : tmp, tmp1 = _evaluate.crossAxis, checkCrossAxis = tmp1 === void 0 ? true : tmp1, specifiedFallbackPlacements = _evaluate.fallbackPlacements, _evaluate_fallbackStrategy = _evaluate.fallbackStrategy, fallbackStrategy = _evaluate_fallbackStrategy === void 0 ? "bestFit" : _evaluate_fallbackStrategy, _evaluate_fallbackAxisSideDirection = _evaluate.fallbackAxisSideDirection, fallbackAxisSideDirection = _evaluate_fallbackAxisSideDirection === void 0 ? "none" : _evaluate_fallbackAxisSideDirection, _evaluate_flipAlignment = _evaluate.flipAlignment, flipAlignment = _evaluate_flipAlignment === void 0 ? true : _evaluate_flipAlignment, detectOverflowOptions = _object_without_properties(_evaluate, [
                                "mainAxis",
                                "crossAxis",
                                "fallbackPlacements",
                                "fallbackStrategy",
                                "fallbackAxisSideDirection",
                                "flipAlignment"
                            ]);
                            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                                return [
                                    2,
                                    {}
                                ];
                            }
                            side = getSide(placement);
                            initialSideAxis = getSideAxis(initialPlacement);
                            isBasePlacement = getSide(initialPlacement) === initialPlacement;
                            return [
                                4,
                                platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)
                            ];
                        case 1:
                            rtl = _state.sent();
                            fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                                getOppositePlacement(initialPlacement)
                            ] : getExpandedPlacements(initialPlacement));
                            hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
                            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
                                ;
                                (_fallbackPlacements = fallbackPlacements).push.apply(_fallbackPlacements, _to_consumable_array(getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl)));
                            }
                            placements2 = [
                                initialPlacement
                            ].concat(_to_consumable_array(fallbackPlacements));
                            return [
                                4,
                                detectOverflow(state, detectOverflowOptions)
                            ];
                        case 2:
                            overflow = _state.sent();
                            overflows = [];
                            overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
                            if (checkMainAxis) {
                                overflows.push(overflow[side]);
                            }
                            if (checkCrossAxis) {
                                sides2 = getAlignmentSides(placement, rects, rtl);
                                overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
                            }
                            overflowsData = _to_consumable_array(overflowsData).concat([
                                {
                                    placement: placement,
                                    overflows: overflows
                                }
                            ]);
                            if (!overflows.every(function(side2) {
                                return side2 <= 0;
                            })) {
                                ;
                                nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                                nextPlacement = placements2[nextIndex];
                                if (nextPlacement) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                index: nextIndex,
                                                overflows: overflowsData
                                            },
                                            reset: {
                                                placement: nextPlacement
                                            }
                                        }
                                    ];
                                }
                                resetPlacement = (_overflowsData$filter = overflowsData.filter(function(d) {
                                    return d.overflows[0] <= 0;
                                }).sort(function(a, b) {
                                    return a.overflows[1] - b.overflows[1];
                                })[0]) == null ? void 0 : _overflowsData$filter.placement;
                                if (!resetPlacement) {
                                    switch(fallbackStrategy){
                                        case "bestFit":
                                            {
                                                ;
                                                placement2 = (_overflowsData$filter2 = overflowsData.filter(function(d) {
                                                    if (hasFallbackAxisSideDirection) {
                                                        var currentSideAxis = getSideAxis(d.placement);
                                                        return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                                        // reading directions favoring greater width.
                                                        currentSideAxis === "y";
                                                    }
                                                    return true;
                                                }).map(function(d) {
                                                    return [
                                                        d.placement,
                                                        d.overflows.filter(function(overflow2) {
                                                            return overflow2 > 0;
                                                        }).reduce(function(acc, overflow2) {
                                                            return acc + overflow2;
                                                        }, 0)
                                                    ];
                                                }).sort(function(a, b) {
                                                    return a[1] - b[1];
                                                })[0]) == null ? void 0 : _overflowsData$filter2[0];
                                                if (placement2) {
                                                    resetPlacement = placement2;
                                                }
                                                break;
                                            }
                                        case "initialPlacement":
                                            resetPlacement = initialPlacement;
                                            break;
                                    }
                                }
                                if (placement !== resetPlacement) {
                                    return [
                                        2,
                                        {
                                            reset: {
                                                placement: resetPlacement
                                            }
                                        }
                                    ];
                                }
                            }
                            return [
                                2,
                                {}
                            ];
                    }
                });
            })();
        }
    };
};
function convertValueToCoords(state, options) {
    return _convertValueToCoords.apply(this, arguments);
}
function _convertValueToCoords() {
    _convertValueToCoords = _async_to_generator(function(state, options) {
        var placement, platform2, elements, rtl, side, alignment, isVertical, mainAxisMulti, crossAxisMulti, rawValue, _ref, mainAxis, crossAxis, alignmentAxis;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    placement = state.placement, platform2 = state.platform, elements = state.elements;
                    return [
                        4,
                        platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)
                    ];
                case 1:
                    rtl = _state.sent();
                    side = getSide(placement);
                    alignment = getAlignment(placement);
                    isVertical = getSideAxis(placement) === "y";
                    mainAxisMulti = [
                        "left",
                        "top"
                    ].includes(side) ? -1 : 1;
                    crossAxisMulti = rtl && isVertical ? -1 : 1;
                    rawValue = evaluate(options, state);
                    _ref = typeof rawValue === "number" ? {
                        mainAxis: rawValue,
                        crossAxis: 0,
                        alignmentAxis: null
                    } : {
                        mainAxis: rawValue.mainAxis || 0,
                        crossAxis: rawValue.crossAxis || 0,
                        alignmentAxis: rawValue.alignmentAxis
                    }, mainAxis = _ref.mainAxis, crossAxis = _ref.crossAxis, alignmentAxis = _ref.alignmentAxis;
                    if (alignment && typeof alignmentAxis === "number") {
                        crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
                    }
                    return [
                        2,
                        isVertical ? {
                            x: crossAxis * crossAxisMulti,
                            y: mainAxis * mainAxisMulti
                        } : {
                            x: mainAxis * mainAxisMulti,
                            y: crossAxis * crossAxisMulti
                        }
                    ];
            }
        });
    });
    return _convertValueToCoords.apply(this, arguments);
}
var offset = function offset(options) {
    if (options === void 0) {
        options = 0;
    }
    return {
        name: "offset",
        options: options,
        fn: function fn(state) {
            return _async_to_generator(function() {
                var _middlewareData$offse, _middlewareData$arrow, x, y, placement, middlewareData, diffCoords;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            x = state.x, y = state.y, placement = state.placement, middlewareData = state.middlewareData;
                            return [
                                4,
                                convertValueToCoords(state, options)
                            ];
                        case 1:
                            diffCoords = _state.sent();
                            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                                return [
                                    2,
                                    {}
                                ];
                            }
                            return [
                                2,
                                {
                                    x: x + diffCoords.x,
                                    y: y + diffCoords.y,
                                    data: _object_spread_props(_object_spread({}, diffCoords), {
                                        placement: placement
                                    })
                                }
                            ];
                    }
                });
            })();
        }
    };
};
var shift = function shift(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: "shift",
        options: options,
        fn: function fn(state) {
            return _async_to_generator(function() {
                var x, y, placement, _evaluate, tmp, checkMainAxis, tmp1, checkCrossAxis, _evaluate_limiter, limiter, detectOverflowOptions, coords, overflow, crossAxis, mainAxis, mainAxisCoord, crossAxisCoord, minSide, maxSide, min2, max2, minSide1, maxSide1, min21, max21, _obj, limitedCoords, _obj1;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            x = state.x, y = state.y, placement = state.placement;
                            _evaluate = evaluate(options, state), tmp = _evaluate.mainAxis, checkMainAxis = tmp === void 0 ? true : tmp, tmp1 = _evaluate.crossAxis, checkCrossAxis = tmp1 === void 0 ? false : tmp1, _evaluate_limiter = _evaluate.limiter, limiter = _evaluate_limiter === void 0 ? {
                                fn: function(_ref) {
                                    var x2 = _ref.x, y2 = _ref.y;
                                    return {
                                        x: x2,
                                        y: y2
                                    };
                                }
                            } : _evaluate_limiter, detectOverflowOptions = _object_without_properties(_evaluate, [
                                "mainAxis",
                                "crossAxis",
                                "limiter"
                            ]);
                            coords = {
                                x: x,
                                y: y
                            };
                            return [
                                4,
                                detectOverflow(state, detectOverflowOptions)
                            ];
                        case 1:
                            overflow = _state.sent();
                            crossAxis = getSideAxis(getSide(placement));
                            mainAxis = getOppositeAxis(crossAxis);
                            mainAxisCoord = coords[mainAxis];
                            crossAxisCoord = coords[crossAxis];
                            if (checkMainAxis) {
                                minSide = mainAxis === "y" ? "top" : "left";
                                maxSide = mainAxis === "y" ? "bottom" : "right";
                                min2 = mainAxisCoord + overflow[minSide];
                                max2 = mainAxisCoord - overflow[maxSide];
                                mainAxisCoord = clamp(min2, mainAxisCoord, max2);
                            }
                            if (checkCrossAxis) {
                                minSide1 = crossAxis === "y" ? "top" : "left";
                                maxSide1 = crossAxis === "y" ? "bottom" : "right";
                                min21 = crossAxisCoord + overflow[minSide1];
                                max21 = crossAxisCoord - overflow[maxSide1];
                                crossAxisCoord = clamp(min21, crossAxisCoord, max21);
                            }
                            limitedCoords = limiter.fn(_object_spread_props(_object_spread({}, state), (_obj = {}, _define_property(_obj, mainAxis, mainAxisCoord), _define_property(_obj, crossAxis, crossAxisCoord), _obj)));
                            return [
                                2,
                                _object_spread_props(_object_spread({}, limitedCoords), {
                                    data: {
                                        x: limitedCoords.x - x,
                                        y: limitedCoords.y - y,
                                        enabled: (_obj1 = {}, _define_property(_obj1, mainAxis, checkMainAxis), _define_property(_obj1, crossAxis, checkCrossAxis), _obj1)
                                    }
                                })
                            ];
                    }
                });
            })();
        }
    };
};
// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
    return typeof window !== "undefined";
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || "").toLowerCase();
    }
    return "#document";
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    return _instanceof(value, Node) || _instanceof(value, getWindow(value).Node);
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return _instanceof(value, Element) || _instanceof(value, getWindow(value).Element);
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return _instanceof(value, HTMLElement) || _instanceof(value, getWindow(value).HTMLElement);
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
        return false;
    }
    return _instanceof(value, ShadowRoot) || _instanceof(value, getWindow(value).ShadowRoot);
}
function isOverflowElement(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY, display = _getComputedStyle.display;
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && ![
        "inline",
        "contents"
    ].includes(display);
}
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].includes(getNodeName(element));
}
function isTopLayer(element) {
    return [
        ":popover-open",
        ":modal"
    ].some(function(selector) {
        try {
            return element.matches(selector);
        } catch (e) {
            return false;
        }
    });
}
function isContainingBlock(elementOrCss) {
    var webkit = isWebKit();
    var css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    return [
        "transform",
        "translate",
        "scale",
        "rotate",
        "perspective"
    ].some(function(value) {
        return css[value] ? css[value] !== "none" : false;
    }) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || [
        "transform",
        "translate",
        "scale",
        "rotate",
        "perspective",
        "filter"
    ].some(function(value) {
        return (css.willChange || "").includes(value);
    }) || [
        "paint",
        "layout",
        "strict",
        "content"
    ].some(function(value) {
        return (css.contain || "").includes(value);
    });
}
function getContainingBlock(element) {
    var currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
    return [
        "html",
        "body",
        "#document"
    ].includes(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === "html") {
        return node;
    }
    var result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    var parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    var scrollableAncestor = getNearestOverflowAncestor(node);
    var isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    var win = getWindow(scrollableAncestor);
    if (isBody) {
        var frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
    var css = getComputedStyle(element);
    var width = parseFloat(css.width) || 0;
    var height = parseFloat(css.height) || 0;
    var hasOffset = isHTMLElement(element);
    var offsetWidth = hasOffset ? element.offsetWidth : width;
    var offsetHeight = hasOffset ? element.offsetHeight : height;
    var shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width: width,
        height: height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
    var domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
        return createCoords(1);
    }
    var rect = domElement.getBoundingClientRect();
    var _getCssDimensions = getCssDimensions(domElement), width = _getCssDimensions.width, height = _getCssDimensions.height, $ = _getCssDimensions.$;
    var x = ($ ? round(rect.width) : rect.width) / width;
    var y = ($ ? round(rect.height) : rect.height) / height;
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x: x,
        y: y
    };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
    var win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
        return false;
    }
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var domElement = unwrapElement(element);
    var scale = createCoords(1);
    if (includeScale) {
        if (offsetParent) {
            if (isElement(offsetParent)) {
                scale = getScale(offsetParent);
            }
        } else {
            scale = getScale(element);
        }
    }
    var visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    var x = (clientRect.left + visualOffsets.x) / scale.x;
    var y = (clientRect.top + visualOffsets.y) / scale.y;
    var width = clientRect.width / scale.x;
    var height = clientRect.height / scale.y;
    if (domElement) {
        var win = getWindow(domElement);
        var offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
        var currentWin = win;
        var currentIFrame = getFrameElement(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            var iframeScale = getScale(currentIFrame);
            var iframeRect = currentIFrame.getBoundingClientRect();
            var css = getComputedStyle(currentIFrame);
            var left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            var top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = getWindow(currentIFrame);
            currentIFrame = getFrameElement(currentWin);
        }
    }
    return rectToClientRect({
        width: width,
        height: height,
        x: x,
        y: y
    });
}
function getWindowScrollBarX(element, rect) {
    var leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
    if (ignoreScrollbarX === void 0) {
        ignoreScrollbarX = false;
    }
    var htmlRect = documentElement.getBoundingClientRect();
    var x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect));
    var y = htmlRect.top + scroll.scrollTop;
    return {
        x: x,
        y: y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    var elements = _ref.elements, rect = _ref.rect, offsetParent = _ref.offsetParent, strategy = _ref.strategy;
    var isFixed = strategy === "fixed";
    var documentElement = getDocumentElement(offsetParent);
    var topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
    }
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var scale = createCoords(1);
    var offsets = createCoords(0);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
            var offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    var htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
    var html = getDocumentElement(element);
    var scroll = getNodeScroll(element);
    var body = element.ownerDocument.body;
    var width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    var height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    var x = -scroll.scrollLeft + getWindowScrollBarX(element);
    var y = -scroll.scrollTop;
    if (getComputedStyle(body).direction === "rtl") {
        x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var visualViewportBased = isWebKit();
        if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
function getInnerBoundingClientRect(element, strategy) {
    var clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    var top = clientRect.top + element.clientTop;
    var left = clientRect.left + element.clientLeft;
    var scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    var width = element.clientWidth * scale.x;
    var height = element.clientHeight * scale.y;
    var x = left * scale.x;
    var y = top * scale.y;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    var rect;
    if (clippingAncestor === "viewport") {
        rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
        rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
        var visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    var parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
        return false;
    }
    return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
    var cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    var result = getOverflowAncestors(element, [], false).filter(function(el) {
        return isElement(el) && getNodeName(el) !== "body";
    });
    var currentContainingBlockComputedStyle = null;
    var elementIsFixed = getComputedStyle(element).position === "fixed";
    var currentNode = elementIsFixed ? getParentNode(element) : element;
    while(isElement(currentNode) && !isLastTraversableNode(currentNode)){
        var computedStyle = getComputedStyle(currentNode);
        var currentNodeIsContaining = isContainingBlock(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === "fixed") {
            currentContainingBlockComputedStyle = null;
        }
        var shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && [
            "absolute",
            "fixed"
        ].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            result = result.filter(function(ancestor) {
                return ancestor !== currentNode;
            });
        } else {
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
}
function getClippingRect(_ref) {
    var element = _ref.element, boundary = _ref.boundary, rootBoundary = _ref.rootBoundary, strategy = _ref.strategy;
    var elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    var clippingAncestors = _to_consumable_array(elementClippingAncestors).concat([
        rootBoundary
    ]);
    var firstClippingAncestor = clippingAncestors[0];
    var clippingRect = clippingAncestors.reduce(function(accRect, clippingAncestor) {
        var rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    var _getCssDimensions = getCssDimensions(element), width = _getCssDimensions.width, height = _getCssDimensions.height;
    return {
        width: width,
        height: height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var isFixed = strategy === "fixed";
    var rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
        }
        if (isOffsetParentAnElement) {
            var offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
        }
    }
    var htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    var x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    var y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x: x,
        y: y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    var rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
    var win = getWindow(element);
    if (isTopLayer(element)) {
        return win;
    }
    if (!isHTMLElement(element)) {
        var svgOffsetParent = getParentNode(element);
        while(svgOffsetParent && !isLastTraversableNode(svgOffsetParent)){
            if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = getParentNode(svgOffsetParent);
        }
        return win;
    }
    var offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)){
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
        return win;
    }
    return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(data) {
        var getOffsetParentFn, getDimensionsFn, floatingDimensions, _tmp, _tmp1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    getOffsetParentFn = this.getOffsetParent || getOffsetParent;
                    getDimensionsFn = this.getDimensions;
                    return [
                        4,
                        getDimensionsFn(data.floating)
                    ];
                case 1:
                    floatingDimensions = _state.sent();
                    _tmp = {};
                    _tmp1 = [
                        data.reference
                    ];
                    return [
                        4,
                        getOffsetParentFn(data.floating)
                    ];
                case 2:
                    return [
                        2,
                        (_tmp.reference = getRectRelativeToOffsetParent.apply(void 0, _tmp1.concat([
                            _state.sent(),
                            data.strategy
                        ])), _tmp.floating = {
                            x: 0,
                            y: 0,
                            width: floatingDimensions.width,
                            height: floatingDimensions.height
                        }, _tmp)
                    ];
            }
        });
    });
    return function getElementRects(data) {
        return _ref.apply(this, arguments);
    };
}();
function isRTL(element) {
    return getComputedStyle(element).direction === "rtl";
}
var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: getDocumentElement,
    getClippingRect: getClippingRect,
    getOffsetParent: getOffsetParent,
    getElementRects: getElementRects,
    getClientRects: getClientRects,
    getDimensions: getDimensions,
    getScale: getScale,
    isElement: isElement,
    isRTL: isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
    var io = null;
    var timeoutId;
    var root = getDocumentElement(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) {
            skip = false;
        }
        if (threshold === void 0) {
            threshold = 1;
        }
        cleanup();
        var elementRectForRootMargin = element.getBoundingClientRect();
        var left = elementRectForRootMargin.left, top = elementRectForRootMargin.top, width = elementRectForRootMargin.width, height = elementRectForRootMargin.height;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        var insetTop = floor(top);
        var insetRight = floor(root.clientWidth - (left + width));
        var insetBottom = floor(root.clientHeight - (top + height));
        var insetLeft = floor(left);
        var rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        var options = {
            rootMargin: rootMargin,
            threshold: max(0, min(1, threshold)) || 1
        };
        var isFirstUpdate = true;
        function handleObserve(entries) {
            var ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    timeoutId = setTimeout(function() {
                        refresh(false, 1e-7);
                    }, 1e3);
                } else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                refresh();
            }
            isFirstUpdate = false;
        }
        try {
            io = new IntersectionObserver(handleObserve, _object_spread_props(_object_spread({}, options), {
                // Handle <iframe>s
                root: root.ownerDocument
            }));
        } catch (e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
        options = {};
    }
    var _options_ancestorScroll = options.ancestorScroll, ancestorScroll = _options_ancestorScroll === void 0 ? true : _options_ancestorScroll, _options_ancestorResize = options.ancestorResize, ancestorResize = _options_ancestorResize === void 0 ? true : _options_ancestorResize, _options_elementResize = options.elementResize, elementResize = _options_elementResize === void 0 ? typeof ResizeObserver === "function" : _options_elementResize, _options_layoutShift = options.layoutShift, layoutShift = _options_layoutShift === void 0 ? typeof IntersectionObserver === "function" : _options_layoutShift, _options_animationFrame = options.animationFrame, animationFrame = _options_animationFrame === void 0 ? false : _options_animationFrame;
    var referenceEl = unwrapElement(reference);
    var ancestors = ancestorScroll || ancestorResize ? _to_consumable_array(referenceEl ? getOverflowAncestors(referenceEl) : []).concat(_to_consumable_array(getOverflowAncestors(floating))) : [];
    ancestors.forEach(function(ancestor) {
        ancestorScroll && ancestor.addEventListener("scroll", update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener("resize", update);
    });
    var cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    var reobserveFrame = -1;
    var resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver(function(_ref) {
            var _$_ref = _sliced_to_array(_ref, 1), firstEntry = _$_ref[0];
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(function() {
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        resizeObserver.observe(floating);
    }
    var frameId;
    var prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        var nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return function() {
        var _resizeObserver2;
        ancestors.forEach(function(ancestor) {
            ancestorScroll && ancestor.removeEventListener("scroll", update);
            ancestorResize && ancestor.removeEventListener("resize", update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var computePosition2 = function(reference, floating, options) {
    var cache = /* @__PURE__ */ new Map();
    var mergedOptions = _object_spread({
        platform: platform
    }, options);
    var platformWithCache = _object_spread_props(_object_spread({}, mergedOptions.platform), {
        _c: cache
    });
    return computePosition(reference, floating, _object_spread_props(_object_spread({}, mergedOptions), {
        platform: platformWithCache
    }));
};
// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React8 = __toESM(require("react"), 1);
var import_react4 = require("react");
var ReactDOM = __toESM(require("react-dom"), 1);
var index = typeof document !== "undefined" ? import_react4.useLayoutEffect : import_react4.useEffect;
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if ((typeof a === "undefined" ? "undefined" : _type_of(a)) !== (typeof b === "undefined" ? "undefined" : _type_of(b))) {
        return false;
    }
    if (typeof a === "function" && a.toString() === b.toString()) {
        return true;
    }
    var length;
    var i;
    var keys;
    if (a && b && (typeof a === "undefined" ? "undefined" : _type_of(a)) === "object") {
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;){
                if (!deepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(i = length; i-- !== 0;){
            if (!({}).hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (key === "_owner" && a.$$typeof) {
                continue;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
}
function getDPR(element) {
    if (typeof window === "undefined") {
        return 1;
    }
    var win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
    var dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
    var ref = React8.useRef(value);
    index(function() {
        ref.current = value;
    });
    return ref;
}
function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    var _options_placement = options.placement, placement = _options_placement === void 0 ? "bottom" : _options_placement, _options_strategy = options.strategy, strategy = _options_strategy === void 0 ? "absolute" : _options_strategy, _options_middleware = options.middleware, middleware = _options_middleware === void 0 ? [] : _options_middleware, platform2 = options.platform, tmp = options.elements, _ref = tmp === void 0 ? {} : tmp, externalReference = _ref.reference, externalFloating = _ref.floating, _options_transform = options.transform, transform = _options_transform === void 0 ? true : _options_transform, whileElementsMounted = options.whileElementsMounted, open = options.open;
    var _React8_useState = _sliced_to_array(React8.useState({
        x: 0,
        y: 0,
        strategy: strategy,
        placement: placement,
        middlewareData: {},
        isPositioned: false
    }), 2), data = _React8_useState[0], setData = _React8_useState[1];
    var _React8_useState1 = _sliced_to_array(React8.useState(middleware), 2), latestMiddleware = _React8_useState1[0], setLatestMiddleware = _React8_useState1[1];
    if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
    }
    var _React8_useState2 = _sliced_to_array(React8.useState(null), 2), _reference = _React8_useState2[0], _setReference = _React8_useState2[1];
    var _React8_useState3 = _sliced_to_array(React8.useState(null), 2), _floating = _React8_useState3[0], _setFloating = _React8_useState3[1];
    var setReference = React8.useCallback(function(node) {
        if (node !== referenceRef.current) {
            referenceRef.current = node;
            _setReference(node);
        }
    }, []);
    var setFloating = React8.useCallback(function(node) {
        if (node !== floatingRef.current) {
            floatingRef.current = node;
            _setFloating(node);
        }
    }, []);
    var referenceEl = externalReference || _reference;
    var floatingEl = externalFloating || _floating;
    var referenceRef = React8.useRef(null);
    var floatingRef = React8.useRef(null);
    var dataRef = React8.useRef(data);
    var hasWhileElementsMounted = whileElementsMounted != null;
    var whileElementsMountedRef = useLatestRef(whileElementsMounted);
    var platformRef = useLatestRef(platform2);
    var openRef = useLatestRef(open);
    var update = React8.useCallback(function() {
        if (!referenceRef.current || !floatingRef.current) {
            return;
        }
        var config = {
            placement: placement,
            strategy: strategy,
            middleware: latestMiddleware
        };
        if (platformRef.current) {
            config.platform = platformRef.current;
        }
        computePosition2(referenceRef.current, floatingRef.current, config).then(function(data2) {
            var fullData = _object_spread_props(_object_spread({}, data2), {
                // The floating element's position may be recomputed while it's closed
                // but still mounted (such as when transitioning out). To ensure
                // `isPositioned` will be `false` initially on the next open, avoid
                // setting it to `true` when `open === false` (must be specified).
                isPositioned: openRef.current !== false
            });
            if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                dataRef.current = fullData;
                ReactDOM.flushSync(function() {
                    setData(fullData);
                });
            }
        });
    }, [
        latestMiddleware,
        placement,
        strategy,
        platformRef,
        openRef
    ]);
    index(function() {
        if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData(function(data2) {
                return _object_spread_props(_object_spread({}, data2), {
                    isPositioned: false
                });
            });
        }
    }, [
        open
    ]);
    var isMountedRef = React8.useRef(false);
    index(function() {
        isMountedRef.current = true;
        return function() {
            isMountedRef.current = false;
        };
    }, []);
    index(function() {
        if (referenceEl) referenceRef.current = referenceEl;
        if (floatingEl) floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
            if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
            }
            update();
        }
    }, [
        referenceEl,
        floatingEl,
        update,
        whileElementsMountedRef,
        hasWhileElementsMounted
    ]);
    var refs = React8.useMemo(function() {
        return {
            reference: referenceRef,
            floating: floatingRef,
            setReference: setReference,
            setFloating: setFloating
        };
    }, [
        setReference,
        setFloating
    ]);
    var elements = React8.useMemo(function() {
        return {
            reference: referenceEl,
            floating: floatingEl
        };
    }, [
        referenceEl,
        floatingEl
    ]);
    var floatingStyles = React8.useMemo(function() {
        var initialStyles = {
            position: strategy,
            left: 0,
            top: 0
        };
        if (!elements.floating) {
            return initialStyles;
        }
        var x = roundByDPR(elements.floating, data.x);
        var y = roundByDPR(elements.floating, data.y);
        if (transform) {
            return _object_spread(_object_spread_props(_object_spread({}, initialStyles), {
                transform: "translate(" + x + "px, " + y + "px)"
            }), getDPR(elements.floating) >= 1.5 && {
                willChange: "transform"
            });
        }
        return {
            position: strategy,
            left: x,
            top: y
        };
    }, [
        strategy,
        transform,
        elements.floating,
        data.x,
        data.y
    ]);
    return React8.useMemo(function() {
        return _object_spread_props(_object_spread({}, data), {
            update: update,
            refs: refs,
            elements: elements,
            floatingStyles: floatingStyles
        });
    }, [
        data,
        update,
        refs,
        elements,
        floatingStyles
    ]);
}
var offset3 = function(options, deps) {
    return _object_spread_props(_object_spread({}, offset2(options)), {
        options: [
            options,
            deps
        ]
    });
};
var shift3 = function(options, deps) {
    return _object_spread_props(_object_spread({}, shift2(options)), {
        options: [
            options,
            deps
        ]
    });
};
var flip3 = function(options, deps) {
    return _object_spread_props(_object_spread({}, flip2(options)), {
        options: [
            options,
            deps
        ]
    });
};
// src/components/ui/multiselect.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var Portal2 = function(param) {
    var children = param.children;
    return import_react_dom.default.createPortal(children, document.body);
};
function transToGroupOption(options, groupBy) {
    if (options.length === 0) return {};
    if (!groupBy) return {
        "": options
    };
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
var CommandEmpty2 = (0, import_react5.forwardRef)(function(_param, forwardedRef) {
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
function useDebounce(value, delay) {
    var _React9_useState = _sliced_to_array(React9.useState(value), 2), debouncedValue = _React9_useState[0], setDebouncedValue = _React9_useState[1];
    (0, import_react5.useEffect)(function() {
        var timer = setTimeout(function() {
            return setDebouncedValue(value);
        }, delay || 500);
        return function() {
            return clearTimeout(timer);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
var MultipleSelector = (0, import_react5.forwardRef)(function(param, ref) {
    var value = param.value, onChange = param.onChange, placeholder = param.placeholder, tmp = param.defaultOptions, arrayDefaultOptions = tmp === void 0 ? [] : tmp, arrayOptions = param.options, delay = param.delay, onSearch = param.onSearch, onSearchSync = param.onSearchSync, loadingIndicator = param.loadingIndicator, emptyIndicator = param.emptyIndicator, _param_maxSelected = param.maxSelected, maxSelected = _param_maxSelected === void 0 ? Number.MAX_SAFE_INTEGER : _param_maxSelected, onMaxSelected = param.onMaxSelected, _param_hidePlaceholderWhenSelected = param.hidePlaceholderWhenSelected, hidePlaceholderWhenSelected = _param_hidePlaceholderWhenSelected === void 0 ? true : _param_hidePlaceholderWhenSelected, disabled = param.disabled, groupBy = param.groupBy, className = param.className, badgeClassName = param.badgeClassName, _param_selectFirstItem = param.selectFirstItem, selectFirstItem = _param_selectFirstItem === void 0 ? true : _param_selectFirstItem, _param_creatable = param.creatable, creatable = _param_creatable === void 0 ? false : _param_creatable, _param_triggerSearchOnFocus = param.triggerSearchOnFocus, triggerSearchOnFocus = _param_triggerSearchOnFocus === void 0 ? true : _param_triggerSearchOnFocus, commandProps = param.commandProps, inputProps = param.inputProps, _param_hideClearAllButton = param.hideClearAllButton, hideClearAllButton = _param_hideClearAllButton === void 0 ? false : _param_hideClearAllButton, dropdownClassName = param.dropdownClassName, dropdownOptionClassName = param.dropdownOptionClassName, emptyIndicatorClassName = param.emptyIndicatorClassName, _param_unremovableOptions = param.unremovableOptions, unremovableOptions = _param_unremovableOptions === void 0 ? [] : _param_unremovableOptions, name = param.name, _param_dropdownContainerClassName = param.dropdownContainerClassName, dropdownContainerClassName = _param_dropdownContainerClassName === void 0 ? "" : _param_dropdownContainerClassName;
    var _containerRef_current;
    var _React9_useState = _sliced_to_array(React9.useState(false), 2), isLoading = _React9_useState[0], setIsLoading = _React9_useState[1];
    var _useFloating = useFloating({
        placement: "bottom-start",
        middleware: [
            offset3(4),
            flip3(),
            shift3()
        ],
        whileElementsMounted: autoUpdate
    }), x = _useFloating.x, y = _useFloating.y, strategy = _useFloating.strategy, refs = _useFloating.refs, update = _useFloating.update;
    var containerRef = (0, import_react5.useRef)(null);
    var setContainerRef = function(node) {
        containerRef.current = node;
        refs.setReference(node);
    };
    var inputRef = (0, import_react5.useRef)(null);
    var _React9_useState1 = _sliced_to_array(React9.useState(false), 2), open = _React9_useState1[0], setOpen = _React9_useState1[1];
    var _React9_useState2 = _sliced_to_array(React9.useState(false), 2), onScrollbar = _React9_useState2[0], setOnScrollbar = _React9_useState2[1];
    var dropdownRef = (0, import_react5.useRef)(null);
    var _React9_useState3 = _sliced_to_array(React9.useState(value || []), 2), selected = _React9_useState3[0], setSelected = _React9_useState3[1];
    var _React9_useState4 = _sliced_to_array(React9.useState(transToGroupOption(arrayDefaultOptions, groupBy)), 2), options = _React9_useState4[0], setOptions = _React9_useState4[1];
    var _React9_useState5 = _sliced_to_array(React9.useState(""), 2), inputValue = _React9_useState5[0], setInputValue = _React9_useState5[1];
    var debouncedSearchTerm = useDebounce(inputValue, delay || 500);
    React9.useImperativeHandle(ref, function() {
        return {
            selectedValue: _to_consumable_array(selected),
            input: inputRef.current,
            focus: function() {
                var _inputRef_current;
                return (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            },
            reset: function() {
                return setSelected([]);
            }
        };
    }, [
        selected
    ]);
    (0, import_react5.useEffect)(function() {
        if (open) {
            update();
        }
    }, [
        open,
        update
    ]);
    var handleClickOutside = (0, import_react5.useCallback)(function(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && containerRef.current && !containerRef.current.contains(event.target)) {
            var _inputRef_current;
            setOpen(false);
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.blur();
        }
    }, []);
    (0, import_react5.useEffect)(function() {
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
        open,
        handleClickOutside
    ]);
    (0, import_react5.useEffect)(function() {
        if (value) {
            setSelected(value);
        }
    }, [
        value
    ]);
    (0, import_react5.useEffect)(function() {
        if (!arrayOptions || onSearch) return;
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
    (0, import_react5.useEffect)(function() {
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
        triggerSearchOnFocus,
        onSearchSync
    ]);
    (0, import_react5.useEffect)(function() {
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
        triggerSearchOnFocus,
        onSearch
    ]);
    var handleUnselect = (0, import_react5.useCallback)(function(option) {
        if (unremovableOptions.find(function(v) {
            return (0, import_lodash4.isEqual)(v.value, option.value);
        })) {
            return;
        }
        var newOptions = selected.filter(function(s) {
            return s.value !== option.value;
        });
        setSelected(newOptions);
        onChange === null || onChange === void 0 ? void 0 : onChange(newOptions);
    }, [
        onChange,
        selected,
        unremovableOptions
    ]);
    var handleKeyDown = (0, import_react5.useCallback)(function(e) {
        var input = inputRef.current;
        if (input) {
            if (e.key === "Delete" || e.key === "Backspace") {
                if (input.value === "" && selected.length > 0) {
                    var lastSelectOption = selected[selected.length - 1];
                    if (!lastSelectOption.fixed) {
                        handleUnselect(lastSelectOption);
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
    var combinedFloatingRef = (0, import_react5.useCallback)(function(node) {
        if (!node) return;
        refs.setFloating(node);
        dropdownRef.current = node;
    }, [
        refs
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
            onSelect: function(val) {
                if (selected.length >= maxSelected) {
                    onMaxSelected === null || onMaxSelected === void 0 ? void 0 : onMaxSelected(selected.length);
                    return;
                }
                setInputValue("");
                var newOptions = _to_consumable_array(selected).concat([
                    {
                        value: val,
                        label: val
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
    var EmptyItem = (0, import_react5.useCallback)(function() {
        if (!emptyIndicator) return void 0;
        if (onSearch && !creatable && Object.keys(options).length === 0) {
            return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandItem, {
                className: "",
                value: "-",
                disabled: true,
                children: emptyIndicator
            });
        }
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandEmpty2, {
            className: emptyIndicatorClassName,
            children: emptyIndicator
        });
    }, [
        creatable,
        emptyIndicator,
        onSearch,
        options,
        emptyIndicatorClassName
    ]);
    var selectables = (0, import_react5.useMemo)(function() {
        return removePickedOption(options, selected);
    }, [
        options,
        selected
    ]);
    var commandFilter = (0, import_react5.useCallback)(function() {
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
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Command, _object_spread_props(_object_spread({}, commandProps), {
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
                ref: setContainerRef,
                className: cn("relative min-h-[38px] py-2 rounded-lg border border-input text-sm transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50", {
                    "p-1": selected.length !== 0,
                    "cursor-text": !disabled && selected.length !== 0
                }, !hideClearAllButton && "pe-9", className),
                onClick: function() {
                    var _inputRef_current;
                    if (disabled) return;
                    (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", {
                    className: "flex flex-wrap gap-1",
                    children: [
                        selected.map(function(option) {
                            return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", {
                                className: cn("animate-fadeIn relative inline-flex h-7 cursor-default items-center rounded-md border border-solid bg-background pe-7 pl-2 ps-2 text-xs font-medium text-secondary-foreground transition-all hover:bg-background disabled:cursor-not-allowed disabled:opacity-50 data-[fixed]:pe-2 px-1", badgeClassName),
                                "data-fixed": option.fixed,
                                "data-disabled": disabled || void 0,
                                children: [
                                    option.label,
                                    !unremovableOptions.find(function(v) {
                                        return (0, import_lodash4.isEqual)(v.value, option.value);
                                    }) && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", {
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
                            onValueChange: function(val) {
                                var _inputProps_onValueChange;
                                setInputValue(val);
                                inputProps === null || inputProps === void 0 ? void 0 : (_inputProps_onValueChange = inputProps.onValueChange) === null || _inputProps_onValueChange === void 0 ? void 0 : _inputProps_onValueChange.call(inputProps, val);
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
            open && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Portal2, {
                children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", {
                    ref: combinedFloatingRef,
                    style: {
                        position: strategy,
                        top: y !== null && y !== void 0 ? y : 0,
                        left: x !== null && x !== void 0 ? x : 0,
                        width: (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.offsetWidth
                    },
                    className: cn("z-[9999] overflow-hidden rounded-lg border border-input", dropdownContainerClassName),
                    "data-state": open ? "open" : "closed",
                    children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandList, {
                        className: "bg-popover text-popover-foreground shadow-lg shadow-black/5 outline-none",
                        onMouseLeave: function() {
                            setOnScrollbar(false);
                        },
                        onMouseEnter: function() {
                            setOnScrollbar(true);
                        },
                        onMouseUp: function() {
                            var _inputRef_current;
                            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
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
                                        className: cn("h-full overflow-auto", dropdownClassName),
                                        children: dropdowns.map(function(option) {
                                            return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CommandItem, {
                                                value: option.value,
                                                disabled: option.disable,
                                                onMouseDown: function(e) {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                },
                                                onSelect: function() {
                                                    setOptions(transToGroupOption(arrayDefaultOptions, groupBy));
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
                                                className: cn("cursor-pointer", option.disable && "cursor-not-allowed opacity-50", dropdownOptionClassName),
                                                children: option.label
                                            }, option.value);
                                        })
                                    }, key);
                                })
                            ]
                        })
                    })
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", {
                value: JSON.stringify(selected),
                type: "hidden",
                name: name
            })
        ]
    }));
});
MultipleSelector.displayName = "MultipleSelector";
var multiselect_default = MultipleSelector;
// src/components/ui/popover.tsx
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime15 = require("react/jsx-runtime");
function Popover(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PopoverPrimitive.Root, _object_spread({
        "data-slot": "popover"
    }, props));
}
function PopoverTrigger(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PopoverPrimitive.Trigger, _object_spread({
        "data-slot": "popover-trigger"
    }, props));
}
function PopoverContent(_param) {
    var className = _param.className, _param_align = _param.align, align = _param_align === void 0 ? "center" : _param_align, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, _param_showArrow = _param.showArrow, showArrow = _param_showArrow === void 0 ? false : _param_showArrow, props = _object_without_properties(_param, [
        "className",
        "align",
        "sideOffset",
        "showArrow"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PopoverPrimitive.Portal, {
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(PopoverPrimitive.Content, _object_spread_props(_object_spread({
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[1000] w-72 rounded-md border p-4 shadow-md outline-hidden", className)
        }, props), {
            children: [
                props.children,
                showArrow && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PopoverPrimitive.Arrow, {
                    className: "fill-popover -my-px drop-shadow-[0_1px_0_hsl(var(--border))]"
                })
            ]
        }))
    });
}
// src/components/ui/SearchSelect.tsx
var import_lucide_react4 = require("lucide-react");
var import_react6 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
function SearchSelect(param) {
    var options = param.options, name = param.name, _param_selectPlaceholder = param.selectPlaceholder, selectPlaceholder = _param_selectPlaceholder === void 0 ? "Select" : _param_selectPlaceholder, defaultValue = param.defaultValue, notFoundLabel = param.notFoundLabel, _param_searchPlaceholder = param.searchPlaceholder, searchPlaceholder = _param_searchPlaceholder === void 0 ? "Search" : _param_searchPlaceholder, dropdownClassName = param.dropdownClassName, dropdownOptionClassName = param.dropdownOptionClassName, notFoundLabelClassName = param.notFoundLabelClassName, elementClassName = param.elementClassName, searchClassName = param.searchClassName, selectButtonClassName = param.selectButtonClassName, value = param.value, disabled = param.disabled, onChange = param.onChange, direction = param.direction;
    var id = (0, import_react6.useId)();
    var _ref = _sliced_to_array((0, import_react6.useState)(false), 2), open = _ref[0], setOpen = _ref[1];
    var _ref1;
    var _ref2 = _sliced_to_array((0, import_react6.useState)((_ref1 = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref1 !== void 0 ? _ref1 : ""), 2), selectedValue = _ref2[0], setSelectedValue = _ref2[1];
    var selectLabel = (0, import_react6.useMemo)(function() {
        var _options_find;
        return selectedValue ? (_options_find = options.find(function(item) {
            return item.value === selectedValue;
        })) === null || _options_find === void 0 ? void 0 : _options_find.label : selectPlaceholder;
    }, [
        selectedValue,
        options,
        selectPlaceholder
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", {
        style: {
            direction: direction
        },
        className: cn("w-full", elementClassName),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Popover, {
                open: open,
                onOpenChange: setOpen,
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PopoverTrigger, {
                        asChild: true,
                        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Button, {
                            id: id,
                            variant: "outline",
                            role: "combobox",
                            "aria-expanded": open,
                            disabled: disabled,
                            className: cn("bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]", selectButtonClassName),
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", {
                                    className: cn("truncate", !selectedValue && "text-muted-foreground"),
                                    children: selectLabel
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react4.ChevronDownIcon, {
                                    size: 16,
                                    className: "text-muted-foreground/80 shrink-0",
                                    "aria-hidden": "true"
                                })
                            ]
                        })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PopoverContent, {
                        className: cn("border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0 bg-[#fff]"),
                        align: "start",
                        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Command, {
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CommandInput, {
                                    style: {
                                        direction: direction
                                    },
                                    className: cn(searchClassName),
                                    placeholder: searchPlaceholder
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(CommandList, {
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CommandEmpty, {
                                            className: cn("w-full py-2 text-center", notFoundLabelClassName),
                                            children: notFoundLabel
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CommandGroup, {
                                            className: cn("max-h-52 overflow-y-auto", dropdownClassName),
                                            children: options.map(function(option) {
                                                return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(CommandItem, {
                                                    className: cn("hover:bg-[#cccbcb] cursor-pointer", dropdownOptionClassName, selectedValue === option.value && "bg-[#cccbcb]"),
                                                    value: JSON.stringify(option),
                                                    onSelect: function(currentValue) {
                                                        var parsedValue = JSON.parse(currentValue);
                                                        setSelectedValue(parsedValue.value);
                                                        onChange === null || onChange === void 0 ? void 0 : onChange(parsedValue.value);
                                                        setOpen(false);
                                                    },
                                                    children: [
                                                        option.label,
                                                        selectedValue === option.value && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react4.CheckIcon, {
                                                            size: 16,
                                                            className: "ml-auto"
                                                        })
                                                    ]
                                                }, option.value);
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", {
                name: name,
                type: "hidden",
                value: selectedValue
            })
        ]
    });
}
// src/components/table/components.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var getFixedNumber = function() {
    var number = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, fix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
    var sum_value = number % 1 === 0 ? number : number.toFixed(fix).replace(/\.?0+$/, "");
    return String(sum_value);
};
var TableRow2 = function(param) {
    var item = param.item, index2 = param.index;
    var _useTableContext = useTableContext(), rowStyles = _useTableContext.rowStyles, rowClassName = _useTableContext.rowClassName, keysToRender = _useTableContext.keysToRender, onRowClick = _useTableContext.onRowClick, zebraStriping = _useTableContext.zebraStriping;
    var zebraClassName = zebraStriping ? index2 % 2 === 0 ? zebraStriping.evenRowClassName || "" : zebraStriping.oddRowClassName || "bg-gray-300" : "";
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tr", {
        className: cn("hover:bg-[#808080] hover:text-[#fff]", zebraClassName, rowClassName || ""),
        onClick: function() {
            return onRowClick && onRowClick(item);
        },
        style: rowStyles,
        children: keysToRender.map(function(key, index3) {
            return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TableCell, {
                value: item[key]
            }, index3);
        })
    });
};
var TableCell = function(param) {
    var value = param.value;
    var _useTableContext = useTableContext(), cellStyle = _useTableContext.cellStyle, cellClassName = _useTableContext.cellClassName;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", {
        title: [
            "string",
            "number",
            "boolean"
        ].includes(typeof value === "undefined" ? "undefined" : _type_of(value)) ? value : "",
        style: cellStyle,
        className: cn("chivo ellipsis border-black border-[1px] max-w-[90px] px-1 text-center", cellClassName || ""),
        children: value
    });
};
var Filter = (0, import_react7.memo)(function(param) {
    var filterableColumn = param.filterableColumn, index2 = param.index;
    var _filters_filterableColumn_dataKey, _filters_filterableColumn_dataKey1, _filterOptions_filterableColumn_dataKey;
    var _useTableContext = useTableContext(), direction = _useTableContext.direction, headers = _useTableContext.headers, filters = _useTableContext.filters, filterOptions = _useTableContext.filterOptions, filterPopupsDisplay = _useTableContext.filterPopupsDisplay, handleFilterChange = _useTableContext.handleFilterChange, handleFilterClick = _useTableContext.handleFilterClick, closeFilterWindow = _useTableContext.closeFilterWindow, filterLabel = _useTableContext.filterLabel;
    var displayRight = direction === "rtl" && index2 === headers.length - 1 || direction === "ltr" && index2 !== headers.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
        className: "absolute top-1 right-1 ",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", {
                title: filterLabel + " " + filterableColumn.header,
                className: "text-[12px]",
                onClick: function() {
                    return handleFilterClick(filterableColumn.dataKey);
                },
                children: filterPopupsDisplay === filterableColumn.dataKey ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, {
                    children: ((_filters_filterableColumn_dataKey = filters[filterableColumn.dataKey]) === null || _filters_filterableColumn_dataKey === void 0 ? void 0 : _filters_filterableColumn_dataKey.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, {
                        children: slashFilterSvg(true)
                    }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, {
                        children: emptyFilterSvg(true)
                    })
                }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, {
                    children: ((_filters_filterableColumn_dataKey1 = filters[filterableColumn.dataKey]) === null || _filters_filterableColumn_dataKey1 === void 0 ? void 0 : _filters_filterableColumn_dataKey1.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, {
                        children: slashFilterSvg()
                    }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, {
                        children: emptyFilterSvg()
                    })
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                className: "relative",
                children: filterPopupsDisplay === filterableColumn.dataKey && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
                    className: "absolute top-[-20px] z-20 ".concat(displayRight ? " left-[100%]" : "right-[100%]", " w-44 h-52 text-black bg-white p-1 flex flex-col items-center gap-2 shadow"),
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
                            className: "flex justify-between items-center border-black border-b-[1px] w-[90%]",
                            children: [
                                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                                    className: "text-start",
                                    children: filterLabel + " " + filterableColumn.header
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", {
                                    onClick: closeFilterWindow,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(RedXSvg2, {})
                                })
                            ]
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                            className: "overflow-auto h-[80%] flex flex-col gap-1 w-full cursor-pointer ",
                            children: (_filterOptions_filterableColumn_dataKey = filterOptions[filterableColumn.dataKey]) === null || _filterOptions_filterableColumn_dataKey === void 0 ? void 0 : _filterOptions_filterableColumn_dataKey.map(function(option, i) {
                                var _filters_filterableColumn_dataKey;
                                return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
                                    className: "flex items-center px-2 justify-start hover:bg-[#547f22] hover:text-white",
                                    children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", {
                                            type: "checkbox",
                                            className: "cursor-pointer",
                                            checked: (_filters_filterableColumn_dataKey = filters[filterableColumn.dataKey]) === null || _filters_filterableColumn_dataKey === void 0 ? void 0 : _filters_filterableColumn_dataKey.includes(option),
                                            onChange: function() {
                                                return handleFilterChange(filterableColumn.dataKey, option);
                                            }
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", {
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
var TableHead = (0, import_react7.memo)(function() {
    var _useTableContext = useTableContext(), headers = _useTableContext.headers, headerStyle = _useTableContext.headerStyle, headerCellStyle = _useTableContext.headerCellStyle, sortColumn = _useTableContext.sortColumn, handleSort = _useTableContext.handleSort, sortKeys = _useTableContext.sortKeys, sortOrder = _useTableContext.sortOrder, _useTableContext_filterableColumns = _useTableContext.filterableColumns, filterableColumns = _useTableContext_filterableColumns === void 0 ? [] : _useTableContext_filterableColumns, sortLabel = _useTableContext.sortLabel, headerClassName = _useTableContext.headerClassName, headerCellClassName = _useTableContext.headerCellClassName;
    var sortDisplay = (0, import_react7.useMemo)(function() {
        return Boolean(sortKeys === null || sortKeys === void 0 ? void 0 : sortKeys.length);
    }, [
        sortKeys
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("thead", {
        className: cn("bg-[#282828] text-white sticky top-0", headerClassName),
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tr", {
            style: headerStyle,
            children: headers.map(function(header, index2) {
                var filterableColumn = filterableColumns.find(function(col) {
                    return col.header === header;
                });
                return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("th", {
                    title: sortDisplay ? "".concat(sortLabel, " ").concat(header) : header,
                    style: headerCellStyle,
                    className: cn("border-black border-[1px] max-w-[130px] px-2 text-center relative", headerCellClassName),
                    children: [
                        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                            className: "px-2 ".concat(sortDisplay ? "cursor-pointer" : ""),
                            onClick: function() {
                                return sortDisplay && handleSort(index2);
                            },
                            children: header
                        }),
                        sortDisplay && sortColumn === index2 && (sortOrder === "desc" ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, {
                            children: sortSvg()
                        }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, {
                            children: sortSvg(true)
                        })),
                        filterableColumn && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Filter, {
                            filterableColumn: filterableColumn,
                            index: index2
                        })
                    ]
                }, index2);
            })
        })
    });
}, renderOnce);
var TableBody = (0, import_react7.memo)(function() {
    var dataToRender = useTableContext().dataToRender;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tbody", {
        className: "divide-y divide-gray-600",
        children: dataToRender.renderedData.map(function(item, index2) {
            return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TableRow2, {
                item: item,
                index: index2
            }, index2);
        })
    });
}, renderOnce);
var MaxRowsLabel = (0, import_react7.memo)(function() {
    var _useTableContext = useTableContext(), data = _useTableContext.data, dataToRender = _useTableContext.dataToRender, maxRowsLabel1 = _useTableContext.maxRowsLabel1, maxRowsLabel2 = _useTableContext.maxRowsLabel2, maxRows = _useTableContext.maxRows, maxRowsContainerClassName = _useTableContext.maxRowsContainerClassName;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
        className: cn("flex justify-start items-center text-lg gap-1", maxRowsContainerClassName || ""),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                children: maxRowsLabel1
            }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                children: maxRows > dataToRender.renderedData.length ? dataToRender.renderedData.length : maxRows
            }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                children: maxRowsLabel2
            }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                children: dataToRender.filtered.length
            })
        ]
    });
}, renderOnce);
var ExportToExcel = (0, import_react7.memo)(function() {
    var _useTableContext = useTableContext(), exportToExcelKeys = _useTableContext.exportToExcelKeys, dataToAddToExcelTable = _useTableContext.dataToAddToExcelTable, excelFileName = _useTableContext.excelFileName, dataToRender = _useTableContext.dataToRender, headers = _useTableContext.headers, sumColumns = _useTableContext.sumColumns, exportExcelTitle = _useTableContext.exportExcelTitle, exportExcelContent = _useTableContext.exportExcelContent, exportToExcelClassName = _useTableContext.exportToExcelClassName;
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
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", {
        onClick: onExportExcelClick,
        title: exportExcelTitle,
        className: cn("px-2 py-[2px] bg-[#547f22] text-white rounded-lg text-[16px]", exportToExcelClassName),
        children: exportExcelContent || exportToExcelSvg()
    });
}, renderOnce);
var Search = (0, import_react7.memo)(function() {
    var _useTableContext = useTableContext(), searchQuery = _useTableContext.searchQuery, handleSearch = _useTableContext.handleSearch, searchPlaceHolder = _useTableContext.searchPlaceHolder, searchInputClassName = _useTableContext.searchInputClassName, searchInputStyle = _useTableContext.searchInputStyle;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", {
        className: cn("w-40 border-black border-[1px] text-lg px-2 ", searchInputClassName),
        type: "text",
        placeholder: searchPlaceHolder,
        value: searchQuery,
        onChange: handleSearch,
        style: searchInputStyle
    });
}, renderOnce);
var Summary = (0, import_react7.memo)(function() {
    var _useTableContext = useTableContext(), summaryContainerStyle = _useTableContext.summaryContainerStyle, summaryLabelStyle = _useTableContext.summaryLabelStyle, summaryLabel = _useTableContext.summaryLabel, summaryRowStyle = _useTableContext.summaryRowStyle, sumColumns = _useTableContext.sumColumns, dataToRender = _useTableContext.dataToRender, direction = _useTableContext.direction;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
        style: _object_spread_props(_object_spread({}, summaryContainerStyle), {
            direction: direction
        }),
        className: "w-full h-8 flex justify-between items-center px-3 text-[18px] font-bold",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                style: summaryLabelStyle,
                children: summaryLabel
            }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                style: summaryRowStyle,
                className: "flex gap-3",
                children: sumColumns.map(function(val) {
                    var sum_res = dataToRender.renderedData.reduce(function(acc, v) {
                        return acc + Number(v[val.dataKey]) || 0;
                    }, 0);
                    var sum_value = getFixedNumber(sum_res);
                    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
                        className: "flex gap-1 justify-start",
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
                                children: val.label
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", {
                                children: ":"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
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
    var timestamp = param.timestamp, format = param.format, tz = param.tz, direction = param.direction, fromFormat = param.fromFormat, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    var time = timestamp_to_string(timestamp, {
        format: format,
        fromFormat: fromFormat,
        tz: tz
    });
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
        style: {
            direction: "ltr"
        },
        className: cn("_ellipsis  ".concat(direction === "rtl" ? "text-right" : "text-left"), className),
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
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, {
        children: type === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", {
            className: className,
            title: title,
            onClick: onClick,
            children: children
        }) : type === "add" ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Button, {
            title: title,
            onClick: onClick,
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", {
                className: cn("fa-regular fa-plus text-2xl", className)
            })
        }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", {
            title: title,
            onClick: onClick,
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", {
                className: cn(icon[type], className)
            })
        })
    });
};
var DurationUI = function(param) {
    var duration = param.duration, _param_daysLabel = param.daysLabel, daysLabel = _param_daysLabel === void 0 ? "d" : _param_daysLabel, _param_hoursLabel = param.hoursLabel, hoursLabel = _param_hoursLabel === void 0 ? "h" : _param_hoursLabel, _param_minutesLabel = param.minutesLabel, minutesLabel = _param_minutesLabel === void 0 ? "m" : _param_minutesLabel, _param_secondsLabel = param.secondsLabel, secondsLabel = _param_secondsLabel === void 0 ? "s" : _param_secondsLabel, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className, direction = param.direction;
    var _ref = (0, import_react7.useMemo)(function() {
        var secondsInDay = 86400;
        var days = Math.floor(duration / secondsInDay);
        var remainderAfterDays = duration % secondsInDay;
        var hours = Math.floor(remainderAfterDays / 3600);
        var remainderAfterHours = remainderAfterDays % 3600;
        var minutes = Math.floor(remainderAfterHours / 60);
        var seconds = remainderAfterHours % 60;
        var daysStr2 = String(days).padStart(2, "0");
        var hoursStr2 = String(hours).padStart(2, "0");
        var minutesStr2 = String(minutes).padStart(2, "0");
        var secondsStr2 = String(seconds).padStart(2, "0");
        return {
            daysStr: daysStr2,
            hoursStr: hoursStr2,
            minutesStr: minutesStr2,
            secondsStr: secondsStr2
        };
    }, [
        duration
    ]), daysStr = _ref.daysStr, hoursStr = _ref.hoursStr, minutesStr = _ref.minutesStr, secondsStr = _ref.secondsStr;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", {
        title: "".concat(daysStr, " ").concat(daysLabel, " ").concat(hoursStr, " ").concat(hoursLabel, " ").concat(minutesStr, " ").concat(minutesLabel, " ").concat(secondsStr, " ").concat(secondsLabel).trim(),
        style: {
            direction: "ltr"
        },
        className: cn("flex gap-1 ".concat(direction === "rtl" ? "justify-end" : "justify-start"), className),
        children: [
            daysStr !== "00" && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", {
                style: {
                    display: "inline-block"
                },
                children: [
                    daysStr,
                    " ",
                    daysLabel
                ]
            }),
            hoursStr !== "00" && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", {
                style: {
                    display: "inline-block"
                },
                children: [
                    hoursStr,
                    " ",
                    hoursLabel
                ]
            }),
            minutesStr !== "00" && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", {
                style: {
                    display: "inline-block"
                },
                children: [
                    minutesStr,
                    " ",
                    minutesLabel
                ]
            }),
            secondsStr !== "00" && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", {
                style: {
                    display: "inline-block"
                },
                children: [
                    secondsStr,
                    " ",
                    secondsLabel
                ]
            })
        ]
    });
};
var PhoneUI = function(param) {
    var phone = param.phone, direction = param.direction, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
        style: {
            direction: "ltr"
        },
        className: cn("_ellipsis  ".concat(direction === "rtl" ? "text-right" : "text-left"), className),
        title: phone,
        children: phone
    });
};
var BooleanUi = function(param) {
    var value = param.value, size3 = param.size, className = param.className, falseUi = param.falseUi, trueUi = param.trueUi;
    return value ? trueUi !== null && trueUi !== void 0 ? trueUi : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", {
        className: cn("fa-light fa-check  ".concat(size3 === "small" ? "text-lg" : "text-2xl"), className)
    }) : falseUi !== null && falseUi !== void 0 ? falseUi : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", {
        className: cn("fa-light fa-xmark  ".concat(size3 === "small" ? "text-lg" : "text-2xl"), className)
    });
};
var GeoUi = function(param) {
    var value = param.value, className = param.className, linkUi = param.linkUi;
    var lang = value.lng || value.longitude;
    var lat = value.lat || value.latitude;
    var googleMapsLink = getLocationUrl(lang, lat);
    var langLatUi = linkUi || " ".concat(lang, " ").concat(lat);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", {
        href: googleMapsLink,
        target: "_blank",
        className: cn("_ellipsis", className),
        title: "".concat(lang, " ").concat(lat),
        children: langLatUi
    });
};
var NumberUI = function(param) {
    var number = param.number, direction = param.direction, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {
        style: {
            direction: "ltr"
        },
        className: cn("_ellipsis  ".concat(direction === "rtl" ? "text-right" : "text-left"), className),
        title: String(number),
        children: number
    });
};
// src/components/forms/ModularForm/ModularForm.tsx
var import_react10 = require("react");
// src/components/forms/ModularForm/formElements.tsx
var import_react9 = require("react");
// src/components/forms/ModularForm/InternationalPhonePicker.tsx
var import_lucide_react5 = require("lucide-react");
var import_react8 = require("react");
var RPNInput = __toESM(require("react-phone-number-input"));
var import_flags = __toESM(require("react-phone-number-input/flags"));
var import_jsx_runtime18 = require("react/jsx-runtime");
function InternationalPhonePicker(param) {
    var setPhoneValue = param.setPhoneValue, _param_phoneValue = param.phoneValue, phoneValue = _param_phoneValue === void 0 ? "" : _param_phoneValue, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "" : _param_placeholder, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_defaultCountry = param.defaultCountry, defaultCountry = _param_defaultCountry === void 0 ? "IL" : _param_defaultCountry, _param_flagContainerClassName = param.flagContainerClassName, flagContainerClassName = _param_flagContainerClassName === void 0 ? "" : _param_flagContainerClassName, _param_inputClassName = param.inputClassName, inputClassName = _param_inputClassName === void 0 ? "" : _param_inputClassName, defaultValue = param.defaultValue, name = param.name, style = param.style, onEnter = param.onEnter, labelContent = param.labelContent, labelClassName = param.labelClassName, required = param.required, direction = param.direction;
    var handleKeyDown = function(e) {
        if (e.key === "Enter") {
            if (onEnter) {
                onEnter();
            }
        }
    };
    var _ref = _sliced_to_array((0, import_react8.useState)(""), 2), tempPhoneValue = _ref[0], setTempPhoneValue = _ref[1];
    (0, import_react8.useEffect)(function() {
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", {
        style: {
            direction: direction
        },
        className: cn("space-y-2", "".concat(labelContent ? "flex gap-1 items-center" : ""), containerClassName),
        children: [
            labelContent && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ElementLabel, {
                labelContent: labelContent,
                labelClassName: labelClassName,
                name: name,
                required: required
            }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RPNInput.default, {
                style: {
                    direction: "ltr"
                },
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
                    className: cn("min-h-10", inputClassName),
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
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", {
                type: "hidden",
                name: name,
                value: tempPhoneValue
            })
        ]
    });
}
var PhoneInput = (0, import_react8.forwardRef)(function(_param, ref) {
    var className = _param.className, onKeyDown = _param.onKeyDown, defaultValue = _param.defaultValue, style = _param.style, props = _object_without_properties(_param, [
        "className",
        "onKeyDown",
        "defaultValue",
        "style"
    ]);
    var inputRef = (0, import_react8.useRef)(null);
    (0, import_react8.useEffect)(function() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Input, _object_spread({
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
    var originalClassName = (0, import_react8.useMemo)(function() {
        return "relative inline-flex items-center self-stretch rounded-s-lg border border-input bg-background py-2 pe-2 ps-3 text-muted-foreground transition-shadow focus-within:z-10 focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50";
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", {
        className: cn(originalClassName, className),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", {
                className: "inline-flex items-center gap-1",
                "aria-hidden": "true",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(FlagComponent, {
                        country: value,
                        countryName: value,
                        "aria-hidden": "true"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", {
                        className: "text-muted-foreground/80",
                        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.ChevronDown, {
                            size: 16,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                        })
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("select", {
                disabled: disabled,
                value: value,
                onChange: handleSelect,
                className: "absolute inset-0 text-sm opacity-0",
                "aria-label": "Select country",
                children: options.filter(function(x) {
                    return x.value;
                }).map(function(option, i) {
                    var _option_value;
                    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("option", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", {
        className: "w-5 overflow-hidden rounded-sm",
        children: Flag ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Flag, {
            title: countryName
        }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.Phone, {
            size: 16,
            "aria-hidden": "true"
        })
    });
};
// src/components/forms/ModularForm/formElements.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var useSortValues = function(options, sortDirection, sortAsNumber) {
    var sortOptions = (0, import_react9.useMemo)(function() {
        var sorted = sortAsNumber ? options.sort(function(a, b) {
            return parseInt(b.label) - parseInt(a.label);
        }) : options.sort(function(a, b) {
            return a.label.localeCompare(b.label);
        });
        return sortDirection === "cba" ? sorted.reverse() : sorted;
    }, [
        options,
        sortDirection,
        sortAsNumber
    ]);
    return sortOptions;
};
var InputContainer = function(param) {
    var validationError = param.validationError, _param_name = param.name, name = _param_name === void 0 ? "" : _param_name, _param_inputType = param.inputType, inputType = _param_inputType === void 0 ? "text" : _param_inputType, _param_labelContent = param.labelContent, labelContent = _param_labelContent === void 0 ? "" : _param_labelContent, _param_defaultValue = param.defaultValue, defaultValue = _param_defaultValue === void 0 ? "" : _param_defaultValue, _param_validationName = param.validationName, validationName = _param_validationName === void 0 ? "textNumbers" : _param_validationName, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_labelClassName = param.labelClassName, labelClassName = _param_labelClassName === void 0 ? "" : _param_labelClassName, _param_elementClassName = param.elementClassName, elementClassName = _param_elementClassName === void 0 ? "" : _param_elementClassName, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, placeholder = param.placeholder, props = param.props, minLength = param.minLength, onKeyDown = param.onKeyDown, onChange = param.onChange, direction = param.direction, value = param.value;
    var handleChangeFunction = (0, import_react9.useCallback)(function(e) {
        handleChange(e);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [
        onChange
    ]);
    var validationProps = (0, import_react9.useMemo)(function() {
        return _object_spread_props(_object_spread({}, useValidation(validationName, validationError)), {
            onChange: handleChangeFunction
        });
    }, [
        handleChangeFunction
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
        className: cn("center", containerClassName),
        children: [
            labelContent && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ElementLabel, {
                direction: direction,
                labelContent: labelContent,
                labelClassName: labelClassName,
                name: name,
                required: required
            }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", _object_spread_props(_object_spread(_object_spread_props(_object_spread({}, props), {
                minLength: minLength,
                placeholder: placeholder,
                className: cn("w-[70%] bg-inherit border-b-[1px] border-black px-2", elementClassName),
                defaultValue: defaultValue
            }), validationProps), {
                value: value,
                onChange: function(e) {
                    return handleChangeFunction(e);
                },
                required: required,
                name: name,
                onKeyDown: onKeyDown,
                type: inputType
            }))
        ]
    });
};
var SelectContainer = function(param) {
    var _param_name = param.name, name = _param_name === void 0 ? "" : _param_name, _param_labelContent = param.labelContent, labelContent = _param_labelContent === void 0 ? "" : _param_labelContent, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_labelClassName = param.labelClassName, labelClassName = _param_labelClassName === void 0 ? "" : _param_labelClassName, _param_defaultValue = param.defaultValue, defaultValue = _param_defaultValue === void 0 ? "" : _param_defaultValue, _param_elementClassName = param.elementClassName, elementClassName = _param_elementClassName === void 0 ? "" : _param_elementClassName, _param_optionClassName = param.optionClassName, optionClassName = _param_optionClassName === void 0 ? "" : _param_optionClassName, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, _param_options = param.options, options = _param_options === void 0 ? [] : _param_options, _param_optionsContainerClassName = param.optionsContainerClassName, optionsContainerClassName = _param_optionsContainerClassName === void 0 ? "" : _param_optionsContainerClassName, _param_sortDirection = param.sortDirection, sortDirection = _param_sortDirection === void 0 ? "abc" : _param_sortDirection, sortAsNumber = param.sortAsNumber, direction = param.direction, onChange = param.onChange;
    var _sortOptions_, _options_find;
    var sortOptions = useSortValues(options, sortDirection, sortAsNumber);
    var _ref = _sliced_to_array((0, import_react9.useState)(false), 2), isOpen = _ref[0], setIsOpen = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react9.useState)(defaultValue || ((_sortOptions_ = sortOptions[0]) === null || _sortOptions_ === void 0 ? void 0 : _sortOptions_.value) || ""), 2), selectedValue = _ref1[0], setSelectedValue = _ref1[1];
    var handleOptionClick = function(value) {
        setSelectedValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        setIsOpen(false);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
        className: cn("center", containerClassName),
        children: [
            labelContent && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ElementLabel, {
                direction: direction,
                labelContent: labelContent,
                labelClassName: labelClassName,
                name: name,
                required: required
            }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
                className: cn("w-[70%] relative", elementClassName),
                onClick: function() {
                    return setIsOpen(!isOpen);
                },
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                        className: "border-b-[1px] border-black max-h-6 cursor-pointer",
                        children: ((_options_find = options.find(function(opt) {
                            return opt.value === selectedValue;
                        })) === null || _options_find === void 0 ? void 0 : _options_find.label) || selectedValue
                    }),
                    isOpen ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("i", {
                        className: "fa-light fa-chevron-up absolute top-[1px] left-1 cursor-pointer"
                    }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("i", {
                        className: "fa-light fa-chevron-down absolute top-[1px] left-1 cursor-pointer"
                    }),
                    isOpen && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                        className: cn("absolute w-full bg-white border  border-gray-300 max-h-32 overflow-y-auto z-10", optionsContainerClassName),
                        children: sortOptions.map(function(option) {
                            return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                                className: "p-2 cursor-pointer hover:bg-gray-200 ".concat(optionClassName),
                                onClick: function() {
                                    return handleOptionClick(option.value);
                                },
                                children: option.label
                            }, option.value);
                        })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", {
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
function MultiSelect(param) {
    var onChange = param.onChange, selectedOptions = param.selectedOptions, emptyOptionsElement = param.emptyOptionsElement, unremovableOptions = param.unremovableOptions, _param_options = param.options, options = _param_options === void 0 ? [] : _param_options, _param_styles = param.styles, styles = _param_styles === void 0 ? {} : _param_styles, _param_name = param.name, name = _param_name === void 0 ? "multipleSelect" : _param_name, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "Select items" : _param_placeholder, labelContent = param.labelContent, required = param.required, labelClassName = param.labelClassName, groupBy = param.groupBy, onSearch = param.onSearch, onSearchSync = param.onSearchSync, triggerSearchOnFocus = param.triggerSearchOnFocus, _param_sortDirection = param.sortDirection, sortDirection = _param_sortDirection === void 0 ? "abc" : _param_sortDirection, sortAsNumber = param.sortAsNumber, direction = param.direction, searchInputProps = param.searchInputProps;
    var sortOptions = useSortValues(options, sortDirection, sortAsNumber);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
        className: cn("".concat(labelContent ? "flex gap-1 items-center" : ""), styles.containerClassName),
        children: [
            labelContent && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ElementLabel, {
                direction: direction,
                labelContent: labelContent,
                labelClassName: labelClassName,
                name: name,
                required: required
            }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(multiselect_default, {
                commandProps: {
                    label: placeholder
                },
                name: name,
                defaultOptions: sortOptions,
                unremovableOptions: unremovableOptions,
                value: selectedOptions,
                onChange: onChange,
                onSearch: onSearch,
                onSearchSync: onSearchSync,
                triggerSearchOnFocus: triggerSearchOnFocus,
                groupBy: groupBy,
                placeholder: placeholder,
                hideClearAllButton: true,
                hidePlaceholderWhenSelected: true,
                badgeClassName: styles.badgeClassName,
                className: styles.className,
                dropdownClassName: styles.dropdownClassName,
                dropdownOptionClassName: styles.dropdownOptionClassName,
                emptyIndicator: emptyOptionsElement || /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", {
                    className: "text-center text-sm",
                    children: "all options selected."
                }),
                emptyIndicatorClassName: styles.emptyIndicatorClassName,
                dropdownContainerClassName: styles.dropdownContainerClassName,
                inputProps: searchInputProps
            })
        ]
    });
}
var SelectWithSearch = function(param) {
    var options = param.options, labelClassName = param.labelClassName, labelContent = param.labelContent, name = param.name, onChange = param.onChange, value = param.value, placeholder = param.placeholder, required = param.required, defaultValue = param.defaultValue, notFoundLabel = param.notFoundLabel, searchPlaceholder = param.searchPlaceholder, containerClassName = param.containerClassName, dropdownClassName = param.dropdownClassName, dropdownOptionClassName = param.dropdownOptionClassName, elementClassName = param.elementClassName, notFoundLabelClassName = param.notFoundLabelClassName, searchClassName = param.searchClassName, selectButtonClassName = param.selectButtonClassName, _param_sortDirection = param.sortDirection, sortDirection = _param_sortDirection === void 0 ? "abc" : _param_sortDirection, sortAsNumber = param.sortAsNumber, disabled = param.disabled, direction = param.direction;
    var sortOptions = useSortValues(options, sortDirection, sortAsNumber);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
        className: cn("flex justify-between items-center w-full", containerClassName),
        children: [
            labelContent && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ElementLabel, {
                direction: direction,
                labelContent: labelContent,
                labelClassName: labelClassName,
                name: name,
                required: required
            }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SearchSelect, {
                direction: direction,
                options: sortOptions,
                value: value,
                onChange: onChange,
                defaultValue: defaultValue,
                name: name,
                elementClassName: elementClassName,
                selectPlaceholder: placeholder,
                selectButtonClassName: selectButtonClassName,
                disabled: disabled,
                searchClassName: searchClassName,
                searchPlaceholder: searchPlaceholder,
                dropdownClassName: dropdownClassName,
                dropdownOptionClassName: dropdownOptionClassName,
                notFoundLabelClassName: notFoundLabelClassName,
                notFoundLabel: notFoundLabel
            })
        ]
    });
};
var TextAreaContainer = function(param) {
    var _param_name = param.name, name = _param_name === void 0 ? "" : _param_name, _param_labelContent = param.labelContent, labelContent = _param_labelContent === void 0 ? "" : _param_labelContent, _param_defaultValue = param.defaultValue, defaultValue = _param_defaultValue === void 0 ? "" : _param_defaultValue, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_labelClassName = param.labelClassName, labelClassName = _param_labelClassName === void 0 ? "" : _param_labelClassName, _param_elementClassName = param.elementClassName, elementClassName = _param_elementClassName === void 0 ? "" : _param_elementClassName, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, placeholder = param.placeholder, props = param.props, minLength = param.minLength, onKeyDown = param.onKeyDown, onChange = param.onChange, direction = param.direction;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", {
        className: cn("flex flex-col gap-2 items-center", containerClassName),
        children: [
            labelContent && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ElementLabel, {
                direction: direction,
                labelContent: labelContent,
                labelClassName: "w-fit text-xl px-2 border-b-2 border-[#000] text-center ".concat(labelClassName),
                name: name,
                required: required,
                withDots: false
            }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("textarea", _object_spread_props(_object_spread({}, props), {
                onChange: onChange,
                minLength: minLength,
                placeholder: placeholder,
                className: cn("w-full bg-inherit border-[1px] border-black min-h-16 max-h-52 px-2", elementClassName),
                defaultValue: defaultValue,
                required: required,
                name: name,
                onKeyDown: onKeyDown
            }))
        ]
    });
};
var ElementLabel = function(param) {
    var labelContent = param.labelContent, labelClassName = param.labelClassName, name = param.name, required = param.required, _param_withDots = param.withDots, withDots = _param_withDots === void 0 ? true : _param_withDots, direction = param.direction;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("label", {
        style: {
            direction: direction
        },
        className: cn("text-start w-[30%] flex gap-0.5", labelClassName),
        htmlFor: name,
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                children: labelContent
            }),
            required && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                className: "text-red-500",
                children: "*"
            }),
            withDots && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", {
                children: ":"
            })
        ]
    });
};
// src/components/forms/ModularForm/ModularForm.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
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
    var _ref = _sliced_to_array((0, import_react10.useState)(""), 2), errorMsg = _ref[0], setErrorMsg = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react10.useState)(false), 2), isLoading = _ref1[0], setIsLoading = _ref1[1];
    var onSubmit = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(e) {
            var form, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        setErrorMsg("");
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
                            if (element.minLength) {
                                var elementValue = getFormElementValue(form, element.name);
                                if (elementValue.length < element.minLength) {
                                    throw element.validationError || "".concat(element.labelContent || element.name, " must be at least ").concat(element.minLength, " characters");
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
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("form", {
        onSubmit: onSubmit,
        style: {
            direction: direction
        },
        className: cn("w-[350px] px-5 py-5 flex flex-col gap-5", formClassName),
        children: [
            headerContent && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", {
                className: cn("border-b-2 border-[#547f22] pb-2 text-start font-bold text-[20px]", headerClassName),
                children: headerContent
            }),
            elements.map(function(element, index2) {
                switch(element.type){
                    case "input":
                        return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(InputContainer, _object_spread_props(_object_spread({}, element), {
                            direction: direction
                        }), index2);
                    case "textarea":
                        return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TextAreaContainer, _object_spread_props(_object_spread({}, element), {
                            direction: direction
                        }), index2);
                    case "select":
                        return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SelectContainer, _object_spread_props(_object_spread({}, element), {
                            direction: direction
                        }), index2);
                    case "multiSelect":
                        return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MultiSelect, _object_spread_props(_object_spread({}, element), {
                            direction: direction
                        }), index2);
                    case "selectWithSearch":
                        return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SelectWithSearch, _object_spread_props(_object_spread({}, element), {
                            direction: direction
                        }), index2);
                    case "internationalPhoneInput":
                        return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(InternationalPhonePicker, _object_spread_props(_object_spread({}, element), {
                            direction: direction
                        }), index2);
                    case "custom":
                        var _element_element;
                        return typeof ((_element_element = element.element) === null || _element_element === void 0 ? void 0 : _element_element.type) !== "string" && (0, import_react10.cloneElement)(element.element, {
                            key: index2
                        });
                    default:
                        return null;
                }
            }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", {
                className: "flex justify-between w-full",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", {
                        title: errorMsg,
                        className: "text-[#f22] text-[18px] max-w-[80%] ellipsis",
                        children: errorMsg
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", {
                        ref: submitRef,
                        disabled: isLoading,
                        className: cn("bg-[#547f22] px-3 py-1 rounded-lg text-white min-w-20", buttonClassName),
                        type: "submit",
                        children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Loader, {
                            size: 25,
                            color: "#fff"
                        }) : buttonContent
                    })
                ]
            })
        ]
    });
};
var ModularForm_default = ModularForm;
// src/components/forms/index.tsx
var import_react11 = require("react");
var import_moment2 = __toESM(require("moment"));
var import_jsx_runtime21 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", {
        style: {
            direction: direction,
            padding: "30px"
        },
        className: cn("w-full h-full flex flex-col gap-3", containerClassName),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", {
                className: cn("text-lg font-bold", headlineClassName),
                children: headline
            }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", {
                className: cn("flex justify-center items-center gap-2 w-full", buttonsContainerClassName),
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", {
                        onClick: onDenied,
                        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(RedXSvg, {})
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", {
                        onClick: onConfirm,
                        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(GreenVSvg, {})
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
    var _ref = _sliced_to_array((0, import_react11.useState)(false), 2), isLoading = _ref[0], setIsLoading = _ref[1];
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("form", {
        style: {
            direction: direction
        },
        onSubmit: onSubmit,
        className: cn("w-full h-10 flex justify-start gap-3 items-center ", formClassName),
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", {
                className: cn("center text-[14px] relative gap-2", labelsClassName),
                htmlFor: "from",
                children: [
                    fromText,
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", {
                        className: "w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ".concat(inputsClassName),
                        type: "date",
                        name: "from",
                        defaultValue: defaultFrom || (0, import_moment2.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD")
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", {
                className: cn("center text-[14px] relative gap-2 ", labelsClassName),
                htmlFor: "to",
                children: [
                    toText,
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", {
                        className: "w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ".concat(inputsClassName),
                        type: "date",
                        name: "to",
                        defaultValue: defaultTo || (0, import_moment2.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD")
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", {
                disabled: isLoading,
                style: buttonStyle,
                className: cn("bg-[#699a2c] text-[#fff] font-[500] w-[75px] h-[27px]", buttonClassName),
                type: "submit",
                children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Loader, {
                    className: "pt-[2px]",
                    size: 20,
                    color: "#fff"
                }) : buttonText
            })
        ]
    });
};
// src/components/CodeInput.tsx
var import_input_otp = require("input-otp");
var import_react12 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function CodeInput(param) {
    var codeValue = param.codeValue, setCodeValue = param.setCodeValue, _param_className = param.className, className = _param_className === void 0 ? "" : _param_className, _param_slotContainerClassName = param.slotContainerClassName, slotContainerClassName = _param_slotContainerClassName === void 0 ? "" : _param_slotContainerClassName;
    var firstInputRef = (0, import_react12.useRef)(null);
    (0, import_react12.useEffect)(function() {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", {
        className: cn("space-y-2 flex justify-center items-center", className),
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_input_otp.OTPInput, {
            ref: firstInputRef,
            value: codeValue,
            onChange: function(newVal) {
                return setCodeValue(newVal);
            },
            containerClassName: "flex items-center gap-3 has-[:disabled]:opacity-50",
            maxLength: 6,
            render: function(param) {
                var slots = param.slots;
                return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", {
                    className: cn("flex gap-5", slotContainerClassName),
                    children: slots.map(function(slot, idx) {
                        return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Slot2, _object_spread({}, slot), idx);
                    })
                });
            }
        })
    });
}
function Slot2(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", {
        className: cn("flex size-9 items-center justify-center rounded-lg border border-input bg-background font-medium text-foreground shadow-sm shadow-black/5 transition-shadow", {
            "z-10 border border-ring ring-[3px] ring-ring/20": props.isActive
        }),
        children: props.char !== null && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", {
            children: props.char
        })
    });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Badge: Badge,
    BooleanUi: BooleanUi,
    Button: Button,
    Checkbox: Checkbox,
    CodeInput: CodeInput,
    ConfirmForm: ConfirmForm,
    DatePicker: DatePicker,
    DurationUI: DurationUI,
    ElementLabel: ElementLabel,
    ErrorBoundary: ErrorBoundary,
    ExportToExcel: ExportToExcel,
    Filter: Filter,
    GeoUi: GeoUi,
    Input: Input,
    InputContainer: InputContainer,
    InternationalPhonePicker: InternationalPhonePicker,
    Loader: Loader,
    MaxRowsLabel: MaxRowsLabel,
    ModularForm: ModularForm,
    MultiSelect: MultiSelect,
    NumberUI: NumberUI,
    PhoneUI: PhoneUI,
    ProgressComponent: ProgressComponent,
    Search: Search,
    SelectContainer: SelectContainer,
    SelectWithSearch: SelectWithSearch,
    Summary: Summary,
    Table: Table,
    TableBody: TableBody,
    TableButton: TableButton,
    TableCell: TableCell,
    TableContext: TableContext,
    TableHead: TableHead,
    TableProvider: TableProvider,
    TableRow: TableRow,
    TextAreaContainer: TextAreaContainer,
    TimesUI: TimesUI,
    Version: Version,
    badgeVariants: badgeVariants,
    buttonVariants: buttonVariants,
    getFixedNumber: getFixedNumber,
    useDebounce: useDebounce,
    useSortValues: useSortValues
});
//# sourceMappingURL=index.js.map