import React, { StrictMode } from "react";
import App from "@/index";
import { createRoot } from "react-dom/client";

const Wrapper = () => {
  return (
    <>
      <App id="https://utkdigitalinitiatives.github.io/change_discovery/activity/all-changes.json" />
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
