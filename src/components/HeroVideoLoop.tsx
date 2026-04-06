"use client";

import { useEffect, useRef, useState } from "react";

const videos = ["/images/hero-video-1.mp4", "/images/hero-video-2.mp4"];

export function HeroVideoLoop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const activeRef = activeIndex === 0 ? videoARef : videoBRef;
    const video = activeRef.current;
    if (!video) return;

    const handleEnded = () => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [activeIndex]);

  // When activeIndex changes, play the new video
  useEffect(() => {
    const refs = [videoARef, videoBRef];
    refs.forEach((ref, i) => {
      const video = ref.current;
      if (!video) return;
      if (i === activeIndex) {
        video.src = videos[activeIndex];
        video.load();
        video.play().catch(() => {});
      }
    });
  }, [activeIndex]);

  return (
    <>
      {/* Video A */}
      <video
        ref={videoARef}
        autoPlay
        muted
        playsInline
        src={videos[0]}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Video B */}
      <video
        ref={videoBRef}
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          activeIndex === 1 ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
