import React from 'react'; 
import { shallow, mount } from "enzyme";
import LineItem from "./LineItem";

const category = 'direct labor'
const name = 'service shift leader'
const amount = 1000

describe('LineItem', ()=> {
    it('renders', () => {
        const wrapper = shallow(<LineItem category='category' name='name' amount={200}/>)
    })
    it('displays two paragraph elements', ()=> {
        const wrapper = mount(<LineItem category='category' name='name' amount={200}/>); 
        expect(wrapper.find('.pl-fieldset__item-text')).toHaveLength(2);
    })
    // it('CapitalizeAllWords the category name', () => {
    //     expect(CapitalizeAllWords(category)).toBe('Direct Labor');
    // })
    // it('formats category total with commas', () => {
    //     expect(amount.toLocaleString()).toBe('1,000');
    // })
    // it('formats the href string correctly', () => {
    //     expect(`/form/${Hyphenate(category)}/${Hyphenate(name)}`.toLocaleString()).toBe('/form/direct-labor/service-shift-leader');
    // })
})
