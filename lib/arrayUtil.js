import objectUtil from "./objectUtil";

export default {
    isArr(arr) {
        return arr && Array.isArray(arr);
    }

    isEmpty(arr) {
        if (!this.isArr(arr)) return true;
        return !arr.length;
    }

    copyArr(arr) {
        if (!this.isArr(arr)) return [];
        let copied = [];
        arr.forEach((o) => {
            copied.push(objectUtil.copy(o));
        });
        return copied;
    }

    replaceArrProperties(sourceArr, keyMappings) {
        let result = [];
        sourceArr.forEach((item) => {
            let tmp = {};
            Object.keys(keyMappings).forEach((key) => {
                tmp[keyMappings[key]] = item[key];
            });
            result.push(tmp);
        });
        return result;
    }

    getArrValues(arr) {
        let reducer = function(accumulator, item) {
            accumulator.push(item.value);
            return accumulator;
        };
        let result = arr.reduce(reducer, []);
        return result;
    }
};