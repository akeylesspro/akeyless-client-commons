// src/hooks/global.ts
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
import { CountryOptions as CountryOptions2 } from "akeyless-types-commons";
import { useEffect, useLayoutEffect, useRef } from "react";
// src/helpers/firebase.ts
import moment from "moment";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, Timestamp, where, getFirestore, onSnapshot } from "firebase/firestore";
var initApp = function() {
    var isNodeEnv2 = typeof process !== "undefined" && process.env;
    var firebaseConfig = {
        apiKey: isNodeEnv2 ? process.env.NEXT_PUBLIC_API_KEY : import.meta.env.VITE_API_KEY,
        authDomain: isNodeEnv2 ? process.env.NEXT_PUBLIC_AUTH_DOMAIN : import.meta.env.VITE_AUTH_DOMAIN,
        projectId: isNodeEnv2 ? process.env.NEXT_PUBLIC_PROJECT_ID : import.meta.env.VITE_PROJECT_ID,
        storageBucket: isNodeEnv2 ? process.env.NEXT_PUBLIC_STORAGE_BUCKET : import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: isNodeEnv2 ? process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID : import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: isNodeEnv2 ? process.env.NEXT_PUBLIC_APP_ID : import.meta.env.VITE_APP_ID
    };
    try {
        var app = initializeApp(firebaseConfig);
        var auth2 = getAuth(app);
        var db2 = getFirestore(app);
        var storage2 = getStorage(app);
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
    var isResolved = false;
    var promise = new Promise(function(resolve) {
        console.log("==> ".concat(config.collectionName, " subscribed."));
        resolvePromise = function() {
            if (!isResolved) {
                isResolved = true;
                resolve();
            }
        };
    });
    var collectionRef = collection(db, config.collectionName);
    if (config.conditions) {
        config.conditions.forEach(function(condition) {
            collectionRef = query(collectionRef, where(condition.field_name, condition.operator, condition.value));
        });
    }
    var unsubscribe = onSnapshot(collectionRef, function(snapshot2) {
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
                } else if (change.type === "modified") {
                    modifiedDocs.push(simpleExtractData(change.doc));
                } else if (change.type === "removed") {
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
    return {
        promise: promise,
        unsubscribe: unsubscribe
    };
};
// src/helpers/global.ts
import { CountryOptions } from "akeyless-types-commons";
import axios from "axios";
// src/helpers/phoneNumber.ts
import { parsePhoneNumberFromString } from "libphonenumber-js";
// src/helpers/global.ts
import { isEqual } from "lodash";
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
                        axios.get("https://ipapi.co/json/")
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        2,
                        (response.data.country_code || CountryOptions.IL).toLowerCase()
                    ];
                case 2:
                    error = _state.sent();
                    console.error("Error fetching Country:", error);
                    return [
                        2,
                        CountryOptions.IL
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
var isNodeEnv = typeof process !== "undefined" && process.env;
var _ref = {
    mode: isNodeEnv ? process.env.NEXT_PUBLIC_MODE : import.meta.env.VITE_MODE,
    isLocal: (isNodeEnv ? process.env.NEXT_PUBLIC_IS_LOCAL : import.meta.env.VITE_is_local) === "true"
}, mode = _ref.mode, isLocal = _ref.isLocal;
// src/helpers/forms.ts
import XRegExp from "xregexp";
var textRegex = XRegExp("[^\\p{L}\\s-]", "gu");
var numbersRegex = XRegExp("[^0-9\\s-+]", "g");
var numbersOnlyRegex = XRegExp("[^0-9]", "g");
var priceRegex = XRegExp("[^0-9.]", "g");
var emailRegex = XRegExp("[^\\p{L}0-9.@\\s-]", "gu");
var colorRegex = XRegExp("[^#0-9A-Fa-f]", "g");
var carsRegex = XRegExp("[^\\p{L}0-9,_]", "gu");
var textNumbersRegex = XRegExp("[^\\p{L}0-9\\s+\\-]", "gu");
var addressRegex = XRegExp("[^\\p{L}0-9\\s.,+-\\-]", "gu");
var chartsRegex = XRegExp("[^\\p{L}0-9\\s.,_@!+-\\-]", "gu");
// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// src/helpers/time_helpers.ts
import { Timestamp as Timestamp2 } from "firebase/firestore";
import moment2 from "moment-timezone";
// src/helpers/api.ts
import axios2 from "axios";
var baseDomain = mode === "qa" ? "https://nx-api.xyz/api" : "https://nx-api.info/api";
var biDomain = isLocal ? "http://localhost:9002/api/bi" : baseDomain + "/bi";
var devicesDomain = isLocal ? "http://localhost:9002/api/devices" : baseDomain + "/devices";
var callCenterDomain = isLocal ? "http://localhost:9003/api/call-center" : baseDomain + "/call-center";
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
    }, [
        title
    ]);
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
    }, [
        JSON.stringify(configs),
        label
    ]);
    useEffect(function() {
        return function() {
            unsubscribeFunctions.current.forEach(function(unsubscribe) {
                if (unsubscribe) {
                    unsubscribe();
                }
            });
        };
    }, []);
};
var useSetUserCountry = function(setUserCountry, changLang) {
    useLayoutEffect(function() {
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
                                changLang(country === CountryOptions2.IL ? "he" : "en");
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
import { useCallback, useEffect as useEffect2, useRef as useRef2 } from "react";
export { useDocumentTitle, useSafeEffect, useSetUserCountry, useSnapshotBulk };
//# sourceMappingURL=index.mjs.map