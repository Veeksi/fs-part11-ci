describe('Cypress', () => {
  it('front page can be opened and navigated to messages', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Messages').click()
    cy.contains('Send!')
  })
})
