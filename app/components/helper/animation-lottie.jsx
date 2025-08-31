"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // nothing on server

  return (
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
