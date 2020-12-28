export const CapitalizeAllWords = (str) => {
  if (!str) return null;
  if (str.length === 0) return "";

  let strArr = str.split(" ");
  let newArr = strArr.map((word) => {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
  });
  return newArr.join(" ");
};

export const FormatNumToDollars = (value) => {
  let valueOnlyNumbers = value.replace(/,/g, "");
  let revisedNum = Number(valueOnlyNumbers).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return revisedNum;
};

export const ConvertNumToTimeStr = (num) => {
  let hour = `${((Math.floor(num) + 11) % 12) + 1}`;
  let minutes = num % 1 === 0 ? "00" : `${(num % 1) * 60}`;
  let amPm = "";
  num < 12 || num === 24 ? (amPm = "am") : (amPm = "pm");
  return `${hour}:${minutes}${amPm}`;
};
