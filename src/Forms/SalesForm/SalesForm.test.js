import React from "react";
import { shallow, mount} from "enzyme";
import SalesForm from "./SalesForm";

describe('SalesForm', () => {
    it('renders', ()=> {
        shallow(<SalesForm />)
    })
    it('renders two inputs', () => {
        const wrapper = shallow(<SalesForm />); 
        expect(wrapper.find('input')).toHaveLength(2)
    })
    it('displays text in line-item input', () => {
        const wrapper = mount(<SalesForm/>); 
        wrapper.find('#line-item').instance().value = 'food'; 
        expect(wrapper.find('#line-item').instance().value).toEqual('food')
    })
    it('displays text in amount input', () => {
        const wrapper = mount(<SalesForm/>); 
        wrapper.find('#amount').instance().value = '123'; 
        expect(wrapper.find('#amount').instance().value).toEqual('123')
    })
})