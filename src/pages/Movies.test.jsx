import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import Movies from "./Movies";
import { describe, expect, it } from "vitest";

const queryClient = new QueryClient();

describe("Movies", () => {
  it("prikaže Popular Movies heading", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Movies />
      </QueryClientProvider>
    );
    const heading = screen.getByText("Popular Movies");
    expect(heading).toBeInTheDocument();
  });

  it("prikaže Sort dropdown", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Movies />
      </QueryClientProvider>
    );
    const sortButton = screen.getByText("Sort");
    expect(sortButton).toBeInTheDocument();
  });
});
