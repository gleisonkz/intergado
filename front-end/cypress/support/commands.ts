declare namespace Cypress {
  interface Chainable<Subject> {
    addAnimal(manejo: string, tag: string): void;
  }
}

Cypress.Commands.add('addAnimal', (manejo: string, tag: string) => {
  console.log(`${manejo} ${tag}`);
  cy.get('[data-testid="add-button"]').click();

  cy.get('[data-testid="manejo-input"]').type(manejo);
  cy.get('[data-testid="tag-input"]').type(tag);

  cy.get('[data-testid="save-button"]').click();
});
