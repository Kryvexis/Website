"use client";

import { useEffect, useState } from "react";

export default function TypingHeadline() {
  const fullText = "One intelligent operating system for sales, stock, procurement, finance, and reporting.";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplay(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="typing-headline">
      {display}
      <span className="typing-cursor" aria-hidden="true" />
    </h1>
  );
}
