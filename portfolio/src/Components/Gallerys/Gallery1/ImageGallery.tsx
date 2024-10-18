import { PinDrop } from "@mui/icons-material";
import {
  GalleryHeader,
  ImageGalleryContainer,
  LocationContainer,
  StaticConainer,
  TornPaperLocationContainer,
  TornPaperLocationPin,
  TornPaperLocationText,
} from "./styles.ts";
import TornpaperImage from "./TornImage.tsx";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type props = {
  location: string;
  mainImage: string;
  images: string[];
};

/**
 * A gallery component that displays a main image and multiple torn paper images
 * scattered around it. The torn paper images are randomly positioned within the
 * top 80% of the parent container and do not overlap with the main image or each
 * other.
 *
 * @param {string} location - The location of the image
 * @param {string} mainImage - The URL of the main image
 * @param {string[]} images - An array of URLs of the torn paper images
 * @returns A JSX element containing the gallery
 */
const ImageGallery: React.FC<props> = ({ location, mainImage, images }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childWidth = 24; // Width in percentage
  const childHeight = 24; // Height in percentage
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );

  /**
   * Randomizes the positions of the torn paper images by generating a new position for each
   * image until it finds one that is not overlapping with any other image. The position is
   * restricted to the top 80% of the parent container and does not overlap with the main
   * image, which is centered in the container.
   */
  const randomizePositions = () => {
    if (parentRef.current) {
      // Explicitly define the type for newPositions
      const newPositions: { top: number; left: number }[] = [];

      const getRandomPosition = () => {
        let top, left;

        // Loop until we get a valid position not within the restricted area
        do {
          top = Math.random() * 80; // Ensure it stays within bounds
          left = Math.random() * 80;
        } while (
          (top >= 35 && top <= 60 && left >= 35 && left <= 60) || // Inside the restricted area
          (top >= 35 && top <= 60) || // Top is in the restricted range, regardless of left
          (left >= 35 && left <= 60) // Left is in the restricted range, regardless of top
        );

        return { top, left };
      };

      const isOverlapping = (newPos: { top: number; left: number }) => {
        const overlapThreshold = 10;
        return newPositions.some((pos) => {
          return (
            Math.abs(newPos.top - pos.top) < overlapThreshold &&
            Math.abs(newPos.left - pos.left) < overlapThreshold
          );
        });
      };

      for (let i = 0; i < images.length; i++) {
        let newPos: { top: number; left: number };
        do {
          newPos = getRandomPosition();
        } while (isOverlapping(newPos));

        newPositions.push(newPos);
      }

      setPositions(newPositions);
    }
  };

  useEffect(() => {
    randomizePositions();
  }, []);

  return (
    <ImageGalleryContainer ref={parentRef}>
      <LocationContainer style={{ position: "relative" }}>
        <TornPaperLocationPin
          style={{
            position: "sticky",
          }}
        >
          <TornpaperImage ImageUrl={mainImage} orientation="0" />
          <TornPaperLocationContainer>
            <PinDrop color="warning" />
            <TornPaperLocationText>{location}</TornPaperLocationText>
          </TornPaperLocationContainer>
        </TornPaperLocationPin>

        {positions.map((position, index) => (
          <motion.div
            drag
            dragConstraints={parentRef}
            dragElastic
            key={index}
            style={{
              cursor: "grab",
              position: "absolute",
              top: `${position.top}%`,
              left: `${position.left}%`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "all",
            }}
          >
            <TornpaperImage ImageUrl={images[index]} orientation="0" />
          </motion.div>
        ))}
      </LocationContainer>
    </ImageGalleryContainer>
  );
};

export default ImageGallery;
