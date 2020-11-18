export const CapitalizeAllWords = (str) => {
  if(str.length === 0) return ''; 
  
  let strArr = str.split(" ")
  let newArr = strArr.map(word => {
    return `${word[0].toUpperCase()}${word.substring(1)}`
  })
  return newArr.join(" "); 
}

export const Hyphenate = (str) => {
  let strArr = str.split(" "); 
  return strArr.join("-"); 
}


export const IsStringValidNum = (str) => {
  let validStatus = true; 
  if(str.length === 0) return validStatus = false; 
  if(!isStringNumeric(str)) return validStatus = false; 
  if(!isStringSingleDecimal(str)) return validStatus = false; 
  return validStatus; 
}

function isStringNumeric(str) {
  const isStringNumeric = /^[0-9,.]*$/.test(str); //checks if str only has: numbers . ,
  if(isStringNumeric) return true; 
  if(!isStringNumeric) return false; 
}

function isStringSingleDecimal(str) {
  let decimalsInString = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") decimalsInString++;
    if (decimalsInString > 1) return false; 
  }
  return true; 
}

export const ConvertNumToTimeStr = (num) => {
  let hour = `${((Math.floor(num) + 11) % 12 + 1)}`;
  let minutes =  num%1 === 0 ? "00" : `${(num%1)*60}`; 
  let amPm = ""; 
  num < 12 || num === 24  ? amPm = "am" : amPm = "pm"
  return `${hour}:${minutes}${amPm}` 
}




