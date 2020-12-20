export const CapitalizeAllWords = (str) => {
  if (str.length === 0) return "";

  let strArr = str.split(" ");
  let newArr = strArr.map((word) => {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
  });
  return newArr.join(" ");
};

export const FormatNumToDollars = (value) => {
  let numNoCommas = value.replace(/,/g, "");
  return Number(numNoCommas).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

function isStringSingleDecimal(str) {
  let decimalsInString = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") decimalsInString++;
    if (decimalsInString > 1) return false;
  }
  return true;
}

export const ConvertNumToTimeStr = (num) => {
  let hour = `${((Math.floor(num) + 11) % 12) + 1}`;
  let minutes = num % 1 === 0 ? "00" : `${(num % 1) * 60}`;
  let amPm = "";
  num < 12 || num === 24 ? (amPm = "am") : (amPm = "pm");
  return `${hour}:${minutes}${amPm}`;
};
