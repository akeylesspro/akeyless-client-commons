"use strict";
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
// src/hooks/index.ts
var hooks_exports = {};
__export(hooks_exports, {
    useDocumentTitle: function() {
        return useDocumentTitle;
    },
    useSafeEffect: function() {
        return useSafeEffect;
    },
    useSetUserCountry: function() {
        return useSetUserCountry;
    },
    useSnapshotBulk: function() {
        return useSnapshotBulk;
    }
});
module.exports = __toCommonJS(hooks_exports);
// src/hooks/global.ts
var import_akeyless_types_commons = require("akeyless-types-commons");
var import_react = require("react");
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
    var collectionRef = (0, import_firestore.collection)(db, config.collectionName);
    var subscribe = (0, import_firestore.onSnapshot)(collectionRef, function(snapshot2) {
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
// src/helpers/global.ts
var import_axios = __toESM(require("axios"));
var getUserCountryByIp = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function() {
        var response, error;
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
                        import_axios.default.get("https://ipapi.co/json/")
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        2,
                        (response.data.country_code || "").toLowerCase()
                    ];
                case 2:
                    error = _state.sent();
                    console.error("Error fetching Country:", error);
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
    return function getUserCountryByIp() {
        return _ref.apply(this, arguments);
    };
}();
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
// src/helpers/phoneNumber.ts
var import_libphonenumber_js = require("libphonenumber-js");
// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
// src/hooks/global.ts
function useSafeEffect(callback, dependencies, error_message) {
    (0, import_react.useEffect)(function() {
        try {
            callback();
        } catch (error) {
            console.error(error_message || "Error in useEffect:", error);
        }
    }, dependencies);
}
var useDocumentTitle = function(title) {
    (0, import_react.useEffect)(function() {
        document.title = title;
    }, [
        title
    ]);
    return null;
};
var useSnapshotBulk = function(configs, label) {
    var snapshotsFirstTime = (0, import_react.useRef)([]);
    var unsubscribeFunctions = (0, import_react.useRef)([]);
    (0, import_react.useEffect)(function() {
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
var useSetUserCountry = function(setUserCountry, changLang) {
    (0, import_react.useLayoutEffect)(function() {
        var currentCountry = localStorage.getItem("userCountry");
        if (!currentCountry) {
            var updateCountry = /*#__PURE__*/ function() {
                var _ref = _async_to_generator(function() {
                    var country;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    getUserCountryByIp()
                                ];
                            case 1:
                                country = _state.sent();
                                changLang(country === import_akeyless_types_commons.CountryOptions.IL ? "he" : "en");
                                setUserCountry(country);
                                localStorage.setItem("userCountry", country);
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function updateCountry() {
                    return _ref.apply(this, arguments);
                };
            }();
            updateCountry();
        }
    }, []);
    return null;
};
// src/hooks/WebWorker.ts
var import_react2 = require("react");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    useDocumentTitle: useDocumentTitle,
    useSafeEffect: useSafeEffect,
    useSetUserCountry: useSetUserCountry,
    useSnapshotBulk: useSnapshotBulk
});
//# sourceMappingURL=index.js.map