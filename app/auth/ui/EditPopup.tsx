"use client";

import { useState } from "react";

export function EditPopup({
  openText,
  children,
  className,
}: {
  openText: string;
  children: React.ReactNode;
  className: string;
}) {
  const [isOpen, setOpen] = useState(false);
  function openPopup() {
    setOpen(!isOpen);
  }
  function closePopup() {
    setOpen(false);
  }
  return (
    <>
      <button onClick={openPopup}>{openText}</button>
      {isOpen && (
        <div
          className={`absolute transform top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] surface ${className}`}
        >
          <div className="flex flex-col gap-4 ">
            <button className="text-right" onClick={closePopup}>
              Close
            </button>
            <div className="text-left">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
