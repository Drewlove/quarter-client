import React from 'react'; 
import { shallow, mount } from "enzyme";
import CogsOptions from "./CogsOptions";

describe('CogsOptions', () => {
    let wrapper; 
    beforeEach( () => {
        wrapper = shallow(<CogsOptions />)
    })

    it('renders', () => {
        wrapper; 
    })
})