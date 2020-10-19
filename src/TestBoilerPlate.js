import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test/utils";

//import Component from './file-path

let container = null;

describe("Component Name", () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders with or without a name", () => {
    act(() => {
      render(<Hello />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");

    act(() => {
      render(<Hello name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");

    act(() => {
      render(<Hello name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");
  });
});