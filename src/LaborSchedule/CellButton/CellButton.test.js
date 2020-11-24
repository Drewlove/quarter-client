import React from 'react'; 
import CellButton from './CellButton'; 
import {shallow, mount} from 'enzyme'

describe('CellButton', () => {
    it('renders', () => {
        const wrapper = shallow(<CellButton />); 
        expect(wrapper.find('.schedule-row__cell_button')).toHaveLength(1); 
    })
})