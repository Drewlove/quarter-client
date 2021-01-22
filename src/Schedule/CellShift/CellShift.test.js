import React from "react"; 
import CellShift from "./CellShift"
import { mount } from "enzyme";
import {MemoryRouter} from 'react-router-dom';

const shift = {day: 5, department: "bake off", role: "kettle", start: 4, end: 8, people: 1, hourly: 12}; 

describe("CellShift", () => {
    let wrapper; 
    beforeEach(() => {
        wrapper = mount(
        <MemoryRouter>
            <CellShift shift={shift}/>
        </MemoryRouter>
        );  
    })
    it("renders a cell", () => {
        expect(wrapper.find("a.schedule-row__cell_shift")).toHaveLength(1); 
    })
    it("renders text: number of people", () => {
        expect(wrapper.find(".schedule-text_shift-people").text()).toEqual("1X")
    })
    it("renders text: role name", () => {
        expect(wrapper.find(".schedule-text_shift-role").text()).toEqual("Kettle")
    })
    it("renders text: shift hours", () => {
        expect(wrapper.find(".schedule-text_shift-hours").text()).toEqual("4:00am-8:00am")
    })
})