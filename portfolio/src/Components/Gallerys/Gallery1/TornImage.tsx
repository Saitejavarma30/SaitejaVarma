import React from "react";
import Tornpaper from "./Tornpaper.ts"; // Assuming Tornpaper component is in the same directory
import { motion } from "framer-motion";
import { ImageContainer } from "./styles.ts";

type Props = {
  ImageUrl: string;
  orientation: string;
};

const TornpaperImage: React.FC<Props> = ({ ImageUrl, orientation }) => {
  return (
    <ImageContainer>
      {/* Inject the Tornpaper SVG filter into the document */}
      <Tornpaper />

      <motion.div
        initial={{ y: "50%", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        style={{ width: "300px", margin: "auto", rotate: `${orientation}deg` }}
      >
        {/* Apply the filter to an image or div */}
        <img
          src={ImageUrl}
          alt="Example"
          style={{
            width: "100%",
            filter: "url(#filter_tornpaper)", // Reference the ID of the filter created by Tornpaper component
          }}
        />
      </motion.div>
    </ImageContainer>
  );
};

export default TornpaperImage;
