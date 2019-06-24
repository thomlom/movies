import { renderWithStore } from "@/test-utils";
import MovieList from "./MovieList.vue";

test("Displays an error if there is one in the state", () => {
  const error = "No movies found";
  const { getByText } = renderWithStore(MovieList, {
    state: { error }
  });

  // This will throw an error if nothing is present
  getByText(error);
});
