import React from "react";
import FetchData from "./FetchData";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import * as MOCK_GET from "../Utilities/API_Methods/API_GET";
import PropsChildrenStub from "./PropsChildrenStub";

describe("FetchData", () => {
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
        <FetchData />
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
          error: {
            status: 401,
            statusText: "Not found",
          },
          data: [],
        },
        () => {},
      ];
    });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <FetchData />
      </MemoryRouter>
    );
    expect(wrapper.find(".error")).toHaveLength(1);
  });

  it("Renders FetchData if isLoaded is true", async () => {
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
        <FetchData>
          <PropsChildrenStub />
        </FetchData>
      </MemoryRouter>
    );
    expect(wrapper.find(FetchData)).toHaveLength(1);
  });
});
