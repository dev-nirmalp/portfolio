"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={active ? "active" : ""}>
      Nirmal<span className="color"> Premil</span>
    </div>
  );
}
