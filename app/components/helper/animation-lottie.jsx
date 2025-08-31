"use client";

import dynamic from "next/dynamic";

// Dynamically import Lottie so it only runs on the client
const Lottie = dynamic(() => import("lottie-react"), 
// { ssr: false }
);

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
