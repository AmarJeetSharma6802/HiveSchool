import React from "react";

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
            <img src={img} alt={`carousel-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
