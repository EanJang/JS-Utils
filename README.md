# JS-Utility-Functions
Useful JavaScript Utility Functions
<br><br><br>

## Table of contents

- [Array](#array)
  - [isArray](#isarray)
  - [isEmpty](#isempty)
  - [copyArray](#copyarray)
- [Date and Time](#date-and-time)
  - [formatDate](#formatdate)
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
<br><br>



## Date and Time

### formatDate
format date and time to "YYYY-MM-DD HH:mm:ss" with or without Moment.js
```js
    // without moment
    formatDate1(date) {
        let year = date.getFullYear().toString();

        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month.toString() : month.toString();

        let day = date.getDate();
        day = day < 10 ? '0' + day.toString() : day.toString();

        let hour = date.getHours();
        hour = hour < 10 ? '0' + hour.toString() : hour.toString();

        let minutes = date.getMinutes();
        minutes =  minutes < 10 ? '0' + minutes.toString() : minutes.toString();

        let seconds = date.getSeconds();
        seconds =  seconds < 10 ? '0' + seconds.toString() : seconds.toString();

        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }
```
```js
    // with moment.js (moment should be installed and imported above)
    formatDate2 (date) {
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
```
<br>
