import React from 'react'
import Category from '../Category/Category'; 
import CategoryTotal from '../CategoryTotal/CategoryTotal';
import Header from '../../Header/Header'

function ProfitLossPage(){
  //currently calculating sales total multiple times
  //instead, calculate sales total after values have been retrieved from server, 
  //then pass that derived total value to all relevant components

  const salesLineItems = [
    { category: "sales", name: "food", amount: 20000, id: 1 },
    { category: "sales", name: "beverage", amount: 2000, id: 2 },
    { category: "sales", name: "other", amount: 1000, id: 3 },
  ];

  const cogsLineItems = [
    { category: "cogs", name: "food", amount: 6000, id: 4},
    { category: "cogs", name: "beverage", amount: 500, id: 5},
    { category: "cogs", name: "other", amount: 300, id: 6},
  ]

  const directLaborLineItems = [
    { category: "direct labor", name: "salaried", amount: 1000, id: 7},
    { category: "direct labor", name: "hourly", amount: 6000, id: 8},
    { category: "direct labor", name: "payroll tax", amount: 700, id: 9},
  ]

  const overheadLineItems = [
    { category: "overhead", name: "supplies", amount: 1000, id: 10},
    { category: "overhead", name: "repairs", amount: 900, id: 11},
    { category: "overhead", name: "advertising", amount: 100, id: 12},
    { category: "overhead", name: "manager's salary", amount: 2000, id: 13},
    { category: "overhead", name: "payroll tax, salary", amount: 1000, id: 14},
    { category: "overhead", name: "utilities", amount: 700, id: 15},
    { category: "overhead", name: "rent", amount: 1900, id: 16},
  ]
  
  const getTotal = (lineItems) => {
    const totalObj = lineItems.reduce((a, b) => ({amount: a.amount + b.amount }));
    return totalObj.amount; 
  };

  const getGrossProfit = () => {
    const totalSales = getTotal(salesLineItems); 
    const totalCogs = getTotal(cogsLineItems); 
    return totalSales - totalCogs; 
  }

  const getPrimeCost = () => {
    return getTotal(cogsLineItems) + getTotal(directLaborLineItems); 
  }

  const getTotalExpenses = () => {
    return getTotal(cogsLineItems) + getTotal(directLaborLineItems) + getTotal(overheadLineItems)
  }

    return (
      <>
      <main className="main">
        <Category
          name="sales"
          lineItems={salesLineItems}
          categoryTotal={getTotal(salesLineItems)}
        />
        <Category
          name="cogs"
          lineItems={cogsLineItems}
          categoryTotal={getTotal(cogsLineItems)}
          salesTotal={getTotal(salesLineItems)}
          kpiName="Gross Profit"
          kpiNum={getGrossProfit(cogsLineItems)}
        />
        <Category
          name="direct labor"
          lineItems={directLaborLineItems}
          categoryTotal={getTotal(directLaborLineItems)}
          salesTotal={getTotal(salesLineItems)}
          kpiName="Prime Cost"
          kpiNum={getPrimeCost()}
        />
        <Category
          name="overhead"
          lineItems={overheadLineItems}
          categoryTotal={getTotal(overheadLineItems)}
          salesTotal={getTotal(salesLineItems)}
        />
        <CategoryTotal
          name="Net Profit"
          categoryTotal={getTotalExpenses()}
          salesTotal={getTotal(salesLineItems)}
          netProfit = {true}
        />
      </main>
      </>
    );
}

export default ProfitLossPage; 