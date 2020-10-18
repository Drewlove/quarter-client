import React from 'react'
import Category from './Category'; 

function ProfitLossPage(){
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

    return (
      <main className="main">
        <Category categoryName="sales" lineItems={salesLineItems} />
        <Category categoryName="cogs" lineItems={cogsLineItems} />

        <fieldset className="pl-fieldset">
          <legend className="pl-legend">
            <h2>COGS</h2>
          </legend>
          <a className="pl-fieldset__item-container" href="/cogs/food">
            <p className="pl-fieldset__item-text">Food</p>
            <p className="pl-fieldset__item-text">$6,000</p>
          </a>
          <a className="pl-fieldset__item-container" href="/cogs/beverage">
            <p className="pl-fieldset__item-text">Beverage</p>
            <p className="pl-fieldset__item-text">$750</p>
          </a>
          <a className="pl-fieldset__item-container" href="/cogs/other">
            <p className="pl-fieldset__item-text">Other</p>
            <p className="pl-fieldset__item-text">$250</p>
          </a>
          <div className="pl-fieldset__item-container pl-fieldset__item-container_black">
            <p className="pl-fieldset__item-text">Total COGS:</p>
            <p className="pl-fieldset__item-text">$6,750</p>
            <p className="pl-fieldset__item-text">29.35%</p>
          </div>
          <div className="pl-fieldset__item-container pl-fieldset__item-container_black">
            <p className="pl-fieldset__item-text">Gross Profit:</p>
            <p className="pl-fieldset__item-text">$16,250</p>
            <p className="pl-fieldset__item-text">70.65%</p>
          </div>
        </fieldset>

        <fieldset className="pl-fieldset">
          <legend className="pl-legend">
            <h2>Direct Labor</h2>
          </legend>
          <a className="pl-fieldset__item-container" href="/direct-labor/other">
            <p className="pl-fieldset__item-text">Salaried</p>
            <p className="pl-fieldset__item-text">$0</p>
          </a>
          <a className="pl-fieldset__item-container" href="/direct-labor/other">
            <p className="pl-fieldset__item-text">Hourly</p>
            <p className="pl-fieldset__item-text">$7,000</p>
          </a>
          <a className="pl-fieldset__item-container" href="/direct-labor/other">
            <p className="pl-fieldset__item-text">Payroll Tax</p>
            <p className="pl-fieldset__item-text">$700</p>
          </a>
          <a className="pl-fieldset__item-container" href="/direct-labor/other">
            <p className="pl-fieldset__item-text">Benefits</p>
            <p className="pl-fieldset__item-text">$0</p>
          </a>
          <div className="pl-fieldset__item-container pl-fieldset__item-container_black">
            <p className="pl-fieldset__item-text">Total Labor:</p>
            <p className="pl-fieldset__item-text">$7,700</p>
            <p className="pl-fieldset__item-text">33.48%</p>
          </div>
          <div className="pl-fieldset__item-container pl-fieldset__item-container_black">
            <p className="pl-fieldset__item-text">Prime Cost:</p>
            <p className="pl-fieldset__item-text">$14,450</p>
            <p className="pl-fieldset__item-text">62.83%</p>
          </div>
        </fieldset>

        <fieldset className="pl-fieldset">
          <legend className="pl-legend">
            <h2>Overhead Expenses</h2>
          </legend>
          <a className="pl-fieldset__item-container" href="/overhead/supplies">
            <p className="pl-fieldset__item-text">Supplies</p>
            <p className="pl-fieldset__item-text">$350</p>
          </a>
          <a className="pl-fieldset__item-container" href="/overhead/repairs">
            <p className="pl-fieldset__item-text">Repairs</p>
            <p className="pl-fieldset__item-text">$250</p>
          </a>
          <a
            className="pl-fieldset__item-container"
            href="/overhead/advertising"
          >
            <p className="pl-fieldset__item-text">Advertising</p>
            <p className="pl-fieldset__item-text">$0</p>
          </a>
          <a
            className="pl-fieldset__item-container"
            href="/overhead/manager-salary"
          >
            <p className="pl-fieldset__item-text">Manager's Salary</p>
            <p className="pl-fieldset__item-text">$0</p>
          </a>
          <a
            className="pl-fieldset__item-container"
            href="/overhead/accountant-salary"
          >
            <p className="pl-fieldset__item-text">Accountant's Salary</p>
            <p className="pl-fieldset__item-text">$0</p>
          </a>
          <a
            className="pl-fieldset__item-container"
            href="/overhead/income-tax"
          >
            <p className="pl-fieldset__item-text">Income Taxes</p>
            <p className="pl-fieldset__item-text">$0</p>
          </a>
          <a className="pl-fieldset__item-container" href="/overhead/rent">
            <p className="pl-fieldset__item-text">Rent</p>
            <p className="pl-fieldset__item-text">$5,000</p>
          </a>
          <a className="pl-fieldset__item-container" href="/overhead/utilities">
            <p className="pl-fieldset__item-text">Utilities</p>
            <p className="pl-fieldset__item-text">$500</p>
          </a>
          <a
            className="pl-fieldset__item-container"
            href="/overhead/real-estate-tax"
          >
            <p className="pl-fieldset__item-text">Real Estate Tax</p>
            <p className="pl-fieldset__item-text">$0</p>
          </a>
          <a
            className="pl-fieldset__item-container"
            href="/overhead/property-insurance"
          >
            <p className="pl-fieldset__item-text">Property Insurance</p>
            <p className="pl-fieldset__item-text">$0</p>
          </a>
          <div className="pl-fieldset__item-container pl-fieldset__item-container_black">
            <p className="pl-fieldset__item-text">Total Overhead:</p>
            <p className="pl-fieldset__item-text">$6,100</p>
            <p className="pl-fieldset__item-text">26.5%</p>
          </div>
        </fieldset>

        <fieldset className="pl-fieldset">
          <legend className="pl-legend">
            <h2>Net</h2>
          </legend>
          <div className="pl-fieldset__item-container pl-fieldset__item-container_black pl-fieldset__item-container_net">
            <h2 className="pl-fieldset__item-text">Net P&L</h2>
            <h2 className="pl-fieldset__item-text">$2,450</h2>
            <h2 className="pl-fieldset__item-text">10.65%</h2>
          </div>
        </fieldset>
      </main>
    );
}

export default ProfitLossPage; 