import { render } from "@testing-library/vue";
import store from "./store";

export function renderWithStore(component, customStore = {}) {
  return render(component, { store: { ...store, ...customStore } });
}
