describe('first test', () => {
  it('post a comment', () => {
    cy.visit('/')

    // inputları doldur.
    cy.get('input[type="text"]').type("Berat Bozkurt")
    cy.get("textarea").type("Bu bir deneme yorumdur.")

    // butona tıkla
    cy.get("button").click()

    // yorum gönderildi mi kontrol et.
    cy.get("article p").invoke("text").should("eq", "Bu bir deneme yorumdur.")
  })
})
