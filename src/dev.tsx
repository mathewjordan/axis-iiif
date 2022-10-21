import React, { StrictMode } from "react";
import App from "@/index";
import { createRoot } from "react-dom/client";

const Wrapper = () => {
  const endpoint =
    "https://iiif.bodleian.ox.ac.uk/iiif/activity/all-changes";

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
