"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MinecraftHead() {
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // normalize mouse coordinates to range [-1, 1]
      const normalizedX = (mouseX / innerWidth) * 2 - 1;
      const normalizedY = (mouseY / innerHeight) * 2 - 1;

      // ap to rotation angles
      const rotateY = normalizedX * 45;
      const rotateX = -normalizedY * 45;

      setRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center items-center m-12">
      <div className="relative w-32 h-32" style={{ perspective: "1000px" }}>
        <div
          className="absolute w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* Front */}
          <div className="absolute w-full h-full" style={{ transform: "translateZ(4rem)" }}>
            <Image src="/images/front.png" width={100} height={100} alt="Front" className="w-full h-full object-cover" />
          </div>
          {/* Back */}
          <div className="absolute w-full h-full" style={{ transform: "rotateY(180deg) translateZ(4rem)" }}>
            <Image src="/images/back.png" width={100} height={100} alt="Back" className="w-full h-full object-cover" />
          </div>
          {/* Left */}
          <div className="absolute w-full h-full" style={{ transform: "rotateY(-90deg) translateZ(4rem)" }}>
            <Image src="/images/left.png" width={100} height={100} alt="Left" className="w-full h-full object-cover" />
          </div>
          {/* Right */}
          <div className="absolute w-full h-full" style={{ transform: "rotateY(90deg) translateZ(4rem)" }}>
            <Image src="/images/right.png" width={100} height={100} alt="Right" className="w-full h-full object-cover" />
          </div>
          {/* Top */}
          <div className="absolute w-full h-full" style={{ transform: "rotateX(90deg) translateZ(4rem)" }}>
            <Image src="/images/top.png" width={100} height={100} alt="Top" className="w-full h-full object-cover" />
          </div>
          {/* Bottom */}
          <div className="absolute w-full h-full" style={{ transform: "rotateX(-90deg) translateZ(4rem)" }}>
            <Image src="/images/bottom.png" width={100} height={100} alt="Bottom" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}