import React from "react"; 
import {mount, shallow} from "enzyme"
import RowRole from "./RowRole"

const row =     [{
    day: 0,
    department: "bake off",
    role: "kettle",
    start: 4,
    end: 8,
    people: 1,
    hourly: 12,
    id: 0,
    isShift: true,
  },
  {
    day: 1,
    department: "bake off",
    role: "kettle",
    start: 4,
    end: 8,
    people: 1,
    hourly: 12,
    id: 1,
    isShift: true,
  },
  {
    day: 2,
    department: "bake off",
    role: "kettle",
    start: 4,
    end: 8,
    people: 1,
    hourly: 12,
    id: 2,
    isShift: true,
  },
  {
    day: 3,
    department: "bake off",
    role: "kettle",
    start: 4,
    end: 8,
    people: 1,
    hourly: 12,
    id: 3, 
    isShift: true,
  }, 
  {
    id: 4, 
    isShift: false, 
  },
  {
    id: 5, 
    isShift: false, 
  },
  {
    id: 6, 
    isShift: false, 
  },
]

describe("RowRole",() => {
    let wrapper; 

    beforeEach( () => {
        wrapper = mount(<RowRole row={row} />)
    })
    it("renders", () => {
        expect(wrapper.find(".schedule-row")).toHaveLength(1); 
    })
    it("renders correct number of cells with shift info", () => {
        expect(wrapper.find(".schedule-row__cell_shift")).toHaveLength(4);
    })
    it("renders correct number of blank cells", () => {
      expect(wrapper.find(".schedule-row__cell_button")).toHaveLength(3);  
  })
})

