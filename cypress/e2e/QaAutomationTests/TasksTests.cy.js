describe("Tasks tests todomvc", () => {
  it("Should create a task in the list", () => {
    cy.visit("https://todomvc.com/examples/react/#/");
    cy.get(".new-todo").type("Tarea1{enter}");
    cy.get(".todo-list").contains("Tarea1").should("be.visible");
  });

  it("Should mark task as completed", () => {
    cy.visit("https://todomvc.com/examples/react/#/");
    cy.get(".new-todo").type("Tarea2{enter}");
    cy.get(".toggle").click().should("be.checked");
  });

  it("Should ummark task as completed", () => {
    cy.visit("https://todomvc.com/examples/react/#/");
    cy.get(".new-todo").type("Tarea3{enter}");
    cy.get(".toggle").click();
    cy.get(".toggle").click().should("not.be.checked");
  });

  it("Should mark task as completed", () => {
    cy.visit("https://todomvc.com/examples/react/#/");
    cy.get(".new-todo").type("Tarea4{enter}");
    cy.contains("Tarea4").dblclick();
    cy.get(".edit").type("editingtext{enter}");
    cy.get(".todo-list").contains("Tarea4editingtext").should("be.visible");
  });

  it("Should delete a task", () => {
    cy.visit("https://todomvc.com/examples/react/#/");
    cy.get(".new-todo").type("Tarea5{enter}");
    cy.get(".todo-list").contains("Tarea5");
    cy.get(".toggle").click();
    cy.get(".destroy").click({ force: true });
    cy.get(".todoapp").should("not.contain", "Tarea5");
  });

  it("Should filters marked and unmarked tasks", () => {
    cy.visit("https://todomvc.com/examples/react/#/");
    cy.get(".new-todo").type("Tarea1{enter}");
    cy.get(".new-todo").type("Tarea2{enter}");
    cy.get(".new-todo").type("Tarea3{enter}");
    cy.get(".new-todo").type("Tarea4{enter}");
    cy.get(".new-todo").type("Tarea5{enter}");
    cy.get(".toggle").eq(0).click({ force: true });
    cy.get(".toggle").eq(2).click({ force: true });
    cy.get(".filters").contains("Completed").click();
    cy.get(".todo-list").contains("Tarea1").should("be.visible");
    cy.get(".todo-list").contains("Tarea3").should("be.visible");
    cy.get(".filters").contains("Active").click();
    cy.get(".todo-list").contains("Tarea2").should("be.visible");
    cy.get(".todo-list").contains("Tarea4").should("be.visible");
    cy.get(".todo-list").contains("Tarea5").should("be.visible");
    cy.get(".filters").contains("All").click();
  });
});
