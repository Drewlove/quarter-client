import React from "react";
import { mount, shallow } from "enzyme";
import FormDeleteButton from "./FormDeleteButton";
import * as MOCK from "../../../Utilities/API_Methods/API_DELETE";
import { useAuth0 } from "@auth0/auth0-react";

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|2147627834623744883746",
};

jest.mock("@auth0/auth0-react");

describe("Error", () => {
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
    const wrapper = shallow(<FormDeleteButton />);
    expect(wrapper.find(".delete-button-section")).toHaveLength(1);
  });
});
