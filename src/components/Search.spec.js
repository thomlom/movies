import { fireEvent } from "@testing-library/vue";
import { renderWithStore } from "@/test-utils";
import Search from "./Search.vue";

test("Calls the search action when entering the key", async () => {
  const mockSearch = jest.fn();
  const { getByPlaceholderText } = renderWithStore(Search, {
    actions: { search: mockSearch }
  });

  const searchInput = getByPlaceholderText(/Search your movies/i);

  await fireEvent.update(searchInput, "Avengers");
  await fireEvent.keyUp(searchInput, { key: "Enter", code: 13 });
  expect(mockSearch.mock.calls[0][1]).toEqual("Avengers");
});
