import React from "react";
import FetchListData from "./FetchListData";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import * as MOCK_GET from "../Utilities/API_Methods/API_GET";
import PropsChildrenStub from "./PropsChildrenStub";

describe("FetchListData", () => {
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
      <MemoryRouter initialEntries={["/"]}>
        <FetchListData />
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
      <MemoryRouter initialEntries={["/"]}>
        <FetchListData />
      </MemoryRouter>
    );
    expect(wrapper.find(".error")).toHaveLength(1);
  });

  it("Renders fetchListData if isLoaded is true", async () => {
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
      <MemoryRouter initialEntries={["/"]}>
        <FetchListData>
          <PropsChildrenStub />
        </FetchListData>
      </MemoryRouter>
    );
    expect(wrapper.find(FetchListData)).toHaveLength(1);
  });
});
