import React from 'react'; 
import ReactDOM from 'react-dom';
import CategoryTotal from './CategoryTotal'

const netProfit = 100; 
const sales = 100; 
const name = 'category'; 
const categoryTotal = 200;


describe('CategoryTotal', ()=> {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <CategoryTotal 
            netProfit = {netProfit}
            sales = {sales}
            name = {name}
            categoryTotal = {categoryTotal}
            />, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
