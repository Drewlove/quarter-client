import React from "react";
import FetchFormData from "./FetchFormData";
import { mount } from "enzyme";
import * as MOCK_GET from "../../Utilities/API_Methods/API_GET";
import PropsChildrenStub from "./PropsChildrenStub";

describe("FetchFormData", () => {
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
    const wrapper = mount(<FetchFormData />);
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
    const wrapper = mount(<FetchFormData />);
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
      <FetchFormData>
        <PropsChildrenStub />
      </FetchFormData>
    );
    expect(wrapper.find(FetchFormData)).toHaveLength(1);
  });
});
