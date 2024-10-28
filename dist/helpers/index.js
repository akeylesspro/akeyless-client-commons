"use strict";
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/helpers/index.ts
var helpers_exports = {};
__export(helpers_exports, {
    calculateBearing: function() {
        return calculateBearing;
    },
    createSelectors: function() {
        return createSelectors;
    },
    formatCarNumber: function() {
        return formatCarNumber;
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
    setState: function() {
        return setState;
    },
    useStoreValues: function() {
        return useStoreValues;
    },
    useValidation: function() {
        return useValidation;
    }
});
module.exports = __toCommonJS(helpers_exports);
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
// src/helpers/cars.ts
var formatCarNumber = function(car_number) {
    var cn = car_number;
    if ((cn === null || cn === void 0 ? void 0 : cn.length) == 8) return "".concat(cn[0]).concat(cn[1]).concat(cn[2], "-").concat(cn[3]).concat(cn[4], "-").concat(cn[5]).concat(cn[6]).concat(cn[7]);
    if ((cn === null || cn === void 0 ? void 0 : cn.length) == 7) return "".concat(cn[0]).concat(cn[1], "-").concat(cn[2]).concat(cn[3]).concat(cn[4], "-").concat(cn[5]).concat(cn[6]);
    if ((cn === null || cn === void 0 ? void 0 : cn.length) == 6) return "".concat(cn[0]).concat(cn[1], "-").concat(cn[2]).concat(cn[3], "-").concat(cn[4]).concat(cn[5]);
    if ((cn === null || cn === void 0 ? void 0 : cn.length) == 5) return "".concat(cn[0], "-").concat(cn[1]).concat(cn[2], "-").concat(cn[3]).concat(cn[4]);
    return cn;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    calculateBearing: calculateBearing,
    createSelectors: createSelectors,
    formatCarNumber: formatCarNumber,
    handleChange: handleChange,
    handleInvalid: handleInvalid,
    handlePaste: handlePaste,
    setState: setState,
    useStoreValues: useStoreValues,
    useValidation: useValidation
});
