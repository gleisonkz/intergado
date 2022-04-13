import { NO_ANIMALS_MESSAGE } from '@gd/models';

describe('My First Test', () => {
  it('Should have the text "Intergados" on header', () => {
    cy.clearLocalStorage();
    cy.visit('/');
    cy.get('[data-testid="header-title"]').should('contain', 'Intergados');
  });

  it('Should have a default no-data message when no data is loaded', () => {
    cy.clearLocalStorage();
    cy.visit('/');
    cy.get('[data-testid="generic-table-no-data"]').should('contain', NO_ANIMALS_MESSAGE);
  });
});
