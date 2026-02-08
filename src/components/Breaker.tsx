"use client";

import { useNavigation } from "@/context/NavigationContext";

export default function Breaker() {
  const { breakerVisible } = useNavigation();

  return (
    <div
      className="colorBg"
      id="breaker"
      style={{ display: breakerVisible ? "block" : "none" }}
    />
  );
}
