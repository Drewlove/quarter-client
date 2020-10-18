import React from 'react'; 
import ReactDOM from 'react-dom';
import ProfitLossPage from './ProfitLossPage'

describe('ProfitLossPage', ()=> {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <ProfitLossPage />, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})