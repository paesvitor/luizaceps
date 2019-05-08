import React, { useState } from "react";
import Search from "./Search";
import { mountWithTheme } from "utils/test";

describe("Search component", () => {
  let fnMock;
  beforeEach(() => {
    fnMock = jest.fn();
  });
  it("Should call changeCep prop on input value change", () => {
    const wrapper = mountWithTheme(<Search error={{}} changeCep={fnMock} />);
    wrapper.find("input").simulate("change");
    expect(fnMock.mock.calls.length).toBe(1);
  });

  it("Should call submitSearch prop function on form submit", () => {
    const wrapper = mountWithTheme(<Search error={{}} submitSearch={fnMock} />);
    wrapper.find("form").simulate("submit");
    expect(fnMock.mock.calls.length).toBe(1);
  });

  it("Should have the submit button disabled if cep is not valid", () => {
    const wrapper = mountWithTheme(<Search error={{}} cepIsValid={false} />);
    expect(wrapper.find("button").props().disabled).toBe(true);
  });
});
