import React from "react";
import RoleForm from "./RoleForm";
import { shallow, mount } from "enzyme";
import { useAuth0 } from "@auth0/auth0-react";

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|2147627834623744883746",
};

jest.mock("@auth0/auth0-react");

const dummyData = [
  [
    { department_name: "kitchen", department_id: 1 },
    { department_name: "service", department_id: 2 },
  ],
  {
    role_name: "chef",
    role_id: 1,
    department_id: 2,
    department_name: "kitchen",
  },
];

describe("RoleForm", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenSilently: jest.fn(),
    });
  });
  it("renders", () => {
    const wrapper = shallow(<RoleForm data={dummyData} rowId="1" />);
    expect(wrapper.find(".form_role")).toHaveLength(1);
  });
  it("renders save button", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="1" />);
    expect(wrapper.find("#button-save")).toHaveLength(1);
  });
  it("Renders delete button if rowId is a number", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="1" />);
    expect(wrapper.find("#button-delete")).toHaveLength(1);
  });
  it("Does NOT render delete button if rowId is 'new' ", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="new" />);
    expect(wrapper.find("#button-delete")).toHaveLength(0);
  });
});
describe("RoleForm: RoleFormDepartment", () => {
  it("If rowId is 'new', department field value is an empty string", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="new" />);
    expect(wrapper.find("#department").props().value).toBe("");
  });
  it("If rowId is a number, department field value is the department_id for the given role", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="1" />);
    expect(wrapper.find("#department").props().value).toBe("2");
  });
  it("Department field value is updated based on user input", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="new" />);
    const userEvent = {
      target: { name: "department_id", value: "2" },
    };
    wrapper.find("#department").simulate("change", userEvent);
    expect(wrapper.find("#department").props().value).toBe("2");
  });
  it("If user clicks save and department field value is an empty string, renders error", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="new" />);
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".form-error").at(0)).toHaveLength(1);
  });
});

describe("RoleForm: RoleFormName", () => {
  it("If rowId is 'new', role field value is an empty string", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="new" />);
    expect(wrapper.find("#role").props().value).toBe("");
  });
  it("If rowId is a number, role field value is the role_name for the given role", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="1" />);
    expect(wrapper.find("#role").props().value).toBe("chef");
  });
  it("Role field value is updated based on user input", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="new" />);
    const userEvent = {
      target: { name: "role_name", value: "new role" },
    };
    wrapper.find("#role").simulate("change", userEvent);
    expect(wrapper.find("#role").props().value).toBe("new role");
  });
  it("If user clicks save and role field value is an empty string, renders error", () => {
    const wrapper = mount(<RoleForm data={dummyData} rowId="new" />);
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".form-error").at(1)).toHaveLength(1);
  });
});
