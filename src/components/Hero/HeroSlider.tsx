import { forwardRef } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "./HeroSlider.css";
import { Link } from "react-router-dom";
import content from "@/constants/content.json";
import PlaceIcon from "@mui/icons-material/Place";
import { ResponsiveButton } from "@/components";
import STG from "@/assets/Bases/STG.jpg";
import NORMAGRI from "@/assets/Bases/NORMAGRI.jpg";
import VIRE from "@/assets/Bases/VIRE.jpg";
import AMS from "@/assets/Bases/AMS.jpg";
import POTTINGER from "@/assets/Bases/POTTINGER.jpg";
import AMS2 from "@/assets/Bases/AMS2.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeroSlider = forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();
  const belowMD = useMediaQuery(theme.breakpoints.down("md"));
  const belowSM = useMediaQuery(theme.breakpoints.down("sm"));

  const images = [
    { src: STG, alt: "Base Motin de Saint-Gilles" },
    { src: POTTINGER, alt: "Matériel de la marque partenaire Pöttinger" },
    { src: NORMAGRI, alt: "Base Motin (ex. Normagri) d'Isigny-Le-Buat" },
    { src: AMS2, alt: "Base Motin de AMS" },
    { src: VIRE, alt: "Base Motin de Vire" },
    { src: AMS, alt: "Base Motin de AMS" },
  ];

  const renderIndicator = (
    onClickHandler: (
      e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>
    ) => void,
    isSelected: boolean,
    index: number,
    label: string
  ): JSX.Element => {
    const style = {
      backgroundColor: isSelected ? "red" : "white",
      width: "30px",
      height: "10px",
      borderRadius: "10px",
      margin: "0 5px",
      cursor: "pointer",
    };

    return (
      <li
        style={style}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        role="button"
        tabIndex={0}
        key={index}
        title={label ? `${label} ${index + 1}` : `Item ${index + 1}`}
        aria-label={label ? `${label} ${index + 1}` : `Item ${index + 1}`}
      />
    );
  };

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        marginBottom: "2rem",
        padding: "0",
      }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        renderIndicator={renderIndicator}
      >
        {images.map((image, index) => (
          <div key={index} style={{ height: "100vh", overflow: "hidden" }}>
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                objectPosition: "center",
                padding: "0",
                margin: "0",
              }}
            />
          </div>
        ))}
      </Carousel>
      <Box
        component="div"
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0",
          left: "0",
          background: belowMD
            ? "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))"
            : "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))",
          color: "white",
          alignItems: belowMD ? "center" : "start",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pt: "3rem",
            pl: { xs: "1rem", md: "3rem" },
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              textAlign: belowMD ? "center" : "left",
              fontSize: belowSM ? "2rem" : "3rem",
              color: "white.main",
              lineHeight: { sm: "4rem" },
            }}
          >
            {content.homepage.hero_title}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              textAlign: belowMD ? "center" : "left",
              fontSize: belowSM ? "2rem" : "3rem",
              color: "white.main",
              lineHeight: { sm: "4rem" },
            }}
          >
            {content.homepage.hero_title1}
          </Typography>
          <Typography
            variant="body1"
            mt={4}
            sx={{
              textAlign: belowMD ? "center" : "left",
              color: "white.main",
              display: "flex",
              alignItems: "center",
              
            }}
          >
            <PlaceIcon sx={{ color: "white.main", marginRight: "8px" }} />{" "}
            {content.homepage.hero_subtitle}
          </Typography>
          <Box
            display="flex"
            gap={3}
            mt={5}
            sx={{ justifyContent: belowMD ? "center" : "flex-start" }}
          >
            <ResponsiveButton
              component={Link}
              to="/occasions"
              variant="contained"
              color="secondary"
            >
              Nos occasions
            </ResponsiveButton>
            <ResponsiveButton
              component={Link}
              to="/actualites"
              variant="contained"
            >
              Notre actualité
            </ResponsiveButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default HeroSlider;
