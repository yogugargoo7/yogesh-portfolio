"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 5 + "px";
        cursorRef.current.style.top = e.clientY - 5 + "px";
      }
      if (followerRef.current) {
        setTimeout(() => {
          if (followerRef.current) {
            followerRef.current.style.left = e.clientX - 16 + "px";
            followerRef.current.style.top = e.clientY - 16 + "px";
          }
        }, 80);
      }
    };

    const onEnter = () => {
      cursorRef.current?.classList.add("cursor-grow");
      followerRef.current?.classList.add("cursor-follower-grow");
    };

    const onLeave = () => {
      cursorRef.current?.classList.remove("cursor-grow");
      followerRef.current?.classList.remove("cursor-follower-grow");
    };

    document.addEventListener("mousemove", move);

    const attachHoverListeners = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attachHoverListeners();

    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
