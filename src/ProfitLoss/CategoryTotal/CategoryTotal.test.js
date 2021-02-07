import React from "react";
import { shallow, mount } from "enzyme";
import CategoryTotal from './CategoryTotal'

describe('CategoryTotal', ()=> {
    it('renders', () => {
      const wrapper = shallow(<CategoryTotal name='category' categoryTotal='5000'/>)
    })
    it('Capitalizes the category name', () => {
      const wrapper = mount(<CategoryTotal name='category' categoryTotal='5000'/>)
      expect(wrapper.find('.pl-fieldset__item-text').at(0).text()).toEqual('Category')
    })
    it('displays three paragraph elements', () => {
      const wrapper = mount(<CategoryTotal name='category' categoryTotal='5000'/>)
      expect(wrapper.find('.pl-fieldset__item-text')).toHaveLength(3)
    })
})
