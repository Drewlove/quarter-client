import React from 'react'; 
import ReactDOM from 'react-dom';
import CategoryTotal from './CategoryTotal'
import {Capitalize} from '../../Utilities/UtilityFunctions'

const name = 'category'; 
const categoryTotal = 200;

const salesLineItems = [
    { category: "sales", name: "food", amount: 10000, id: 1 },
    { category: "sales", name: "beverage", amount: 20000, id: 2 },
    { category: "sales", name: "other", amount: 30000, id: 3 },
  ];

  const cogsLineItems = [
    { category: "cogs", name: "food", amount: 1000, id: 4},
    { category: "cogs", name: "beverage", amount: 2000, id: 5},
    { category: "cogs", name: "other", amount: 3000, id: 6},
  ]

  const directLaborLineItems = [
    { category: "direct labor", name: "salaried", amount: 1000, id: 7},
    { category: "direct labor", name: "hourly", amount: 2000, id: 8},
    { category: "direct labor", name: "payroll tax", amount: 3000, id: 9},
  ]

  const overheadLineItems = [
    { category: "overhead", name: "supplies", amount: 1000, id: 10},
    { category: "overhead", name: "repairs", amount: 1000, id: 11},
    { category: "overhead", name: "rent", amount: 1000, id: 16},
  ]

  const getTotal = (lineItems) => {
    const totalObj = lineItems.reduce((a, b) => ({amount: a.amount + b.amount }));
    return totalObj.amount; 
  };

  const grandTotal = () => {
      return getTotal(cogsLineItems) + getTotal(directLaborLineItems) + getTotal(overheadLineItems); 
  }

describe('CategoryTotal', ()=> {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <CategoryTotal 
            name = {name}
            categoryTotal = {categoryTotal}
            netProfit = {true}
            />, div
        )
        ReactDOM.unmountComponentAtNode(div);
    })
    it('capitalizes the category name', () => {
        expect(Capitalize(name)).toBe('Category');
    })
    it('receives the accurate sales total', () => {
        expect(getTotal(salesLineItems)).toBe(60000); 
    })
    it('calculates category total as percentage of sales', () => {
        expect(getTotal(cogsLineItems)/getTotal(salesLineItems)).toBe(0.1);  
    })
    it('formats category total with commas', () => {
        expect(getTotal(cogsLineItems).toLocaleString()).toBe('6,000');
    })
    it('returns the net profit if netProfit set to true', () => {
        expect((getTotal(salesLineItems) - grandTotal())/getTotal(salesLineItems)).toBe(0.75);
    })
})
