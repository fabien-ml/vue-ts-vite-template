import { mount } from "@cypress/vue";

import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders a message", () => {
    mount(HelloWorld, {
      propsData: {
        msg: "Hello Cypress!",
      },
    });

    cy.get("[data-testid='title']").contains("Hello Cypress!");
  });
});
