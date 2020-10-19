// import React from 'react'; 
// import ReactDOM from 'react-dom';
// import ProfitLossPage from './ProfitLossPage'

// describe('ProfitLossPage', ()=> {
//     it('renders without crashing', () => {
//         const div = document.createElement('div')
//         ReactDOM.render(
//             <ProfitLossPage />, div
//         )
//         ReactDOM.unmountComponentAtNode(div)
//     })
// })

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test/utils";

import ProfitLossPage from './ProfitLossPage'

let container = null;

describe("Profit Loss Page", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders", () => {
      act( () => {
          render(<ProfitLossPage />, container)
      }); 
      expect(container)
    // act(() => {
    //   render(<Hello />, container);
    // });
    // expect(container.textContent).toBe("Hey, stranger");

    // act(() => {
    //   render(<Hello name="Jenny" />, container);
    // });
    // expect(container.textContent).toBe("Hello, Jenny!");

    // act(() => {
    //   render(<Hello name="Margaret" />, container);
    // });
    // expect(container.textContent).toBe("Hello, Margaret!");
  });
});