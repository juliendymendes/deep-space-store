describe("Thank you page", () => {
	it("access the thank you page without placing an order first", () => {
		cy.visit("http://localhost:3000/thankyou")
		cy.contains("Você ainda não fez um pedido :(")
	})
})