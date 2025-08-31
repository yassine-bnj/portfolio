"use client";
import { useRef, useCallback } from "react";

const GlowCard = ({ children, identifier }) => {
  const cardRef = useRef(null);

  const handleMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const r = card.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    // proximity in px
    const proximity = 40;

    const within =
      x > r.left - proximity &&
      x < r.right + proximity &&
      y > r.top - proximity &&
      y < r.bottom + proximity;

    card.style.setProperty("--active", within ? 1 : 0);

    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;

    let angle = (Math.atan2(y - cy, x - cx) * 180) / Math.PI;
    if (angle < 0) angle += 360;

    card.style.setProperty("--start", angle + 90);
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.setProperty("--active", 0);
  }, []);

  return (
    <div
      className={`glow-container glow-container-${identifier} relative`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <article
        ref={cardRef}
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
        // Optional: ensure the card actually receives pointer events
        style={{ pointerEvents: "auto" }}
      >
        <div className="glows" />
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
