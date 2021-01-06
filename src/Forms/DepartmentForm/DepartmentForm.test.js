import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import * as MOCK from "../../Utilities/HTTPmethods";

import DepartmentForm from "./DepartmentForm";

//To review with Brad: 
//Am I testing the right thing by trying to simulate the API_GET call? 
//How to mock fetch calls
//How to use debugger in VS code when running tests (breakpoints, stepping through, etc.)


describe("DepartmentForm", () => {
  it("Renders Loading... when isLoading is true", async () => {
    MOCK.API_GET = jest.fn(() => {
      return [
        {
          data: null,
          isLoading: true,
          isError: false,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentForm />
      </MemoryRouter>
    );
    expect(wrapper.find(".loading-indicator")).toHaveLength(1);
  });
  it("Does not render Loading... when isLoading is false", async () => {
    MOCK.API_GET = jest.fn(() => {
      return [
        {
          data: {},
          isLoading: false,
          isError: false,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentForm />
      </MemoryRouter>
    );
    expect(wrapper.find(".loading-indicator")).toHaveLength(0);
  });

  it("Data correctly", async () => {
    MOCK.API_GET = jest.fn(() => {
      return [
        {
          data: { department_name: "test name", department_id: 1 },
          isLoading: false,
          isError: false,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentForm />
      </MemoryRouter>
    );
    expect(wrapper.find("#department").props().value).toBe("test name");
  });

  //Test fails because MOCK does not recreate the reducer, so state updates are not registered
//   it("Records user input", () => {
//     MOCK.API_GET = jest.fn(() => {
//       return [
//         {
//           data: { department_name: "test name", department_id: 1 },
//           isLoading: false,
//           isError: false,
//         },
//         () => {},
//       ];
//     });
//     let wrapper = mount(
//       <MemoryRouter>
//         <DepartmentForm />
//       </MemoryRouter>
//     );
//     const event = { target: { name: "department_name", value: "testing" } };
//     wrapper.find("#department").simulate("change", event);
//     expect(wrapper.find("#department").props().value).toBe("testing");
//   });
// });

//RUN test that validates text in form field the name of the fetched department
////     expect(wrapper.find(".department").props().text).toEqual("test")

///BREAK BREAK BREAK
// describe("DepartmentForm", () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(
//       <BrowserRouter>
//         <DepartmentForm />
//       </BrowserRouter>
//     );
//   });

//   it("renders", () => {
//     expect(wrapper.find(".form_department")).toHaveLength(1);
//   });
//   it("renders form error on blur if the field is blank", () => {
//     console.log(wrapper.debug());
//     wrapper.find("#department").simulate("blur");
//     expect(wrapper.find(".form-error")).toHaveLength(1);
//   });
//   it("renders form error if field is empty after user manipulates field", () => {
//     const event = { target: { name: "department", value: "" } };
//     wrapper.find("#department").simulate("change", event);
//     expect(wrapper.find(".form-error")).toHaveLength(1);
//   });
//   it("does NOT render form error if field has a value of at least one character", () => {
//     const event = { target: { name: "department", value: "a" } };
//     wrapper.find("#department").simulate("change", event);
//     expect(wrapper.find(".form-error")).toHaveLength(0);
//   });
// });

// import React from "react";
// import { MemoryRouter } from "react-router-dom";
// import { render, unmountComponentAtNode } from "react-dom";
// import { mount } from "enzyme";
// import * as API from "../../Utilities/HTTPmethods";

// import DepartmentForm from "./DepartmentForm";

// let container = null;
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("Renders Loading... when isLoading is true", async () => {
//   API.API_GET = jest.fn(() => {
//     return [
//       {
//         data: null,
//         isLoading: true,
//         isError: false,
//       },
//       () => {},
//     ];
//   });
//   let wrapper = mount(
//     <MemoryRouter>
//       <DepartmentForm />
//     </MemoryRouter>
//   );
//   expect(wrapper.find(".loading-indicator")).toHaveLength(1);
// });

// it("Does not render Loading... when isLoading is false", async () => {
//   API.API_GET = jest.fn(() => {
//     return [
//       {
//         data: {},
//         isLoading: false,
//         isError: false,
//       },
//       () => {},
//     ];
//   });
//   let wrapper = mount(
//     <MemoryRouter>
//       <DepartmentForm />
//     </MemoryRouter>
//   );
//   expect(wrapper.find(".loading-indicator")).toHaveLength(0);
// });

// it("Data correctly", async () => {
//   API.API_GET = jest.fn(() => {
//     return [
//       {
//         data: { department_name: "test name", department_id: 1 },
//         isLoading: false,
//         isError: false,
//       },
//       () => {},
//     ];
//   });
//   let wrapper = mount(
//     <MemoryRouter>
//       <DepartmentForm />
//     </MemoryRouter>
//   );
//   expect(wrapper.find("#department").props().value).toBe("test name");
// });
