export function createStateMock(mock, defaultState) {
  if (process.env.NODE_ENV === "development") {
    return mock;
  } else {
    return defaultState;
  }
}
