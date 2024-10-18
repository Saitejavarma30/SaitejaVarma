import { motion } from "framer-motion";
import {
  GalleryContainer,
  GalleryHeader,
  GalleryHeaderContainer,
  GalleryHeaderContent,
  GalleryHeaderImageContainer,
  GallerySubHeader,
  StaticConainer,
} from "./styles.ts";
import React from "react";
import TornpaperImage from "./TornImage.tsx";
import ImageGallery from "./ImageGallery.tsx";
import { IMAGE_GALLERIES } from "./constant.ts";

/**
 * A gallery component that displays a header with a torn paper effect and
 *   several images with a torn paper effect. The images are draggable and
 *   have a spring-like transition when dragged.
 *
 * @returns {React.ReactElement} The gallery component.
 */

const Gallery1 = () => {
  const parentRef = React.useRef(null);
  return (
    <>
      <GalleryContainer className="p-8">
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
        {IMAGE_GALLERIES.map((data, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-200px" }}
              transition={{
                duration: 1,
                delay: 0.5,
                // ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <ImageGallery {...data} />;
            </motion.div>
          );
        })}
      </GalleryContainer>
    </>
  );
};

export default Gallery1;
