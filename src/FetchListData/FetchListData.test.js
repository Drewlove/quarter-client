import React from "react";
import FetchListData from "./FetchListData";
import { mount } from "enzyme";
import * as MOCK_GET from "../Utilities/API_Methods/API_GET";
import PropsChildrenStub from "./PropsChildrenStub";

describe("FetchListData", () => {
  it("Renders LoadingIndicator when isLoading is true", () => {
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
    const wrapper = mount(<FetchListData />);
    expect(wrapper.find(".loading-indicator")).toHaveLength(1);
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
    const wrapper = mount(<FetchListData />);
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
      <FetchListData>
        <PropsChildrenStub />
      </FetchListData>
    );
    expect(wrapper.find(".fetch-list-data")).toHaveLength(1);
  });
});
