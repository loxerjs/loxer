/* * v1.0.0 * Copyright (c) 2022  * Licensed under the ISC license */
"use strict";
import { generate as s } from "yourid";
function a(e) {
  let r = [
      { label: "INFO", color: "#60A5FA" },
      { label: "WARN", color: "#F59E0B" },
      { label: "ERROR", color: "#EE1739" },
      { label: "SUCCESS", color: "#3CB35A" },
      { label: "SMOKE", color: "#ABB8C9" },
    ],
    l,
    t;
  if (e.styles) l = e.styles;
  else
    throw (
      ((l =
        "font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"),
      new Error("Styles is empty."))
    );
  if (e.text) t = e.text;
  else throw ((t = "No text"), new Error("You have not written any text."));
  r.map((o) => {
    console.log(`%c[${o.label}] ${t}`, `color:${o.color};${l}`);
  });
}
console.log(s({ length: 10 }));
