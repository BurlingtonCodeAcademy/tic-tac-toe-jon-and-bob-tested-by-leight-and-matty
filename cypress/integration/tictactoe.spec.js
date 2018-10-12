describe("Cypress", () => {
  it("successfully visits the homepage", () => {
    cy.visit("/");
  });
});

describe("Render Board", () => {
  it(`renders empty cells`, () => {
    cy.get(".squares").should("be.empty");
  });

  it("prompt for turn", () => {
    cy.contains("h3#turn", "It is player X's turn");
  });

  it("has 0-2 player butons", () => {
    cy.contains("0 PLAYERS");
    cy.contains("1 PLAYER");
    cy.contains("2 PLAYERS");
  });
});

describe("2 Player Game", () => {
  it("place an X in first square", () => {
    cy.get("#twoPlayer").click();
    cy.get("#cell-0").click();
    cy.get("#cell-0 #x");
  });

  it("player O's turn", () => {
    cy.contains("It is player O's turn");
  });
  it("place an O in third square", () => {
    cy.get("#cell-2").click();
    cy.get("#cell-2 #o");
  });
  it("Cannot play on third square", () => {
    cy.get("#cell-2").click();
    cy.get("#cell-2 #o");
  });
  xit("alerts square taken", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);
    cy.get("#cell-2")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          "Impossible! That cell is already full."
        );
      });
  });

  it("change status to 'square full' when third cell is clicked", () => {
    cy.get("#cell-2").click();
    cy.contains("Impossible! That cell is already full.");
  });
  it("Cannot play on first square", () => {
    cy.get("#cell-0").click();
    cy.get("#cell-0 #x");
  });
  it("changes status to 'square full' when first cell is clicked", () => {
    cy.get("#cell-0").click();
    cy.contains("Impossible! That cell is already full.");
  });
  it("X wins when three in a row", () => {
    cy.get("#cell-3").click();
    cy.get("#cell-5").click();
    cy.get("#cell-6").click();
    cy.contains("Congratulations!  Player X Wins!!!");
  });

  it("board clears on '2 Players' button", () => {
    cy.get("#twoPlayer").click();
    cy.get(".squares").should("be.empty");
  });

  it("O wins when three in a row", () => {
    cy.get("#cell-1").click();
    cy.get("#cell-6").click();
    cy.get("#cell-2").click();
    cy.get("#cell-7").click();
    cy.get("#cell-4").click();
    cy.get("#cell-8").click();
    cy.contains("Congratulations!  Player O Wins!!!");
  });

  it("page does nothing when board is clicked", () => {
    let html1, html2;
    cy.get("body").then(e => (html1 = e.html()));
    cy.get(".squares").each(e => e.click({ force: true }));
    cy.get("body").then(e => (html2 = e.html()));
    assert.equal(html1, html2);
  });
});
