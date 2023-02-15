import { globalCss, styled } from "@nextui-org/react";

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    border: "none",
    listStyle: "none",
    textDecoration: "none",
    outline: "none",
    fontSize: "1.6rem",
    fontWeight: "$rg",
    fontFamily: "DM Sans, sans-serif",
  },

  "html, body": {
    fontSize: "62.5%",
    background: "$gray100",
    height: "100vh",
    textRendering: "optimizeLegibility",
  },

  "a, button": {
    background: "transparent",
    cursor: "pointer",
  },

  img: {
    display: "block",
    width: "100%",
  },
});

export const Container = styled("div", {
  width: "100%",
  margin: "0 auto",
  "@xsMax": {
    maxWidth: "33.2rem",
  },
  "@xs": {
    maxWidth: "63rem",
  },
  "@sm": {
    maxWidth: "76.8rem",
  },
  "@md": {
    maxWidth: "121.6rem",
  },
});
