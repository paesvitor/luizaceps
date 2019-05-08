import { ThemeConsumer } from "styled-components";
import { shallow, mount } from "enzyme";
import defaultTheme from "styles/Theme";
import React from "react";

export const setHookState = (newState = {}) =>
  jest
    .fn()
    .mockImplementation((state = {}) => [newState, (newState = {}) => {}]);

export const mountWithTheme = (children, theme = defaultTheme) => {
  ThemeConsumer._currentValue = theme;
  return mount(children);
};
