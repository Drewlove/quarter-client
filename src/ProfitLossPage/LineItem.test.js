import React from 'react'; 
import ReactDOM from 'react-dom';
import LineItem from './LineItem'

const name = 'line name'
const category = 'category'
const amount = 1000

describe('LineItem', ()=> {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <LineItem name={name} category={category} amount={amount}/>, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
