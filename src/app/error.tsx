"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <div>
      <h2>Error</h2>
      <button onClick={() => router.push("/")}>Voltar</button>
    </div>
  );
}
