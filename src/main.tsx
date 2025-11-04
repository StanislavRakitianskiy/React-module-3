import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "modern-normalize";
import "./css/global.css";
import "./index.css";
import App from "../src/components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
