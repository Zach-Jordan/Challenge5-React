import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

/*********
    
    Name: Zachery Jordan
    Date: 2023-10-30
    Description: Description is on the the the App.js and Character.js files

*********/

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
