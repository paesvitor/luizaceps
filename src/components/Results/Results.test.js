import React, { useState } from "react";
import Results from "./Results";
import { mountWithTheme } from "utils/test";
import dataMock from "containers/CepFinder/__mocks__/data.json";

describe("Results component", () => {
  let fnMock;
  beforeEach(() => {
    fnMock = jest.fn();
  });
  it("Should call setData function on close button is clicked", () => {
    const wrapper = mountWithTheme(
      <Results data={dataMock} setData={fnMock} />
    );
    wrapper.find("button").simulate("click");
    expect(fnMock.mock.calls.length).toBe(1);
  });
});
