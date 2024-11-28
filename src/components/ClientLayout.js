// File: src/components/ClientLayout.js
"use client";

import { useEffect } from "react";

export default function ClientLayout({ children }) {
  useEffect(() => {
    // Any client-side-only code can go here
  }, []);

  return <>{children}</>;
}
