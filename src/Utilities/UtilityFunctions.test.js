import { ConvertNumToTimeStr } from "./UtilityFunctions";

const timeTest = {
  0: [12, "12:00pm"],
  1: [24, "12:00am"],
  2: [13, "1:00pm"],
  3: [15, "3:00pm"],
  4: [11, "11:00am"],
  5: [1.5, "1:30am"],
  6: [12.25, "12:15pm"],
  7: [18.75, "6:45pm"],
};

describe("ConvertNumToTimeStr", () => {
  Object.keys(timeTest).forEach((key) => {
    it(`converts ${timeTest[key][0]} to ${timeTest[key][1]}`, () => {
      expect(ConvertNumToTimeStr(timeTest[key][0])).toEqual(timeTest[key][1]);
    });
  });
});
