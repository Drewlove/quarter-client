export const CapitalizeAllWords = (str) => {
  if (!str) return null;
  if (str.length === 0) return "";

  let strArr = str.split(" ");
  let newArr = strArr.map((word) => {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
  });
  return newArr.join(" ");
};

export const FORMAT_NUM_TO_DOLLARS = (value) => {
  let valueOnlyNumbers = value.replace(/,/g, "");
  let revisedNum = Number(valueOnlyNumbers).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return revisedNum === "NaN" ? "0.00" : revisedNum;
};

export const ConvertNumToTimeStr = (str) => {
  let times = str.split(":");
  let hour = parseInt(times[0]);
  let minutes = times[1];
  let amPm = "";
  hour < 12 ? (amPm = "am") : (amPm = "pm");
  if (hour < 1) {
    return `12:${minutes}${amPm}`;
  } else if (hour <= 12) {
    return `${hour}:${minutes}${amPm}`;
  } else {
    return `${hour - 12}:${minutes}${amPm}`;
  }
};
