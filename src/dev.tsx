import React, { StrictMode } from "react";
import App from "@/index";
import { createRoot } from "react-dom/client";

const Wrapper = () => {
  return (
    <>
      <App />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Wrapper />
  </StrictMode>,
);
