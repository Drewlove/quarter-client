import React from "react";
import { shallow, mount } from "enzyme";
import Category from "./Category";

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
    const wrapper = mount(<Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50}/>)
    expect(wrapper.find('.pl-fieldset__header').text()).toEqual('Category Name')
  })
  it('renders the correct number of line items', () => {
    const wrapper = mount(<Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50}/>)
    expect(wrapper.find('.pl-fieldset__item-container')).toHaveLength(4)
    //Why is expected length 4? 
    //3 because there are 3 lineItems
    //+1 because the final category total also has a class of pl-fieldset__item-container
  })
  it('renders kpi name', () => {
    const wrapper = mount(<Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50} kpiNum={50} kpiName='Gross Profit'/>)
    expect(wrapper.find('.pl-fieldset__item-container_total').at(1).children().at(0).text()).toEqual('Gross Profit')
  })
  it('renders kpi number', () => {
    const wrapper = mount(<Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50} kpiNum={50} kpiName='Gross Profit'/>)
    expect(wrapper.find('.pl-fieldset__item-container_total').children().at(1).text()).toEqual('50')
  })
  it('renders kpi %', () => {
    const wrapper = mount(<Category name='category name' lineItems={cogsLineItems} salesTotal={100} categoryTotal={50} kpiNum={50} kpiName='Gross Profit'/>)
    expect(wrapper.find('.pl-fieldset__item-container_total').children().at(2).text()).toEqual('50.00%')
  })
});
