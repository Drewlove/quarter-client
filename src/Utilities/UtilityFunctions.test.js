import { ConvertNumToTimeStr } from "./UtilityFunctions";

const timeTest = {
  0: ["12:00", "12:00pm"],
  1: ["00:00", "12:00am"],
  2: ["13:00", "1:00pm"],
  3: ["15:00", "3:00pm"],
  4: ["11:00", "11:00am"],
  5: ["01:30", "1:30am"],
};

describe("ConvertNumToTimeStr", () => {
  Object.keys(timeTest).forEach((key) => {
    it(`converts ${timeTest[key][0]} to ${timeTest[key][1]}`, () => {
      expect(ConvertNumToTimeStr(timeTest[key][0])).toEqual(timeTest[key][1]);
    });
  });
});
