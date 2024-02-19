describe('Checkout form', () => {
  it('fill in the personal data, address and payment forms and place an order', () => {
    cy.visit('http://localhost:3000/1')
		cy.get("#name").type("João da Silva")
		cy.get("#email").type("joao@mail.com")
		cy.get("#phone").type("(67)992358965")


		cy.get("#zip_code").type("79115750")
		cy.get("#zip_code").blur()
		cy.get("#number").type("33")
		cy.get("#complement").type("casa")

		cy.get("#credito").check("credito")
		cy.get("#cpf").type("67887654312")

		cy.get("#cardNumber").type("1234 1234 1234 1234")
		cy.get("#cardOwnerName").type("João da Silva")
		cy.get("#cardExpirationDate").type("2024-12")
		cy.get("#cardSecurityCode").type("124")

		cy.get("form").submit()

		cy.url().should('include', '/thankyou')
  })
})