import { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import MapImg from "@/assets/LandingPage/basesMap.jpg";
import content from "@/constants/content.json";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MotionBox = motion(Box);

const imgVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const boxVariants = {
  hover: { scale: 1.05 },
};

const MapKeywords = forwardRef<HTMLDivElement>((props, ref) => {
  const listKeyword = content.homepage.chiffres_cles_v2;

  return (
    <Box {...props} component="section" p={5} id="mapkeywords" ref={ref}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        gap={5}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pr: { xs: 0, md: 5 },
          }}
        >
          <motion.div
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <LazyLoadImage src={MapImg} alt="map" style={{ width: "100%" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  backgroundColor: "#c71121",
                  mr: 1,
                }}
              />
              <Typography variant="body2">
                Zone de distribution exclusive Massey Ferguson
              </Typography>
            </Box>
          </motion.div>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pt: { xs: 5, md: 0 },
            textAlign: { xs: "center", md: "left" },
            pl: { xs: 0, md: 5 },
            mx: { xs: 'auto', md: 'initial' },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            {content.homepage.mapkeyword_title}
          </Typography>

          {listKeyword?.map((keyword, index) => (
            <MotionBox
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start"},
                gap: 2,
                mt: 2,
              }}
              variants={boxVariants}
              whileHover="hover"
            >
              <Typography variant="h4" color="secondary" sx={{ mt: 4, fontWeight: "bold", width: "20%" }}>
                {keyword.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 4, width: "40%" }}>
                {keyword.content}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </Box>
  );
});

export default MapKeywords;
