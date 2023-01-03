import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Lesson1 from "./lesson1";
import Lesson2 from "./Lesson2";
import MyComponent from "./Lesson2_1";
import Lesson2_2 from "./Lesson2_2";
import Lesson3 from "./Lesson3";
import Lesson3_1 from "./Lesson3_1";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Lesson1 />
    <Lesson2 MyComponent name="John" />
    <MyComponent />
    <Lesson2_2 />
    <Lesson3 />
    <Lesson3_1 />
  </StrictMode>
);
