export const objUtil = {

    copy(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    convertObjKey(obj, fromKey, toKey) {
        if (obj[fromKey]) obj[toKey] = obj[fromKey];
    },

    convertObj(fromObj,  toObj) {
        Object.keys(fromObj).forEach((key) => {
            objUtil.convertObjKey(fromObj, key, toObj[key]);
        });
    }
};