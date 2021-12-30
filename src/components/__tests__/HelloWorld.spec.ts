import { mount } from "@cypress/vue";

import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders a message", () => {
    mount(HelloWorld, { props: { msg: "Hello Cypress!" } });
    cy.get("[data-testid='title']").should("contain", "Hello Cypress!");
  });
});
