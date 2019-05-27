import { BASE_URL, state, mutations, actions } from "@/store";
import axios from "axios";

jest.mock("axios");

const { setLoadingState, setMovies, setMovie, setError } = mutations;
const { search, getMovie } = actions;

describe("Store", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      movies: [],
      movie: null,
      error: "",
      loadingState: "hidden"
    };
  });

  test("Initial state", () => {
    expect(state).toEqual(initialState);
  });

  test("It sets loading state", () => {
    setLoadingState(initialState, "pending");
    expect(initialState.loadingState).toEqual("pending");
  });

  test("It sets loading state", () => {
    setLoadingState(initialState, "pending");
    expect(initialState.loadingState).toBe("pending");
  });

  test("It sets movies", () => {
    setMovies(initialState, ["My movie"]);
    expect(initialState.movies).toEqual(["My movie"]);
  });

  test("It sets movie", () => {
    setMovie(initialState, "A movie");
    expect(initialState.movie).toBe("A movie");
  });

  test("It sets error", () => {
    setError(initialState, "Oops!");
    expect(initialState.error).toEqual("Oops!");
  });

  test("Searches for movies", async () => {
    const commit = jest.fn();
    const movies = [
      "Kingsman: The Secret Service",
      "Kingsman: The Golden Circle"
    ];

    const response = {
      status: 200,
      data: { Response: "True", Search: movies }
    };

    axios.get.mockResolvedValueOnce(response);

    const searchInput = "kingsman";
    await search({ commit }, searchInput);

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}&s=${searchInput}`);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls).toEqual([
      ["setLoadingState", "pending"],
      ["setLoadingState", "done"],
      [
        "setMovies",
        ["Kingsman: The Secret Service", "Kingsman: The Golden Circle"]
      ]
    ]);
  });

  test("Searches for movie with error", async () => {
    axios.get.mockRestore();
    const commit = jest.fn();
    const error = "Movie not found!";
    const response = {
      status: 200,
      data: { Response: "False", Error: error }
    };

    axios.get.mockResolvedValueOnce(response);

    const searchInput = "kingsman";
    await search({ commit }, searchInput);

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}&s=${searchInput}`);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls).toEqual([
      ["setLoadingState", "pending"],
      ["setLoadingState", "done"],
      ["setError", error]
    ]);
  });

  test("Get movie", async () => {
    axios.get.mockRestore();

    const commit = jest.fn();

    const response = {
      status: 200,
      data: {
        Title: "Avengers: Age of Ultron",
        Response: "True"
      }
    };

    axios.get.mockResolvedValueOnce(response);

    const imdbId = "tt0848228";
    await getMovie({ commit }, imdbId);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}&i=${imdbId}`);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls).toEqual([
      ["setLoadingState", "pending"],
      ["setLoadingState", "done"],
      [
        "setMovie",
        {
          Title: "Avengers: Age of Ultron",
          Response: "True"
        }
      ]
    ]);
  });
});
