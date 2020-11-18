import React from "react"; 
import {mount, shallow} from "enzyme"
import DepartmentRow from "./DepartmentRow"

const row =     [{
    day: 5,
    department: "bake off",
    role: "kettle",
    start: 4,
    end: 8,
    people: 1,
    hourly: 12,
    id: 6
  },
  {
    day: 6,
    department: "bake off",
    role: "kettle",
    start: 4,
    end: 8,
    people: 1,
    hourly: 12,
    id: 7
  },
  {
    day: 4,
    department: "bake off",
    role: "kettle",
    start: 4,
    end: 8,
    people: 1,
    hourly: 12,
    id: 8
  },
  {
    day: 3,
    department: "bake off",
    role: "kettle",
    start: 4,
    end: 8,
    people: 1,
    hourly: 12,
    id: 9
  }]

describe("DepartmentRow",() => {
    let wrapper; 

    beforeEach( () => {
        wrapper = mount(<DepartmentRow row={row} />)
    })
    it("renders", () => {
        expect(wrapper.find(".schedule-row")).toHaveLength(1); 
    })
    it("renders correct number of DepartmentRowCellShift", () => {
        expect(wrapper.find(".schedule-row").children()).toHaveLength(4); 
    })
    // it("renders correct number of DepartmentRowCellShiftButton ", () => {
    //   
    // })
})

