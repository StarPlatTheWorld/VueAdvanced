import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Global Component
// Global Components are convenient, but have drawbacks such as preventing build systems from removing unused components (tree-shaking), meaning if you globally register an unused component it will still be included within the final bundle.
// It also makes it more difficult to locate a child component's implementation from a parent component using it, similar to the effects that using too many global variables has on long-term maintainability.
// app.component("Contact", Contact);

app.mount("#app");
