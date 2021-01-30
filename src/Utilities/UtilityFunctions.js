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
  return revisedNum === "NaN" ? "0.00" : revisedNum;
};

export const ConvertNumToTimeStr = (str) => {
  let times = str.split(":");
  let militaryHour = parseInt(times[0]);
  let standardHour =
    militaryHour < 13 ? `${militaryHour}` : `${militaryHour - 12}`;
  let minutes = times[1] % 60 === 0 ? "00" : `${times[1] % 60}`;
  let amPm = "";
  times[0] < 12 || times[0] === 24 ? (amPm = "am") : (amPm = "pm");
  return `${standardHour}:${minutes}${amPm}`;
};
