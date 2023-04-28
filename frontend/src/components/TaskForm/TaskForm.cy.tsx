import React from "react";
import TaskForm from "./TaskForm";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("<TaskForm />", () => {
  beforeEach(() => {
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TaskForm />
        </BrowserRouter>
      </QueryClientProvider>
    );
  });

  describe("initial render", () => {
    it("should have title field", () => {
      cy.get("#title").should("be.visible");
    });

    it("should have due date field", () => {
      cy.get("#dueDate").should("be.visible");
    });

    it("should have content field", () => {
      cy.get("#content").should("be.visible");
    });

    it("should have an Add task button", () => {
      cy.get("[type=submit]").should("be.visible");
    });

    it("should have a Cancel button", () => {
      cy.get("[data-cy=cancelButton]").should("be.visible");
    });
  });

  describe("form submission", () => {
    it("shoud submit the form and display a success message", () => {
      const fakeDataResponse = {
        title: "Wash the dishes",
        due_date: "13-05-2023",
        content: "Use soap",
      };

      // mock the response
      cy.intercept(
        {
          method: "POST",
          url: "http://localhost:8081/tasks",
        },
        [fakeDataResponse]
      ).as("submitForm");

      cy.get("#successMessage").should("not.exist");

      // fake the input data
      cy.get("#title").type("Wash the dishes");
      cy.get("#dueDate").type("13-05-2023");
      cy.get("#content").type("Use soap");

      cy.get("[type=submit]").click();

      cy.wait("@submitForm").then(() => {
        cy.get("#title").should("have.value", "");
        cy.get("#dueDate").should("have.value", "");
        cy.get("#content").should("have.value", "");
        cy.get("#successMessage")
          .should("be.visible")
          .and("have.text", "Task created");
      });
    });
  });

  // describe("form validation", () => {
  //   it("should prevent user to submit the form, when fields are empty", () => {});

  //   it("should display error message, when fields are empty, and button clicked", () => {});
  // });
});
