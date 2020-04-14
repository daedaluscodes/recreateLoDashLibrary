const _ = {
    clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;      
      }
      if (start > end) {
        let temp = end;
        end = start;
        start = temp;
      }
      const isInRange = (start <= number && number < end);
      return isInRange;
    },
    words (string) {
      const words = string.split(' ');
      return words;
    },
    pad (string, length) {    
      if(length < string.length) {
        return string;
      }
      const frontPad = Math.floor((length - string.length) / 2);
      const endPad = length - string.length - frontPad;
      const paddedString = ' '.repeat(frontPad) + string + ' '.repeat(endPad);
      return paddedString;
    },
    has (obj, key) {
      const hasValue = obj[key];
      if(hasValue != undefined) {
        return true;
      } return false;
    },
    invert (object) {
      let invertedObject = {};
      for(let key in object) {
        const originalValue = object[key];
        invertedObject = {originalValue : key}
      }
      return invertedObject;
    },
    findKey(object, predicate) {
      for(let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue) {
          return key;
        };
      };
      undefined
      return undefined;
    },
    drop (array, number) {
      if(number === undefined) {
        number = 1;
      }
      let copyArray = array.slice(number, array.length);
      return copyArray;
    },
    dropWhile (array, predicate) {
      const callBack = (element, index) => {
        return !predicate(element, index, array);
      }
      let dropNumber = array.findIndex(callBack);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk (array, size) {
      if(size === undefined) {
        let size = 1;
      }
      let arrayChunks = [];
      for(i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
    
  };
  
  
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;