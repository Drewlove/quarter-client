import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import * as MOCK_GET from "../../../Utilities/API_Methods/API_GET";
import DepartmentFormContainer from "./DepartmentFormContainer";
import { useAuth0 } from "@auth0/auth0-react";

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|2147627834623744883746",
};

jest.mock("@auth0/auth0-react");

describe("DepartmentFormContainer", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenSilently: jest.fn(),
    });
  });
  it("Renders skeleton loading indicator when isLoading is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: true,
          isLoaded: false,
          isError: false,
          data: [],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".main_skeleton")).toHaveLength(1);
  });
  it("Renders error when isError is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: false,
          isError: true,
          error: {
            status: 401,
            statusText: "Not found.",
          },
          data: [],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".error")).toHaveLength(1);
  });
  it("Renders form and displays data when isLoaded is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: true,
          isError: false,
          data: [{ department_name: "kitchen", department_id: 1 }],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter initialEntries={["/form/department/1"]}>
        <DepartmentFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".form_department")).toHaveLength(1);
    expect(wrapper.find("#department").props().value).toBe("kitchen");
  });
});
