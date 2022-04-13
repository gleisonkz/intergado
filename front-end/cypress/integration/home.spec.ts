import { NO_ANIMALS_MESSAGE } from '@gd/models';

describe('[Page] - Home Page', () => {
  it('should have the text "Intergados" on header', () => {
    cy.visit('/');
    cy.get('[data-testid="header-title"]').should('contain', 'Intergados');
  });

  it('should have a default no-data message when no data is loaded', () => {
    cy.visit('/');
    cy.get('[data-testid="generic-table-no-data"]').should('contain', NO_ANIMALS_MESSAGE);
  });

  it('should be able to add an animal', () => {
    cy.visit('/');
    cy.get('[data-testid="add-button"]').click();

    const EXPECTED_MANEJO = 'Manejo';
    const EXPECTED_TAG = 'Tag';

    cy.get('[data-testid="manejo-input"]').type(EXPECTED_MANEJO);
    cy.get('[data-testid="tag-input"]').type(EXPECTED_TAG);

    cy.get('[data-testid="save-button"]').click();

    cy.get('[data-testid="generic-table-no-data"]').should('not.exist');
    cy.get('[data-testid="table-row"]').should('have.length', 1);

    cy.get('[data-testid="table-row"]').should('contain', EXPECTED_MANEJO).should('contain', EXPECTED_TAG);
  });
});
