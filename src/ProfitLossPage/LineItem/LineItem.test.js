import React from 'react'; 
import { shallow, mount } from "enzyme";
import LineItem from "./LineItem";

describe('LineItem', ()=> {
    it('renders', () => {
        const wrapper = shallow(<LineItem category='category' name='name' amount={200}/>)
    })
    it('displays two paragraph elements', ()=> {
        const wrapper = mount(<LineItem category='category' name='name' amount={200}/>); 
        expect(wrapper.find('.pl-fieldset__item-text')).toHaveLength(2);
    })
    it('capitalizes line item name', () => {
        const wrapper = mount(<LineItem category='category' name='name' amount={200}/>); 
        expect(wrapper.find('.pl-fieldset__item-text').at(0).text()).toEqual('Name')
    })
    it('formats href correctly', () => {
        const wrapper = mount(<LineItem category='category' name='name' amount={200}/>); 
        expect(wrapper.find('a').props().href).toEqual('/form/category/name/')
    })
})
