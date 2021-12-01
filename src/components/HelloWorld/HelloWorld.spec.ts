import { mount } from "@vue/test-utils";

import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders a message", () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: "Hello Cypress!",
      },
    });

    expect(wrapper.text()).toContain("Hello Cypress!");
  });
});
