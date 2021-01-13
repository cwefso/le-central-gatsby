describe('My First Test', () => {
  beforeEach(() => {
    cy.visit("/about")
  }),
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})