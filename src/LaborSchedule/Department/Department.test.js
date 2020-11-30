import React from "React";
import Department from "./Department";
import { mount} from "enzyme";
import { oneRowTwoShifts, twoRowsOneShiftEach} from "./TestSchedules";
import { CollateSchedule } from "../../Utilities/ScheduleAlgo";
import { MemoryRouter } from "react-router-dom";

jest.mock("nanoid", () => {
  let value = 1;
  return {
    nanoid: jest.fn(() => value++),
  };
});

describe('Department', () => {
    it('renders', () => {
        let schedule = CollateSchedule(oneRowTwoShifts); 
        let wrapper = mount(
        <MemoryRouter>
            <Department key={'bake off'} schedule={schedule['bake off']} deptName={'bake off'} />
        </MemoryRouter>)
        expect(wrapper.find('.schedule-row_department')).toHaveLength(1); 
    })
}); 

describe('Department, two shifts with same rowId', () => {
    const schedule = CollateSchedule(oneRowTwoShifts); 
    const wrapper = mount(
    <MemoryRouter>
        <Department key={'bake off'} schedule={schedule['bake off']} deptName={'bake off'} />
    </MemoryRouter>)

    it('renders one row', () => {
        expect(wrapper.find('.schedule-row_role')).toHaveLength(1); 
    })
    it('renders two roles', () => {
        expect(wrapper.find('.schedule-text_shift-role')).toHaveLength(2); 
    })
})

describe('Department, two shifts with different rowId', () => {
    const schedule = CollateSchedule(twoRowsOneShiftEach); 
    const wrapper = mount(
    <MemoryRouter>
        <Department key={'bake off'} schedule={schedule['bake off']} deptName={'bake off'} />
    </MemoryRouter>)

    it('renders two rows', () => {
        expect(wrapper.find('.schedule-row_role')).toHaveLength(2); 
    })
    it('renders two roles', () => {
        expect(wrapper.find('.schedule-text_shift-role')).toHaveLength(2); 
    })
})