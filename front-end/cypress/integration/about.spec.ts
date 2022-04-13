describe('[Page] - About Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to about page', () => {
    cy.get('[data-testid="about-link"]').click();
    cy.url().should('include', '/about');
  });
});
