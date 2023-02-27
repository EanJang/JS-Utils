# JS-Utility-Functions
Useful JavaScript Utility Functions
<br><br><br>

## Table of contents

- [Array](#array)
  - [isArray](#isarray)
  - [isEmpty](#isempty)
  - [copyArray](#copyarray)
<br><br>


## Array

### isArray
Check whether the passed value is an Array
```js
    isArr(arr) {
        return arr && Array.isArray(arr);
    }
```
<br>

### isEmpty
Check whether the passed array is empty
```js
    isEmpty(arr) {
        if (!this.isArr(arr)) return true;
        return !arr.length;
    }
```
<br>

### copyArray
Copy array(HALF deep copy)
1. If the passed value is not array, return empty array
2. If the passed value is an array, declare an empty array.
3. Copy the given array and push elements to the empty array.
4. Return copied array.
```js
    // objectUtil.js
    export default {
        copy(obj) {
            return JSON.parse(JSON.stringify(obj));
        }
    };
```
```js
    copyArr(arr) {
        if (!this.isArr(arr)) return [];
        let copied = [];
        arr.forEach((o) => {
            copied.push(objectUtil.copy(o));
        });
        return copied;
    }
```
<br>
