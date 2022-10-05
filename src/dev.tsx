import React, { StrictMode } from "react";
import App from "@/index";
import { createRoot } from "react-dom/client";

const Wrapper = () => {
  const endpoint =
    "https://utkdigitalinitiatives.github.io/change_discovery/activity/all-changes.json";

  const handleCallback = (cart: string[]) => {
    console.log(cart);
  };

  return <App id={endpoint} cartCallback={handleCallback} />;
};

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Wrapper />
  </StrictMode>,
);
