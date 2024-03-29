import React from "react";
import SkeletonLoader from "./SkeletonLoader";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";

describe("SkeletonLoader", () => {
  it("renders", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <SkeletonLoader skeletonNumber={1} />
      </MemoryRouter>
    );
    expect(wrapper.find(".main_skeleton")).toHaveLength(1);
  });
  it("Renders multiple skeleton cards if path ends in 'pnl' ", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/app/pnl"]}>
        <SkeletonLoader skeletonNumber={7} />
      </MemoryRouter>
    );
    expect(wrapper.find(".skeleton-card")).toHaveLength(7);
  });
  it("Renders multiple skeleton cards if path ends in 'schedule' ", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/app/schedule"]}>
        <SkeletonLoader skeletonNumber={7} />
      </MemoryRouter>
    );
    expect(wrapper.find(".skeleton-card")).toHaveLength(7);
  });

  it("Renders only one skeleton card for all other paths ", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/app/"]}>
        <SkeletonLoader skeletonNumber={1} />
      </MemoryRouter>
    );
    expect(wrapper.find(".skeleton-card")).toHaveLength(1);
  });
});
