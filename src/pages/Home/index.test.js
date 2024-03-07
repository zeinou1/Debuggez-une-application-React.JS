import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import { getMonth } from "../../helpers/Date";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });
  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});

 // test for me
describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home/>);
    const EventList = screen.getByTestId("Events");
    expect(EventList).toBeInTheDocument();
   

  })
  it("a list a people is displayed", () => {
   render(<Home/>);
   const listPeople = screen.getByTestId("ListPeople");
   expect(listPeople).toBeInTheDocument();
  })
  it("a footer is displayed", () => {
    render(<Home/>);
    const Footer = screen.getByTestId("Footer");
    expect(Footer).toBeInTheDocument();
  })

  it("an event card, with the last event, is displayed", () => {
    render(<Home/>);
    const Footer = screen.getByTestId("Footer");
    expect(Footer).toBeInTheDocument();
   
    const lastEvent = new Date("2022-08-29")
    expect(getMonth(lastEvent)).toEqual("août")
 

  })
});
