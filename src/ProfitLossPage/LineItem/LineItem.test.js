import React from 'react'; 
import ReactDOM from 'react-dom';
import LineItem from './LineItem'
import {CapitalizeAllWords, Hyphenate} from '../../Utilities/UtilityFunctions'

const category = 'direct labor'
const name = 'service shift leader'
const amount = 1000

describe('LineItem', ()=> {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <LineItem name={name} category={category} amount={amount}/>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
    it('CapitalizeAllWords the category name', () => {
        expect(CapitalizeAllWords(category)).toBe('Direct Labor');
    })
    it('formats category total with commas', () => {
        expect(amount.toLocaleString()).toBe('1,000');
    })
    it('formats the href string correctly', () => {
        expect(`/form/${Hyphenate(category)}/${Hyphenate(name)}`.toLocaleString()).toBe('/form/direct-labor/service-shift-leader');
    })
})
