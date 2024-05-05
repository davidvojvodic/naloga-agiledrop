import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieList from "./MovieList";
import { describe, expect, it } from "vitest";

const queryClient = new QueryClient();

describe("MovieList", () => {
  it("prikaže MovieSkeleton komponento med nalaganjem", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MovieList movies={[]} />
      </QueryClientProvider>
    );

    const movieSkeletons = await screen.findAllByTestId("movie-skeleton");
    expect(movieSkeletons).toHaveLength(20);
  });
});
