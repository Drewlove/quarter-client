import React from "react";
import { shallow, mount} from "enzyme";
import LineItemForm from "./LineItemForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: 'sales'
  })
}));

describe('LineItemForm', () => {
    it('renders', ()=> {
        shallow(<LineItemForm />)
    })
    it('renders two inputs', () => {
        const wrapper = shallow(<LineItemForm />); 
        expect(wrapper.find('input')).toHaveLength(2)
    })
    it('displays the cateogry name', () => {
        const wrapper = mount(<LineItemForm />); 
        expect(wrapper.find('legend').at(0).text()).toEqual('sales')
    })
    it('displays text in line-item input', () => {
        const wrapper = mount(<LineItemForm />); 
        wrapper.find('#line-item').instance().value = 'food'; 
        expect(wrapper.find('#line-item').instance().value).toEqual('food')
    })
    it('displays text in amount input', () => {
        const wrapper = mount(<LineItemForm />); 
        wrapper.find('#amount').instance().value = '123'; 
        expect(wrapper.find('#amount').instance().value).toEqual('123')
    })
})