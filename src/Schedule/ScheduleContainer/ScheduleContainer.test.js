import React from "React";
import ScheduleContainer from "./ScheduleContainer";
import { shallow, mount } from "enzyme";

describe("ScheduleContainer", () => {
  it("renders", () => {
    let wrapper = shallow(<ScheduleContainer />);
    expect(wrapper.find(".schedule-row_weekdays")).toHaveLength(1);
  });
});
