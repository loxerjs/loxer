"use strict";

function lox(type, options) {
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

  let styles =
    "font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold";

  if (options.styles) {
    styles += " " + options.styles;
  } else {
    styles = styles;
  }

  types.map((type) => {
    console.log(`%c[${type.label}]`, `color:${type.color};${styles}`);
  });
}
