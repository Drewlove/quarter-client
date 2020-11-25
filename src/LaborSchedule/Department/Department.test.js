import React from 'React'; 
import Department from './Department'; 
import {mount} from 'enzyme'; 
import {Shifts} from '../_TestingShifts/TestingShifts'
import {CollateSchedule} from '../../Utilities/ScheduleAlgo'
import {MemoryRouter} from 'react-router-dom'

jest.mock('nanoid', () => {
    let value = 1; 
    return {
        nanoid: jest.fn( () => value++)
    };
});

describe('Department', () => {
    it('renders', () => {
        const schedule = {cost: 1, line: []}
        const wrapper = mount(
        <MemoryRouter>
            <Department deptName = 'Department' schedule={schedule} key={'row'} />
        </MemoryRouter>); 
        expect(wrapper.find('.schedule-row_department')).toHaveLength(1); 
    })
    it('renders two rows if same role on same day', () => {
        const schedule = CollateSchedule(Shifts.sameDepartmentSameDay); 
        const wrapper = mount(
        <MemoryRouter>
            <Department deptName='Department' schedule={schedule['service']} />
        </MemoryRouter>); 
        expect(wrapper.find('.schedule-row_role')).toHaveLength(2); 
    }), 
    it('renders 7 cellShift components if same role has shift on 7 days', () => {
        const schedule = CollateSchedule(Shifts.sameDepartmentSameRoleDiffDays); 
        const wrapper = mount(
        <MemoryRouter>
            <Department deptName='Department' schedule={schedule['bake off']} />
        </MemoryRouter>); 
        expect(wrapper.find('a.schedule-row__cell_shift')).toHaveLength(7); 
    })
    it('renders two rows if two different roles', () => {
        const schedule = CollateSchedule(Shifts.sameDeptTwoRoles); 
        const wrapper = mount(
        <MemoryRouter>
            <Department deptName='Department' schedule={schedule['bake off']} />
        </MemoryRouter>); 
        expect(wrapper.find('.schedule-row_role')).toHaveLength(2);
    })
})