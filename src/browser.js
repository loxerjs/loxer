"use strict";
import { generate } from "yourid";

function lox(options) {
  // All the types.
  let types = [
    {
      label: "INFO",
      color: "#60A5FA",
    },

    {
      label: "WARN",
      color: "#F59E0B",
    },

    {
      label: "ERROR",
      color: "#EE1739",
    },

    {
      label: "SUCCESS",
      color: "#3CB35A",
    },

    {
      label: "SMOKE",
      color: "#ABB8C9",
    },
  ];

  // Styles options
  let styles;
  let text;

  if (!options.styles) {
    styles =
      "font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold";
    throw new Error("Styles is empty.");
  } else {
    styles = options.styles;
  }

  // Text Options
  if (!options.text) {
    text = "No text";
    throw new Error("You have not written any text.");
  } else {
    text = options.text;
  }

  // Log the types.
  types.map((type) => {
    console.log(`%c[${type.label}] ${text}`, `color:${type.color};${styles}`);
  });
}

console.log(
  generate({
    length: 10,
  })
);
