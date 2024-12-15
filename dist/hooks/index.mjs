// src/hooks/global.ts
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
// src/hooks/WebWorker.ts
import { useCallback, useEffect as useEffect2, useRef as useRef2 } from "react";
export { useDocumentTitle, useSafeEffect, useSnapshotBulk };
//# sourceMappingURL=index.mjs.map