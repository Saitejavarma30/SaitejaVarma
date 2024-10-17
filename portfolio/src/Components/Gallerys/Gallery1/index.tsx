import { motion } from "framer-motion";
import {
  GalleryContainer,
  GalleryHeader,
  GalleryHeaderContainer,
  GalleryHeaderContent,
  GalleryHeaderImageContainer,
  GallerySubHeader,
} from "./styles.ts";
import React from "react";
import TornpaperImage from "./TornImage.tsx";

const Gallery1 = () => {
  const parentRef = React.useRef(null);
  return (
    <>
      <GalleryContainer className="p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            // ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <GalleryHeaderContainer ref={parentRef}>
            <GalleryHeaderContent>
              <GalleryHeader>
                Wanderlust Chronicles: Through My Lens
              </GalleryHeader>
              <GallerySubHeader>
                Every trip shapes me, and every photo captures the chaos—like
                the time I was stuck in a forest for two hours with a bison,
                both of us wondering who would move first!
              </GallerySubHeader>
            </GalleryHeaderContent>
            <GalleryHeaderImageContainer>
              <motion.div
                drag
                dragConstraints={parentRef}
                dragElastic={0.01}
                dragSnapToOrigin
                transition={{ duration: 10, type: "spring" }}
                dragTransition={{ bounceStiffness: 11, bounceDamping: 10 }}
                style={{
                  pointerEvents: "all",
                  cursor: "grab",
                  position: "absolute",
                  top: "10%",
                }}
              >
                <div>
                  <TornpaperImage
                    ImageUrl={
                      "https://images.unsplash.com/photo-1723576436707-75c1224a38bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    orientation={"20"}
                  />
                </div>
              </motion.div>
              <motion.div
                style={{
                  position: "absolute",
                  top: "30%",
                  right: "0%",
                  pointerEvents: "all",
                  cursor: "grab",
                }}
                drag
                dragConstraints={parentRef}
                dragElastic={0.01}
                dragSnapToOrigin
                transition={{ duration: 10, type: "spring" }}
                dragTransition={{ bounceStiffness: 11, bounceDamping: 10 }}
              >
                <div>
                  <TornpaperImage
                    ImageUrl="https://images.unsplash.com/photo-1723576436673-405c359771ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    orientation="-20"
                  />
                </div>
              </motion.div>
              <motion.div
                style={{
                  position: "absolute",
                  top: "45%",
                  pointerEvents: "all",
                  cursor: "grab",
                }}
                drag
                dragConstraints={parentRef}
                dragElastic={0.01}
                dragSnapToOrigin
                transition={{ duration: 10, type: "spring" }}
                dragTransition={{ bounceStiffness: 11, bounceDamping: 10 }}
              >
                <div>
                  <TornpaperImage
                    ImageUrl="https://images.unsplash.com/photo-1723028161206-7d9ade866d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    orientation="10"
                  />
                </div>
              </motion.div>
            </GalleryHeaderImageContainer>
          </GalleryHeaderContainer>
        </motion.div>
      </GalleryContainer>
    </>
  );
};

export default Gallery1;
