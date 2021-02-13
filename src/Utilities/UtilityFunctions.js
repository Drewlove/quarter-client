export const CapitalizeAllWords = (str) => {
  if (!str) return null;
  if (str.length === 0) return "";

  let strArr = str.split(" ");
  let newArr = strArr.map((word) => {
    return `${word[0].toUpperCase()}${word.substring(1)}`;
  });
  return newArr.join(" ");
};

export const FORMAT_NUM = (value) => {
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

export const SUM_WEEKLY_SHIFT_TOTAL = (shift) => {
  let sum =
    (timeStringToFloat(shift.shift_end) -
      timeStringToFloat(shift.shift_start)) *
    shift.wage *
    shift.people *
    shift.shift_day.length *
    (parseFloat(shift.payroll_tax).toFixed(2) / 100 + 1);
  return sum;
};

function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}
