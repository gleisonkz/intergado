import { NO_ANIMALS_MESSAGE } from '@gd/models';

describe('[Page] - Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the text "Intergados" on header', () => {
    cy.get('[data-testid="header-title"]').should('contain', 'Intergados');
  });

  it('should have logo image rendered', () => {
    cy.get('[data-testid="logo"]')
      .should('be.visible')
      .and(($img) => {
        expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
      });
  });

  describe('[Navigation]', () => {
    it('should navigate to home page', () => {
      cy.url().should('include', '/home');
    });

    it('should navigate to about page and go back to home page', () => {
      cy.get('[data-testid="about-link"]').click();
      cy.get('[data-testid="home-link"]').click();

      cy.url().should('include', '/home');
    });

    it('should navigate to about page and go back to home page by clicking on the logo', () => {
      cy.get('[data-testid="about-link"]').click();
      cy.get('[data-testid="logo-link"]').click();

      cy.url().should('include', '/home');
    });
  });

  describe('[CRUD]', () => {
    it('should be able to add an animal', () => {
      const EXPECTED_MANEJO = 'Manejo';
      const EXPECTED_TAG = 'Tag';

      cy.addAnimal(EXPECTED_MANEJO, EXPECTED_TAG);

      cy.get('[data-testid="generic-table-no-data"]').should('not.exist');
      cy.get('[data-testid="table-row"]').should('have.length', 1);

      cy.get('[data-testid="table-row"]').should('contain', EXPECTED_MANEJO).should('contain', EXPECTED_TAG);
    });

    it('should have a default no-data message when no data is loaded', () => {
      cy.get('[data-testid="generic-table-no-data"]').should('contain', NO_ANIMALS_MESSAGE);
    });

    it('should be able to delete an animal', () => {
      const EXPECTED_MANEJO = 'Manejo';
      const EXPECTED_TAG = 'Tag';

      cy.addAnimal(EXPECTED_MANEJO, EXPECTED_TAG);

      cy.get('[data-testid="more-options"]').click();
      cy.get('[data-testid="delete"]').click();

      cy.get('[data-testid="generic-table-no-data"]').should('contain', NO_ANIMALS_MESSAGE);
    });

    it('should not be able to add an animal if fields are empty', () => {
      cy.get('[data-testid="add-button"]').click();
      cy.get('[data-testid="save-button"]').should('be.disabled');
    });
  });
});
