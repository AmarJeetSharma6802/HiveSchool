import React from "react";
import Image from "next/image";
import style from "../style/navbar.module.css"; // Make sure correct path

const InfiniteCarousel = ({ images, direction = "left", speed = 20 }) => {
  const scrollDirection = direction === "left" ? "normal" : "reverse";
  const tiltRotation = direction === "left" ? "-4deg" : "4deg";

  return (
    <div className="carousel-wrapper">
      {/* Gradient overlay */}
      <div className="bg-color" />

      {/* Carousel items */}
      <div
        className="carousel-track"
        style={{
          animation: `scroll ${speed}s linear infinite`,
          animationDirection: scrollDirection,
          transform: `rotate(${tiltRotation})`,
          transformOrigin: "center center",
        }}
      >
        {images.concat(images).map((img, index) => (
          <div className="carousel-item" key={index}>
            <Image
              src={img}
              alt={`carousel-${index}`}
              width={500}
              height={300}
              className={style.Image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
