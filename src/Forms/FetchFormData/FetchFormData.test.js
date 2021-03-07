import React from "react";
import FetchFormData from "./FetchFormData";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import * as MOCK_GET from "../../Utilities/API_Methods/API_GET";

import PropsChildrenStub from "./PropsChildrenStub";

describe("FetchFormData", () => {
  it("Renders skeleton loading indicator when isLoading is true", () => {
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
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/form`]}>
        <FetchFormData />
      </MemoryRouter>
    );
    expect(wrapper.find(".main_skeleton")).toHaveLength(1);
  });

  it("Renders Error when isError is true", () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: false,
          isError: true,
          data: [],
        },
        () => {},
      ];
    });
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/form`]}>
        <FetchFormData />
      </MemoryRouter>
    );
    expect(wrapper.find(".error")).toHaveLength(1);
  });

  it("Renders container if isLoaded is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: true,
          isError: false,
          data: [],
        },
        () => {},
      ];
    });
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/form`]}>
        <FetchFormData>
          <PropsChildrenStub />
        </FetchFormData>
      </MemoryRouter>
    );
    expect(wrapper.find(FetchFormData)).toHaveLength(1);
  });
});
