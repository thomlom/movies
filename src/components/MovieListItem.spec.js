import { render } from "@testing-library/vue";
import { routes } from "../router";
import MovieListItem from "./MovieListItem.vue";

test("Redirect to the movie detail page on click", async () => {
  const component = render(MovieListItem, {
    props: {
      movie: {
        Poster: "test.jpg",
        Title: "Avengers",
        Year: 2010
      }
    },
    routes
  });

  expect(component.html()).toMatchSnapshot();
});
