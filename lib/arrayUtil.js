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
};