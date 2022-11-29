import {render} from "@testing-library/react";
import {rest} from "msw";
import {QueryClient, QueryClientProvider} from "react-query";
import Create from "../pages/create";
rest.get("/api/rooms/", null);
const queryClient = new QueryClient();

describe("Create", () => {
  it("renders", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Create />
      </QueryClientProvider>
    );
  });

  it("allows the form to be submitted", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Create />
      </QueryClientProvider>
    );
  });
});
