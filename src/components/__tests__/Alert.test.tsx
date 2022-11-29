import {render, screen} from "@testing-library/react";
import Alert from "../Alert";

describe("Alert", () => {
  it("displays alert text", () => {
    render(<Alert label="whoops" variant="warning" />);
    expect(screen.getByText("whoops")).toBeTruthy();
  });
});
