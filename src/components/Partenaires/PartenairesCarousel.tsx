import { partenaires } from "@/constants";
import { Link } from "react-router-dom";
import Marquee from "react-marquee-slider";
import { Box } from "@mui/material";
import "./PartenairesCarousel.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PartenairesCarousel = () => {
  return (
    <Box
      sx={{ width: "100%", height: "10%", backgroundColor: "primary.lighter" }}
    >
      <Marquee velocity={30} direction="rtl" resetAfterTries={100} onInit={() => {}} onFinish={() => {}} scatterRandomly={false}>
        {partenaires?.map((partenaire, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "250px",
              height: "100%",
              margin: "0 1rem",
            }}
          >
            <Link
              to={partenaire.link}
              target={partenaire.target}
              aria-label={partenaire.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <LazyLoadImage
                src={partenaire.logo}
                alt={partenaire.name}
                style={{
                  width: "80%",
                  maxWidth: "250px",
                  height: "auto",
                  margin: "0",
                  alignSelf: "center",
                }}
              />
            </Link>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default PartenairesCarousel;
