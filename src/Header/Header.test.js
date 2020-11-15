import React from 'react'; 
import Header from './Header'; 
import { shallow, mount } from "enzyme";
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

describe('Header', () => {
    it('renders', () => {
        const wrapper = shallow(<BrowserRouter><Header /></BrowserRouter>); 
    })
    it('if not logged in, renders sign-in and register links ', () => {
        const wrapper = mount(<MemoryRouter initialEntries={['/']}>
            <Header />
        </MemoryRouter>)
        expect(wrapper.find('.header__user-link_register')).toHaveLength(1); 
        expect(wrapper.find('.header__user-link_sign-in')).toHaveLength(1); 
    })
    it('if logged in, does NOT render sign-in and register links if logged in', () => {
        const wrapper = mount(<MemoryRouter initialEntries={['/p&L']}>
            <Header />
        </MemoryRouter>)
        expect(wrapper.find('.header__user-link_register')).toHaveLength(0); 
        expect(wrapper.find('.header__user-link_sign-in')).toHaveLength(0); 
    })

})

