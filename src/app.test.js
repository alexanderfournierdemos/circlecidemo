import React from "react";
import { create } from "react-test-renderer";
import DemoBlock from "../DemoBlock";


describe("Feature component", () => {
  test("it matches the snapshot", () => {
    const component = create(<DemoBlock />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
