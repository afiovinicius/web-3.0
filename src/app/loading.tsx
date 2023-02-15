"use client";

import { Loading } from "@nextui-org/react";

export default function RootLoading() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loading type="default" color="primary" size="xl">
        Loading...
      </Loading>
    </section>
  );
}
