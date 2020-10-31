import React from "react";
import { shallow, mount} from "enzyme";
import LineItemForm from "./LineItemForm";

describe('LineItemForm', () => {
    it('renders', ()=> {
        shallow(<LineItemForm />)
    })
    it('renders two inputs', () => {
        const wrapper = shallow(<LineItemForm />); 
        expect(wrapper.find('input')).toHaveLength(2)
    })
    it('displays text in line-item input', () => {
        const wrapper = mount(<LineItemForm/>); 
        wrapper.find('#line-item').instance().value = 'food'; 
        expect(wrapper.find('#line-item').instance().value).toEqual('food')
    })
    it('displays text in amount input', () => {
        const wrapper = mount(<LineItemForm/>); 
        wrapper.find('#amount').instance().value = '123'; 
        expect(wrapper.find('#amount').instance().value).toEqual('123')
    })
})