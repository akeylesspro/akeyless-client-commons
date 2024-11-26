// src/hooks/global.ts
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
var simpleExtractData = function(doc2) {
    var docData = doc2.data();
    return _object_spread_props(_object_spread({}, docData), {
        id: doc2.id
    });
};
var snapshot = function(config, snapshotsFirstTime) {
    var resolvePromise;
    var promise = new Promise(function(resolve) {
        console.log("==> ".concat(config.collectionName, " subscribed."));
        resolvePromise = resolve;
    });
    var collectionRef = collection(db, config.collectionName);
    var subscribe = onSnapshot(collectionRef, function(snapshot2) {
        if (!snapshotsFirstTime.includes(config.collectionName)) {
            var _config_onFirstTime, _config_extraParsers;
            snapshotsFirstTime.push(config.collectionName);
            var documents = snapshot2.docs.map(function(doc2) {
                return simpleExtractData(doc2);
            });
            (_config_onFirstTime = config.onFirstTime) === null || _config_onFirstTime === void 0 ? void 0 : _config_onFirstTime.call(config, documents, config);
            (_config_extraParsers = config.extraParsers) === null || _config_extraParsers === void 0 ? void 0 : _config_extraParsers.forEach(function(extraParser) {
                var _extraParser_onFirstTime;
                (_extraParser_onFirstTime = extraParser.onFirstTime) === null || _extraParser_onFirstTime === void 0 ? void 0 : _extraParser_onFirstTime.call(extraParser, documents, config);
            });
            resolvePromise();
        } else {
            var _config_onAdd, _config_onModify, _config_onRemove, _config_extraParsers1;
            var addedDocs = [];
            var modifiedDocs = [];
            var removedDocs = [];
            snapshot2.docChanges().forEach(function(change) {
                if (change.type === "added") {
                    addedDocs.push(simpleExtractData(change.doc));
                }
                if (change.type === "modified") {
                    modifiedDocs.push(simpleExtractData(change.doc));
                }
                if (change.type === "removed") {
                    removedDocs.push(simpleExtractData(change.doc));
                }
            });
            addedDocs.length && ((_config_onAdd = config.onAdd) === null || _config_onAdd === void 0 ? void 0 : _config_onAdd.call(config, addedDocs, config));
            modifiedDocs.length && ((_config_onModify = config.onModify) === null || _config_onModify === void 0 ? void 0 : _config_onModify.call(config, modifiedDocs, config));
            removedDocs.length && ((_config_onRemove = config.onRemove) === null || _config_onRemove === void 0 ? void 0 : _config_onRemove.call(config, removedDocs, config));
            (_config_extraParsers1 = config.extraParsers) === null || _config_extraParsers1 === void 0 ? void 0 : _config_extraParsers1.forEach(function(extraParser) {
                var _extraParser_onAdd, _extraParser_onModify, _extraParser_onRemove;
                addedDocs.length && ((_extraParser_onAdd = extraParser.onAdd) === null || _extraParser_onAdd === void 0 ? void 0 : _extraParser_onAdd.call(extraParser, addedDocs, config));
                modifiedDocs.length && ((_extraParser_onModify = extraParser.onModify) === null || _extraParser_onModify === void 0 ? void 0 : _extraParser_onModify.call(extraParser, modifiedDocs, config));
                removedDocs.length && ((_extraParser_onRemove = extraParser.onRemove) === null || _extraParser_onRemove === void 0 ? void 0 : _extraParser_onRemove.call(extraParser, removedDocs, config));
            });
        }
    }, function(error) {
        console.error("Error listening to collection: ".concat(config.collectionName), error);
        resolvePromise();
    });
    var unsubscribe = function() {
        subscribe();
        console.log("==> ".concat(config.collectionName, " unsubscribed."));
    };
    return {
        promise: promise,
        unsubscribe: unsubscribe
    };
};
// src/helpers/phoneNumber.ts
import { parsePhoneNumberFromString } from "libphonenumber-js";
// src/hooks/global.ts
function useSafeEffect(callback, dependencies, error_message) {
    useEffect(function() {
        try {
            callback();
        } catch (error) {
            console.error(error_message || "Error in useEffect:", error);
        }
    }, dependencies);
}
var useDocumentTitle = function(title) {
    useEffect(function() {
        document.title = title;
    }, []);
    return null;
};
var useSnapshotBulk = function(configs, label) {
    var snapshotsFirstTime = useRef([]);
    var unsubscribeFunctions = useRef([]);
    useEffect(function() {
        var start = performance.now();
        console.log("==> ".concat(label || "Custom snapshots", " started... "));
        var snapshotResults = configs.map(function(config) {
            return snapshot(config, snapshotsFirstTime.current);
        });
        unsubscribeFunctions.current = snapshotResults.map(function(result) {
            return result.unsubscribe;
        });
        Promise.all(snapshotResults.map(function(result) {
            return result.promise;
        })).then(function() {
            console.log("==> ".concat(label || "Custom snapshots", " ended. It took ").concat((performance.now() - start).toFixed(2), " ms"));
        });
        return function() {
            unsubscribeFunctions.current.forEach(function(unsubscribe) {
                if (unsubscribe) {
                    unsubscribe();
                }
            });
        };
    }, [
        configs,
        label
    ]);
};
// src/hooks/table.ts
import { useContext as useContext2, useState as useState3, useTransition } from "react";
// src/components/utils/Checkboxes.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
// src/components/table/utils.tsx
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { memo, useMemo } from "react";
// src/assets/svg.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
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
    var sortDisplay = useMemo(function() {
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
                    className: "absolute top-[-20px] z-20 ".concat(displayRight ? " left-[100%]" : "right-[100%]", " w-40 h-32 text-black bg-white p-1 flex flex-col items-center gap-2 shadow"),
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
import { createContext, useMemo as useMemo2 } from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var TableContext = createContext(null);
// src/components/forms/index.tsx
import { useState as useState2 } from "react";
import moment2 from "moment";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
// src/hooks/table.ts
import { create } from "zustand";
import { isEqual } from "lodash";
var useTableContext = function() {
    var context = useContext2(TableContext);
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
    var _useState3 = _sliced_to_array(useState3(initFilter), 2), filters = _useState3[0], setFilters = _useState3[1];
    var _useState31 = _sliced_to_array(useState3(""), 2), filterPopupsDisplay = _useState31[0], setFilterPopupsDisplay = _useState31[1];
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
    var _useState3 = _sliced_to_array(useState3(null), 2), sortColumn = _useState3[0], setSortColumn = _useState3[1];
    var _useState31 = _sliced_to_array(useState3(null), 2), sortOrder = _useState31[0], setSortOrder = _useState31[1];
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
    var _useState3 = _sliced_to_array(useState3(""), 2), searchQuery = _useState3[0], setSearchQuery = _useState3[1];
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
var useCreateTableStore = function() {
    return create(function(set) {
        return {};
    });
};
// src/hooks/WebWorker.ts
import { useCallback, useEffect as useEffect4, useRef as useRef3 } from "react";
export { useCreateTableStore, useDocumentTitle, useFilter, useSafeEffect, useSearch, useSnapshotBulk, useSort, useTableContext };
//# sourceMappingURL=index.mjs.map