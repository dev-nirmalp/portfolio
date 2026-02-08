"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

const PRESET_COLORS = ["#c70039", "#481380", "#00909e", "#04A777", "#035aa6", "#dd7631"] as const;
const DEFAULT_COLOR = "#00909e";

interface ColorContextValue {
  color: string;
  setColor: (color: string) => void;
  presetColors: readonly string[];
}

const ColorContext = createContext<ColorContextValue | null>(null);

export function ColorProvider({ children }: { children: ReactNode }) {
  const [color, setColorState] = useState(DEFAULT_COLOR);

  const setColor = useCallback((newColor: string) => {
    setColorState(newColor);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--color", color);
  }, [color]);

  return (
    <ColorContext.Provider value={{ color, setColor, presetColors: PRESET_COLORS }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const ctx = useContext(ColorContext);
  if (!ctx) throw new Error("useColor must be used within ColorProvider");
  return ctx;
}
