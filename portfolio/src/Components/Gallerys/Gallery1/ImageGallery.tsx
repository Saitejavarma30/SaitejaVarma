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

const ImageGallery: React.FC<props> = ({ location, mainImage, images }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childWidth = 24; // Width in percentage
  const childHeight = 24; // Height in percentage
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );

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
        const overlapThreshold = 10; // Adjust this value for more or less space between divs
        return newPositions.some((pos) => {
          return (
            Math.abs(newPos.top - pos.top) < overlapThreshold &&
            Math.abs(newPos.left - pos.left) < overlapThreshold
          );
        });
      };

      for (let i = 0; i < images.length; i++) {
        // Change to 4 for four divs
        let newPos: { top: number; left: number };
        do {
          newPos = getRandomPosition();
        } while (isOverlapping(newPos)); // Keep generating until we find a non-overlapping position

        newPositions.push(newPos);
      }

      setPositions(newPositions);
    }
  };

  useEffect(() => {
    randomizePositions();
  }, []); // Run once when the component mounts

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
            // initial={{ opacity: 1, scale: 1 }}
            // whileHover={{ scale: 1.2, opacity: 1 }}
            // whileDrag={{ scale: 1.1, opacity: 1 }}
            style={{
              cursor: "grab",
              position: "absolute",
              top: `${position.top}%`, // Use percentage for top
              left: `${position.left}%`, // Use percentage for left
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
