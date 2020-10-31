import React from "react";
import { shallow, mount } from "enzyme";
import Category from "./Category";
import {BrowserRouter} from 'react-router-dom'

const cogsLineItems = [
  { category: "cogs", name: "food", amount: 6000, id: 4},
  { category: "cogs", name: "beverage", amount: 500, id: 5},
  { category: "cogs", name: "other", amount: 300, id: 6},
]

  const kpiPercentage = ()=> {
    return getGrossProfit()/getTotal(); 
  }

describe("Category", () => {
  it("renders", () => {
    shallow(<Category name='category name' lineItems={cogsLineItems}/>);
  });

  it('capitalizes category name', () => {
    const wrapper = mount(<BrowserRouter><Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50}/></BrowserRouter>)
    expect(wrapper.find('.pl-fieldset__header').text()).toEqual('Category Name')
  })
  it('renders the correct number of line items', () => {
    const wrapper = mount(<BrowserRouter><Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50}/></BrowserRouter>)
    expect(wrapper.find('a')).toHaveLength(3)
  })
  it('renders kpi name', () => {
    const wrapper = mount(<BrowserRouter><Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50} kpiNum={50} kpiName='Gross Profit'/></BrowserRouter>)
    expect(wrapper.find('.pl-fieldset__item-container_total').at(1).children().at(0).text()).toEqual('Gross Profit')
  })
  it('renders kpi number', () => {
    const wrapper = mount(<BrowserRouter><Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50} kpiNum={50} kpiName='Gross Profit'/></BrowserRouter>)
    expect(wrapper.find('.pl-fieldset__item-container_total').children().at(1).text()).toEqual('50')
  })
  it('renders kpi %', () => {
    const wrapper = mount(<BrowserRouter><Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50} kpiNum={50} kpiName='Gross Profit'/></BrowserRouter>)
    expect(wrapper.find('.pl-fieldset__item-container_total').children().at(2).text()).toEqual('50.00%')
  })
});
