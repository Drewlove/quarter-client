export const GetErrorMessage = (name, value) => {
  console.log(name, value);
  switch (name) {
    case "category":
      return getErrorMessageCategory(value);
    case "name":
      return getErrorMessageName(value);
    case "amount":
      return getErrorMessageAmount(value);
    case "percentOf":
      return getErrorMessagePercentOf(value);
    default:
      break;
  }
};

const getErrorMessageCategory = (value) => {
  if (value.length === 0) {
    return "Select a category.";
  } else {
    return "";
  }
};

const getErrorMessageName = (value) => {
  if (value.length === 0) {
    return "Enter a name.";
  } else {
    return "";
  }
};

const getErrorMessageAmount = (value) => {
  if (value.length === 0) {
    return "Enter a valid pay rate.";
  } else if (value.indexOf(".") >= 0 && value.split(".")[1].length > 2) {
    return "Enter number with max of two digits to right of decimal point.";
  } else {
    return "";
  }
};

const getErrorMessagePercentOf = (value) => {
  if (value.length === 0) {
    return "Select a line item.";
  } else {
    return "";
  }
};
