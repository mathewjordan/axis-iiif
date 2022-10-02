import React from "react";

const ArrowForward = () => {
  return (
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="M268 112l144 144-144 144M392 256H100"
    />
  );
};

const Close = () => {
  return (
    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
  );
};

export { ArrowForward, Close };
