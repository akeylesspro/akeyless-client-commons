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
// src/helpers/index.ts
var helpers_exports = {};
__export(helpers_exports, {
    add_document: function() {
        return add_document;
    },
    auth: function() {
        return auth;
    },
    calculateBearing: function() {
        return calculateBearing;
    },
    collections: function() {
        return collections;
    },
    createSelectors: function() {
        return createSelectors;
    },
    db: function() {
        return db;
    },
    delete_document: function() {
        return delete_document;
    },
    displayFormatPhoneNumber: function() {
        return displayFormatPhoneNumber;
    },
    extractAlertsData: function() {
        return extractAlertsData;
    },
    extractBoardsData: function() {
        return extractBoardsData;
    },
    extractCanbusData: function() {
        return extractCanbusData;
    },
    extractCarsData: function() {
        return extractCarsData;
    },
    extractClientData: function() {
        return extractClientData;
    },
    extractLocationData: function() {
        return extractLocationData;
    },
    extractSiteData: function() {
        return extractSiteData;
    },
    fire_base_TIME_TEMP: function() {
        return fire_base_TIME_TEMP;
    },
    formatCarNumber: function() {
        return formatCarNumber;
    },
    get_all_documents: function() {
        return get_all_documents;
    },
    get_document_by_id: function() {
        return get_document_by_id;
    },
    handleChange: function() {
        return handleChange;
    },
    handleInvalid: function() {
        return handleInvalid;
    },
    handlePaste: function() {
        return handlePaste;
    },
    international_israel_phone_format: function() {
        return international_israel_phone_format;
    },
    isInternational: function() {
        return isInternational;
    },
    isInternationalIsraelPhone: function() {
        return isInternationalIsraelPhone;
    },
    local_israel_phone_format: function() {
        return local_israel_phone_format;
    },
    query_document: function() {
        return query_document;
    },
    query_document_by_conditions: function() {
        return query_document_by_conditions;
    },
    query_documents: function() {
        return query_documents;
    },
    query_documents_by_conditions: function() {
        return query_documents_by_conditions;
    },
    setState: function() {
        return setState;
    },
    set_document: function() {
        return set_document;
    },
    simpleExtractData: function() {
        return simpleExtractData;
    },
    useStoreValues: function() {
        return useStoreValues;
    },
    useValidation: function() {
        return useValidation;
    }
});
module.exports = __toCommonJS(helpers_exports);
// src/helpers/firebase.ts
var import_moment = __toESM(require("moment"));
var import_app = require("firebase/app");
var import_auth = require("firebase/auth");
var import_firestore = require("firebase/firestore");
// src/helpers/cars.ts
var formatCarNumber = function(car_number) {
    var cn = car_number;
    if ((cn === null || cn === void 0 ? void 0 : cn.length) == 8) return "".concat(cn[0]).concat(cn[1]).concat(cn[2], "-").concat(cn[3]).concat(cn[4], "-").concat(cn[5]).concat(cn[6]).concat(cn[7]);
    if ((cn === null || cn === void 0 ? void 0 : cn.length) == 7) return "".concat(cn[0]).concat(cn[1], "-").concat(cn[2]).concat(cn[3]).concat(cn[4], "-").concat(cn[5]).concat(cn[6]);
    if ((cn === null || cn === void 0 ? void 0 : cn.length) == 6) return "".concat(cn[0]).concat(cn[1], "-").concat(cn[2]).concat(cn[3], "-").concat(cn[4]).concat(cn[5]);
    if ((cn === null || cn === void 0 ? void 0 : cn.length) == 5) return "".concat(cn[0], "-").concat(cn[1]).concat(cn[2], "-").concat(cn[3]).concat(cn[4]);
    return cn;
};
// src/helpers/firebase.ts
var import_meta = {};
var initApp = function() {
    var firebaseConfig = {
        apiKey: import_meta.env.VITE_API_KEY,
        authDomain: import_meta.env.VITE_AUTH_DOMAIN,
        projectId: import_meta.env.VITE_PROJECT_ID,
        storageBucket: import_meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import_meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import_meta.env.VITE_APP_ID
    };
    try {
        var app = (0, import_app.initializeApp)(firebaseConfig);
        var auth2 = (0, import_auth.getAuth)(app);
        var db2 = (0, import_firestore.getFirestore)(app);
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
var extractAlertsData = function(doc2) {
    var data = doc2.data();
    var car_number = data.car_number, timestamp = data.timestamp;
    return _object_spread_props(_object_spread({}, data), {
        timestamp_seconds: timestamp.seconds,
        timestamp_ui: import_moment.default.unix(timestamp.seconds).format("DD/MM/YY HH:mm"),
        car_number: formatCarNumber(car_number)
    });
};
var simpleExtractData = function(doc2) {
    var docData = doc2.data();
    return _object_spread_props(_object_spread({}, docData), {
        id: doc2.id
    });
};
var extractSiteData = function(doc2) {
    var _data_updated, _data_created;
    var data = doc2.data();
    var dateUpdated = new Date(((_data_updated = data.updated) === null || _data_updated === void 0 ? void 0 : _data_updated.seconds) * 1e3 + data.updated.nanoseconds / 1e6);
    var dateCreated = new Date(((_data_created = data.created) === null || _data_created === void 0 ? void 0 : _data_created.seconds) * 1e3 + data.created.nanoseconds / 1e6);
    return _object_spread_props(_object_spread({}, data), {
        id: doc2.id,
        created: (0, import_moment.default)(dateCreated).format("DD.MM.YYYY - HH:mm"),
        updated: (0, import_moment.default)(dateUpdated).format("DD.MM.YYYY - HH:mm")
    });
};
var extractClientData = function(doc2) {
    var _data_updated, _data_created;
    var data = doc2.data();
    var dateUpdated = new Date(((_data_updated = data.updated) === null || _data_updated === void 0 ? void 0 : _data_updated.seconds) * 1e3 + data.updated.nanoseconds / 1e6);
    var dateCreated = new Date(((_data_created = data.created) === null || _data_created === void 0 ? void 0 : _data_created.seconds) * 1e3 + data.created.nanoseconds / 1e6);
    return _object_spread_props(_object_spread({}, data), {
        id: doc2.id,
        created: (0, import_moment.default)(dateCreated).format("HH:mm  DD/MM/YY"),
        updated: (0, import_moment.default)(dateUpdated).format("HH:mm  DD/MM/YY")
    });
};
var extractBoardsData = function(doc2) {
    var _data_uploaded;
    var data = doc2.data();
    var dateUploaded = typeof data.uploaded === "string" ? data.uploaded : import_moment.default.unix((_data_uploaded = data.uploaded) === null || _data_uploaded === void 0 ? void 0 : _data_uploaded.seconds).format("DD/MM/YY HH:mm");
    return _object_spread_props(_object_spread({}, data), {
        id: doc2.id,
        uploaded: dateUploaded
    });
};
var extractCarsData = function(doc2) {
    var carData = doc2.data();
    var icon;
    var gov_info = carData.gov_info;
    if (gov_info) {
        if (carData.icon) {
            icon = carData.icon;
        } else if (gov_info.vehicle_type === "atv") {
            icon = "truck";
        } else if (gov_info.vehicle_type === "motorcycle") {
            icon = "motorcycle";
        } else {
            icon = "car";
        }
    } else {
        icon = "car";
    }
    return _object_spread_props(_object_spread({}, carData), {
        id: doc2.id,
        brand: carData.brand || carData.manufacturer,
        car_number: carData.carId,
        icon: icon
    });
};
var extractCanbusData = function(doc2) {
    var data = doc2.data();
    var newDate = new Date(data.timestamp.seconds * 1e3);
    return _object_spread_props(_object_spread({}, data), {
        date_ui: (0, import_moment.default)(newDate).format("DD/MM/YYYY - HH:mm")
    });
};
var extractLocationData = function(doc2) {
    var locationData = doc2.data();
    var latitude = locationData.latitude, longitude = locationData.longitude, spd = locationData.spd, timestamp = locationData.timestamp, prev_latitude = locationData.prev_latitude, prev_longitude = locationData.prev_longitude;
    return _object_spread_props(_object_spread({}, locationData), {
        id: doc2.id,
        lat: latitude,
        lng: longitude,
        prev_lat: prev_latitude,
        prev_lng: prev_longitude,
        timestamp: timestamp === null || timestamp === void 0 ? void 0 : timestamp.seconds,
        spd: Number(spd).toFixed(0)
    });
};
var get_all_documents = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(collection_path) {
        var snapshot, documents, error;
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
                        (0, import_firestore.getDocs)((0, import_firestore.collection)(db, collection_path))
                    ];
                case 1:
                    snapshot = _state.sent();
                    documents = snapshot.docs.map(function(doc2) {
                        return simpleExtractData(doc2);
                    });
                    return [
                        2,
                        documents
                    ];
                case 2:
                    error = _state.sent();
                    return [
                        2,
                        []
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function get_all_documents(collection_path) {
        return _ref.apply(this, arguments);
    };
}();
var get_document_by_id = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(collection_path, doc_id) {
        var doc_ref, doc_snap, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    doc_ref = (0, import_firestore.doc)(db, collection_path, doc_id);
                    return [
                        4,
                        (0, import_firestore.getDoc)(doc_ref)
                    ];
                case 1:
                    doc_snap = _state.sent();
                    if (!doc_snap.exists()) {
                        throw new Error("Document not found, document id: " + doc_id);
                    }
                    return [
                        2,
                        simpleExtractData(doc_snap)
                    ];
                case 2:
                    error = _state.sent();
                    console.error("Error from get_document_by_id", error);
                    return [
                        2,
                        null
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function get_document_by_id(collection_path, doc_id) {
        return _ref.apply(this, arguments);
    };
}();
var set_document = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(collection_path, doc_id, data) {
        var doc_ref, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    doc_ref = (0, import_firestore.doc)(db, collection_path, doc_id);
                    return [
                        4,
                        (0, import_firestore.setDoc)(doc_ref, data, {
                            merge: true
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        true
                    ];
                case 2:
                    error = _state.sent();
                    console.error("Failed to create document by id: ".concat(doc_id, " in collection: ").concat(collection_path), {
                        error: error,
                        data: data
                    });
                    return [
                        2,
                        false
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function set_document(collection_path, doc_id, data) {
        return _ref.apply(this, arguments);
    };
}();
var add_document = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(collection_path, data) {
        var include_id, col_ref, doc_ref, error;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    include_id = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        5,
                        ,
                        6
                    ]);
                    col_ref = (0, import_firestore.collection)(db, collection_path);
                    return [
                        4,
                        (0, import_firestore.addDoc)(col_ref, data)
                    ];
                case 2:
                    doc_ref = _state.sent();
                    if (!include_id) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        (0, import_firestore.setDoc)(doc_ref, _object_spread_props(_object_spread({}, data), {
                            id: doc_ref.id
                        }), {
                            merge: true
                        })
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    return [
                        2,
                        true
                    ];
                case 5:
                    error = _state.sent();
                    console.error("Failed to create document in collection: ".concat(collection_path), error);
                    return [
                        2,
                        false
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    });
    return function add_document(collection_path, data) {
        return _ref.apply(this, arguments);
    };
}();
var delete_document = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(collection_path, doc_id) {
        var doc_ref, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    doc_ref = (0, import_firestore.doc)(db, collection_path, doc_id);
                    return [
                        4,
                        (0, import_firestore.deleteDoc)(doc_ref)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        true
                    ];
                case 2:
                    error = _state.sent();
                    console.error("Failed to delete document with id ".concat(doc_id, " from collection ").concat(collection_path), error);
                    return [
                        2,
                        false
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function delete_document(collection_path, doc_id) {
        return _ref.apply(this, arguments);
    };
}();
var query_document = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(collection_path, field_name, operator, value) {
        var ignore_log, q, query_snapshot, documents, error;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    ignore_log = _arguments.length > 4 && _arguments[4] !== void 0 ? _arguments[4] : false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    q = (0, import_firestore.query)((0, import_firestore.collection)(db, collection_path), (0, import_firestore.where)(field_name, operator, value));
                    return [
                        4,
                        (0, import_firestore.getDocs)(q)
                    ];
                case 2:
                    query_snapshot = _state.sent();
                    documents = query_snapshot.docs.map(function(doc2) {
                        return simpleExtractData(doc2);
                    });
                    if (documents.length < 1) {
                        throw new Error("No data to return from: \ncollection: ".concat(collection_path, ", \nfield_name: ").concat(field_name, ", \noperator: ").concat(operator, ", \nvalue: ").concat(value));
                    }
                    return [
                        2,
                        documents[0]
                    ];
                case 3:
                    error = _state.sent();
                    if (!ignore_log) {
                        console.error("Error querying document:", error);
                    }
                    return [
                        2,
                        null
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function query_document(collection_path, field_name, operator, value) {
        return _ref.apply(this, arguments);
    };
}();
var query_documents = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(collection_path, field_name, operator, value) {
        var q, query_snapshot, documents, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    q = (0, import_firestore.query)((0, import_firestore.collection)(db, collection_path), (0, import_firestore.where)(field_name, operator, value));
                    return [
                        4,
                        (0, import_firestore.getDocs)(q)
                    ];
                case 1:
                    query_snapshot = _state.sent();
                    documents = query_snapshot.docs.map(function(doc2) {
                        return simpleExtractData(doc2);
                    });
                    return [
                        2,
                        documents
                    ];
                case 2:
                    error = _state.sent();
                    console.error("Error querying documents: ".concat(collection_path, " - ").concat(field_name, " - ").concat(operator, " - ").concat(value, " "), error);
                    return [
                        2,
                        []
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function query_documents(collection_path, field_name, operator, value) {
        return _ref.apply(this, arguments);
    };
}();
var query_documents_by_conditions = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(collection_path, where_conditions) {
        var db_query, query_snapshot, documents, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    db_query = (0, import_firestore.collection)(db, collection_path);
                    where_conditions.forEach(function(condition) {
                        db_query = (0, import_firestore.query)(db_query, (0, import_firestore.where)(condition.field_name, condition.operator, condition.value));
                    });
                    return [
                        4,
                        (0, import_firestore.getDocs)(db_query)
                    ];
                case 1:
                    query_snapshot = _state.sent();
                    documents = query_snapshot.docs.map(function(doc2) {
                        return simpleExtractData(doc2);
                    });
                    return [
                        2,
                        documents
                    ];
                case 2:
                    error = _state.sent();
                    console.error("Error querying documents: ".concat(collection_path, " - ").concat(JSON.stringify(where_conditions), " "), error);
                    return [
                        2,
                        []
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function query_documents_by_conditions(collection_path, where_conditions) {
        return _ref.apply(this, arguments);
    };
}();
var query_document_by_conditions = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(collection_path, where_conditions) {
        var db_query, query_snapshot, documents, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    db_query = (0, import_firestore.collection)(db, collection_path);
                    where_conditions.forEach(function(condition) {
                        db_query = (0, import_firestore.query)(db_query, (0, import_firestore.where)(condition.field_name, condition.operator, condition.value));
                    });
                    return [
                        4,
                        (0, import_firestore.getDocs)(db_query)
                    ];
                case 1:
                    query_snapshot = _state.sent();
                    documents = query_snapshot.docs.map(function(doc2) {
                        return simpleExtractData(doc2);
                    });
                    if (!documents[0]) {
                        throw new Error("No data returned from DB");
                    }
                    return [
                        2,
                        documents[0]
                    ];
                case 2:
                    error = _state.sent();
                    console.error("Error querying documents: ".concat(collection_path, " - ").concat(JSON.stringify(where_conditions), " "), error);
                    return [
                        2,
                        null
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function query_document_by_conditions(collection_path, where_conditions) {
        return _ref.apply(this, arguments);
    };
}();
// src/helpers/global.ts
var calculateBearing = function(startLat, startLng, endLat, endLng) {
    if (startLat === endLat || startLng === endLng) {
        return 0;
    }
    if (startLat === void 0 || startLng === void 0 || endLat === void 0 || endLng === void 0) {
        return 0;
    }
    var startLatRad = startLat * Math.PI / 180;
    var startLngRad = startLng * Math.PI / 180;
    var endLatRad = endLat * Math.PI / 180;
    var endLngRad = endLng * Math.PI / 180;
    var dLon = endLngRad - startLngRad;
    var y = Math.sin(dLon) * Math.cos(endLatRad);
    var x = Math.cos(startLatRad) * Math.sin(endLatRad) - Math.sin(startLatRad) * Math.cos(endLatRad) * Math.cos(dLon);
    var bearing = Math.atan2(y, x) * 180 / Math.PI;
    return (bearing + 360) % 360;
};
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
// src/helpers/store.ts
var setState = function(updater, set, stateName) {
    return set(function(state) {
        return _define_property({}, stateName, typeof updater === "function" ? updater(state[stateName]) : updater);
    });
};
var createSelectors = function(store) {
    var selectors = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var k = _step.value;
            selectors[k] = function() {
                return store(function(s) {
                    return s[k];
                });
            };
        };
        for(var _iterator = Object.keys(store.getState())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    return selectors;
};
var useStoreValues = function(store, keys) {
    var result = {};
    keys.forEach(function(key) {
        result[key] = store.use[key]();
    });
    return result;
};
// src/helpers/phoneNumber.ts
var import_libphonenumber_js = require("libphonenumber-js");
var isInternational = function(phone_number) {
    return phone_number.startsWith("+");
};
var isInternationalIsraelPhone = function(phone_number) {
    return phone_number.startsWith("+9725");
};
var local_israel_phone_format = function(international_number) {
    return international_number.replace("+972", "0");
};
var international_israel_phone_format = function(phone) {
    var validNumber = phone.slice(1, phone.length);
    return "+972".concat(validNumber);
};
var displayFormatPhoneNumber = function(phoneNumber) {
    if (isInternational(phoneNumber)) {
        var phoneNumberObject = (0, import_libphonenumber_js.parsePhoneNumberFromString)(phoneNumber);
        if (!phoneNumberObject) {
            return phoneNumber;
        }
        return phoneNumberObject.formatInternational().replace(/\s/g, "-");
    }
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    add_document: add_document,
    auth: auth,
    calculateBearing: calculateBearing,
    collections: collections,
    createSelectors: createSelectors,
    db: db,
    delete_document: delete_document,
    displayFormatPhoneNumber: displayFormatPhoneNumber,
    extractAlertsData: extractAlertsData,
    extractBoardsData: extractBoardsData,
    extractCanbusData: extractCanbusData,
    extractCarsData: extractCarsData,
    extractClientData: extractClientData,
    extractLocationData: extractLocationData,
    extractSiteData: extractSiteData,
    fire_base_TIME_TEMP: fire_base_TIME_TEMP,
    formatCarNumber: formatCarNumber,
    get_all_documents: get_all_documents,
    get_document_by_id: get_document_by_id,
    handleChange: handleChange,
    handleInvalid: handleInvalid,
    handlePaste: handlePaste,
    international_israel_phone_format: international_israel_phone_format,
    isInternational: isInternational,
    isInternationalIsraelPhone: isInternationalIsraelPhone,
    local_israel_phone_format: local_israel_phone_format,
    query_document: query_document,
    query_document_by_conditions: query_document_by_conditions,
    query_documents: query_documents,
    query_documents_by_conditions: query_documents_by_conditions,
    setState: setState,
    set_document: set_document,
    simpleExtractData: simpleExtractData,
    useStoreValues: useStoreValues,
    useValidation: useValidation
});
