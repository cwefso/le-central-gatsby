describe('My First Test', () => {
  beforeEach(() => {
    cy.visit("/")
  }),
  it('Contains greeting', () => {
    cy.contains("Bienvenue")
  })
  it('Contains hours', () => {
    cy.contains("Hours")
  })
  it('Fetches specials', () => {
    cy.intercept(
      {
        method: 'GET',      // Route all GET requests
        url: "https://le-central-backend.herokuapp.com/specials",    // that have a URL that matches '/specials/*'
      },
      {
        created_at: "2021-01-14T18:12:49.038Z",
        description: "white bean stew with duck confit, sausage, lamb, pork",
        id: 1,
        name: "Le Central Cassoulet",
        price: 31,
        published_at: "2021-01-14T18:12:50.523Z",
        updated_at: "2021-01-14T18:12:50.571Z"
      }
    )
  })

})
