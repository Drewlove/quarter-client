import React from "react";
import ShiftForm from "./ShiftForm";
import { shallow, mount } from "enzyme";

const departments = [
  {
    department_id: 1,
    department_name: "service",
  },
  {
    department_id: 2,
    department_name: "kitchen",
  },
  {
    department_id: 3,
    department_name: "doughs",
  },
];

const roles = [
  {
    department_id: 1,
    department_name: "service",
    role_id: 1,
    role_name: "register",
  },
  {
    department_id: 1,
    department_name: "service",
    role_id: 2,
    role_name: "expediter",
  },
  {
    department_id: 2,
    department_name: "kitchen",
    role_id: 4,
    role_name: "sous chef",
  },
  {
    department_id: 2,
    department_name: "kitchen",
    role_id: 3,
    role_name: "head chef",
  },
];

const shift = {
  shift_id: 1,
  shift_department: "2",
  shift_role: "4",
  people: 2,
  wage: "13.50",
  shift_start: "09:00:00",
  shift_end: "16:30:00",
  shift_day: [0, 2, 4],
};

const dummyData = [departments, roles, shift];

describe("ShiftForm", () => {
  it("Renders", () => {
    const wrapper = mount(<ShiftForm data={dummyData} />);
    expect(wrapper.find(".form_shift")).toHaveLength(1);
  });
  it("Renders delete button if the id is a number", () => {
    const wrapper = mount(<ShiftForm data={dummyData} id={1} />);
    expect(wrapper.find(".delete-button-section")).toHaveLength(1);
  });
  it("Renders NO delete button if the id is 'new' ", () => {
    const wrapper = mount(<ShiftForm data={dummyData} id="new" />);
    expect(wrapper.find(".delete-button-section")).toHaveLength(0);
  });
});

// let wrapper;
// beforeEach(() => {
//   wrapper = mount(<ShiftForm data={dummyData} id={1} />);
// });

// describe("ShiftForm, Role", () => {
//   it("Renders role section", () => {
//     expect(wrapper.find(".input-section_role")).toHaveLength(1);
//   });
//   it("Renders all roles from data", () => {
//     expect(wrapper.find(".option_shift-role")).toHaveLength(3);
//   });
//   it("Renders correct role names alphabetically", () => {
//     expect(wrapper.find(".option_shift-role").at(0).text()).toBe(
//       "- Select Role -"
//     );
//     expect(wrapper.find(".option_shift-role").at(1).text()).toBe("head chef");
//     expect(wrapper.find(".option_shift-role").at(2).text()).toBe("sous chef");
//   });
//   it("Associates accurate values with each role", () => {
//     expect(wrapper.find(".option_shift-role").at(1).props().value).toBe("3");
//     expect(wrapper.find(".option_shift-role").at(2).props().value).toBe("4");
//   });
//   it("Renders the selected role", () => {
//     expect(wrapper.find(".input-section__input_role").props().value).toBe("4");
//   });
//   it("Updates the list of available roles to correspond with user selected department", () => {
//     const userEvent = {
//       target: { name: "shift_department", value: "1" },
//     };
//     wrapper.find(".input-section__input_role").simulate("change", userEvent);
//     expect(wrapper.find(".option_shift-role").at(1).props().value).toBe("2");
//     expect(wrapper.find(".option_shift-role").at(2).props().value).toBe("1");
//   });
//   it("Updates the selected role based on user input", () => {
//     const userEvent = {
//       target: { name: "shift_role", value: "3" },
//     };
//     wrapper.find(".input-section__input_role").simulate("change", userEvent);
//     expect(wrapper.find(".input-section__input_role").props().value).toBe("3");
//   });
// });

// describe("ShiftForm, wage", () => {
//   it("Renders", () => {
//     expect(wrapper.find(".input-section_wage")).toHaveLength(1);
//   });
//   it("Renders value", () => {
//     expect(wrapper.find(".input-section__input_wage").props().value).toBe(
//       "13.50"
//     );
//   });
//   it("Renders updated value based on user input", () => {
//     const userEvent = { target: { name: "wage", value: "14.25" } };
//     wrapper.find(".input-section__input_wage").simulate("change", userEvent);
//     expect(wrapper.find(".input-section__input_wage").props().value).toBe(
//       "14.25"
//     );
//   });
//   it("Renders error if value is an empty string", () => {
//     const userEvent = { target: { name: "wage", value: "" } };
//     wrapper.find(".input-section__input_wage").simulate("change", userEvent);
//     expect(wrapper.find(".form-error")).toHaveLength(1);
//   });
//   it("Renders error if value is set to 0", () => {
//     const userEvent = { target: { name: "wage", value: "0" } };
//     wrapper.find(".input-section__input_wage").simulate("change", userEvent);
//     expect(wrapper.find(".form-error")).toHaveLength(1);
//   });
//   it("Renders error if value is set to number with three digits to right of decimal point", () => {
//     const userEvent = { target: { name: "wage", value: "9.123" } };
//     wrapper.find(".input-section__input_wage").simulate("change", userEvent);
//     expect(wrapper.find(".form-error")).toHaveLength(1);
//   });
//   it("Renders two numbers to right of decimal point if one or zero numbers to right of decimal point are entered", () => {
//     const userEvent = { target: { name: "wage", value: "9.1" } };
//     wrapper.find(".input-section__input_wage").simulate("change", userEvent);
//     wrapper.find(".input-section__input_wage").simulate("blur");
//     expect(wrapper.find(".input-section__input_wage").props().value).toBe(
//       "9.10"
//     );
//   });
// });

// describe("ShiftForm, start and end time", () => {
//   it("Renders", () => {
//     expect(wrapper.find(".input-section_time")).toHaveLength(2);
//   });
//   it("Renders start value", () => {
//     expect(wrapper.find(".input-section__input_time").at(0).props().value).toBe(
//       "09:00:00"
//     );
//   });
//   it("Renders end value", () => {
//     expect(wrapper.find(".input-section__input_time").at(1).props().value).toBe(
//       "16:30:00"
//     );
//   });
//   it("Renders updated value for start time based on user input", () => {
//     const userEvent = { target: { name: "shift_start", value: "12:00:00" } };
//     wrapper
//       .find(".input-section__input_time")
//       .at(0)
//       .simulate("change", userEvent);
//     expect(wrapper.find(".input-section__input_time").at(0).props().value).toBe(
//       "12:00:00"
//     );
//   });
//   it("Renders updated value for end time based on user input", () => {
//     const userEvent = { target: { name: "shift_end", value: "17:30:00" } };
//     wrapper
//       .find(".input-section__input_time")
//       .at(1)
//       .simulate("change", userEvent);
//     expect(wrapper.find(".input-section__input_time").at(1).props().value).toBe(
//       "17:30:00"
//     );
//   });
//   it("Renders one error if start value is an empty string", () => {
//     const userEvent = { target: { name: "shift_start", value: "" } };
//     wrapper
//       .find(".input-section__input_time")
//       .at(0)
//       .simulate("change", userEvent);
//     expect(wrapper.find(".form-error")).toHaveLength(1);
//   });
//   it("Renders two errors if start value and end value is an empty string", () => {
//     const userEventStart = { target: { name: "shift_start", value: "" } };
//     const userEventEnd = { target: { name: "shift_end", value: "" } };
//     wrapper
//       .find(".input-section__input_time")
//       .at(0)
//       .simulate("change", userEventStart);
//     wrapper
//       .find(".input-section__input_time")
//       .at(1)
//       .simulate("change", userEventEnd);
//     expect(wrapper.find(".form-error")).toHaveLength(2);
//   });
// });

//Renders,
//renders which checkboxes are checked,
//Updates which checkboxes are checked based on user checking another checkbox
//Upadtes which checkboxes are checked based on user deselecting a checkbox
//Renders error if no checkboxes are checked
// describe("ShiftForm, days", () => {
//   it("Renders", () => {
//     expect(wrapper.find(".input-section_days")).toHaveLength(1);
//   });
//   it("Renders which checkboxes are checked", () => {
//     expect(
//       wrapper.find(".toggle-container__input_days").at(0).props().checked
//     ).toBe(true);
//     expect(
//       wrapper.find(".toggle-container__input_days").at(1).props().checked
//     ).toBe(false);
//     expect(
//       wrapper.find(".toggle-container__input_days").at(2).props().checked
//     ).toBe(true);
//     expect(
//       wrapper.find(".toggle-container__input_days").at(3).props().checked
//     ).toBe(false);
//     expect(
//       wrapper.find(".toggle-container__input_days").at(4).props().checked
//     ).toBe(true);
//     expect(
//       wrapper.find(".toggle-container__input_days").at(5).props().checked
//     ).toBe(false);
//     expect(
//       wrapper.find(".toggle-container__input_days").at(6).props().checked
//     ).toBe(false);
//   });
//   it("Updates which checkboxes are checked based on user checking another checkbox", () => {
//     wrapper
//       .find(".toggle-container__input_days")
//       .at(6)
//       .simulate("change", { target: { value: 6 } });
//     expect(
//       wrapper.find(".toggle-container__input_days").at(6).props().checked
//     ).toBe(true);
//   });
//   it("Updates which checkboxes are checked based on user unchecking a checkbox", () => {
//     wrapper
//       .find(".toggle-container__input_days")
//       .at(4)
//       .simulate("change", { target: { value: 4 } });
//     expect(
//       wrapper.find(".toggle-container__input_days").at(6).props().checked
//     ).toBe(false);
//   });
//   it("Renders an error if no checkboxes are checked", () => {
//     wrapper
//       .find(".toggle-container__input_days")
//       .at(0)
//       .simulate("change", { target: { value: 0 } });
//     wrapper
//       .find(".toggle-container__input_days")
//       .at(2)
//       .simulate("change", { target: { value: 2 } });
//     wrapper
//       .find(".toggle-container__input_days")
//       .at(4)
//       .simulate("change", { target: { value: 4 } });

//     expect(wrapper.find(".form-error")).toHaveLength(1);
//   });
// });
