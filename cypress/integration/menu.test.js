describe('My First Test', () => {
  beforeEach(() => {
    cy.visit("/menu")
  }),
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})