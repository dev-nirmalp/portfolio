"use client";

import { useState } from "react";
import { useColor } from "@/context/ColorContext";

const COLOR_CLASSES = [
  "color-red",
  "color-purple",
  "color-malt",
  "color-green",
  "color-blue",
  "color-orange",
] as const;

export default function ColorSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { setColor, presetColors } = useColor();

  return (
    <div className={`color-changer${isOpen ? " active" : ""}`}>
      <div className="color-panel" onClick={() => setIsOpen(!isOpen)}>
        <img src="/images/gear.png" alt="settings" />
      </div>
      <div className="color-selector">
        <div className="heading">Custom Colors</div>
        <div className="colors">
          <ul>
            {presetColors.map((hex, i) => (
              <li key={hex}>
                <a
                  href="#"
                  className={`${COLOR_CLASSES[i]} selectColor`}
                  title={hex}
                  onClick={(e) => {
                    e.preventDefault();
                    setColor(hex);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
