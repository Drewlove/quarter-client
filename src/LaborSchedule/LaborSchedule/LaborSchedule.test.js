import React from 'React'; 
import LaborSchedule from './LaborSchedule'; 
import {shallow, mount} from 'enzyme'; 

describe('LaborSchedule', () => {
    it("renders", () => {
        let wrapper = shallow(<LaborSchedule />); 
        expect(wrapper.find('.schedule-row_weekdays')).toHaveLength(1); 
    })
})