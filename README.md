# JS-Utility-Functions
Useful JavaScript Utility Functions
<br><br>

## Table of contents

- [Array](#array)
  - [isArray](#isarray)
  - [isEmpty](#isempty)
  - [copyArray](#copyarray)
  - [replaceArrProperties](#replacearrproperties)
  - [getArrValues](#getarrvalues)
- [Object](#object)
  - [deepCopy](#deepcopy)
  - [convertObjKey](#convertobjkey)
  - [convertObj](#convertobj)
- [Date and Time](#date-and-time)
  - [formatDate](#formatdate)
  - [secToMin](#sectomin)
  - [minToSec](#mintosec)
- [String](#string)
  - [capitalize](#capitalize)
  - [isURL](#isurl)
  - [isIP](#isip)
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

### replaceArrProperties
Create a new array by mapping the values of source array to a new set of keys specified in 'keyMappings' 
```js
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
```
<br>

Example of how you might use this function:

```js
    const sourceArr = [
      { id: 1, name: 'Alice', age: 30 },
      { id: 2, name: 'Bob', age: 35 },
      { id: 3, name: 'Charlie', age: 40 },
    ];
    const keyMappings = { id: 'userId', name: 'userName', age: 'userAge' };
    
    const result = replaceArr(sourceArr, keyMappings);
    console.log(result);
    
    // Output:
    // [
    //   { userId: 1, userName: 'Alice', userAge: 30 },
    //   { userId: 2, userName: 'Bob', userAge: 35 },
    //   { userId: 3, userName: 'Charlie', userAge: 40 }
    // ]
```

<br>

### getArrValues
Create a new array containing only 'value' property from the source array
```js
    getArrValues(arr) {
        let reducer = function(accumulator, item) {
            accumulator.push(item.value);
            return accumulator;
        };
        let result = arr.reduce(reducer, []);
        return result;
    }
```
<br>

Example:

```js
    let arr = [{value: 1},  {value: 2},  {value: 3}];

    let result = getArrValue(arr);
    console.log(result); // Output: [1, 2, 3]
```

<br>

<br><br>


## Object

### deepCopy
Convert object to a JSON string, and then parse the string back into a new object. This will create a new object with a completely new memory address. Keep in mind this will not work with objects that contain functions or circular references.
```js
    copy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
```
<br>

### convertObjKey
Convert the object keys by copying a property from one key to another in the same object.
```js
    convertObjKey(obj, fromKey, toKey) {
        if (obj[fromKey]) obj[toKey] = obj[fromKey];
    }
```
<br>

### convertObj
Copy all the properties from origin object to the target object.
```js
    convertObj(fromObj,  toObj) {
        Object.keys(fromObj).forEach((key) => {
            objUtil.convertObjKey(fromObj, key, toObj[key]);
        });
    }
```
<br>
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


### secToMin
convert seconds to minutes
```js
    secToMin(sec) {
        if (sec == null) return null;
        try {
            let secToInt = Number(sec);
            return Math.ceil(secToInt / 60);
        } catch (error) {
            return null;
        }
    }
```
<br>

### minToSec
convert minutes to seconds
```js
    minToSec(min) {
        if (min == null) return null;
        try {
            let minToInt = Number(min);
            return minToInt
        }
    }
```
<br>

<br><br>



## String

### capitalize
capitalize the given string
```js
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
    }
```
<br>


### isURL
Check whether the passed string is a valid URL
```js
    isURL(str) {
        const url_reg = ^(https?|ftp)://[^\s/$.?#].[^\s]*$;
        return url_reg.test(str);
    }
```
```sql
    ^               # start of string
    (https?|ftp)    # matches "http" or "https" or "ftp"
    ://             # matches "://"
    [^\s/$.?#]      # matches any character that is not whitespace, "/", "$", ".", "?", or "#"
    .               # matches any character
    [^\s]*          # matches zero or more of any character that is not whitespace
    $               # end of string
```
<br>

### isIP
Check whether the passed value is a valid IPv4 address
```js
    isIp(str) {
        const ip_reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ip_reg.test(str);
        // return str.length === 0 || ip_reg.test(str); -> to allow empty string as a valid input for IP
    }
```
```sql
    ^                                       # start of string
    (?:                                     # non-capturing group
        (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.   # matches an IP address octet (0-255) followed by a period, for the first three octets
    ){3}                                    # repeats the previous group three times
    (?:                                     # non-capturing group
        25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]? # matches an IP address octet (0-255) for the fourth octet
    )                                       # end of non-capturing group
    $                                       # end of string
```
<br>

To disallow leading zeros
```js
    isIp(str) {
        const ip_reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[1-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[1-9][0-9]?)$/;
        return ip_reg.test(str);
    }
```

<br>
